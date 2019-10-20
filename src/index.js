
import { parse, isBoolean, isFunction, isArray } from './utils.js'
import {
  osRules,
  browserRules,
  runtimeRules,
  handleDevice,
} from './rules/index.js'

const rules = {
  os: osRules,
  browser: browserRules,
  runtime: runtimeRules,
}

const defaultOptions = {
  os: true,
  browser: true,
  runtime: false,
}

export class Device {
  constructor({ ...rest } = {}) {
    const options = { ...defaultOptions, ...rest }

    // this.result = {}
    this.options = options
    // this.parse = parser || parse
    this.update()
  }

  update() {
    const { options } = this
    this.detects = []
    Object.keys(options).forEach(key => {
      const option = options[key]
      if (option) {
        this.detects.push(key)
        options[key] = {
          name: key,
          rules: rules[key],
        }
        if (isFunction(option)) {
          option(options[key].rules)
        }
      }
    })
  }

  config(callback) {
    if (typeof callback === 'function') {
      callback(this.options)
    }
    this.update
    return this
  }

  parse(input) {
    if (!input) return {}
    const { detects, options } = this
    const result = { input }
    detects.forEach(key => {
      result[key] = parse(options[key].rules, input)
      if (key === 'os') {
        const os = result[key].name
        result[key].isHandle = handleDevice.includes(os)
      }
    })
    this.result = result
    return result
  }
}

export const device = new Device({
  os: true, // 默认 true，启用默认配置规则
  // os: [], // 也支持传入规则或写个方法更改默认规则
  // os(rules) {}, // 直接修改规则
  browser: true,
  runtime: false, // 默认 false，自己定制
})
