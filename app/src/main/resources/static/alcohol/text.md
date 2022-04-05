## text
select
  alcohol_detail_no,
  alcohol_type_no,
  name,
  degree,
  brand,
  origin,
  volume,
  characteristic,
  img
from
  alcohol_detail
where
  alcohol_detail_no=#{no}

<!-- 주류 디테일 -->
select
  d.alcohol_detail_no,
  d.alcohol_type_no,
  d.name,
  d.degree,
  d.brand,
  d.origin,
  d.volume,
  d.img,
  d.characteristic,
  s.store_no,
  st.name,
  st.evaluation_score,
  st.lat,
  st.lng,
  st.status,
  simg.img
from
  alcohol_detail d
  left outer join alcohol_sales s on d.alcohol_detail_no=s.alcohol_detail_no
  left outer join store st on s.store_no=st.store_no
  left outer join store_img simg on s.store_no=simg.store_no
where
  d.alcohol_detail_no=#{no}



alcohol_detail_no,
alcohol_type_no,
name,
degree,
brand,
origin,
volume,
characteristic,
img


SELECT
d.alcohol_detail_no,
d.name,
d.brand,












detail에 넘어왔을 때
store의 이름, 이미지 , 위치정보, 별점, 영업여부




<!-- 회원, 참석자, 모임 데이터 조인 -->
select
m.mno,
pp.participant_status,
p.title,
p.contents
from
member m
inner join party_participant pp on m.mno=pp.mno
inner join party p on m.mno=p.mno;


select
m.mno,
pp.participant_status,
p.title,
p.contents
from
member m
left outer join party_participant pp on m.mno=pp.mno
left outer join party p on m.mno=p.mno;


<!-- 회원, 참석자, 모임 데이터 조인 -->
select
m.mno,
pp.participant_status,
p.title,
p.contents
from
member m
inner join party_participant pp on m.mno=pp.mno
inner join party p on m.mno=p.mno;



<!-- 모임, 주점, 멤버 조인 -->
select
p.party_no,
p.title,
p.party_fee,
p.meeting_date,
p.max_member,
p.alcohol_type,
p.alcohol_limit,
s.store_no,
s.name,
m.mno,
m.name
from party p
join member m on p.mno=m.mno
join store s on p.store_no=s.store_no
order by p.party_no desc;



<!-- 원하는 데이터의 갯수 조인 -->
SELECT
count(party_board_no)
from party_board_select
where
party_board_no=1;



<!-- 모임, 주점, 멤버, 댓글 조인 -->
select
p.party_no,
p.title,
p.party_fee,
p.meeting_date,
p.max_member,
p.alcohol_type,
p.alcohol_limit,
s.store_no,
s.name,
m.mno,
m.name,
pm.party_comment_contents
from party p
join member m on p.mno=m.mno
join store s on p.store_no=s.store_no
join party_comment pm on p.party_no=pm.party_no
order by p.party_no desc;



<!--
찜 목록 조인
테이블 중복 일어남.
중복 처리 해야됨
-->

SELECT distinct
m.mno,
b.board_no,
s.store_no,
pb.party_board_no
from
member m
left outer join board_select b on m.mno=b.mno
left outer join store_select s on m.mno=s.mno
left outer join party_board_select pb on m.mno=pb.mno
where
m.mno=1;


<!-- 찜 데이터 삭제 -->
delete from party_board_select
where mno=1 and party_board_no=2;
