export const browserRules = [
  {
    test: /(Chrome)\/(\d+)\.(\d+)\.(\d+)\.(\d+) Mobile/,
    value: 'Chrome Mobile',
  },
  {
    // Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:69.0) Gecko/20100101 Firefox/69.0
    test: /(Firefox)\/(\d+)\.(\d+)(?:[\.](\d+))?/,
    value: 'Firefox',
  },
]
