export const osRules = [
  // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:69.0) Gecko/20100101 Firefox/69.0
  // Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/67.0.3396.87 Mobile Safari/537.36
  // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.63 Safari/537.36
  // Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
  // Mozilla/5.0 (Linux; U; en-us; KFAPWI Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.13 Safari/535.19 Silk-Accelerated=true
  {
    test: /(Mac OS X) (\d+)[_.](\d+)(?:[_.](\d+))?/,
    replacement: 'Mac',
  },
  {
    test: /(iPhone) OS (\d+)[_.](\d+)(?:[_.](\d+))?/,
    value: 'iPhone',
  },
  {
    test: /(iPad) OS (\d+)[_.](\d+)(?:[_.](\d+))?/,
    value: 'iPad',
  },
  {
    test: /(iPod)( OS (\d+)[_.](\d+)(?:[_.](\d+))?)?/,
    value: 'iPod',
  },
  {
    test: /(Android);?[\s\/]+(\d+)\.(\d+)(?:\.(\d+))?/,
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
  'android',
  'iphone',
  'ipad',
  'ipod',
  'Kindle',
]
