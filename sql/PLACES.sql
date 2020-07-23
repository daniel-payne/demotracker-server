SELECT 
  fid            AS "id", 
  1              AS "displayOrder", 
  'COUNTRY'      AS "type", 
  name           AS "name",
  null           AS "countryName",
  null           AS "countryId"
FROM 
  public.ne_110m_admin_0_countries        
WHERE 
  name ILIKE :match
UNION
SELECT 
  S.fid,
  2, 
  'STATE',
  S.name,
  C.name,
  C.fid         
FROM 
  public.ne_10m_admin_1_states_provinces S
LEFT OUTER JOIN
  public.ne_110m_admin_0_countries  C ON C.iso_a2 = S.iso_a2
WHERE 
  S.name ILIKE :match
UNION
SELECT 
  O.conurbation_id, 
  3, 
  'CITY', 
  O.name,
  C.name,
  C.fid    
FROM 
  public.vm_conurbation O 
LEFT OUTER JOIN
  public.ne_110m_admin_0_countries  C ON C.iso_a2 = O.iso_a2
WHERE 
  O.name ILIKE :match
ORDER BY 
  "displayOrder",
  name,
  "countryName"