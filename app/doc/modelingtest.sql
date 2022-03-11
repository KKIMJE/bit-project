-- 회원
DROP TABLE IF EXISTS member;

-- 주점
DROP TABLE IF EXISTS store;

-- 주종
DROP TABLE IF EXISTS alcohol_type;

-- 음주내역
DROP TABLE IF EXISTS alcohol_management;

-- 예약
DROP TABLE IF EXISTS reservation;

-- 문의
DROP TABLE IF EXISTS inquiry;

-- 공지사항
DROP TABLE IF EXISTS notice;

-- 주점태그
DROP TABLE IF EXISTS store_tag;

-- 메뉴
DROP TABLE IF EXISTS store_menu;

-- 주점유형
DROP TABLE IF EXISTS store_type;

-- 술
DROP TABLE IF EXISTS alcohol_detail;

-- 커뮤니티
DROP TABLE IF EXISTS community;

-- 리뷰
DROP TABLE IF EXISTS review;

-- 게시글
DROP TABLE IF EXISTS board;

-- 신고하기
DROP TABLE IF EXISTS report;

-- 모임게시판
DROP TABLE IF EXISTS party_board;

-- 참석자
DROP TABLE IF EXISTS party_participant;

-- 모임
DROP TABLE IF EXISTS party;

-- SNS계정
DROP TABLE IF EXISTS sns_account;

-- SNS
DROP TABLE IF EXISTS sns;

-- 태그
DROP TABLE IF EXISTS tag;

-- 주점판매술
DROP TABLE IF EXISTS alcohol_sales;

-- 주점소속유형
DROP TABLE IF EXISTS store_section_type;

-- 댓글좋아요
DROP TABLE IF EXISTS like;

-- 게시글찜
DROP TABLE IF EXISTS board_select;

-- 주점찜
DROP TABLE IF EXISTS store_select;

-- 모임찜
DROP TABLE IF EXISTS party_board_select;

-- 게시글댓글
DROP TABLE IF EXISTS board_comment;

-- 회원유형
DROP TABLE IF EXISTS TABLE124;

-- 모임회원평가
DROP TABLE IF EXISTS party_member_evaluation;

-- 모임주점평가
DROP TABLE IF EXISTS party_store_evaluation;

-- 회원
CREATE TABLE member (
	mno INTEGER NOT NULL,
	email VARCHAR(40) NOT NULL,
	pwd VARCHAR(13) NOT NULL,
	name VARCHAR(50) NOT NULL,
	tel VARCHAR(30) NOT NULL,
	join_date TIMESTAMP NOT NULL,
	social_accept BOOLEAN NOT NULL,
	login_date TIMESTAMP NOT NULL,
	gender BOOLEAN NOT NULL,
	birth INTEGER NOT NULL,
	self_introduction TEXT NULL,
	m_photo VARCHAR(500) NULL,
	nickname VARCHAR(50) NOT NULL,
	score FLOAT NOT NULL,
	block_date TIMESTAMP NULL,
	block_accept BOOLEAN NOT NULL,
	member_status INTEGER NOT NULL
);

-- 회원
ALTER TABLE member
	ADD CONSTRAINT PK_member -- 회원 기본키
	PRIMARY KEY (
	mno -- 회원번호
	);

-- 회원 유니크 인덱스
CREATE UNIQUE INDEX UIX_member
	ON member ( -- 회원
				email ASC -- 이메일
	);

-- 회원 유니크 인덱스2
CREATE UNIQUE INDEX UIX_member2
	ON member ( -- 회원
				tel ASC -- 휴대폰번호
	);

-- 회원 유니크 인덱스3
CREATE UNIQUE INDEX UIX_member3
	ON member ( -- 회원
				nickname ASC -- 닉네임
	);

ALTER TABLE member
	MODIFY COLUMN mno INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 주점
