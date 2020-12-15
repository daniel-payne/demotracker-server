SELECT
  country_id                            AS "countryId",
  count(*)                              AS "eventCount"
FROM
   info.events E
GROUP BY 
  country_id