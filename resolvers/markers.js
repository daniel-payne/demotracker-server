import runSQL from '../helpers/runSQL.js'

const markers = (parent, args, context, info) => {
  if (!context.session) {
    return
  }

  const { id: ID } = args

  let SQL
  let ACCURACY

  //  'HUNDRED_SQUARE_KILOMETERS': ACCURACY = 0
  //  'TEN_SQUARE_KILOMETERS':     ACCURACY = 1
  //  'ONE_SQUARE_KILOMETER':      ACCURACY = 2

  if (info.fieldName === 'countryMarkers') {
    SQL = 'MARKERS_FOR_COUNTRY'
    ACCURACY = 1
  } else if (info.fieldName === 'globalMarkers') {
    SQL = 'MARKERS_FOR_GLOBE'
    ACCURACY = 0
  }

  const params = { ID, ACCURACY }

  return runSQL(SQL, context.pool, params)
}

export default markers
