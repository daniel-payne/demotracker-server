SELECT
  CAST(round(cast(GT.latitude  as numeric),    :ACCURACY ) AS text) 
  || '/' 
  || CAST(round(cast(GT.longitude as numeric), :ACCURACY ) AS text)                  AS "id",
  round(cast(GT.latitude  as numeric),         :ACCURACY )                           AS "latitude",
  round(cast(GT.longitude as numeric),         :ACCURACY )                           AS "longitude",
  count(*)                                                                           AS "eventCount"
FROM
  global_terrorism_database_2018 GT
GROUP BY
  round(cast(GT.latitude  as numeric),         :ACCURACY ),
  round(cast(GT.longitude as numeric),         :ACCURACY );