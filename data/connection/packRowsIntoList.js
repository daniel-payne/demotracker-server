// https://jsfiddle.net/s6kvceyz/

const packRowsIntoList = (rows, list, name) => {
  const map = {}

  rows.forEach((row) => {
    const code = row[name]
    const data = map[code] || []

    data.push(row)

    map[code] = data
  })

  const newList = list.map((code) => map[code])

  return newList
}

export default packRowsIntoList
