# Write your MySQL query statement below
select p.firstName , p.lastName , a.city , a.state
From Person as p 
left join Address as a 
on p.personId = a.personId