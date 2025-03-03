CREATE TABLE IF NOT EXISTS `boards` (
    `board_id`        int(11)  	   NOT NULL auto_increment	  COMMENT 'the id of this board',
    `name`            varchar(256) NOT NULL                   COMMENT 'the name of this board',
    `creator_id`      int(11)      NOT NULL            		  COMMENT 'FK: the id of creator of this boards',
PRIMARY KEY (`board_id`),
FOREIGN KEY (creator_id) REFERENCES users(user_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT="Contains board information";