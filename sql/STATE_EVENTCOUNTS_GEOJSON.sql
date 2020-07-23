SELECT 
  S.fid                                     AS "id",
  S.iso_a2                                  AS "countryCode",
  S.name                                    AS "name",
  S.code_hasc                               AS "hascCode", 
  ST_AsGeoJSON(ST_ForcePolygonCW(geom))     AS "geoJson", 
  D.count                                   AS "eventCount"
FROM 
  public.ne_10m_admin_1_states_provinces S
LEFT OUTER JOIN
      (
        SELECT
          ST.fid,
          count(*) AS "count"
        FROM
          public.global_terrorism_database_2018 TD
        INNER JOIN
          public.ne_10m_admin_1_states_provinces ST ON ST_Contains(ST.geom, ST_SetSRID(ST_MakePoint(TD.longitude, TD.latitude), 4326))
        GROUP BY
          ST.fid
      ) D ON D.fid = S.fid
WHERE 
  S.fid = :id