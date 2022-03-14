/* 문의 */
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
1,
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
1,
2,
'문의글 문의글 문의글 문의글',
'궁금합니다!!!????????@@@@', 
'askheufhiasehihasasefasef11kuehfkuashefukshkushefk12412'
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

/* 모임 */
insert into party(
party_no,
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
party_no,
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
1,
2,
'친목모임하실분',
'친목모임하실분',
20000,
'2022-03-22',
6,
'맥주',
11,
3
);

insert into party(
party_no,
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
1,
3,
'친목',
'와인마실분',
20000,
'2022-03-22',
6,
'와인',
11,
3
);

insert into party(
party_no,
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
1,
4,
'산할아버지',
'구름모자썼네',
30000,
'2022-03-22',
6,
'막걸리',
11,
3
);