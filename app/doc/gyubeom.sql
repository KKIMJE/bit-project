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
'23:00:00',
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
'23:00:00',
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
'23:00:00',
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
'23:00:00',
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
'23:00:00',
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
2,
2,
'벚꽃보러 어디로갈까',
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
3,
3,
'양꼬치와 칭따오',
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
4,
4,
'여름에는 제주도지',
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
5,
5,
'멕시코에서 왔슴니다',
8
);

-- sns



-- 주점찜

insert into store_select(
store_no,
mno
)
values(
1,
1
);

insert into store_select(
store_no,
mno
)
values(
2,
2
);

insert into store_select(
store_no,
mno
)
values(
3,
3
);

insert into store_select(
store_no,
mno
)
values(
4,
4
);

insert into store_select(
store_no,
mno
)
values(
5,
5
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
2,
'cococococoocococo'
);
