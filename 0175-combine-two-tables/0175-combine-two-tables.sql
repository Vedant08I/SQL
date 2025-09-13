# Write your MySQL query statement below
select p.firstName , p.lastName , a.city , a.state
from Address as a 
right join person as p
on p.personId = a.personId