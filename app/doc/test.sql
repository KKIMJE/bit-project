-- 회원
DROP TABLE IF EXISTS member RESTRICT;

-- 주점
DROP TABLE IF EXISTS store RESTRICT;

-- 음주내역
DROP TABLE IF EXISTS alcohol_management RESTRICT;

-- 예약
DROP TABLE IF EXISTS reservation RESTRICT;

-- 문의
DROP TABLE IF EXISTS inquiry RESTRICT;

-- 공지사항
DROP TABLE IF EXISTS notice RESTRICT;

-- 주점태그
DROP TABLE IF EXISTS store_tag RESTRICT;

-- 메뉴
DROP TABLE IF EXISTS store_menu RESTRICT;

-- 술
DROP TABLE IF EXISTS alcohol_detail RESTRICT;

-- 주종
DROP TABLE IF EXISTS alcohol_type RESTRICT;

-- 주점유형
DROP TABLE IF EXISTS store_type RESTRICT;

-- 커뮤니티
DROP TABLE IF EXISTS community RESTRICT;

-- 리뷰
DROP TABLE IF EXISTS review RESTRICT;

-- 게시글
DROP TABLE IF EXISTS board RESTRICT;

-- 신고하기
DROP TABLE IF EXISTS report RESTRICT;

-- 모임게시판
DROP TABLE IF EXISTS party_board RESTRICT;

-- 참석자
DROP TABLE IF EXISTS party_participant RESTRICT;

-- 모임
DROP TABLE IF EXISTS party RESTRICT;

-- SNS계정
DROP TABLE IF EXISTS sns_account RESTRICT;

-- SNS
DROP TABLE IF EXISTS sns RESTRICT;

-- 태그
DROP TABLE IF EXISTS tag RESTRICT;

-- 주점판매술
DROP TABLE IF EXISTS alcohol_sales RESTRICT;

-- 주점소속유형
DROP TABLE IF EXISTS store_section_type RESTRICT;

-- 댓글좋아요
DROP TABLE IF EXISTS like RESTRICT;

-- 게시글찜
DROP TABLE IF EXISTS board_select RESTRICT;

-- 주점찜
DROP TABLE IF EXISTS store_select RESTRICT;

-- 모임찜
DROP TABLE IF EXISTS party_board_select RESTRICT;

-- 게시글댓글
DROP TABLE IF EXISTS board_comment RESTRICT;

-- 모임회원평가
DROP TABLE IF EXISTS party_member_evaluation RESTRICT;

-- 모임주점평가
DROP TABLE IF EXISTS party_store_evaluation RESTRICT;

-- 사장님회원
DROP TABLE IF EXISTS owner_member RESTRICT;

-- 리뷰사진
DROP TABLE IF EXISTS review_img RESTRICT;

-- 메뉴사진
DROP TABLE IF EXISTS menu_img RESTRICT;

-- 주점사진
DROP TABLE IF EXISTS store_img RESTRICT;

-- 회원
CREATE TABLE member (
  mno               INTEGER      NOT NULL COMMENT '회원번호', -- 회원번호
  email             VARCHAR(40)  NOT NULL COMMENT '이메일', -- 이메일
  pwd               VARCHAR(13)  NOT NULL COMMENT '비밀번호', -- 비밀번호
  name              VARCHAR(50)  NOT NULL COMMENT '이름', -- 이름
  tel               VARCHAR(30)  NOT NULL COMMENT '휴대폰번호', -- 휴대폰번호
  join_date         TIMESTAMP    NOT NULL COMMENT '가입일시', -- 가입일시
  social_accept     BOOLEAN      NOT NULL COMMENT '소셜회원여부', -- 소셜회원여부
  gender            BOOLEAN      NOT NULL COMMENT '성별', -- 성별
  birth             INTEGER      NOT NULL COMMENT '생년월일', -- 생년월일
  self_introduction TEXT         NULL     COMMENT '자기소개', -- 자기소개
  m_img             VARCHAR(500) NOT NULL COMMENT '회원프로필사진', -- 회원프로필사진
  nickname          VARCHAR(50)  NOT NULL COMMENT '닉네임', -- 닉네임
  score             FLOAT        NOT NULL COMMENT '회원별점', -- 회원별점
  block_date        TIMESTAMP    NULL     COMMENT '제재일', -- 제재일
  block_accept      BOOLEAN      NOT NULL COMMENT '제재여부', -- 제재여부
  member_status     VARCHAR(1)   NOT NULL COMMENT '상태' -- 상태
)
COMMENT '회원';

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

