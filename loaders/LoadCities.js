import DataLoader from 'dataloader'

import runSQL from '../helpers/runSQL.js'
import packRowsIntoList from '../helpers/packRowsIntoList.js'

const LoadCities = (pool) => {
  const loadData = (ids) => {
    const params = { ids }

    return runSQL('CITIES', pool, params).then((rows) => {
      const countryDatum = packRowsIntoList(rows, ids, 'countryId')

      return countryDatum
    })
  }

  return new DataLoader(loadData)
}

export default LoadCities
