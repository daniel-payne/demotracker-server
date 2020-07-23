select 
  T.ogc_fid                                     AS "id", 
  to_char(
    make_date(
      iyear, 
      imonth, 
      CASE WHEN iday = 0 THEN 1 ELSE iday END
    ), 
  'YYYY-MM-DD')                                 AS "date",
  T.latitude                                    AS "latitude",
  T.longitude                                   AS "longitude",
  T.summary                                     AS "summary", 
  T.gname                                       AS "perpetrator", 
  T.nkill                                       AS "numberKilled", 
  T.nwound                                      AS "numberWounded", 
  T.attacktype1_txt                             AS "attackType",
  T.attacktype2_txt                             AS "attackSubType",
  targtype1_txt                                 AS "targetType",
  targsubtype1_txt                              AS "targetSubType",
  weaptype1_txt                                 AS "primaryWeaponType",
  weapsubtype1_txt                              AS "primaryWeaponSubType",
  weaptype2_txt                                 AS "secondaryWeaponType",
  weapsubtype2_txt                              AS "secondaryWeaponSubType",
  weaptype3_txt                                 AS "tertiaryWeaponType",
  weapsubtype3_txt                              AS "tertiaryWeaponSubType" 
FROM
  public.global_terrorism_database_2018 T
INNER JOIN
  public.ne_10m_admin_1_states_provinces S ON ST_Contains(S.geom, ST_SetSRID(ST_MakePoint(T.longitude, T.latitude), 4326))
WHERE 
  S.fid = :id
ORDER BY 
  iyear, imonth, iday
OFFSET
  0
LIMIT 
  100;