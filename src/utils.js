
export function isUnDef(v) {
  return v === 'undefined' || v === null;
}

export function isDef(v) {
  return v !== 'undefined' && v !== null;
}

export function toVersionString(obj = {}) {
  let version = '';
  obj = obj || {};
  if (isDef(obj.major)) {
    version += obj.major;
    if (isDef(obj.minor)) {
      version = version + '.' + obj.minor;
      if (isDef(obj.patch)) {
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

// https://github.com/ua-parser/uap-core/blob/master/docs/specification.md
// https://github.com/darcyclarke/Detect.js/blob/master/detect.js
export function parser(rule, text) {
  const ret = { name: 'other' }
  const m = text.match(rule.test)
  if (!m) return {};
  const rep = rule.replacement

  ret.name = m[1];
  ret.family = (rep ? rep.replace('$1', m[1]) : m[1]) || 'other';
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
