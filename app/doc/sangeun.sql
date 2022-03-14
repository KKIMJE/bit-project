-- 회원
insert into member(
  email,
  pwd,
  name,
  tel,
  social_accept,
  gender,
  birth,
  self_introduction,
  m_img,
  nickname,
  score,
  block_accept,
  member_status
)
values(
  'hse1@test.com',
  'gkstkddms!3',
  '한상은',
   '010-6518-7861',
   1,
   1,
   961202,
   '안녕하세요 술 좋아해요',
   'bit/yasulmukja/hse.img',
   '개코',
   5,
   0,
   'g'
   );
   
insert into member(
  email,
  pwd,
  name,
  tel,
  social_accept,
  gender,
  birth,
  self_introduction,
  m_img,
  nickname,
  score,
  block_accept,
  member_status
)
values(
  'hse2@test.com',
  'gkstkddms!4',
  '강기영',
   '010-6518-7862',
   0,
   0,
   870103,
   '안녕하세요 배우 강기영입니다',
   'cute/okok.img',
   '고교처세왕',
   4.5,
   0,
   'g'
   );
   
insert into member(
  email,
  pwd,
  name,
  tel,
  social_accept,
  gender,
  birth,
  self_introduction,
  m_img,
  nickname,
  score,
  block_accept,
  member_status
)
values(
  'hse3@test.com',
  'gkstkddms!5',
  '손흥민',
   '010-6518-7863',
   1,
   0,
   921017,
   '두유노 손흥민?',
   'bit/yasulmukja/hse.img',
   '쏘니',
   4,
   1,
   'g'
   );
   
insert into member(
  email,
  pwd,
  name,
  tel,
  social_accept,
  gender,
  birth,
  self_introduction,
  m_img,
  nickname,
  score,
  block_accept,
  member_status
)
values(
  'hse4@test.com',
  'gkstkddms!6',
  '엄진영',
   '010-6518-7864',
   1,
   0,
   701221,
   '안녕하세요 술 좋아해요',
   'bit/yasulmukja/hse.img',
   '엄블리',
   5,
   0,
   'g'
   );
   
insert into member(
  email,
  pwd,
  name,
  tel,
  social_accept,
  gender,
  birth,
  self_introduction,
  m_img,
  nickname,
  score,
  block_accept,
  member_status
)
values(
  'hse5@test.com',
  'gkstkddms!7',
  '김흥국',
   '010-6518-7865',
   1,
   0,
   600403,
   '으아 술 먹고 싶다',
   'bit/yasulmukja/hse.img',
   '호랑나비',
   1,
   1,
   'g'
   );
   
   -- 주점태그
insert into store_tag(
  tag_no,
  store_no
)
values(
  1,
  1
   );
   
insert into store_tag(
  tag_no,
  store_no
)
values(
  2,
  2
   );
   
insert into store_tag(
  tag_no,
  store_no
)
values(
  3,
  3
   );
   
insert into store_tag(
  tag_no,
  store_no
)
values(
  4,
  4
   );
   
insert into store_tag(
  tag_no,
  store_no
)
values(
  5,
  5
   );
   
-- 리뷰

insert into review(
  reservation_no,
  store_no,
  contents,
  score,
  comment_contents,
  comment_reg_date
)
values(
  1,
  1,
  '화장실 더러워요',
   0.5,
   '청소할게요',
   '2022-03-14'
   );
   
   insert into review(
  reservation_no,
  store_no,
  contents,
  score
)
values(
  2,
  2,
  '우웩',
   2
   );
   
insert into review(
  reservation_no,
  store_no,
  contents,
  score
)
values(
  3,
  3,
  '구웃',
   4
   );
   
insert into review(
  reservation_no,
  store_no,
  contents,
  score,
  comment_contents,
  comment_reg_date
)
values(
  4,
  4,
  '사장님 서비스 감사합니다~',
   5,
   '앗 고객님 감사합니다',
   '2022-03-16'
   );
   
insert into review(
  reservation_no,
  store_no,
  contents,
  score,
  comment_contents,
  comment_reg_date
)
values(
  5,
  5,
  '회식하기 짱짱',
   4.5,
   '다음에도 꼭 와주세요. 잘해드리겠습니다~',
   '2022-03-15'
   );
   
-- SNS계정
insert into sns_account(
  mno,
  sns_no
)
values(
  1,
  1
   );
   
insert into sns_account(
  mno,
  sns_no
)
values(
  2,
  2
   );
   
insert into sns_account(
  mno,
  sns_no
)
values(
  3,
  3
   );
   
   insert into sns_account(
  mno,
  sns_no
)
values(
  4,
  4
   );
   
insert into sns_account(
  mno,
  sns_no
)
values(
  5,
  5
   );
  
-- 게시글찜
insert into board_select(
  mno,
  board_no
)
values(
  1,
  1
   );
   
   insert into board_select(
  mno,
  board_no
)
values(
  2,
  2
   );
   
   insert into board_select(
  mno,
  board_no
)
values(
  3,
  3
   );
   
   insert into board_select(
  mno,
  board_no
)
values(
  4,
  4
   );
   
   insert into board_select(
  mno,
  board_no
)
values(
  5,
  5
   );
   

-- 사장님회원