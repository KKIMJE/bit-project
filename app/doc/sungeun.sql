--음주내역
insert into alcohol_management(drink_no,mno,amount,type,level)
values(1,1,'5bottles','와인','low');
insert into alcohol_management(drink_no,mno,amount,type,level)
values(2,1,'30bottles','소주','high');
insert into alcohol_management(drink_no,mno,amount,type,level)
values(3,2,'24bottles', '맥주','moderate');
insert into alcohol_management(drink_no,mno,amount,type,level)
values(4,3,'7bottles', '사케', 'high');
insert into alcohol_management(drink_no,mno,amount,type,level)
values(5,4,'48bottles', '막걸리', 'high');

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

--신고하기
insert into report(mno,target_no,type,contents,status)
values(1,1,'회','신고해요 여기',true);
insert into report(repo_no,mno,target_no,type,contents,status)
values(2,3,'게','신고합니당',true);
insert into report(repo_no,mno,target_no,type,contents,status)
values(3,2,'주','여기좀읽어주세요',false);
insert into report(repo_no,mno,target_no,type,contents,status)
values(4,1,'회','확인부탁드립니다',false);
insert into report(repo_no,mno,target_no,type,contents,status)
values(5,1,'회','ㅈㅂㅈㅂㅈㅂㅈㅂ',true);

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

--모임찜 
insert into party_board_select(mno,party_board_no)
values(1,1);
insert into party_board_select(mno,party_board_no)
values(1,2);
insert into party_board_select(mno,party_board_no)
values(1,3);
insert into party_board_select(mno,party_board_no)
values(2,1);
insert into party_board_select(mno,party_board_no)
values(2,2);
   

--메뉴 사진 
insert into menu_img(store_menu_no,img)
values(1,'sdfsas');
insert into menu_img(store_menu_no,img)
values,2,'ddddd');
insert into menu_img(store_menu_no,img)
values(3,'jl/jk');
insert into menu_img(store_menu_no,img)
values(4,'oipiuo');
insert into menu_img(store_menu_no,img)
values(5,'zxzvxzc');
