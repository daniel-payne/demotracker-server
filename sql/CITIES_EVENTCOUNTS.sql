SELECT DISTINCT
  C.conurbation_id                          AS "id",
  C.iso_a2                                  AS "countryCode",
  C.name                                    AS "name",
  ST_AsGeoJSON(ST_ForcePolygonCW(C.geom))   AS "geoJson", 
  D.count                                   AS "eventCount"
FROM 
  public.vm_conurbation C
LEFT OUTER JOIN
  (
    SELECT
      CO.conurbation_id,
      count(*) AS "count"
    FROM
      public.global_terrorism_database_2018 TD
    INNER JOIN
      public.vm_conurbation CO ON ST_Contains(CO.geom, ST_SetSRID(ST_MakePoint(TD.longitude, TD.latitude), 4326))
    GROUP BY
      CO.conurbation_id
  ) D ON D.conurbation_id = C.conurbation_id
WHERE 
  C.iso_a2 in ( :countryCodes )  
AND
  C.name IS NOT NULL