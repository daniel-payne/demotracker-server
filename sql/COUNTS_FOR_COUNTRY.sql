SELECT
  state_id                              AS "id",
  count(*)                              AS "eventCount"
FROM
   info.events E
WHERE 
  country_id = :ID
AND
  state_id IS NOT NULL
GROUP BY 
  state_id
UNION SELECT
  city_id                               AS "id",
  count(*)                              AS "eventCount"
FROM
   info.events E
WHERE 
  country_id = :ID
AND
  city_id IS NOT NULL
GROUP BY 
  city_id