-- 주점
CREATE TABLE store (
  store_no                 INTEGER      NOT NULL COMMENT '주점번호', -- 주점번호
  business_registration_no INTEGER      NOT NULL COMMENT '사업자등록증번호', -- 사업자등록증번호
  business_registration    VARCHAR(500) NOT NULL COMMENT '사업자등록증', -- 사업자등록증
  name                     VARCHAR(50)  NOT NULL COMMENT '가게명', -- 가게명
  address                  VARCHAR(255) NOT NULL COMMENT '주점주소', -- 주점주소
  tel                      VARCHAR(30)  NOT NULL COMMENT '주점전화번호', -- 주점전화번호
  hour                     TIME         NOT NULL COMMENT '영업시간', -- 영업시간
  introduction             TEXT         NULL     COMMENT '가게소개', -- 가게소개
  evaluation_score         FLOAT        NULL     COMMENT '주점별점', -- 주점별점
  reservation_accept       BOOLEAN      NOT NULL COMMENT '예약가능여부', -- 예약가능여부
  max_member               INTEGER      NULL     COMMENT '최대인원', -- 최대인원
  lat                      FLOAT        NOT NULL COMMENT '위도', -- 위도
  lng                      FLOAT        NOT NULL COMMENT '경도', -- 경도
  place_id                 VARCHAR(255) NOT NULL COMMENT '장소아이디', -- 장소아이디
  oper                     BOOLEAN      NOT NULL COMMENT '영업여부', -- 영업여부
  status                   BOOLEAN      NOT NULL COMMENT '상태' -- 상태
)
COMMENT '주점';

-- 주점
ALTER TABLE store
  ADD CONSTRAINT PK_store -- 주점 기본키
    PRIMARY KEY (
      store_no -- 주점번호
    );

-- 음주내역
CREATE TABLE alcohol_management (
  drink_no INTEGER     NOT NULL COMMENT '음주번호', -- 음주번호
  mno      INTEGER     NOT NULL COMMENT '회원번호', -- 회원번호
  date     TIMESTAMP   NULL     COMMENT '음주일시', -- 음주일시
  amount   VARCHAR(50) NULL     COMMENT '음주량', -- 음주량
  type     VARCHAR(50) NULL     COMMENT '주종', -- 주종
  level    VARCHAR(50) NULL     COMMENT '취한상태' -- 취한상태
)
COMMENT '음주내역';

-- 음주내역
ALTER TABLE alcohol_management
  ADD CONSTRAINT PK_alcohol_management -- 음주내역 기본키
    PRIMARY KEY (
      drink_no -- 음주번호
    );

-- 예약
CREATE TABLE reservation (
  reservation_no INTEGER      NOT NULL COMMENT '예약번호', -- 예약번호
  store_no       INTEGER      NOT NULL COMMENT '주점번호', -- 주점번호
  date           TIMESTAMP    NOT NULL COMMENT '예약일시', -- 예약일시
  people         INTEGER      NOT NULL COMMENT '인원', -- 인원
  name           VARCHAR(50)  NOT NULL COMMENT '예약자', -- 예약자
  tel            VARCHAR(30)  NOT NULL COMMENT '예약자번호', -- 예약자번호
  request        VARCHAR(255) NULL     COMMENT '요청사항', -- 요청사항
  pay_no         INTEGER      NOT NULL COMMENT '결제승인번호', -- 결제승인번호
  pay_company    VARCHAR(50)  NOT NULL COMMENT '결제카드회사', -- 결제카드회사
  pay_price      INTEGER      NOT NULL COMMENT '결제금액', -- 결제금액
  pay_date       TIMESTAMP    NOT NULL COMMENT '결제일', -- 결제일
  status         VARCHAR(1)   NOT NULL COMMENT '예약상태' -- 예약상태
)
COMMENT '예약';

-- 예약
ALTER TABLE reservation
  ADD CONSTRAINT PK_reservation -- 예약 기본키
    PRIMARY KEY (
      reservation_no -- 예약번호
    );

