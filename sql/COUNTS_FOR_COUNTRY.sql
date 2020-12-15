SELECT
  country_id                            AS "countryId",
  state_id                              AS "stateOrCityId",
  count(*)                              AS "eventCount"
FROM
   info.events E
WHERE 
  country_id = :id
AND 
  state_id IS NOT NULL 
GROUP BY 
  country_id,
  state_id 

UNION SELECT
  country_id                            AS "countryId",
  city_id                               AS "stateOrCityId",
  count(*)                              AS "eventCount"
FROM
   info.events E
WHERE 
  country_id = :id
AND 
  city_id IS NOT NULL 
GROUP BY 
  country_id,
  city_id 

