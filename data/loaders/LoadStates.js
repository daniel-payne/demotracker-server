import DataLoader from 'dataloader'

import runSQL from '../connection/runSQL.js'
import packRowsIntoList from '../connection/packRowsIntoList.js'

const LoadStates = (pool) => {
  const loadData = (ids) => {
    const params = { IDs: ids }

    return runSQL('STATES', pool, params).then((rows) => {
      const countryDatum = packRowsIntoList(rows, ids, 'countryId')

      return countryDatum
    })
  }

  return new DataLoader(loadData)
}

export default LoadStates
