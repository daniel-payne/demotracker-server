SELECT 
  S.state_id                                AS "id",
  S.state_name                              AS "name",

  S.country_id                              AS "countryId",
  S.country_name                            AS "countryName",
  
  S.hasc_code                               AS "hascCode", 
  S.outline_json                            AS "outline",
  S.center_json                             AS "center"
FROM 
  info.states S
WHERE 
  S.state_id = :id