import fs from 'fs'

const loadSQL = (file) => {
  return fs.readFileSync(`./sql/${file}.sql`).toString()
}

export default loadSQL
