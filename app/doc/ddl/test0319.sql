-- sojudb.alcohol_type definition

CREATE TABLE `alcohol_type` (
  `alcohol_type_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '주종번호',
  `type_name` varchar(50) NOT NULL COMMENT '주종명',
  PRIMARY KEY (`alcohol_type_no`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COMMENT='주종';


-- sojudb.community definition

CREATE TABLE `community` (
  `community_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '커뮤니티번호',
  `title` varchar(50) NOT NULL COMMENT '커뮤니티명',
  PRIMARY KEY (`community_no`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COMMENT='커뮤니티';


-- sojudb.`member` definition

CREATE TABLE `member` (
  `mno` int(11) NOT NULL AUTO_INCREMENT COMMENT '회원번호',
  `email` varchar(40) NOT NULL COMMENT '이메일',
  `pwd` varchar(13) NOT NULL COMMENT '비밀번호',
  `name` varchar(50) NOT NULL COMMENT '이름',
  `tel` varchar(30) NOT NULL COMMENT '휴대폰번호',
  `join_date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '가입일시',
  `social_accept` tinyint(1) NOT NULL DEFAULT 0 COMMENT '소셜회원여부',
  `gender` tinyint(1) NOT NULL COMMENT '성별',
  `birth` int(11) NOT NULL COMMENT '생년월일',
  `self_introduction` text DEFAULT NULL COMMENT '자기소개',
  `m_img` varchar(500) DEFAULT NULL COMMENT '회원프로필사진',
  `nickname` varchar(50) NOT NULL COMMENT '닉네임',
  `score` float DEFAULT 0 COMMENT '회원별점',
  `block_date` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '제재일',
  `block_accept` tinyint(1) NOT NULL DEFAULT 0 COMMENT '제재여부',
  `member_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '상태',
  PRIMARY KEY (`mno`),
  UNIQUE KEY `UIX_member` (`email`),
  UNIQUE KEY `UIX_member2` (`tel`),
  UNIQUE KEY `UIX_member3` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb3 COMMENT='회원';


-- sojudb.notice definition

CREATE TABLE `notice` (
  `notice_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '공지사항번호',
  `member_type` varchar(1) NOT NULL DEFAULT '0' COMMENT '타입',
  `title` varchar(255) NOT NULL COMMENT '제목',
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '작성일시',
  `update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '수정일시',
  `contents` text NOT NULL COMMENT '내용',
  `view_count` int(11) NOT NULL DEFAULT 0 COMMENT '조회수',
  PRIMARY KEY (`notice_no`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='공지사항';


-- sojudb.sns definition

CREATE TABLE `sns` (
  `sns_no` int(11) NOT NULL AUTO_INCREMENT COMMENT 'SNS번호',
  `sns_name` varchar(30) NOT NULL COMMENT 'SNS명',
  PRIMARY KEY (`sns_no`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='SNS';


-- sojudb.store definition

CREATE TABLE `store` (
  `store_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '주점번호',
  `business_registration_no` int(11) NOT NULL COMMENT '사업자등록증번호',
  `business_registration` varchar(500) NOT NULL COMMENT '사업자등록증',
  `name` varchar(50) NOT NULL COMMENT '가게명',
  `address` varchar(255) NOT NULL COMMENT '주점주소',
  `tel` varchar(30) NOT NULL COMMENT '주점전화번호',
  `hour` text NOT NULL COMMENT '영업시간',
  `introduction` text DEFAULT NULL COMMENT '가게소개',
  `evaluation_score` float DEFAULT 0 COMMENT '주점별점',
  `reservation_accept` tinyint(1) NOT NULL DEFAULT 0 COMMENT '예약가능여부',
  `max_member` int(11) DEFAULT NULL COMMENT '최대인원',
  `lat` float NOT NULL COMMENT '위도',
  `lng` float NOT NULL COMMENT '경도',
  `place_id` varchar(255) NOT NULL COMMENT '장소아이디',
  `oper` tinyint(1) NOT NULL DEFAULT 0 COMMENT '영업여부',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '상태',
  PRIMARY KEY (`store_no`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COMMENT='주점';


-- sojudb.store_type definition

CREATE TABLE `store_type` (
  `store_type_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '주점유형번호',
  `type_name` varchar(50) NOT NULL COMMENT '주점유형명',
  PRIMARY KEY (`store_type_no`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3 COMMENT='주점유형';


-- sojudb.tag definition

CREATE TABLE `tag` (
  `tag_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '태그번호',
  `name` varchar(50) NOT NULL COMMENT '태그명',
  PRIMARY KEY (`tag_no`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='태그';


-- sojudb.alcohol_detail definition

CREATE TABLE `alcohol_detail` (
  `alcohol_detail_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '술번호',
  `alcohol_type_no` int(11) NOT NULL COMMENT '주종번호',
  `name` varchar(50) NOT NULL COMMENT '상품명',
  `degree` float NOT NULL COMMENT '도수',
  `brand` varchar(50) DEFAULT NULL COMMENT '브랜드명',
  `origin` varchar(50) DEFAULT NULL COMMENT '원산지',
  `volume` int(11) DEFAULT NULL COMMENT '용량',
  `characteristic` text DEFAULT NULL COMMENT '특징',
  `img` varchar(500) DEFAULT NULL COMMENT '사진',
  PRIMARY KEY (`alcohol_detail_no`),
  KEY `FK_alcohol_type_TO_alcohol_detail` (`alcohol_type_no`),
  CONSTRAINT `FK_alcohol_type_TO_alcohol_detail` FOREIGN KEY (`alcohol_type_no`) REFERENCES `alcohol_type` (`alcohol_type_no`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='술';


-- sojudb.alcohol_management definition

CREATE TABLE `alcohol_management` (
  `drink_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '음주번호',
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `date` date DEFAULT NULL COMMENT '음주일시',
  `amount` varchar(50) DEFAULT NULL COMMENT '음주량',
  `type` varchar(50) DEFAULT NULL COMMENT '주종',
  `level` varchar(50) DEFAULT NULL COMMENT '취한상태',
  PRIMARY KEY (`drink_no`),
  KEY `FK_member_TO_alcohol_management` (`mno`),
  CONSTRAINT `FK_member_TO_alcohol_management` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='음주내역';


-- sojudb.alcohol_sales definition

CREATE TABLE `alcohol_sales` (
  `store_no` int(11) NOT NULL COMMENT '주점번호',
  `alcohol_detail_no` int(11) NOT NULL COMMENT '술번호',
  `price` int(11) NOT NULL COMMENT '가격',
  PRIMARY KEY (`store_no`,`alcohol_detail_no`),
  KEY `FK_alcohol_detail_TO_alcohol_sales` (`alcohol_detail_no`),
  CONSTRAINT `FK_alcohol_detail_TO_alcohol_sales` FOREIGN KEY (`alcohol_detail_no`) REFERENCES `alcohol_detail` (`alcohol_detail_no`) ON DELETE CASCADE,
  CONSTRAINT `FK_store_TO_alcohol_sales` FOREIGN KEY (`store_no`) REFERENCES `store` (`store_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='주점판매술';


-- sojudb.board definition

CREATE TABLE `board` (
  `board_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '게시글번호',
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `community_no` int(11) NOT NULL COMMENT '커뮤니티번호',
  `title` varchar(50) NOT NULL COMMENT '제목',
  `contents` longtext NOT NULL COMMENT '내용',
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '게시일',
  `update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '수정일',
  `view_count` int(11) NOT NULL DEFAULT 0 COMMENT '조회수',
  PRIMARY KEY (`board_no`),
  KEY `FK_community_TO_board` (`community_no`),
  KEY `FK_member_TO_board` (`mno`),
  CONSTRAINT `FK_community_TO_board` FOREIGN KEY (`community_no`) REFERENCES `community` (`community_no`) ON DELETE CASCADE,
  CONSTRAINT `FK_member_TO_board` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='게시글';


-- sojudb.board_comment definition

CREATE TABLE `board_comment` (
  `board_comment_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '게시글댓글번호',
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `board_no` int(11) NOT NULL COMMENT '게시글번호',
  `comment_contents` text NOT NULL COMMENT '내용',
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '작성일',
  `update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '수정일',
  PRIMARY KEY (`board_comment_no`),
  KEY `FK_board_TO_board_comment` (`board_no`),
  KEY `FK_member_TO_board_comment` (`mno`),
  CONSTRAINT `FK_board_TO_board_comment` FOREIGN KEY (`board_no`) REFERENCES `board` (`board_no`) ON DELETE CASCADE,
  CONSTRAINT `FK_member_TO_board_comment` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='게시글댓글';


-- sojudb.board_select definition

CREATE TABLE `board_select` (
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `board_no` int(11) NOT NULL COMMENT '게시글번호',
  PRIMARY KEY (`mno`,`board_no`),
  KEY `FK_board_TO_board_select` (`board_no`),
  CONSTRAINT `FK_board_TO_board_select` FOREIGN KEY (`board_no`) REFERENCES `board` (`board_no`) ON DELETE CASCADE,
  CONSTRAINT `FK_member_TO_board_select` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='게시글찜';


-- sojudb.comment_like definition

CREATE TABLE `comment_like` (
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `board_comment_no` int(11) NOT NULL COMMENT '게시글댓글번호',
  PRIMARY KEY (`mno`,`board_comment_no`),
  KEY `FK_board_comment_TO_comment_like` (`board_comment_no`),
  CONSTRAINT `FK_board_comment_TO_comment_like` FOREIGN KEY (`board_comment_no`) REFERENCES `board_comment` (`board_comment_no`) ON DELETE CASCADE,
  CONSTRAINT `FK_member_TO_comment_like` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='댓글좋아요';


-- sojudb.inquiry definition

CREATE TABLE `inquiry` (
  `inq_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '문의번호',
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '문의일자',
  `type` varchar(1) NOT NULL COMMENT '문의유형',
  `title` varchar(50) NOT NULL COMMENT '제목',
  `contents` text NOT NULL COMMENT '내용',
  `attach_file` varchar(500) DEFAULT NULL COMMENT '첨부파일',
  `answer` text DEFAULT NULL COMMENT '답변',
  `answer_date` timestamp NULL DEFAULT current_timestamp() COMMENT '답변일시',
  PRIMARY KEY (`inq_no`),
  KEY `FK_member_TO_inquiry` (`mno`),
  CONSTRAINT `FK_member_TO_inquiry` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COMMENT='문의';


-- sojudb.owner_member definition

CREATE TABLE `owner_member` (
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `store_no` int(11) NOT NULL COMMENT '주점번호',
  `img` varchar(500) DEFAULT NULL COMMENT '프로필사진',
  `nickname` varchar(50) NOT NULL COMMENT '사장님닉네임',
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '등록일',
  `update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '수정일',
  PRIMARY KEY (`mno`),
  KEY `FK_store_TO_owner_member` (`store_no`),
  CONSTRAINT `FK_member_TO_owner_member` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE,
  CONSTRAINT `FK_store_TO_owner_member` FOREIGN KEY (`store_no`) REFERENCES `store` (`store_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='사장님회원';


-- sojudb.party definition

CREATE TABLE `party` (
  `party_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '모임번호',
  `mno` int(11) NOT NULL COMMENT '주최자번호',
  `store_no` int(11) DEFAULT NULL COMMENT '주점번호',
  `title` varchar(50) NOT NULL COMMENT '제목',
  `contents` longtext NOT NULL COMMENT '내용',
  `party_fee` int(11) NOT NULL COMMENT '회비',
  `meeting_date` datetime NOT NULL COMMENT '모임일시',
  `max_member` int(11) NOT NULL DEFAULT 1 COMMENT '최대인원',
  `alcohol_type` varchar(50) NOT NULL COMMENT '주종',
  `alcohol_limit` int(11) NOT NULL COMMENT '주량',
  `view_count` int(11) NOT NULL DEFAULT 0 COMMENT '조회수',
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '등록일',
  `update_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '수정일',
  PRIMARY KEY (`party_no`),
  KEY `FK_member_TO_party` (`mno`),
  KEY `FK_store_TO_party` (`store_no`),
  CONSTRAINT `FK_member_TO_party` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE,
  CONSTRAINT `FK_store_TO_party` FOREIGN KEY (`store_no`) REFERENCES `store` (`store_no`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='모임';


-- sojudb.party_comment definition

CREATE TABLE `party_comment` (
  `party_comment_no` int(11) NOT NULL COMMENT '모임댓글번호',
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `party_no` int(11) NOT NULL COMMENT '모임번호',
  `party_comment_contents` text NOT NULL COMMENT '내용',
  `comment_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '작성일',
  `update_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '수정일',
  PRIMARY KEY (`party_comment_no`),
  KEY `FK_member_TO_party_comment` (`mno`),
  KEY `FK_party_TO_party_comment` (`party_no`),
  CONSTRAINT `FK_member_TO_party_comment` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`),
  CONSTRAINT `FK_party_TO_party_comment` FOREIGN KEY (`party_no`) REFERENCES `party` (`party_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='모임댓글';


-- sojudb.party_comment_like definition

CREATE TABLE `party_comment_like` (
  `party_comment_no` int(11) NOT NULL COMMENT '모임댓글번호',
  `mno` int(11) NOT NULL COMMENT '회원번호',
  PRIMARY KEY (`party_comment_no`,`mno`),
  KEY `FK_member_TO_party_comment_like` (`mno`),
  CONSTRAINT `FK_member_TO_party_comment_like` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE,
  CONSTRAINT `FK_party_comment_TO_party_comment_like` FOREIGN KEY (`party_comment_no`) REFERENCES `party_comment` (`party_comment_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='모임댓글좋아요';


-- sojudb.party_participant definition

CREATE TABLE `party_participant` (
  `party_no` int(11) NOT NULL COMMENT '모임번호',
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `participant_status` varchar(1) NOT NULL DEFAULT '0' COMMENT '상태',
  PRIMARY KEY (`party_no`,`mno`),
  KEY `FK_member_TO_party_participant` (`mno`),
  CONSTRAINT `FK_member_TO_party_participant` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE,
  CONSTRAINT `FK_party_TO_party_participant` FOREIGN KEY (`party_no`) REFERENCES `party` (`party_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='참석자';


-- sojudb.party_store_evaluation definition

CREATE TABLE `party_store_evaluation` (
  `party_no` int(11) NOT NULL COMMENT '모임번호',
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `score` float NOT NULL DEFAULT 0 COMMENT '별점',
  PRIMARY KEY (`party_no`,`mno`),
  CONSTRAINT `FK_party_participant_TO_party_store_evaluation` FOREIGN KEY (`party_no`, `mno`) REFERENCES `party_participant` (`party_no`, `mno`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='모임주점평가';


-- sojudb.report definition

CREATE TABLE `report` (
  `repo_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '신고하기번호',
  `mno` int(11) NOT NULL COMMENT '신고자번호',
  `target_no` int(11) NOT NULL COMMENT '피신고대상번호',
  `type` varchar(1) NOT NULL COMMENT '신고유형',
  `date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '신고일자',
  `contents` text DEFAULT NULL COMMENT '신고내용',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '처리상태',
  PRIMARY KEY (`repo_no`),
  KEY `FK_member_TO_report` (`mno`),
  CONSTRAINT `FK_member_TO_report` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb3 COMMENT='신고하기';


-- sojudb.reservation definition

CREATE TABLE `reservation` (
  `reservation_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '예약번호',
  `store_no` int(11) NOT NULL COMMENT '주점번호',
  `date` datetime NOT NULL COMMENT '예약일시',
  `people` int(11) NOT NULL DEFAULT 1 COMMENT '인원',
  `name` varchar(50) NOT NULL COMMENT '예약자',
  `tel` varchar(30) NOT NULL COMMENT '예약자번호',
  `request` varchar(255) DEFAULT NULL COMMENT '요청사항',
  `pay_no` int(11) NOT NULL COMMENT '결제승인번호',
  `pay_company` varchar(50) NOT NULL COMMENT '결제카드회사',
  `pay_price` int(11) NOT NULL COMMENT '결제금액',
  `pay_date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '결제일',
  `status` varchar(1) NOT NULL DEFAULT '0' COMMENT '예약상태',
  PRIMARY KEY (`reservation_no`),
  KEY `FK_store_TO_reservation` (`store_no`),
  CONSTRAINT `FK_store_TO_reservation` FOREIGN KEY (`store_no`) REFERENCES `store` (`store_no`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='예약';


-- sojudb.review definition

CREATE TABLE `review` (
  `reservation_no` int(11) NOT NULL COMMENT '예약번호',
  `store_no` int(11) NOT NULL COMMENT '주점번호',
  `contents` text NOT NULL COMMENT '내용',
  `reg_date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '게시일',
  `score` float NOT NULL DEFAULT 0 COMMENT '별점',
  `comment_contents` text DEFAULT NULL COMMENT '답변',
  `comment_reg_date` timestamp NULL DEFAULT NULL COMMENT '답변일',
  PRIMARY KEY (`reservation_no`),
  KEY `FK_store_TO_review` (`store_no`),
  CONSTRAINT `FK_reservation_TO_review` FOREIGN KEY (`reservation_no`) REFERENCES `reservation` (`reservation_no`) ON DELETE CASCADE,
  CONSTRAINT `FK_store_TO_review` FOREIGN KEY (`store_no`) REFERENCES `store` (`store_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='리뷰';


-- sojudb.review_img definition

CREATE TABLE `review_img` (
  `review_img_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '사진번호',
  `reservation_no` int(11) NOT NULL COMMENT '예약번호',
  `img` varchar(500) NOT NULL COMMENT '사진',
  PRIMARY KEY (`review_img_no`),
  KEY `FK_review_TO_review_img` (`reservation_no`),
  CONSTRAINT `FK_review_TO_review_img` FOREIGN KEY (`reservation_no`) REFERENCES `review` (`reservation_no`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3 COMMENT='리뷰사진';


-- sojudb.sns_account definition

CREATE TABLE `sns_account` (
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `sns_no` int(11) NOT NULL COMMENT 'SNS번호',
  `email` varchar(40) DEFAULT NULL COMMENT '이메일',
  PRIMARY KEY (`mno`),
  UNIQUE KEY `UIX_sns_account` (`email`),
  KEY `FK_sns_TO_sns_account` (`sns_no`),
  CONSTRAINT `FK_member_TO_sns_account` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE,
  CONSTRAINT `FK_sns_TO_sns_account` FOREIGN KEY (`sns_no`) REFERENCES `sns` (`sns_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='SNS계정';


-- sojudb.store_img definition

CREATE TABLE `store_img` (
  `store_img_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '사진번호',
  `store_no` int(11) NOT NULL COMMENT '주점번호',
  `img` varchar(500) NOT NULL COMMENT '사진',
  PRIMARY KEY (`store_img_no`),
  KEY `FK_store_TO_store_img` (`store_no`),
  CONSTRAINT `FK_store_TO_store_img` FOREIGN KEY (`store_no`) REFERENCES `store` (`store_no`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='주점사진';


-- sojudb.store_menu definition

CREATE TABLE `store_menu` (
  `store_menu_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '메뉴번호',
  `store_no` int(11) NOT NULL COMMENT '주점번호',
  `name` varchar(50) NOT NULL COMMENT '메뉴명',
  `price` int(11) NOT NULL COMMENT '메뉴가격',
  `main_accept` tinyint(1) NOT NULL DEFAULT 0 COMMENT '대표메뉴여부',
  PRIMARY KEY (`store_menu_no`),
  KEY `FK_store_TO_store_menu` (`store_no`),
  CONSTRAINT `FK_store_TO_store_menu` FOREIGN KEY (`store_no`) REFERENCES `store` (`store_no`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='메뉴';


-- sojudb.store_section_type definition

CREATE TABLE `store_section_type` (
  `store_type_no` int(11) NOT NULL COMMENT '주점유형번호',
  `store_no` int(11) NOT NULL COMMENT '주점번호',
  PRIMARY KEY (`store_type_no`,`store_no`),
  KEY `FK_store_TO_store_section_type` (`store_no`),
  CONSTRAINT `FK_store_TO_store_section_type` FOREIGN KEY (`store_no`) REFERENCES `store` (`store_no`) ON DELETE CASCADE,
  CONSTRAINT `FK_store_type_TO_store_section_type` FOREIGN KEY (`store_type_no`) REFERENCES `store_type` (`store_type_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='주점소속유형';


-- sojudb.store_select definition

CREATE TABLE `store_select` (
  `store_no` int(11) NOT NULL COMMENT '주점번호',
  `mno` int(11) NOT NULL COMMENT '회원번호',
  PRIMARY KEY (`store_no`,`mno`),
  KEY `FK_member_TO_store_select` (`mno`),
  CONSTRAINT `FK_member_TO_store_select` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`) ON DELETE CASCADE,
  CONSTRAINT `FK_store_TO_store_select` FOREIGN KEY (`store_no`) REFERENCES `store` (`store_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='주점찜';


-- sojudb.store_tag definition

CREATE TABLE `store_tag` (
  `tag_no` int(11) NOT NULL COMMENT '태그번호',
  `store_no` int(11) NOT NULL COMMENT '주점번호',
  PRIMARY KEY (`tag_no`,`store_no`),
  KEY `FK_store_TO_store_tag` (`store_no`),
  CONSTRAINT `FK_store_TO_store_tag` FOREIGN KEY (`store_no`) REFERENCES `store` (`store_no`) ON DELETE CASCADE,
  CONSTRAINT `FK_tag_TO_store_tag` FOREIGN KEY (`tag_no`) REFERENCES `tag` (`tag_no`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='주점태그';


-- sojudb.menu_img definition

CREATE TABLE `menu_img` (
  `menu_img_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '사진번호',
  `store_menu_no` int(11) NOT NULL COMMENT '메뉴번호',
  `img` varchar(500) NOT NULL COMMENT '사진',
  PRIMARY KEY (`menu_img_no`),
  KEY `FK_store_menu_TO_menu_img` (`store_menu_no`),
  CONSTRAINT `FK_store_menu_TO_menu_img` FOREIGN KEY (`store_menu_no`) REFERENCES `store_menu` (`store_menu_no`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COMMENT='메뉴사진';


-- sojudb.party_board definition

CREATE TABLE `party_board` (
  `party_board_no` int(11) NOT NULL AUTO_INCREMENT COMMENT '모임게시판번호',
  `party_no` int(11) NOT NULL COMMENT '모임번호',
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `board_reg_date` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '게시판등록일',
  `message` text DEFAULT NULL COMMENT '메시지',
  `message_time` timestamp NULL DEFAULT NULL COMMENT '메시지시간',
  `message_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '상태',
  PRIMARY KEY (`party_board_no`),
  KEY `FK_party_participant_TO_party_board` (`party_no`,`mno`),
  CONSTRAINT `FK_party_participant_TO_party_board` FOREIGN KEY (`party_no`, `mno`) REFERENCES `party_participant` (`party_no`, `mno`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COMMENT='모임게시판';


-- sojudb.party_board_select definition

CREATE TABLE `party_board_select` (
  `mno` int(11) NOT NULL COMMENT '회원번호',
  `party_board_no` int(11) NOT NULL COMMENT '모임게시판번호',
  PRIMARY KEY (`mno`,`party_board_no`),
  KEY `FK_party_board_TO_party_board_select` (`party_board_no`),
  CONSTRAINT `FK_member_TO_party_board_select` FOREIGN KEY (`mno`) REFERENCES `member` (`mno`),
  CONSTRAINT `FK_party_board_TO_party_board_select` FOREIGN KEY (`party_board_no`) REFERENCES `party_board` (`party_board_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='모임찜';


-- sojudb.party_member_evaluation definition

CREATE TABLE `party_member_evaluation` (
  `party_no` int(11) NOT NULL COMMENT '모임번호',
  `mno` int(11) NOT NULL COMMENT '평가자번호',
  `mno2` int(11) NOT NULL COMMENT '피평가번호',
  `score` float NOT NULL DEFAULT 0 COMMENT '별점',
  PRIMARY KEY (`party_no`,`mno`,`mno2`),
  KEY `FK_party_participant_TO_party_member_evaluation2` (`party_no`,`mno2`),
  CONSTRAINT `FK_party_participant_TO_party_member_evaluation` FOREIGN KEY (`party_no`, `mno`) REFERENCES `party_participant` (`party_no`, `mno`) ON DELETE CASCADE,
  CONSTRAINT `FK_party_participant_TO_party_member_evaluation2` FOREIGN KEY (`party_no`, `mno2`) REFERENCES `party_participant` (`party_no`, `mno`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='모임회원평가';
