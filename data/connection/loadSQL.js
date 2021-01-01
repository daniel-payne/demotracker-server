import fs from 'fs'

const loadSQL = (file) => {
  // Relative to the root of the project
  return fs.readFileSync(`./data/connection/sql/${file}.sql`).toString()
}

export default loadSQL
