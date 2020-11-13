SELECT DISTINCT
  conurbation_id                          AS "id",
  iso_a2                                  AS "countryCode",
  name                                    AS "name" 
FROM 
  public.vm_conurbation 
WHERE 
  conurbation_id = :id