CREATE TABLE store (
	store_no INTEGER NOT NULL,
	business_registration_no INTEGER NOT NULL,
	business_registration VARCHAR(500) NOT NULL,
	name VARCHAR(50) NOT NULL,
	img VARCHAR(500) NOT NULL,
	address VARCHAR(255) NOT NULL,
	tel VARCHAR(30) NOT NULL,
	hour TIME NOT NULL,
	introduction TEXT NULL,
	evaluation_score FLOAT NULL,
	reservation_accept BOOLEAN NOT NULL,
	max_member INTEGER NULL,
	lat DOUBLE NOT NULL,
	lng DOUBLE NOT NULL,
	place_id VARCHAR(255) NOT NULL,
	oper BOOLEAN NOT NULL,
	status BOOLEAN NOT NULL
);

-- 주점
ALTER TABLE store
	ADD CONSTRAINT PK_store -- 주점 기본키
	PRIMARY KEY (
	store_no -- 주점번호
	);

ALTER TABLE store
	MODIFY COLUMN store_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 주종
CREATE TABLE alcohol_type (
	alcohol_type_no INTEGER NOT NULL,
	type_name VARCHAR(50) NOT NULL
);

-- 주종
ALTER TABLE alcohol_type
	ADD CONSTRAINT PK_alcohol_type -- 주종 기본키
	PRIMARY KEY (
	alcohol_type_no -- 주종번호
	);

ALTER TABLE alcohol_type
	MODIFY COLUMN alcohol_type_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 음주내역
CREATE TABLE alcohol_management (
	drink_no INTEGER NOT NULL,
	mno INTEGER NOT NULL,
	date TIMESTAMP NULL,
	amount VARCHAR(50) NULL,
	type VARCHAR(50) NULL,
	level INTEGER NULL
);

-- 음주내역
ALTER TABLE alcohol_management
	ADD CONSTRAINT PK_alcohol_management -- 음주내역 기본키
	PRIMARY KEY (
	drink_no -- 음주번호
	);

ALTER TABLE alcohol_management
	MODIFY COLUMN drink_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 예약
CREATE TABLE reservation (
	reservation_no INTEGER NOT NULL,
	store_no INTEGER NOT NULL,
	date TIMESTAMP NOT NULL,
	people INTEGER NOT NULL,
	name VARCHAR(50) NOT NULL,
	tel VARCHAR(30) NOT NULL,
	request VARCHAR(255) NULL,
	review_point INTEGER NULL,
	pay_no INTEGER NOT NULL,
	pay_company VARCHAR(50) NOT NULL,
	pay_price INTEGER NOT NULL,
	pay_date TIMESTAMP NOT NULL,
	status INTEGER NOT NULL
);

-- 예약
ALTER TABLE reservation
	ADD CONSTRAINT PK_reservation -- 예약 기본키
	PRIMARY KEY (
	reservation_no -- 예약번호
	);

ALTER TABLE reservation
	MODIFY COLUMN reservation_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 문의
CREATE TABLE inquiry (
	inq_no INTEGER NOT NULL,
	mno INTEGER NOT NULL,
	date TIMESTAMP NOT NULL,
	type INTEGER NOT NULL,
	title VARCHAR(50) NOT NULL,
	contents TEXT NOT NULL,
	attach_file VARCHAR(500) NULL,
	answer TEXT NULL,
	answer_date TIMESTAMP NULL
);

-- 문의
ALTER TABLE inquiry
	ADD CONSTRAINT PK_inquiry -- 문의 기본키
	PRIMARY KEY (
	inq_no -- 문의번호
	);

ALTER TABLE inquiry
	MODIFY COLUMN inq_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 공지사항
CREATE TABLE notice (
	notice_no INTEGER NOT NULL,
	COL2 <데이터 타입 없음> NULL,
	title VARCHAR(255) NOT NULL,
	reg_date TIMESTAMP NOT NULL,
	update_date TIMESTAMP NOT NULL,
	contents TEXT NOT NULL,
	view_count INTEGER NOT NULL
);

-- 공지사항
ALTER TABLE notice
	ADD CONSTRAINT PK_notice -- 공지사항 기본키
	PRIMARY KEY (
	notice_no -- 공지사항번호
	);

ALTER TABLE notice
	MODIFY COLUMN notice_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 주점태그
CREATE TABLE store_tag (
	tag_no INTEGER NOT NULL,
	store_no INTEGER NOT NULL
);

