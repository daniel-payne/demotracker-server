SELECT 
  S.state_id                                AS "id",
  S.state_name                              AS "name",

  S.country_id                              AS "countryId",
  S.country_name                            AS "countryName",
  
  S.code_hasc                               AS "hascCode", 
  C.outline_json                            AS "outline",
  C.center_json                             AS "center"
FROM 
  info.states S
WHERE 
  S.state_id = :id