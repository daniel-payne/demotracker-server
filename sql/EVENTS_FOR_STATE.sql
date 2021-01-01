SELECT 
  event_id                          AS "id", 
  to_char(event_date, 'YYYY-MM-DD') AS "date",
  latitude                          AS "latitude",
  longitude                         AS "longitude",
  country_name                      AS "countryName",
  state_name                        AS "stateName",
  city_name                         AS "cityName",
  country_id                        AS "countryId",
  state_id                          AS "stateId",
  city_id                           AS "cityId",
  center_json                       AS "centerJson",
  is_success                        AS "isSuccess",
  number_killed                     AS "numberKilled",
  number_wounded                    AS "numberWounded",
  attack_type                       AS "attackType",
  attack_details                    AS "attackDetails",
  target_type                       AS "targetType",
  target_details                    AS "targetDetails",
  target_nationality                AS "targetNationality",
  perpetrator_name                  AS "perpetratorName",
  perpetrator_motive                AS "perpetratorMotive",
  weapon_type                       AS "weaponType",
  weapon_details                    AS "weaponDetails",
  additional_notes                  AS "additionalNotes"
FROM
  info.events E
WHERE 
  E.state_id = :ID
ORDER BY 
  E.event_date
OFFSET
  0
LIMIT 
  100;