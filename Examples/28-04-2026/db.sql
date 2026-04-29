show databases;
use dkte;
show tables;
select * from customer;

DELETE FROM customer
WHERE id = 7;

SELECT * FROM customer;

INSERT INTO customer (id, name, email, phone)
VALUES (7, 'New Data', 'new7@gmail.com',8976543212);

update customer
set name = 'shravani patil', email = 'updated7@gmail.com', phone = 9876543210
where id = 8;