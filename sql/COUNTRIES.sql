SELECT
  C.fid                        AS "id",
  C.name                       AS "name",
  C.iso_a2                     AS "iso2Code",
  C.iso_a3                     AS "iso3Code"
FROM
  public.ne_110m_admin_0_countries C
ORDER BY 
  C.name
