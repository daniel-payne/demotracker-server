SELECT 
  S.fid                                     AS "id",
  S.iso_a2                                  AS "countryCode",
  S.name                                    AS "name",
  S.code_hasc                               AS "hascCode",

  C.fid                                     AS "countryId",
  C.name                                    AS "countryName"
FROM 
  public.ne_10m_admin_1_states_provinces S
LEFT OUTER JOIN
  public.ne_110m_admin_0_countries C ON C.iso_a2 = S.iso_a2 
WHERE 
  S.fid = :id