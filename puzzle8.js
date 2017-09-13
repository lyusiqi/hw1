recipe Down
  |save 0 as steps
  |repeat if steps < 9
    | down
    | save steps + 1 as steps
recipe Right
  |right
  |right
recipe Up
  |save 0 as steps
  |repeat if steps < 9
    |up
    |save steps + 1 as steps
recipe Get 
  |Down
  |Right
  |Up
  |Right
Get
Get
recipe Down2
  |save 0 as steps
  |repeat if steps < 8
    |down
    |save steps + 1 as steps
Down2
right
