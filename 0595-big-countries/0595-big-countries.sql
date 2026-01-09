# Write your MySQL query statement below
select w.name , w.population , w.area
from World as w where population >= 25000000 or area >= 3000000