SELECT
  C.fid                                   AS "id",
  D.count                                 AS "eventCount"
FROM
  public.ne_110m_admin_0_countries C
LEFT OUTER JOIN
  public.country_event_counts D ON D.id = C.fid
ORDER BY 
  C.name
