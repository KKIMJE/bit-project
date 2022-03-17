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
   0
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
   0
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
   0
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
   0
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
   0
   );
   
   -- 주점

insert into store(
business_registration_no,
business_registration,
name,
address,
tel,
hour,
introduction,
evaluation_score,
reservation_accept,
max_member,
lat,
lng,
place_id,
oper,
status
)
values(
1,
'dfgdsdddssas',
'Ella',
'652, Gangnam-daero, Gangnam-gu, Seoul, Republic of Korea',
'02-260-0817',
'11:11:11',
'우아하고 섬세한 주점입니다.',
4.5,
true,
35,
38.0,
38.0,
'tissue1',
true,
true
);

insert into store(
business_registration_no,
business_registration,
name,
address,
tel,
hour,
evaluation_score, 
reservation_accept, 
max_member, 
lat, 
lng,
place_id,
oper,
status
)
values(
2,
'asqweeeed',
'what-neng-ga',
'752, Suwon-daero, yungtong-gu, Suwon, Republic of Korea',
'031-260-0817',
'22:59:11',
4.0,
true,
50,
37.0,
37.0,
'tissue2',
true,
true
);

insert into store(
business_registration_no,
business_registration,
name,
address,
tel,
hour,
introduction,
reservation_accept,
max_member,
lat,
lng,
place_id,
oper,
status
)
values(
3,
'qwerqwerqwer',
'Mozilla',
'852, Gang-gang-daero, Gangnam-gu, Seoul, Republic of Korea',
'02-261-0817',
'22:59:11',
'삐까뻔쩍 화려한 주점입니다.',
true,
20,
36.0,
36.0,
'tissue3',
true,
true
);

insert into store(
business_registration_no,
business_registration,
name,
address,
tel,
hour,
introduction,
evaluation_score,
reservation_accept,
lat,
lng,
place_id,
oper,
status
)
values(
4,
'mnmnmnnnnmnm',
'GangOfFour',
'952, Sapung-daero, Seocho-gu, Seoul, Republic of Korea',
'02-260-0817',
'22:59:11',
'어둡고 위험한 주점입니다.',
2.5,
false,
35.0,
35.0,
'tissue4',
true,
true
);

insert into store(
business_registration_no,
business_registration,
name,
address,
tel,
hour,
introduction,
evaluation_score,
reservation_accept,
max_member,
lat,
lng,
place_id,
oper,
status
)
values(
5,
'ilillliililililili',
'ho',
'1502, Gangnam-daero, Gangnam-gu, Seoul, Republic of Korea',
'02-260-0817',
'22:59:11',
'호호하하 주점입니다.',
5.0,
true,
60,
33.0,
33.0,
'tissue5',
true,
true
);

-- 사장님회원

insert into owner_member(
  mno,
  store_no,
  img,
  nickname
)
values(
   1,
   2,
   'yasulmukja/store/ceo.img',
   '사장님'
   );
   
insert into owner_member(
  mno,
  store_no,
  img,
  nickname
)
values(
   2,
   1,
   'yasulmukja/store/ceo.img',
   '사장님'
   );
   
insert into owner_member(
  mno,
  store_no,
  img,
  nickname
)
values(
   3,
   5,
   'yasulmukja/store/ceo.img',
   '사장님'
   );
   
insert into owner_member(
  mno,
  store_no,
  img,
  nickname
)
values(
   4,
   3,
   'yasulmukja/store/ceo.img',
   '사장님'
   );
   
