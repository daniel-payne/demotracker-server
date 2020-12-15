import runSQL from '../helpers/runSQL.js'

const HUNDRED_SQUARE_KILOMETERS = 0
const TEN_SQUARE_KILOMETERS = 1
const ONE_SQUARE_KILOMETER = 2

const sqlFor = {
  globalMarkers: 'MARKERS_FOR_GLOBE',
  countryMarkers: 'MARKERS_FOR_COUNTRY',
  stateMarkers: 'MARKERS_FOR_STATE',
  cityMarkers: 'MARKERS_FOR_STATE',
}

const accuracyFor = {
  globalMarkers: HUNDRED_SQUARE_KILOMETERS,
  countryMarkers: TEN_SQUARE_KILOMETERS,
  stateMarkers: ONE_SQUARE_KILOMETER,
  cityMarkers: ONE_SQUARE_KILOMETER,
}

const markers = (parent, args, context, info) => {
  if (!context.session) {
    return
  }

  const { id } = args

  const sql = sqlFor[info.fieldName]

  const ID = id
  const ACCURACY = accuracyFor[info.fieldName]

  const params = { ID, ACCURACY }

  return runSQL(sql, context.pool, params)
}

export default markers
