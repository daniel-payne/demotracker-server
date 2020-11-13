SELECT 
  id                                      AS "id",
  count                                   AS "eventCount"
FROM 
  public.state_event_counts S  
WHERE 
  S.country_iso_a2 = (
    SELECT 
      C.iso_a2
    FROM
      public.ne_110m_admin_0_countries C
    WHERE 
      C.fid = :ID
)
UNION
SELECT 
  id                                      AS "id",
  count                                   AS "eventCount"
FROM 
  public.city_event_counts C
WHERE 
  C.country_iso_a2 = (
    SELECT 
      C.iso_a2
    FROM
      public.ne_110m_admin_0_countries C
    WHERE 
      C.fid = :ID
)