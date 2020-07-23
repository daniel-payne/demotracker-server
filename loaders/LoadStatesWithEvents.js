import DataLoader from 'dataloader'

import runSQL from '../helpers/runSQL.js'
import packRowsIntoList from '../helpers/packRowsIntoList.js'

const LoadStatesWithEvents = (pool) => {
  const loadData = (countryCodes) => {
    const params = { countryCodes }

    return runSQL('STATES_EVENTCOUNTS', pool, params).then((rows) => {
      const countryDatum = packRowsIntoList(rows, countryCodes, 'countryCode')

      return countryDatum
    })
  }

  return new DataLoader(loadData)
}

export default LoadStatesWithEvents
