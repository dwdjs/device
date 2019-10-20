export const osRules = [
  {
    test: /(Mac OS X) (\d+)[_.](\d+)(?:[_.](\d+))?/,
    value: 'Mac',
  },
  {
    test: /(iPad).*OS\s([\d_]+)/,
    value: 'iPad',
  },
  {
    test: /(iPod)(.*OS\s([\d_]+))?/,
    value: 'iPod',
  },
  {
    test: /(Android);?[\s\/]+([\d.]+)?/,
    value: 'Android',
  },
  {
    test: /(BlackBerry).*Version\/([\d.]+)/,
    value: 'BlackBerry',
  },
  {
    test: /Kindle\/([\d.]+)/,
    value: 'Kindle',
  },
]

export const handleDevice = [
  'iphone',
  'ipad',
  'android',
  'ipod'
]