-- 문의
CREATE TABLE inquiry (
  inq_no      INTEGER      NOT NULL COMMENT '문의번호', -- 문의번호
  mno         INTEGER      NOT NULL COMMENT '회원번호', -- 회원번호
  date        TIMESTAMP    NOT NULL COMMENT '문의일자', -- 문의일자
  type        INTEGER      NOT NULL COMMENT '문의유형', -- 문의유형
  title       VARCHAR(50)  NOT NULL COMMENT '제목', -- 제목
  contents    TEXT         NOT NULL COMMENT '내용', -- 내용
  attach_file VARCHAR(500) NULL     COMMENT '첨부파일', -- 첨부파일
  answer      TEXT         NULL     COMMENT '답변', -- 답변
  answer_date TIMESTAMP    NULL     COMMENT '답변일시' -- 답변일시
)
COMMENT '문의';

-- 문의
ALTER TABLE inquiry
  ADD CONSTRAINT PK_inquiry -- 문의 기본키
    PRIMARY KEY (
      inq_no -- 문의번호
    );

-- 공지사항
CREATE TABLE notice (
  notice_no   INTEGER      NOT NULL COMMENT '공지사항번호', -- 공지사항번호
  member_type VARCHAR(1)   NOT NULL COMMENT '타입', -- 타입
  title       VARCHAR(255) NOT NULL COMMENT '제목', -- 제목
  reg_date    TIMESTAMP    NOT NULL COMMENT '작성일시', -- 작성일시
  update_date TIMESTAMP    NOT NULL COMMENT '수정일시', -- 수정일시
  contents    TEXT         NOT NULL COMMENT '내용', -- 내용
  view_count  INTEGER      NOT NULL COMMENT '조회수' -- 조회수
)
COMMENT '공지사항';

-- 공지사항
ALTER TABLE notice
  ADD CONSTRAINT PK_notice -- 공지사항 기본키
    PRIMARY KEY (
      notice_no -- 공지사항번호
    );

-- 주점태그
CREATE TABLE store_tag (
  tag_no   INTEGER NOT NULL COMMENT '태그번호', -- 태그번호
  store_no INTEGER NOT NULL COMMENT '주점번호' -- 주점번호
)
COMMENT '주점태그';

-- 주점태그
ALTER TABLE store_tag
  ADD CONSTRAINT PK_store_tag -- 주점태그 기본키
    PRIMARY KEY (
      tag_no,   -- 태그번호
      store_no  -- 주점번호
    );

-- 메뉴
CREATE TABLE store_menu (
  store_menu_no INTEGER     NOT NULL COMMENT '메뉴번호', -- 메뉴번호
  store_no      INTEGER     NOT NULL COMMENT '주점번호', -- 주점번호
  name          VARCHAR(50) NOT NULL COMMENT '메뉴명', -- 메뉴명
  price         INTEGER     NOT NULL COMMENT '메뉴가격', -- 메뉴가격
  main_accept   BOOLEAN     NOT NULL COMMENT '대표메뉴여부' -- 대표메뉴여부
)
COMMENT '메뉴';

-- 메뉴
ALTER TABLE store_menu
  ADD CONSTRAINT PK_store_menu -- 메뉴 기본키
    PRIMARY KEY (
      store_menu_no -- 메뉴번호
    );

-- 술
CREATE TABLE alcohol_detail (
  alcohol_detail_no INTEGER      NOT NULL COMMENT '술번호', -- 술번호
  alcohol_type_no   INTEGER      NOT NULL COMMENT '주종번호', -- 주종번호
  name              VARCHAR(50)  NOT NULL COMMENT '상품명', -- 상품명
  degree            FLOAT        NOT NULL COMMENT '도수', -- 도수
  brand             VARCHAR(50)  NULL     COMMENT '브랜드명', -- 브랜드명
  origin            VARCHAR(50)  NULL     COMMENT '원산지', -- 원산지
  volume            INTEGER      NULL     COMMENT '용량', -- 용량
  characteristic    TEXT         NULL     COMMENT '특징', -- 특징
  img               VARCHAR(500) NULL     COMMENT '사진' -- 사진
)
COMMENT '술';

-- 술
ALTER TABLE alcohol_detail
  ADD CONSTRAINT PK_alcohol_detail -- 술 기본키
    PRIMARY KEY (
      alcohol_detail_no -- 술번호
    );

-- 주종
CREATE TABLE alcohol_type (
  alcohol_type_no INTEGER     NOT NULL COMMENT '주종번호', -- 주종번호
  type_name       VARCHAR(50) NOT NULL COMMENT '주종명' -- 주종명
)
COMMENT '주종';

