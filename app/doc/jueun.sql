-- 예약하기
insert into reservation (
  store_no,
  people,
  name,
  tel,
  request,
  pay_no,
  pay_company,
  pay_price,
  status
)
values(
  1,
  4,
  '김주은',
  '010-1111-2222',
  '4명이서 갑니다~ 넓은 자리로 부탁드려요',
  '1293018201',
  '국민카드',
  20000,
  '완'
);

insert into reservation (
  store_no,
  people,
  name,
  tel,
  request,
  pay_no,
  pay_company,
  pay_price,
  status
)
values(
  2,
  6,
  '고길동',
  '010-3333-4444',
  '누룽지탕 미리 주문할게요~',
  '39657241',
  '신한카드',
  30000,
  '완'
);

insert into reservation (
  store_no,
  people,
  name,
  tel,
  request,
  pay_no,
  pay_company,
  pay_price,
  status
)
values(
  3,
  1,
  '홍길동',
  '010-1084-1028',
  '조용한 자리로 예약 부탁합니다.',
  '0693729219',
  '신한카드',
  20000,
  '완'
);

insert into reservation (
  store_no,
  people,
  name,
  tel,
  request,
  pay_no,
  pay_company,
  pay_price,
  status
)
values(
  4,
  3,
  '둘리',
  '010-8907-3542',
  '내용없음',
  '239804347',
  '국민카드',
  15000,
  '완'
);

insert into reservation (
  store_no,
  people,
  name,
  tel,
  request,
  pay_no,
  pay_company,
  pay_price,
  status
)
values(
  5,
  1,
  '지코',
  '010-3948-2243',
  '안녕하세요 지코입니다~ kozkoz~',
  '129303491',
  '신한카드',
  5000,
  '완'
);

-- 주종

insert into alcohol_type (
  type_name
)
values (
  '소주'
);

insert into alcohol_type (
  type_name
)
values (
  '맥주'
);

insert into alcohol_type (
  type_name
)
values (
  '와인'
);

insert into alcohol_type (
  type_name
)
values (
  '막걸리'
);

insert into alcohol_type (
  type_name
)
values (
  '양주'
);

insert into alcohol_type (
  type_name
)
values (
  '사케'
);

insert into alcohol_type (
  type_name
)
values (
  '전통주'
);

insert into alcohol_type (
  type_name
)
values (
  '기타'
);

-- 주점판매술
insert into alcohol_sales(
  store_no,
  alcohol_detail_no,
  price
)
values(
  1,
  1,
  4500
);

insert into alcohol_sales(
  store_no,
  alcohol_detail_no,
  price
)
values(
  2,
  3,
  5000
);

insert into alcohol_sales(
  store_no,
  alcohol_detail_no,
  price
)
values(
  3,
  1,
  5500
);

insert into alcohol_sales(
  store_no,
  alcohol_detail_no,
  price
)
values(
  4,
  6,
  8000
);

insert into alcohol_sales(
  store_no,
  alcohol_detail_no,
  price
)
values(
  5,
  3,
  80000
);

-- 주점사진
insert into store_img(
  store_no,
  img
)
values(
  1,
  'wjdoq/dqjow/dqho/dd.img'
);

insert into store_img(
  store_no,
  img
)
values(
  1,
  'wjdhj/dqdqwhbo/dqwdhgiouq/dd.img'
);

insert into store_img(
  store_no,
  img
)
values(
  2,
  'qqq/daaw/dzz/dhbciqeg.img'
);

insert into store_img(
  store_no,
  img
)
values(
  3,
  'haha/hohoheheo/zlzlzl.img'
);

insert into store_img(
  store_no,
  img
)
values(
  4,
  'bb/daa/qwdnjk/pp.img'
);

-- 게시글댓글
insert into board_comment (
  mno,
  board_no,
  comment_contents
)
values (
  1,
  1,
  '공감합니다 ~ 거기 술 안주 다 맛있어요~'
);

insert into board_comment (
  mno,
  board_no,
  comment_contents
)
values (
  2,
  1,
  '저도 가봤는데 정말괜찮습니다~'
);

insert into board_comment (
  mno,
  board_no,
  comment_contents
)
values (
  3,
  2,
  '제가 가봤는데 여기 술집 위생상태 완전 별로에요 가지마세요~'
);

insert into board_comment (
  mno,
  board_no,
  comment_contents
)
values (
  4,
  2,
  '저는 괜찮던데 ?? 엄청 더럽진 않아요'
);

insert into board_comment (
  mno,
  board_no,
  comment_contents
)
values (
  5,
  3,
  '여기 분위기 좋아요~ 커플끼리 갈때 추천~'
);


-- 모임게시판
insert into party_board (
  party_no,
  mno,
  board_reg_date,
  message,
  message_status
)
values (
  1,
  1,
  '안녕하세요~',
  true
);

insert into party_board (
  party_no,
  mno,
  board_reg_date,
  message,
  message_status
)
values (
  1,
  2,
  '안녕하세요~ 잘부탁드려요~',
  true
);

insert into party_board (
  party_no,
  mno,
  board_reg_date,
  message,
  message_status
)
values (
  1,
  3,
  '저도 잘부탁드려요~',
  true
);

insert into party_board (
  party_no,
  mno,
  board_reg_date,
  message,
  message_status
)
values (
  1,
  2,
  '다들 술 잘마시나요~?',
  true
);

insert into party_board (
  party_no,
  mno,
  board_reg_date,
  message,
  message_status
)
values (
  1,
  3,
  '저는 기가막히게 먹어요~',
  true
);

insert into party_board (
  party_no,
  mno,
  board_reg_date,
  message,
  message_status
)
values (
  1,
  1,
  '저는 잘 못마셔요..ㅎㅎ',
  true
);

-- 모임댓글
insert into party_comment (
  mno,
  party_no,
  party_comment_contents
)
values (
  1,
  1,
  '저도한잔 하고싶습니다'
);

insert into party_comment (
  mno,
  party_no,
  party_comment_contents
)
values (
  2,
  1,
  '저도 들어가고 싶어요~'
);

insert into party_comment (
  mno,
  party_no,
  party_comment_contents
)
values (
  3,
  2,
  '저 술 잘마십니다~'
);

insert into party_comment (
  mno,
  party_no,
  party_comment_contents
)
values (
  4,
  2,
  '여기 방장 매너 좋아요~'
);

insert into party_comment (
  mno,
  party_no,
  party_comment_contents
)
values (
  5,
  2,
  '난 별로던데 ..???'
);
