# Write your MySQL query statement below
select c.id , c.movie , c.description , c.rating
from Cinema as c
where id%2= 1 and description != 'boring'
order by rating desc;