-- 주종
ALTER TABLE alcohol_type
  ADD CONSTRAINT PK_alcohol_type -- 주종 기본키
    PRIMARY KEY (
      alcohol_type_no -- 주종번호
    );

-- 주점유형
CREATE TABLE store_type (
  store_type_no INTEGER     NOT NULL COMMENT '주점유형번호', -- 주점유형번호
  type_name     VARCHAR(50) NOT NULL COMMENT '주점유형명' -- 주점유형명
)
COMMENT '주점유형';

-- 주점유형
ALTER TABLE store_type
  ADD CONSTRAINT PK_store_type -- 주점유형 기본키
    PRIMARY KEY (
      store_type_no -- 주점유형번호
    );

-- 커뮤니티
CREATE TABLE community (
  community_no INTEGER     NOT NULL COMMENT '커뮤니티번호', -- 커뮤니티번호
  title        VARCHAR(50) NOT NULL COMMENT '커뮤니티명' -- 커뮤니티명
)
COMMENT '커뮤니티';

-- 커뮤니티
ALTER TABLE community
  ADD CONSTRAINT PK_community -- 커뮤니티 기본키
    PRIMARY KEY (
      community_no -- 커뮤니티번호
    );

-- 리뷰
CREATE TABLE review (
  reservation_no   INTEGER   NOT NULL COMMENT '예약번호', -- 예약번호
  store_no         INTEGER   NOT NULL COMMENT '주점번호', -- 주점번호
  contents         TEXT      NOT NULL COMMENT '내용', -- 내용
  reg_date         TIMESTAMP NOT NULL COMMENT '게시일', -- 게시일
  score            FLOAT     NOT NULL COMMENT '별점', -- 별점
  comment_contents TEXT      NULL     COMMENT '답변', -- 답변
  comment_reg_date TIMESTAMP NULL     COMMENT '답변일' -- 답변일
)
COMMENT '리뷰';

-- 리뷰
ALTER TABLE review
  ADD CONSTRAINT PK_review -- 리뷰 기본키
    PRIMARY KEY (
      reservation_no -- 예약번호
    );

-- 게시글
CREATE TABLE board (
  board_no     INTEGER     NOT NULL COMMENT '게시글번호', -- 게시글번호
  mno          INTEGER     NOT NULL COMMENT '회원번호', -- 회원번호
  community_no INTEGER     NOT NULL COMMENT '커뮤니티번호', -- 커뮤니티번호
  title        VARCHAR(50) NOT NULL COMMENT '제목', -- 제목
  contents     LONGTEXT    NOT NULL COMMENT '내용', -- 내용
  reg_date     TIMESTAMP   NOT NULL COMMENT '게시일', -- 게시일
  update_date  TIMESTAMP   NOT NULL COMMENT '수정일', -- 수정일
  view_count   INTEGER     NOT NULL COMMENT '조회수' -- 조회수
)
COMMENT '게시글';

-- 게시글
ALTER TABLE board
  ADD CONSTRAINT PK_board -- 게시글 기본키
    PRIMARY KEY (
      board_no -- 게시글번호
    );

-- 신고하기
CREATE TABLE report (
  repo_no   INTEGER    NOT NULL COMMENT '신고하기번호', -- 신고하기번호
  mno       INTEGER    NOT NULL COMMENT '신고자번호', -- 신고자번호
  target_no VARCHAR(1) NOT NULL COMMENT '피신고대상번호', -- 피신고대상번호
  type      VARCHAR(1) NOT NULL COMMENT '신고유형', -- 신고유형
  date      TIMESTAMP  NOT NULL COMMENT '신고일자', -- 신고일자
  contents  TEXT       NULL     COMMENT '신고내용', -- 신고내용
  status    BOOLEAN    NOT NULL COMMENT '처리상태' -- 처리상태
)
COMMENT '신고하기';

-- 신고하기
ALTER TABLE report
  ADD CONSTRAINT PK_report -- 신고하기 기본키
    PRIMARY KEY (
      repo_no -- 신고하기번호
    );

-- 모임게시판
CREATE TABLE party_board (
  party_board_no INTEGER   NOT NULL COMMENT '모임게시판번호', -- 모임게시판번호
  party_no       INTEGER   NOT NULL COMMENT '모임번호', -- 모임번호
  mno            INTEGER   NOT NULL COMMENT '회원번호', -- 회원번호
  board_reg_date TIMESTAMP NOT NULL COMMENT '게시판등록일', -- 게시판등록일
  message        TEXT      NULL     COMMENT '메시지', -- 메시지
  message_time   TIMESTAMP NULL     COMMENT '메시지시간', -- 메시지시간
  message_status BOOLEAN   NOT NULL COMMENT '상태' -- 상태
)
COMMENT '모임게시판';

