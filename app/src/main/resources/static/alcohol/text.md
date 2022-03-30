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
  d.img
from
  alcohol_detail d
  inner join alcohol_sales s on d.alcohol_detail_no=s.alcohol_detail_no
order by
  s.store_no asc;
