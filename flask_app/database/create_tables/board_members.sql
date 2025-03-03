CREATE TABLE IF NOT EXISTS `board_members` (
    `member_id`       int(11)  	   NOT NULL auto_increment	  COMMENT 'the id of this member',
    `board_id`        int(11)      NOT NULL                   COMMENT 'FK: the board id of this member',
    `user_id`         int(11)      NOT NULL                   COMMENT 'FK: the user id of this member',
PRIMARY KEY (`member_id`),
FOREIGN KEY (board_id) REFERENCES boards(board_id),
FOREIGN KEY (user_id) REFERENCES users(user_id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT="Contains member's information";

