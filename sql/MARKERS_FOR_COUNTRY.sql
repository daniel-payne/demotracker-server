SELECT
  CAST(round(cast(E.latitude  as numeric),    :ACCURACY ) AS text) 
  || '/' 
  || CAST(round(cast(E.longitude as numeric), :ACCURACY ) AS text)                  AS "id",
  round(cast(E.latitude  as numeric),         :ACCURACY )                           AS "latitude",
  round(cast(E.longitude as numeric),         :ACCURACY )                           AS "longitude",
  count(*)                                                                          AS "eventCount"
FROM
  info.events E
WHERE  
  E.country_id = :ID
GROUP BY
  round(cast(E.latitude  as numeric),         :ACCURACY ),
  round(cast(E.longitude as numeric),         :ACCURACY );