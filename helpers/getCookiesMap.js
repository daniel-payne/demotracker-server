export default function getCookiesMap(cookiesString) {
  return cookiesString
    .split(';')
    .map(function (cookieString) {
      return cookieString.trim().split('=')
    })
    .reduce(function (result, current) {
      result[current[0]] = current[1]
      return result
    }, {})
}
