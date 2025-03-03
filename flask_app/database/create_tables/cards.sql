CREATE TABLE IF NOT EXISTS `cards` (
    `card_id`         int(11)  	   NOT NULL auto_increment	  COMMENT 'the id of this list',
    `list_id`         int(11)      NOT NULL            		  COMMENT 'FK: the board id of this list',
    `name`            varchar(256) NOT NULL                   COMMENT 'the name of this card',
    `description`     TEXT         NOT NULL                   COMMENT 'the content of this card',
    `is_locked`       BOOLEAN      DEFAULT FALSE              COMMENT 'boolean to prevent simultanuous editing',

PRIMARY KEY (`card_id`),
FOREIGN KEY (`list_id`) REFERENCES lists(list_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT="Contains board information";
