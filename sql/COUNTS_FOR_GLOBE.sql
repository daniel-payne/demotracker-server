SELECT
  country_id                            AS "id",
  count(*)                              AS "eventCount"
FROM
   info.events E
GROUP BY 
  country_id