-- 주점태그
ALTER TABLE store_tag
	ADD CONSTRAINT PK_store_tag -- 주점태그 기본키
	PRIMARY KEY (
	tag_no,   -- 태그번호
	store_no  -- 주점번호
	);

-- 메뉴
CREATE TABLE store_menu (
	store_menu_no INTEGER NOT NULL,
	store_no INTEGER NOT NULL,
	name VARCHAR(50) NOT NULL,
	price INTEGER NOT NULL,
	img VARCHAR(500) NULL,
	main_accept BOOLEAN NOT NULL
);

-- 메뉴
ALTER TABLE store_menu
	ADD CONSTRAINT PK_store_menu -- 메뉴 기본키
	PRIMARY KEY (
	store_menu_no -- 메뉴번호
	);

ALTER TABLE store_menu
	MODIFY COLUMN store_menu_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 주점유형
CREATE TABLE store_type (
	store_type_no INTEGER NOT NULL,
	type_name VARCHAR(50) NOT NULL
);

-- 주점유형
ALTER TABLE store_type
	ADD CONSTRAINT PK_store_type -- 주점유형 기본키
	PRIMARY KEY (
	store_type_no -- 주점유형번호
	);

ALTER TABLE store_type
	MODIFY COLUMN store_type_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 술
CREATE TABLE alcohol_detail (
	alcohol_detail_no INTEGER NOT NULL,
	alcohol_type_no INTEGER NOT NULL,
	name VARCHAR(50) NOT NULL,
	degree FLOAT NOT NULL,
	brand VARCHAR(50) NULL,
	origin VARCHAR(50) NULL,
	volume INTEGER NULL,
	characteristic TEXT NULL,
	img VARCHAR(500) NULL
);

-- 술
ALTER TABLE alcohol_detail
	ADD CONSTRAINT PK_alcohol_detail -- 술 기본키
	PRIMARY KEY (
	alcohol_detail_no -- 술번호
	);

ALTER TABLE alcohol_detail
	MODIFY COLUMN alcohol_detail_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 커뮤니티
CREATE TABLE community (
	community_no INTEGER NOT NULL,
	title VARCHAR(50) NOT NULL
);

-- 커뮤니티
ALTER TABLE community
	ADD CONSTRAINT PK_community -- 커뮤니티 기본키
	PRIMARY KEY (
	community_no -- 커뮤니티번호
	);

ALTER TABLE community
	MODIFY COLUMN community_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 리뷰
CREATE TABLE review (
	reservation_no INTEGER NOT NULL,
	contents LONGTEXT NOT NULL,
	reg_date DATE NOT NULL,
	score FLOAT NOT NULL,
	comment_contents VARCHAR(255) NULL,
	comment_reg_date DATE NULL
);

-- 리뷰
ALTER TABLE review
	ADD CONSTRAINT PK_review -- 리뷰 기본키
	PRIMARY KEY (
	reservation_no -- 예약번호
	);

-- 게시글
CREATE TABLE board (
	mno INTEGER NOT NULL,
	community_no INTEGER NOT NULL,
	title VARCHAR(50) NOT NULL,
	contents LONGTEXT NOT NULL,
	date TIMESTAMP NOT NULL,
	view_count INTEGER NOT NULL
);

-- 신고하기
CREATE TABLE report (
	repo_no INTEGER NOT NULL,
	mno INTEGER NOT NULL,
	date TIMESTAMP NOT NULL,
	contents TEXT NOT NULL,
	type INTEGER NULL,
	target_no INTEGER NULL,
	status BOOLEAN NOT NULL
);

-- 신고하기
ALTER TABLE report
	ADD CONSTRAINT PK_report -- 신고하기 기본키
	PRIMARY KEY (
	repo_no -- 신고하기번호
	);

ALTER TABLE report
	MODIFY COLUMN repo_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 모임게시판
CREATE TABLE party_board (
	party_board_no INTEGER NOT NULL,
	party_no INTEGER NOT NULL,
	mno INTEGER NOT NULL,
	board_reg_date TIMESTAMP NOT NULL,
	message TEXT NULL,
	message_time TIME NULL,
	message_status BOOLEAN NOT NULL
);

-- 모임게시판
ALTER TABLE party_board
	ADD CONSTRAINT PK_party_board -- 모임게시판 기본키
	PRIMARY KEY (
	party_board_no -- 모임게시판번호
	);

