SELECT
  country_id                            AS "id",
  count(*)                              AS "eventCount"
FROM
   info.events E
WHERE 
  country_id = :ID
GROUP BY 
  country_id 

