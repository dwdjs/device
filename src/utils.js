
export function toVersionString(obj = {}) {
  let version = '';
  obj = obj || {};
  if (obj.major) {
    version += obj.major;
    if (obj.minor) {
      version = version + '.' + obj.minor;
      if (obj.patch) {
        version = version + '.' + obj.patch;
      }
    }
  }
  return version;
}

export function parse(rules, input) {
  let temp = {}
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]
    temp = parser(rule, input)
    if (temp) break
  }
  return temp
}

// https://github.com/darcyclarke/Detect.js/blob/master/detect.js
export function parser(rule, text) {
  const m = text.match(rule.test)
  if (!m) return null;
  const rep = rule.replacement

  const ret = {}
  ret.name = rule.value;
  ret.detail = (rep ? rep.replace('$1', m[1]) : m[1]) || 'other';
  // 判断版本
  ret.major = parseInt(m[2]) || null;
  ret.minor = m[3] ? parseInt(m[3]) : null;
  ret.patch = m[4] ? parseInt(m[4]) : null;
  // 判断归类
  // ret.family = ''

  ret.version = toVersionString(ret)

  return ret
}


// if (type === 't') {
//   // 是否手持设备
//   ret.isHandle = this.handleDevice.includes(ret.name)
// }

export function isFunction(v) {
  return typeof v === 'function'
}

export function isBoolean(v) {
  return v === true || v === false
}

export function isArray(v) {
  return Array.isArray(v)
}
