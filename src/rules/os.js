export const osRules = [
  {
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:69.0) Gecko/20100101 Firefox/69.0
    // Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
    test: /(Mac OS X) (\d+)[_.](\d+)(?:[_.](\d+))?/,
    replacement: 'Mac',
  },
  {
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.63 Safari/537.36
    // Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
    test: /(iPhone) OS\s([\d_]+)/,
    value: 'iPad',
  },
  {
    test: /(iPad) OS\s([\d_]+)/,
    value: 'iPad',
  },
  {
    test: /(iPod)( OS\s([\d_]+))?/,
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