insert into owner_member(
  mno,
  store_no,
  img,
  nickname
)
values(
   5,
   4,
   'yasulmukja/store/ceo.img',
   '사장님'
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

--술
insert into alcohol_detail(alcohol_type_no,name,degree,brand,origin,volume,characteristic,img)
values(1,'참이슬',16.9,'HiteJinro','Korea',360,'한국 대표 술','sjdfhaslkfhd,dsajfklh');
insert into alcohol_detail(alcohol_type_no,name,degree,brand,origin,volume,characteristic,img)
values(2,'맥주',4.6,'HiteJinro','Korea',500,'테라브랜드','safdfaf/sfdasa/sfada');
insert into alcohol_detail(alcohol_type_no,name,degree,brand,origin,volume,characteristic,img)
values(4,'느린마을막걸리',6.0,'느린마을','Korea',360,'ㅎㅎㅎㅎㅎ','sjdfhaslkfhd,dsajfklh');
insert into alcohol_detail(alcohol_type_no,name,degree,brand,origin,volume,characteristic,img)
values(5,'프랑스와인',13.5,'etcsd','Korea',360,'프랑스에서 숙성함','sjdfhaslkfhd/afsd');
insert into alcohol_detail(alcohol_type_no,name,degree,brand,origin,volume,characteristic,img)
values(7,'처음처럼',16.5,'lotte','Korea',360,'ㅇㅇㅇㅇㅇㅇ','sjdfhaslkfhd/afsd');

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
  4,
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

-- sns

insert into SNS(
sns_no
)
values(
1
);

insert into SNS(
sns_no
)
values(
2
);

insert into SNS(
sns_no
)
values(
3
);

insert into SNS(
sns_no
)
values(
4
);

insert into SNS(
sns_no
)
values(
5
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
   
   /* 커뮤니티 */
insert into community(
community_no,
title
) values(
1,
'우리지금만나'
);

insert into community(
community_no,
title
) values(
2,
'술집추천'
);

insert into community(
community_no,
title
) values(
3,
'분실실종센터'
);

insert into community(
community_no,
title
) values(
4,
'일상'
);

insert into community(
community_no,
title
) values(
5,
'사건사고'
);

insert into community(
community_no,
title
) values(
6,
'술게임'
);

insert into community(
community_no,
title
) values(
7,
'기타'
);

-- 게시판

insert into board(
mno,
community_no,
title,
contents,
view_count
)
values(
1,
1,
'음주롤할사람',
'새벽3시부터 롤할사람 댓글달아라',
451
);

insert into board(
mno,
community_no,
title,
contents,
view_count
)
values(
1,
2,
'벚꽃보러 어디로갈까',
'여의도, 여의도밖에 모르겠네',
999
);

insert into board(
mno,
community_no,
title,
contents,
view_count
)
values(
1,
3,
'양꼬치와 칭따오',
'연남동에서 먹을사람',
111
);

insert into board(
mno,
community_no,
title,
contents,
view_count
)
values(
1,
4,
'여름에는 제주도지',
'바닷가 드라이브 좋지',
777
);

insert into board(
mno,
community_no,
title,
contents,
view_count
)
values(
1,
5,
'멕시코에서 왔슴니다',
'타코??',
8
);

--신고하기
insert into report(mno,target_no,type,contents,status)
values(1,'우','회','신고해요 여기',true);
insert into report(mno,target_no,type,contents,status)
values(2,'우','게','신고합니당',true);
insert into report(mno,target_no,type,contents,status)
values(3,'우','주','여기좀읽어주세요',false);
insert into report(mno,target_no,type,contents,status)
values(4,'우','회','확인부탁드립니다',false);
insert into report(mno,target_no,type,contents,status)
values(5,'우','회','후후후후후',true);

/*  문의  */
insert into inquiry(
mno,
type,
title,
contents,
attach_file,
answer
) values(
1,
1,
'문의글 올립니다.',
'궁금합니다.',
'askheufhiasehihaskuehfkuashefukshkushefk12412',
'대답입니다.'
);

insert into inquiry(
mno,
type,
title,
contents,
attach_file,
answer
) values(
2,
1,
'문의글을 다시 올립니다.',
'궁금합니다!!!.',
'askheufhiasehihasasefasef11kuehfkuashefukshkushefk12412',
'대답입니다. 대답입니다.'
);

insert into inquiry(
mno,
type,
title,
contents,
attach_file,
answer
) values(
3,
2,
'문의글 문의글 문의글',
'궁금합니다!!!????????',
'askheufhiasehihasasefasef11kuehfkuashefukshkushefk12412',
'대답입니다. 대답입니다. 대답입니다.'
);

insert into inquiry(
mno,
type,
title,
contents,
attach_file,
answer
) values(
4,
2,
'문의글 문의글 문의글',
'궁금합니다!!!????????',
'askheufhiasehihasasefasef11kuehfkuashefukshkushefk12412',
'대답입니다. 대답입니다. 대답입니다.'
);

insert into inquiry(
mno,
type,
title,
contents,
attach_file,
answer
) values(
5,
2,
'문의글 문의글 문의글',
'궁금합니다!!!????????',
'askheufhiasehihasasefasef11kuehfkuashefukshkushefk12412',
'대답입니다. 대답입니다. 대답입니다.'
);

insert into inquiry(
mno,
type,
title,
contents,
attach_file,
answer
) values(
6,
2,
'이용방법 설명 부탁드립니다.',
'이용방법이 궁금해요 알려주세요.',
'askheufhiasehihasasefaseserfseff11kuehfkuashefukshkushefk12412',
'이용방법이 어렵지 않습니다. 한번 이용해보세요'
);

insert into inquiry(
mno,
type,
title,
contents,
attach_file
) values(
7,
2,
'문의글 문의글 문의글 문의글',
'궁금합니다!!!????????@@@@',
'askheufhiasehihasasefasef11kuehfkuashefukshkushefk12412'
);

--음주내역
insert into alcohol_management(drink_no,mno,amount,type,level)
values(1,1,'5bottles','와인','low');
insert into alcohol_management(drink_no,mno,amount,type,level)
values(2,1,'30bottles','소주','high');
insert into alcohol_management(drink_no,mno,amount,type,level)
values(3,5,'24bottles', '맥주','moderate');
insert into alcohol_management(drink_no,mno,amount,type,level)
values(4,3,'7bottles', '사케', 'high');
insert into alcohol_management(drink_no,mno,amount,type,level)
values(5,4,'48bottles', '막걸리', 'high');

-- 공지사항


insert into notice(
    member_type,
    title,
    contents,
    view_count
)
values(
    '일',
    '중요공지입니다',
    '서로 매너를 지킵시다',
    122
);

insert into notice(
    member_type,
    title,
    contents,
    view_count
)
values(
    '일',
    '건전한 야술먹자 회원이됩시다',
    '수상한 사람 발견시 즉시 연락바랍니다',
    223
);

insert into notice(
    member_type,
    title,
    contents,
    view_count
)
values(
    '사',
    '더치트 사이트 안내',
    '사기범죄를 막을려고 사이트 링크를 걸어뒀습니다',
    4342
);

insert into notice(
    member_type,
    title,
    contents,
    view_count
)
values(
    '일',
    '알려드립니다',
    '당사에서는 회원들간의 분쟁, 논란에 대해서는 책임지지 않습니다',
    2213
);

insert into notice(
    member_type,
    title,
    contents,
    view_count
)
values(
    '일',
    '지나친 주류는 독입니다',
    '회원 스스로 조절하시기 바랍니다',
    4454
);


/* 모임 */
insert into party(
mno,
store_no,
title,
contents,
party_fee,
meeting_date,
max_member,
alcohol_type,
alcohol_limit,
view_count
) values(
1,
1,
'외롭다...ㅠㅠ같이 술 드실분?',
'오늘밤 11시에 신논현 역에서...',
20000,
'2022-02-21',
6,
'소주',
5,
3
);

insert into party(
mno,
store_no,
title,
contents,
party_fee,
meeting_date,
max_member,
alcohol_type,
alcohol_limit,
view_count
) values(
3,
2,
'친목모임하실분',
'친목모임하실분',
20000,
'2022-03-22',
6,
'맥주',
11,
4
);

insert into party(
mno,
store_no,
title,
contents,
party_fee,
meeting_date,
max_member,
alcohol_type,
alcohol_limit,
view_count
) values(
4,
3,
'친목',
'와인마실분',
20000,
'2022-03-22',
6,
'와인',
11,
68
);

insert into party(
mno,
store_no,
title,
contents,
party_fee,
meeting_date,
max_member,
alcohol_type,
alcohol_limit,
view_count
) values(
5,
4,
'산할아버지',
'구름모자썼네',
30000,
'2022-03-22',
6,
'막걸리',
11,
45
);

insert into party(
mno,
store_no,
title,
contents,
party_fee,
meeting_date,
max_member,
alcohol_type,
alcohol_limit,
view_count
) values(
2,
5,
'안주는 껍데기',
'껍데기랑 소주먹을분',
30000,
'2022-03-23',
6,
'소주',
11,
34
);

-- 모임댓글
insert into party_comment (
  party_comment_no,
  mno,
  party_no,
  party_comment_contents
)
values (
  1,
  1,
  1,
  '저도한잔 하고싶습니다'
);

insert into party_comment (
  party_comment_no,
  mno,
  party_no,
  party_comment_contents
)
values (
  2,
  3,
  1,
  '저도 들어가고 싶어요~'
);

insert into party_comment (
  party_comment_no,
  mno,
  party_no,
  party_comment_contents
)
values (
  3,
  3,
  5,
  '저 술 잘마십니다~'
);

insert into party_comment (
  party_comment_no,
  mno,
  party_no,
  party_comment_contents
)
values (
  4,
  4,
  5,
  '여기 방장 매너 좋아요~'
);

insert into party_comment (
  party_comment_no,
  mno,
  party_no,
  party_comment_contents
)
values (
  5,
  5,
  5,
  '난 별로던데 ..???'
);

-- 모임댓글좋아요
insert into party_comment_like (
  party_comment_no,
  mno
)
values (
  1,
  1
);

insert into party_comment_like (
  party_comment_no,
  mno
)
values (
  2,
  2
);

insert into party_comment_like (
  party_comment_no,
  mno
)
values (
  3,
  3
);

insert into party_comment_like (
  party_comment_no,
  mno
)
values (
  4,
  4
);

insert into party_comment_like (
  party_comment_no,
  mno
)
values (
  5,
  5
);


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
  '화장실 너무 더러워요',
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
   
   -- 리뷰사진

insert into review_img(
reservation_no,
img
)
values(
1,
'o0o0o0o0o0o'
);

insert into review_img(
reservation_no,
img
)
values(
2,
'hihihihi'
);

insert into review_img(
reservation_no,
img
)
values(
3,
'nmnmnmnmmmnmnmn'
);

insert into review_img(
reservation_no,
img
)
values(
4,
'nonononono'
);

insert into review_img(
reservation_no,
img
)
values(
5,
'cococococoocococo'
);


-- 메뉴

insert into store_menu(
store_no,
name,
price,
main_accept
)
values(
1,
'국밥',
7000,
true
);

insert into store_menu(
store_no,
name,
price,
main_accept
)
values(
2,
'감자탕',
20000,
true
);

insert into store_menu(
store_no,
name,
price,
main_accept
)
values(
3,
'화덕피자',
12000,
false
);

insert into store_menu(
store_no,
name,
price,
main_accept
)
values(
4,
'大방어회',
45000,
true
);

insert into store_menu(
store_no,
name,
price,
main_accept
)
values(
5,
'허니콤보',
20000,
true
);

--메뉴 사진
insert into menu_img(store_menu_no,img)
values(1,'sdfsas');
insert into menu_img(store_menu_no,img)
values(2,'ddddd');
insert into menu_img(store_menu_no,img)
values(3,'jl/jk');
insert into menu_img(store_menu_no,img)
values(4,'oipiuo');
insert into menu_img(store_menu_no,img)
values(5,'zxzvxzc');

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
   
   
--참석자

insert into party_participant (
party_no,
mno,
participant_status
)
values(
1,
1,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
1,
2,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
1,
3,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
1,
4,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
1,
5,
'참'
);


insert into party_participant (
party_no,
mno,
participant_status
)
values(
2,
1,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
2,
2,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
2,
3,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
2,
4,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
2,
5,
'참'
);


insert into party_participant (
party_no,
mno,
participant_status
)
values(
3,
1,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
3,
2,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
3,
3,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
3,
4,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
3,
5,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
4,
1,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
4,
2,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
4,
3,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
4,
4,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
4,
5,
'참'
);


insert into party_participant (
party_no,
mno,
participant_status
)
values(
5,
1,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
5,
2,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
5,
3,
'참'
);

insert into party_participant (
party_no,
mno,
participant_status
)
values(
5,
4,
'참'
);


insert into party_participant (
party_no,
mno,
participant_status
)
values(
5,
5,
'참'
);

-- 모임게시판
insert into party_board (
  party_no,
  mno,
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
  message,
  message_status
)
values (
  1,
  5,
  '다들 술 잘마시나요~?',
  true
);

insert into party_board (
  party_no,
  mno,
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
  message,
  message_status
)
values (
  1,
  1,
  '저는 잘 못마셔요..ㅎㅎ',
  true
);

--모임찜
insert into party_board_select(mno,party_board_no)
values(1,1);
insert into party_board_select(mno,party_board_no)
values(1,2);
insert into party_board_select(mno,party_board_no)
values(1,3);
insert into party_board_select(mno,party_board_no)
values(3,1);
insert into party_board_select(mno,party_board_no)
values(4,2);

/* 모임 주점 평가
 * 참석자와 모임이 있어야 평가를 할 수 있다
 * 참석자는 회원정보가 있어야한다.
 * */
insert into party_store_evaluation(
party_no,
mno,
score
) values(
1,
1,
1.5
);

insert into party_store_evaluation(
party_no,
mno,
score
) values(
1,
2,
2.5
);

insert into party_store_evaluation(
party_no,
mno,
score
) values(
1,
3,
2.5
);

insert into party_store_evaluation(
party_no,
mno,
score
) values(
1,
4,
2.5
);

insert into party_store_evaluation(
party_no,
mno,
score
) values(
1,
5,
5
);



-- 모임회원평가


insert into party_member_evaluation (
party_no,
mno,
mno2,
score
)
values (
1,
1,
3,
1.5
);

insert into party_member_evaluation (
party_no,
mno,
mno2,
score
)
values (
2,
3,
1,
2.5
);

insert into party_member_evaluation (
party_no,
mno,
mno2,
score
)
values (
3,
4,
1,
3.0
);

insert into party_member_evaluation (
party_no,
mno,
mno2,
score
)
values (
4,
4,
3,
4.0
);

insert into party_member_evaluation (
party_no,
mno,
mno2,
score
)
values (
5,
1,
5,
5.0
);

--주점유형


insert into store_type (
type_name
 )
 values (
  '포차'
);

insert into store_type (
type_name
 )
 values (
  '펍'
);

insert into store_type (
type_name
)
values (
  '바'
 );

insert into store_type (
type_name
 )
values (
  '이자카야'
 );

 insert into store_type (
type_name
)
values (
  '주막'
 );

insert into store_type (
type_name
 )
values (
  '감성주점'
);

 insert into store_type (
 type_name
 )
 values (
  '루프탑'
);

insert into store_type (
 type_name
)
values (
  '가라오케'
);

insert into store_type(
type_name
)
values (
  '기타'
);

-- 주점소속유형

insert into store_section_type(
  store_type_no,
  store_no
)
values(
  1,
  1
   );

insert into store_section_type(
  store_type_no,
  store_no
)
values(
  2,
  2
   );

insert into store_section_type(
  store_type_no,
  store_no
)
values(
  3,
  3
   );

insert into store_section_type(
  store_type_no,
  store_no
)
values(
  4,
  4
   );

insert into store_section_type(
  store_type_no,
  store_no
)
values(
  5,
  5
   );

--태그
insert into tag(name)
values('#단골손님많아요');
insert into tag(name)
values('#소주맥주막걸리 모두 다가능');
insert into tag(name)
values('#지하철역이랑 5분거리');
insert into tag(name)
values('#술과 안주 모두 맛있음 보장');
insert into tag(name)
values('#분위기좋은');

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
   
/* 댓글 좋아요 */
insert into comment_like(
mno,
board_comment_no
) values(
1,
1
);

insert into comment_like(
mno,
board_comment_no
) values(
5,
5
);

insert into comment_like(
mno,
board_comment_no
) values(
3,
4
);

insert into comment_like(
mno,
board_comment_no
) values(
4,
1
);

insert into comment_like(
mno,
board_comment_no
) values(
5,
2
);



   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   