ALTER TABLE party_board
	MODIFY COLUMN party_board_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 참석자
CREATE TABLE party_participant (
	party_no INTEGER NOT NULL,
	mno INTEGER NOT NULL,
	participant_status INTEGER NOT NULL
);

-- 참석자
ALTER TABLE party_participant
	ADD CONSTRAINT PK_party_participant -- 참석자 기본키
	PRIMARY KEY (
	party_no, -- 모임번호
	mno       -- 회원번호
	);

-- 모임
CREATE TABLE party (
	party_no INTEGER NOT NULL,
	mno INTEGER NOT NULL,
	title VARCHAR(50) NOT NULL,
	contents LONGTEXT NOT NULL,
	img VARCHAR(255) NULL,
	party_fee INTEGER NOT NULL,
	meeting_date TIMESTAMP NOT NULL,
	max_member INTEGER NOT NULL,
	alcohol_type VARCHAR(50) NOT NULL,
	alcohol_limit INTEGER NOT NULL,
	store_no INTEGER NULL
);

-- 모임
ALTER TABLE party
	ADD CONSTRAINT PK_party -- 모임 기본키
	PRIMARY KEY (
	party_no -- 모임번호
	);

ALTER TABLE party
	MODIFY COLUMN party_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- SNS계정
CREATE TABLE sns_account (
	mno INTEGER NOT NULL,
	sns_no INTEGER NOT NULL,
	email VARCHAR(40) NULL
);

-- SNS계정
ALTER TABLE sns_account
	ADD CONSTRAINT PK_sns_account -- SNS계정 기본키
	PRIMARY KEY (
	mno -- 회원번호
	);

-- SNS계정 유니크 인덱스
CREATE UNIQUE INDEX UIX_sns_account
	ON sns_account ( -- SNS계정
				email ASC -- 이메일
	);

-- SNS
CREATE TABLE sns (
	sns_no INTEGER NOT NULL
);

-- SNS
ALTER TABLE sns
	ADD CONSTRAINT PK_sns -- SNS 기본키
	PRIMARY KEY (
	sns_no -- SNS번호
	);

ALTER TABLE sns
	MODIFY COLUMN sns_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 태그
CREATE TABLE tag (
	tag_no INTEGER NOT NULL,
	name VARCHAR(50) NOT NULL
);

-- 태그
ALTER TABLE tag
	ADD CONSTRAINT PK_tag -- 태그 기본키
	PRIMARY KEY (
	tag_no -- 태그번호
	);

ALTER TABLE tag
	MODIFY COLUMN tag_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 주점판매술
CREATE TABLE alcohol_sales (
	store_no INTEGER NOT NULL,
	alcohol_detail_no INTEGER NOT NULL,
	price INTEGER NOT NULL
);

-- 주점판매술
ALTER TABLE alcohol_sales
	ADD CONSTRAINT PK_alcohol_sales -- 주점판매술 기본키
	PRIMARY KEY (
	store_no,          -- 주점번호
	alcohol_detail_no  -- 술번호
	);

-- 주점소속유형
CREATE TABLE store_section_type (
	store_type_no INTEGER NOT NULL,
	store_no INTEGER NOT NULL
);

-- 주점소속유형
ALTER TABLE store_section_type
	ADD CONSTRAINT PK_store_section_type -- 주점소속유형 기본키
	PRIMARY KEY (
	store_type_no, -- 주점유형번호
	store_no       -- 주점번호
	);

-- 댓글좋아요
CREATE TABLE like (
	mno INTEGER NOT NULL,
	board_commnet_no INTEGER NOT NULL
);

-- 댓글좋아요
ALTER TABLE like
	ADD CONSTRAINT PK_like -- 댓글좋아요 기본키
	PRIMARY KEY (
	mno,              -- 회원번호
	board_commnet_no  -- 게시글댓글번호
	);

-- 게시글찜
CREATE TABLE board_select (
	mno INTEGER NOT NULL
);

-- 게시글찜
ALTER TABLE board_select
	ADD CONSTRAINT PK_board_select -- 게시글찜 기본키
	PRIMARY KEY (
	mno -- 회원번호
	);

