## text

select
  s.store_no,
  s.alcohol_detail_no,
  d.alcohol_type_no,
  d.name,
  d.degree,
  d.brand,
  d.origin,
  d.volume,
  d.img,
  store.name
from
  alcohol_detail d
  inner join alcohol_sales s on d.alcohol_detail_no=s.alcohol_detail_no
  inner join store on s.store_no=store.store_no 
order by
  s.store_no asc;



detail에 넘어왔을 때
store의 이름, 이미지 , 위치정보, 별점, 영업여부
