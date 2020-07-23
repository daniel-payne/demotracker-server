SELECT
  C.fid                                   AS "id",
  C.name                                  AS "name",
  C.iso_a2                                AS "iso2Code",
  C.iso_a3                                AS "iso3Code", 
  D.count                                 AS "eventCount"
FROM
  public.ne_110m_admin_0_countries C
LEFT OUTER JOIN
  (
    SELECT
      CO.fid,
      count(*) AS "count"
    FROM
      public.global_terrorism_database_2018 TD
    INNER JOIN
      public.ne_110m_admin_0_countries CO ON ST_Contains(CO.geom, ST_SetSRID(ST_MakePoint(TD.longitude, TD.latitude), 4326))
    GROUP BY
      CO.fid
  ) D ON D.fid = C.fid
ORDER BY 
  C.name