-- 모임게시판
ALTER TABLE party_board
  ADD CONSTRAINT PK_party_board -- 모임게시판 기본키
    PRIMARY KEY (
      party_board_no -- 모임게시판번호
    );

-- 참석자
CREATE TABLE party_participant (
  party_no           INTEGER    NOT NULL COMMENT '모임번호', -- 모임번호
  mno                INTEGER    NOT NULL COMMENT '회원번호', -- 회원번호
  participant_status VARCHAR(1) NOT NULL COMMENT '상태' -- 상태
)
COMMENT '참석자';

-- 참석자
ALTER TABLE party_participant
  ADD CONSTRAINT PK_party_participant -- 참석자 기본키
    PRIMARY KEY (
      party_no, -- 모임번호
      mno       -- 회원번호
    );

-- 모임
CREATE TABLE party (
  party_no      INTEGER     NOT NULL COMMENT '모임번호', -- 모임번호
  mno           INTEGER     NOT NULL COMMENT '주최자번호', -- 주최자번호
  store_no      INTEGER     NULL     COMMENT '주점번호', -- 주점번호
  title         VARCHAR(50) NOT NULL COMMENT '제목', -- 제목
  contents      LONGTEXT    NOT NULL COMMENT '내용', -- 내용
  party_fee     INTEGER     NOT NULL COMMENT '회비', -- 회비
  meeting_date  TIMESTAMP   NOT NULL COMMENT '모임일시', -- 모임일시
  max_member    INTEGER     NOT NULL COMMENT '최대인원', -- 최대인원
  alcohol_type  VARCHAR(50) NOT NULL COMMENT '주종', -- 주종
  alcohol_limit INTEGER     NOT NULL COMMENT '주량', -- 주량
  view_count    TIMESTAMP   NOT NULL COMMENT '조회수', -- 조회수
  reg_date      TIMESTAMP   NOT NULL COMMENT '등록일', -- 등록일
  update_date   TIMESTAMP   NOT NULL COMMENT '수정일' -- 수정일
)
COMMENT '모임';

-- 모임
ALTER TABLE party
  ADD CONSTRAINT PK_party -- 모임 기본키
    PRIMARY KEY (
      party_no -- 모임번호
    );

-- SNS계정
CREATE TABLE sns_account (
  mno    INTEGER     NOT NULL COMMENT '회원번호', -- 회원번호
  sns_no INTEGER     NOT NULL COMMENT 'SNS번호', -- SNS번호
  email  VARCHAR(40) NULL     COMMENT '이메일' -- 이메일
)
COMMENT 'SNS계정';

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
  sns_no INTEGER NOT NULL COMMENT 'SNS번호' -- SNS번호
)
COMMENT 'SNS';

-- SNS
ALTER TABLE sns
  ADD CONSTRAINT PK_sns -- SNS 기본키
    PRIMARY KEY (
      sns_no -- SNS번호
    );

-- 태그
CREATE TABLE tag (
  tag_no INTEGER     NOT NULL COMMENT '태그번호', -- 태그번호
  name   VARCHAR(50) NOT NULL COMMENT '태그명' -- 태그명
)
COMMENT '태그';

-- 태그
ALTER TABLE tag
  ADD CONSTRAINT PK_tag -- 태그 기본키
    PRIMARY KEY (
      tag_no -- 태그번호
    );

-- 주점판매술
CREATE TABLE alcohol_sales (
  store_no          INTEGER NOT NULL COMMENT '주점번호', -- 주점번호
  alcohol_detail_no INTEGER NOT NULL COMMENT '술번호', -- 술번호
  price             INTEGER NOT NULL COMMENT '가격' -- 가격
)
COMMENT '주점판매술';

-- 주점판매술
ALTER TABLE alcohol_sales
  ADD CONSTRAINT PK_alcohol_sales -- 주점판매술 기본키
    PRIMARY KEY (
      store_no,          -- 주점번호
      alcohol_detail_no  -- 술번호
    );

-- 주점소속유형
CREATE TABLE store_section_type (
  store_type_no INTEGER NOT NULL COMMENT '주점유형번호', -- 주점유형번호
  store_no      INTEGER NOT NULL COMMENT '주점번호' -- 주점번호
)
COMMENT '주점소속유형';