-- 주점찜
CREATE TABLE store_select (
	store_no INTEGER NOT NULL,
	mno INTEGER NOT NULL
);

-- 주점찜
ALTER TABLE store_select
	ADD CONSTRAINT PK_store_select -- 주점찜 기본키
	PRIMARY KEY (
	store_no, -- 주점번호
	mno       -- 회원번호
	);

-- 모임찜
CREATE TABLE party_board_select (
	mno INTEGER NOT NULL,
	party_board_no INTEGER NOT NULL
);

-- 모임찜
ALTER TABLE party_board_select
	ADD CONSTRAINT PK_party_board_select -- 모임찜 기본키
	PRIMARY KEY (
	mno,            -- 회원번호
	party_board_no  -- 모임게시판번호
	);

-- 게시글댓글
CREATE TABLE board_comment (
	board_commnet_no INTEGER NOT NULL,
	mno INTEGER NULL,
	comment_contents TEXT NULL,
	comment_date TIMESTAMP NULL
);

-- 게시글댓글
ALTER TABLE board_comment
	ADD CONSTRAINT PK_board_comment -- 게시글댓글 기본키
	PRIMARY KEY (
	board_commnet_no -- 게시글댓글번호
	);

ALTER TABLE board_comment
	MODIFY COLUMN board_commnet_no INTEGER NOT NULL AUTO_INCREMENT(1,1);

-- 회원유형
CREATE TABLE TABLE124 (
	COL2 <데이터 타입 없음> NOT NULL,
	COL <데이터 타입 없음> NULL
);

-- 회원유형
ALTER TABLE TABLE124
	ADD CONSTRAINT PK_TABLE124 -- 회원유형 기본키
	PRIMARY KEY (
	COL2 -- 회원유형번호
	);

-- 모임회원평가
CREATE TABLE party_member_evaluation (
	party_no INTEGER NOT NULL,
	mno INTEGER NOT NULL,
	mno2 INTEGER NOT NULL,
	score FLOAT NOT NULL
);

-- 모임회원평가
ALTER TABLE party_member_evaluation
	ADD CONSTRAINT PK_party_member_evaluation -- 모임회원평가 기본키
	PRIMARY KEY (
	party_no, -- 모임번호
	mno,      -- 평가자번호
	mno2      -- 피평가번호
	);

-- 모임주점평가
CREATE TABLE party_store_evaluation (
	party_no INTEGER NOT NULL,
	mno INTEGER NOT NULL,
	score FLOAT NOT NULL
);

-- 모임주점평가
ALTER TABLE party_store_evaluation
	ADD CONSTRAINT PK_party_store_evaluation -- 모임주점평가 기본키
	PRIMARY KEY (
	party_no, -- 모임번호
	mno       -- 회원번호
	);

