SELECT
  C.country_id                 AS "id",
  C.country_name               AS "name",

  C.iso2_code                  AS "iso2Code",
  C.iso3_code                  AS "iso3Code",
  C.outline_json               AS "outline",
  C.center_json                AS "center"
FROM
  info.countries C
ORDER BY 
  C.country_name
