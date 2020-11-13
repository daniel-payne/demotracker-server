SELECT 
  S.fid                                     AS "id",
  S.iso_a2                                  AS "countryCode",
  S.name                                    AS "name",
  S.code_hasc                               AS "hascCode", 
  ST_AsGeoJSON(ST_ForcePolygonCW(geom))     AS "geoJson"
FROM 
  public.ne_10m_admin_1_states_provinces S
WHERE 
  S.fid = :id