-- 음주내역
ALTER TABLE alcohol_management
	ADD CONSTRAINT FK_member_TO_alcohol_management -- 회원 -> 음주내역
	FOREIGN KEY (
	mno -- 회원번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 예약
ALTER TABLE reservation
	ADD CONSTRAINT FK_store_TO_reservation -- 주점 -> 예약
	FOREIGN KEY (
	store_no -- 주점번호
	)
	REFERENCES store ( -- 주점
	store_no -- 주점번호
	);

-- 문의
ALTER TABLE inquiry
	ADD CONSTRAINT FK_member_TO_inquiry -- 회원 -> 문의
	FOREIGN KEY (
	mno -- 회원번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 공지사항
ALTER TABLE notice
	ADD CONSTRAINT FK_TABLE124_TO_notice -- 회원유형 -> 공지사항
	FOREIGN KEY (
	COL2 -- 회원유형번호
	)
	REFERENCES TABLE124 ( -- 회원유형
	COL2 -- 회원유형번호
	);

-- 주점태그
ALTER TABLE store_tag
	ADD CONSTRAINT FK_tag_TO_store_tag -- 태그 -> 주점태그
	FOREIGN KEY (
	tag_no -- 태그번호
	)
	REFERENCES tag ( -- 태그
	tag_no -- 태그번호
	);

-- 주점태그
ALTER TABLE store_tag
	ADD CONSTRAINT FK_store_TO_store_tag -- 주점 -> 주점태그
	FOREIGN KEY (
	store_no -- 주점번호
	)
	REFERENCES store ( -- 주점
	store_no -- 주점번호
	);

-- 메뉴
ALTER TABLE store_menu
	ADD CONSTRAINT FK_store_TO_store_menu -- 주점 -> 메뉴
	FOREIGN KEY (
	store_no -- 주점번호
	)
	REFERENCES store ( -- 주점
	store_no -- 주점번호
	);

-- 술
ALTER TABLE alcohol_detail
	ADD CONSTRAINT FK_alcohol_type_TO_alcohol_detail -- 주종 -> 술
	FOREIGN KEY (
	alcohol_type_no -- 주종번호
	)
	REFERENCES alcohol_type ( -- 주종
	alcohol_type_no -- 주종번호
	);

-- 리뷰
ALTER TABLE review
	ADD CONSTRAINT FK_reservation_TO_review -- 예약 -> 리뷰
	FOREIGN KEY (
	reservation_no -- 예약번호
	)
	REFERENCES reservation ( -- 예약
	reservation_no -- 예약번호
	);

-- 게시글
ALTER TABLE board
	ADD CONSTRAINT FK_community_TO_board -- 커뮤니티 -> 게시글
	FOREIGN KEY (
	community_no -- 커뮤니티번호
	)
	REFERENCES community ( -- 커뮤니티
	community_no -- 커뮤니티번호
	);

-- 게시글
ALTER TABLE board
	ADD CONSTRAINT FK_member_TO_board -- 회원 -> 게시글
	FOREIGN KEY (
	mno -- 회원번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 신고하기
ALTER TABLE report
	ADD CONSTRAINT FK_member_TO_report -- 회원 -> 신고하기
	FOREIGN KEY (
	mno -- 신고자번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 모임게시판
ALTER TABLE party_board
	ADD CONSTRAINT FK_party_participant_TO_party_board -- 참석자 -> 모임게시판
	FOREIGN KEY (
	party_no, -- 모임번호
	mno       -- 회원번호
	)
	REFERENCES party_participant ( -- 참석자
	party_no, -- 모임번호
	mno       -- 회원번호
	);

-- 참석자
ALTER TABLE party_participant
	ADD CONSTRAINT FK_party_TO_party_participant -- 모임 -> 참석자
	FOREIGN KEY (
	party_no -- 모임번호
	)
	REFERENCES party ( -- 모임
	party_no -- 모임번호
	);

-- 참석자
ALTER TABLE party_participant
	ADD CONSTRAINT FK_member_TO_party_participant -- 회원 -> 참석자
	FOREIGN KEY (
	mno -- 회원번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 모임
ALTER TABLE party
	ADD CONSTRAINT FK_member_TO_party -- 회원 -> 모임
	FOREIGN KEY (
	mno -- 주최자번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 모임
ALTER TABLE party
	ADD CONSTRAINT FK_store_TO_party -- 주점 -> 모임
	FOREIGN KEY (
	store_no -- 주점번호
	)
	REFERENCES store ( -- 주점
	store_no -- 주점번호
	);

-- SNS계정
ALTER TABLE sns_account
	ADD CONSTRAINT FK_sns_TO_sns_account -- SNS -> SNS계정
	FOREIGN KEY (
	sns_no -- SNS번호
	)
	REFERENCES sns ( -- SNS
	sns_no -- SNS번호
	);

-- SNS계정
ALTER TABLE sns_account
	ADD CONSTRAINT FK_member_TO_sns_account -- 회원 -> SNS계정
	FOREIGN KEY (
	mno -- 회원번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 주점판매술
ALTER TABLE alcohol_sales
	ADD CONSTRAINT FK_alcohol_detail_TO_alcohol_sales -- 술 -> 주점판매술
	FOREIGN KEY (
	alcohol_detail_no -- 술번호
	)
	REFERENCES alcohol_detail ( -- 술
	alcohol_detail_no -- 술번호
	);

-- 주점판매술
ALTER TABLE alcohol_sales
	ADD CONSTRAINT FK_store_TO_alcohol_sales -- 주점 -> 주점판매술
	FOREIGN KEY (
	store_no -- 주점번호
	)
	REFERENCES store ( -- 주점
	store_no -- 주점번호
	);

-- 주점소속유형
ALTER TABLE store_section_type
	ADD CONSTRAINT FK_store_type_TO_store_section_type -- 주점유형 -> 주점소속유형
	FOREIGN KEY (
	store_type_no -- 주점유형번호
	)
	REFERENCES store_type ( -- 주점유형
	store_type_no -- 주점유형번호
	);

-- 주점소속유형
ALTER TABLE store_section_type
	ADD CONSTRAINT FK_store_TO_store_section_type -- 주점 -> 주점소속유형
	FOREIGN KEY (
	store_no -- 주점번호
	)
	REFERENCES store ( -- 주점
	store_no -- 주점번호
	);

-- 댓글좋아요
ALTER TABLE like
	ADD CONSTRAINT FK_member_TO_like -- 회원 -> 댓글좋아요
	FOREIGN KEY (
	mno -- 회원번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 댓글좋아요
ALTER TABLE like
	ADD CONSTRAINT FK_board_comment_TO_like -- 게시글댓글 -> 댓글좋아요
	FOREIGN KEY (
	board_commnet_no -- 게시글댓글번호
	)
	REFERENCES board_comment ( -- 게시글댓글
	board_commnet_no -- 게시글댓글번호
	);

-- 게시글찜
ALTER TABLE board_select
	ADD CONSTRAINT FK_member_TO_board_select -- 회원 -> 게시글찜
	FOREIGN KEY (
	mno -- 회원번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 주점찜
ALTER TABLE store_select
	ADD CONSTRAINT FK_store_TO_store_select -- 주점 -> 주점찜
	FOREIGN KEY (
	store_no -- 주점번호
	)
	REFERENCES store ( -- 주점
	store_no -- 주점번호
	);

-- 주점찜
ALTER TABLE store_select
	ADD CONSTRAINT FK_member_TO_store_select -- 회원 -> 주점찜
	FOREIGN KEY (
	mno -- 회원번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 모임찜
ALTER TABLE party_board_select
	ADD CONSTRAINT FK_party_board_TO_party_board_select -- 모임게시판 -> 모임찜
	FOREIGN KEY (
	party_board_no -- 모임게시판번호
	)
	REFERENCES party_board ( -- 모임게시판
	party_board_no -- 모임게시판번호
	);

-- 모임찜
ALTER TABLE party_board_select
	ADD CONSTRAINT FK_member_TO_party_board_select -- 회원 -> 모임찜
	FOREIGN KEY (
	mno -- 회원번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 게시글댓글
ALTER TABLE board_comment
	ADD CONSTRAINT FK_member_TO_board_comment -- 회원 -> 게시글댓글
	FOREIGN KEY (
	mno -- 회원번호
	)
	REFERENCES member ( -- 회원
	mno -- 회원번호
	);

-- 모임회원평가
ALTER TABLE party_member_evaluation
	ADD CONSTRAINT FK_party_participant_TO_party_member_evaluation -- 참석자 -> 모임회원평가
	FOREIGN KEY (
	party_no, -- 모임번호
	mno       -- 평가자번호
	)
	REFERENCES party_participant ( -- 참석자
	party_no, -- 모임번호
	mno       -- 회원번호
	);

-- 모임회원평가
ALTER TABLE party_member_evaluation
	ADD CONSTRAINT FK_party_participant_TO_party_member_evaluation2 -- 참석자 -> 모임회원평가2
	FOREIGN KEY (
	party_no, -- 모임번호
	mno2      -- 피평가번호
	)
	REFERENCES party_participant ( -- 참석자
	party_no, -- 모임번호
	mno       -- 회원번호
	);

-- 모임주점평가
ALTER TABLE party_store_evaluation
	ADD CONSTRAINT FK_party_participant_TO_party_store_evaluation -- 참석자 -> 모임주점평가
	FOREIGN KEY (
	party_no, -- 모임번호
	mno       -- 회원번호
	)
	REFERENCES party_participant ( -- 참석자
	party_no, -- 모임번호
	mno       -- 회원번호
	);
