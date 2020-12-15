SELECT 
  I.city_id                                 AS "id",
  I.city_name                               AS "name",
  
  I.country_id                              AS "countryId",
  I.country_name                            AS "countryName",
  
  I.outline_json                            AS "outline",
  I.center_json                             AS "center" 
FROM 
  info.cities I
WHERE 
  I.country_id in ( :ids )  
AND
  I.city_name IS NOT NULL