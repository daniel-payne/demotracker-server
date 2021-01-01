SELECT 
  place_id         AS "id", 
  display_order    AS "displayOrder", 
  place_type       AS "type", 
  place_name       AS "name",
  country_name     AS "countryName",
  country_id       AS "countryId"
FROM 
  info.places        
WHERE 
  place_name ILIKE :match
ORDER BY
  display_order,
  country_name,
  place_name
 