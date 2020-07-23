import runSQL from '../helpers/runSQL.js'

const markers = (parent, args, context, info) => {
  const { id } = parent || {}
  const { area } = args

  let SQL
  let ACCURACY

  switch (area) {
    case 'HUNDRED_SQUARE_KILOMETERS':
      ACCURACY = 0
      break
    case 'TEN_SQUARE_KILOMETERS':
      ACCURACY = 1
      break
    case 'ONE_SQUARE_KILOMETER':
      ACCURACY = 2
      break
    default:
      ACCURACY = 0
  }

  const params = { id, ACCURACY }

  if (id) {
    SQL = 'MARKERS_FOR_COUNTRY'
  } else {
    SQL = 'MARKERS'
  }

  return runSQL(SQL, context.pool, params)
}

export default markers
