BEGIN;

<<<<<<< HEAD
INSERT INTO users (id, username, name, password, date_created)
VALUES
(1, 'demo_user_name', 'John Smith', '$2a$12$A9x3aZ5.Xmyaoun.aPYqiOI2rIqY8HXA6CLyNghOBWQY24wPIebOW', '2020-01-03T00:00:00.000Z'),
(2,	'mthanki',	'user name', '$2a$12$vrymqM0idR6zqVw/HQfQJ.D9BfUS3/woynvclN3zEiI53GyxgH4Ei', '2020-12-31 13:23:20.571328+00');

INSERT INTO lists (category, name, note, price, weight, start_date, completed_date, checked, user_id)
VALUES 
('Vegetables', 'cabbage', 'stor name', 2.05, '2', '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'false', 1),
('Fruits', 'Pineapple', 'next week new deal', 5.05, 2, '2020-01-03T00:00:00.000Z', '2022-05-03T00:00:00.000Z', 'false', 1),
('Grain', 'Maize', 'next week new deal', 3.05, 3, '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'false', 1),
('Frozen', 'Frozen Strawberries', 'next week new deal', 5.05, 3, '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'true', 2),
('Miscellaneous', 'Toilet Paper', 'next week new deal', 5.05, 1, '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'false', 2);
=======
INSERT INTO lists (id, category, name, note, price, weight, start_date, completed_date, checked, category_id, user_id)
VALUES 
(1, 'vegetables', 'cabbage', 'stor name', 2.05, '2', '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'false', 1, 1),
(2, 'Fruits', 'Pineapple', 'next week new deal', 5.05, 2, '2020-01-03T00:00:00.000Z', '2022-05-03T00:00:00.000Z', 'false', 2, 1),
(3, 'Grain', 'Maize', 'next week new deal', 3.05, 3, '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'false', 3, 1),
(4, 'Frozen', 'Frozen Strawberries', 'next week new deal', 5.05, 3, '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'true', 4, 1),
(5, 'Miscellaneous', 'Toilet Paper', 'next week new deal', 5.05, 1, '2020-01-03T00:00:00.000Z', '2020-04-03T00:00:00.000Z', 'false', 5, 1);
>>>>>>> a7de46fc713c7978e224e202ad4d4cd99981ec2b


COMMIT;