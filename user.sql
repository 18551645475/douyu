USE douyu;
CREATE TABLE t_user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(50),
    upwd VARCHAR(20)
);
INSERT INTO t_user VALUES(NULL,"zhuyumeng","123123");