-- 주점소속유형
ALTER TABLE store_section_type
  ADD CONSTRAINT PK_store_section_type -- 주점소속유형 기본키
    PRIMARY KEY (
      store_type_no, -- 주점유형번호
      store_no       -- 주점번호
    );

-- 댓글좋아요
CREATE TABLE like (
  mno              INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
  board_commnet_no INTEGER NOT NULL COMMENT '게시글댓글번호' -- 게시글댓글번호
)
COMMENT '댓글좋아요';

-- 댓글좋아요
ALTER TABLE like
  ADD CONSTRAINT PK_like -- 댓글좋아요 기본키
    PRIMARY KEY (
      mno,              -- 회원번호
      board_commnet_no  -- 게시글댓글번호
    );

-- 게시글찜
CREATE TABLE board_select (
  mno      INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
  board_no INTEGER NOT NULL COMMENT '게시글번호' -- 게시글번호
)
COMMENT '게시글찜';

-- 게시글찜
ALTER TABLE board_select
  ADD CONSTRAINT PK_board_select -- 게시글찜 기본키
    PRIMARY KEY (
      mno,      -- 회원번호
      board_no  -- 게시글번호
    );

-- 주점찜
CREATE TABLE store_select (
  store_no INTEGER NOT NULL COMMENT '주점번호', -- 주점번호
  mno      INTEGER NOT NULL COMMENT '회원번호' -- 회원번호
)
COMMENT '주점찜';

-- 주점찜
ALTER TABLE store_select
  ADD CONSTRAINT PK_store_select -- 주점찜 기본키
    PRIMARY KEY (
      store_no, -- 주점번호
      mno       -- 회원번호
    );

-- 모임찜
CREATE TABLE party_board_select (
  mno            INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
  party_board_no INTEGER NOT NULL COMMENT '모임게시판번호' -- 모임게시판번호
)
COMMENT '모임찜';

-- 모임찜
ALTER TABLE party_board_select
  ADD CONSTRAINT PK_party_board_select -- 모임찜 기본키
    PRIMARY KEY (
      mno,            -- 회원번호
      party_board_no  -- 모임게시판번호
    );

-- 게시글댓글
CREATE TABLE board_comment (
  board_commnet_no INTEGER   NOT NULL COMMENT '게시글댓글번호', -- 게시글댓글번호
  mno              INTEGER   NOT NULL COMMENT '회원번호', -- 회원번호
  comment_contents TEXT      NOT NULL COMMENT '내용', -- 내용
  comment_date     TIMESTAMP NOT NULL COMMENT '작성일', -- 작성일
  update_date      TIMESTAMP NOT NULL COMMENT '수정일' -- 수정일
)
COMMENT '게시글댓글';

-- 게시글댓글
ALTER TABLE board_comment
  ADD CONSTRAINT PK_board_comment -- 게시글댓글 기본키
    PRIMARY KEY (
      board_commnet_no -- 게시글댓글번호
    );

-- 모임회원평가
CREATE TABLE party_member_evaluation (
  party_no INTEGER NOT NULL COMMENT '모임번호', -- 모임번호
  mno      INTEGER NOT NULL COMMENT '평가자번호', -- 평가자번호
  mno2     INTEGER NOT NULL COMMENT '피평가번호', -- 피평가번호
  score    FLOAT   NOT NULL COMMENT '별점' -- 별점
)
COMMENT '모임회원평가';

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
  party_no INTEGER NOT NULL COMMENT '모임번호', -- 모임번호
  mno      INTEGER NOT NULL COMMENT '회원번호', -- 회원번호
  score    FLOAT   NOT NULL COMMENT '별점' -- 별점
)
COMMENT '모임주점평가';

-- 모임주점평가
ALTER TABLE party_store_evaluation
  ADD CONSTRAINT PK_party_store_evaluation -- 모임주점평가 기본키
    PRIMARY KEY (
      party_no, -- 모임번호
      mno       -- 회원번호
    );

