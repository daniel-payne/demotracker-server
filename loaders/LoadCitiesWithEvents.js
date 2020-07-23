import DataLoader from 'dataloader'

import runSQL from '../helpers/runSQL.js'
import packRowsIntoList from '../helpers/packRowsIntoList.js'

const LoadCitiesWithEvents = (pool) => {
  const loadData = (countryCodes) => {
    const params = { countryCodes }

    return runSQL('CITIES_EVENTCOUNTS', pool, params).then((rows) => {
      const countryDatum = packRowsIntoList(rows, countryCodes, 'countryCode')

      return countryDatum
    })
  }

  return new DataLoader(loadData)
}

export default LoadCitiesWithEvents
