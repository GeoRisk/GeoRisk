DROP DATABASE IF EXISTS `georisk`;
CREATE DATABASE `georisk`;

USE `georisk`;

CREATE TABLE userpref (
	`id` INT AUTO_INCREMENT NOT NULL,
	`city_name` VARCHAR(100) NOT NULL,
	`rating` BOOLEAN DEFAULT 0,
	`review` VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

-- Left Join to match user preferences to user by ID
SELECT usercred.first_name, userpref.id
FROM usercred
LEFT JOIN userpref ON usercred.id = userpref.id
ORDER BY usercred.first_name;