-- 사장님회원
CREATE TABLE owner_member (
  mno         INTEGER      NOT NULL COMMENT '회원번호', -- 회원번호
  store_no    INTEGER      NOT NULL COMMENT '주점번호', -- 주점번호
  img         VARCHAR(500) NOT NULL COMMENT '프로필사진', -- 프로필사진
  nickname    VARCHAR(50)  NOT NULL COMMENT '사장님닉네임', -- 사장님닉네임
  reg_date    TIMESTAMP    NOT NULL COMMENT '등록일', -- 등록일
  update_date TIMESTAMP    NOT NULL COMMENT '수정일' -- 수정일
)
COMMENT '사장님회원';

-- 사장님회원
ALTER TABLE owner_member
  ADD CONSTRAINT PK_owner_member -- 사장님회원 기본키
    PRIMARY KEY (
      mno -- 회원번호
    );

-- 리뷰사진
CREATE TABLE review_img (
  review_img_no  INTEGER      NOT NULL COMMENT '사진번호', -- 사진번호
  reservation_no INTEGER      NOT NULL COMMENT '예약번호', -- 예약번호
  img            VARCHAR(500) NOT NULL COMMENT '사진' -- 사진
)
COMMENT '리뷰사진';

-- 리뷰사진
ALTER TABLE review_img
  ADD CONSTRAINT PK_review_img -- 리뷰사진 기본키
    PRIMARY KEY (
      review_img_no -- 사진번호
    );

-- 메뉴사진
CREATE TABLE menu_img (
  menu_img_no   INTEGER      NOT NULL COMMENT '사진번호', -- 사진번호
  store_menu_no INTEGER      NOT NULL COMMENT '메뉴번호', -- 메뉴번호
  img           VARCHAR(500) NOT NULL COMMENT '사진' -- 사진
)
COMMENT '메뉴사진';

-- 메뉴사진
ALTER TABLE menu_img
  ADD CONSTRAINT PK_menu_img -- 메뉴사진 기본키
    PRIMARY KEY (
      menu_img_no -- 사진번호
    );

-- 주점사진
CREATE TABLE store_img (
  store_img_no INTEGER      NOT NULL COMMENT '사진번호', -- 사진번호
  store_no     INTEGER      NOT NULL COMMENT '주점번호', -- 주점번호
  img          VARCHAR(500) NOT NULL COMMENT '사진' -- 사진
)
COMMENT '주점사진';

-- 주점사진
ALTER TABLE store_img
  ADD CONSTRAINT PK_store_img -- 주점사진 기본키
    PRIMARY KEY (
      store_img_no -- 사진번호
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

-- 리뷰
ALTER TABLE review
  ADD CONSTRAINT FK_store_TO_review -- 주점 -> 리뷰
    FOREIGN KEY (
      store_no -- 주점번호
    )
    REFERENCES store ( -- 주점
      store_no -- 주점번호
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

-- 게시글찜
ALTER TABLE board_select
  ADD CONSTRAINT FK_board_TO_board_select -- 게시글 -> 게시글찜
    FOREIGN KEY (
      board_no -- 게시글번호
    )
    REFERENCES board ( -- 게시글
      board_no -- 게시글번호
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

-- 사장님회원
ALTER TABLE owner_member
  ADD CONSTRAINT FK_store_TO_owner_member -- 주점 -> 사장님회원
    FOREIGN KEY (
      store_no -- 주점번호
    )
    REFERENCES store ( -- 주점
      store_no -- 주점번호
    );

-- 사장님회원
ALTER TABLE owner_member
  ADD CONSTRAINT FK_member_TO_owner_member -- 회원 -> 사장님회원
    FOREIGN KEY (
      mno -- 회원번호
    )
    REFERENCES member ( -- 회원
      mno -- 회원번호
    );

-- 리뷰사진
ALTER TABLE review_img
  ADD CONSTRAINT FK_review_TO_review_img -- 리뷰 -> 리뷰사진
    FOREIGN KEY (
      reservation_no -- 예약번호
    )
    REFERENCES review ( -- 리뷰
      reservation_no -- 예약번호
    );

-- 메뉴사진
ALTER TABLE menu_img
  ADD CONSTRAINT FK_store_menu_TO_menu_img -- 메뉴 -> 메뉴사진
    FOREIGN KEY (
      store_menu_no -- 메뉴번호
    )
    REFERENCES store_menu ( -- 메뉴
      store_menu_no -- 메뉴번호
    );

-- 주점사진
ALTER TABLE store_img
  ADD CONSTRAINT FK_store_TO_store_img -- 주점 -> 주점사진
    FOREIGN KEY (
      store_no -- 주점번호
    )
    REFERENCES store ( -- 주점
      store_no -- 주점번호
    );