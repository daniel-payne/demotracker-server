import graphqlFields from 'graphql-fields'

const country = (parent, args, context, info) => {
  const { id } = args

  const fields = graphqlFields(info)

  const geoJsonFields = fields.geoJson
    ? ', ST_AsGeoJSON(ST_ForcePolygonCW(geom))   AS "geoJson"'
    : ''

  const eventCountFields = fields.eventCount ? ', D.count                      AS "eventCount"' : ''

  const eventCountJOIN = fields.eventCount
    ? `LEFT OUTER JOIN
      (
        SELECT
          CO.fid,
          count(*) AS "count"
        FROM
          public.global_terrorism_database_2018 TD
        INNER JOIN
          public.ne_110m_admin_0_countries CO ON ST_Contains(ST.geom, ST_SetSRID(ST_MakePoint(TD.longitude, TD.latitude), 4326))
        GROUP BY
          CO.fid
      ) D ON D.fid = C.fid`
    : ''

  const query = `
    SELECT
      C.fid                        AS "id",
      C.name                       AS "name",
      C.iso_a2                     AS "iso2Code", 
      C.iso_a3                     AS "iso3Code"
      ${geoJsonFields}  
      ${eventCountFields}
    FROM
      public.ne_110m_admin_0_countries C
    ${eventCountJOIN}
    WHERE 
      C.fid = ${id}
  `

  console.log(`Running : country resolver for '${id}'`)

  return context.pool.query(query).then((res) => res.rows[0])
}

export default country
