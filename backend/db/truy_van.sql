USE `bong_da` ;

-- insert neu Ten_User chua co trong bang
INSERT INTO user ( ID_User,Password,Email,Ten_User,Ngay_Sinh,Phone,Role) 
SELECT * FROM ( SELECT 3,'321','gher.gmail.com','VanA','2002-3-24','97584354931','Quan ly') AS tmp
WHERE NOT EXISTS (
  select Ten_User from user where Ten_User = 'VanA' and Email = 'gher.gmail.com'
);

SELECT EXISTS( 
  select 1 from user where Ten_User = 'VanA' or Email = 'gher.gmail.com'
  ) as temp;

select * from user;
	
-- bang xep hang theo thu tu tang dan 
select * from bang_xep_hang
order by Tong_Diem;

-- tim id doi bong khi co ten doi bong

select ID_Doi_Bong
from doi_bong
where Ten_DB = 'Fulham';


-- tim id,San_Nha doi bong khi co ten doi bong
select ID_Doi_Bong,San_Nha
from doi_bong
where Ten_DB = 'Fulham';

-- select san khi co id doi bong trong table doi_bong
select Ten_DB,San_Nha
from doi_bong
where ID_Doi_Bong='';

-- insert kiem tra xem neu 2 doi da gap nhau chua
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,GIAI_DAU_ID_Giai_Dau,San,Lich_Thi_Dau)
SELECT * FROM ( SELECT 11, 101, 106, 2, 1, 'Old Trafford','2020-11-4 20:00:00') AS tmp
WHERE EXISTS (
  select DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2
  from tran_dau
  where DOI_BONG_ID_Doi_Bong_1 = 106 and DOI_BONG_ID_Doi_Bong_2 = 101
);
select * from tran_dau;
-- cach 2
SELECT 2 
WHERE EXISTS (
  select DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2
  from tran_dau
  where DOI_BONG_ID_Doi_Bong_1 = 106 and DOI_BONG_ID_Doi_Bong_2 = 101
);
-- cach 3 
-- SELECT EXISTS(  select 1
--   from tran_dau
--   where DOI_BONG_ID_Doi_Bong_1 = 106 and DOI_BONG_ID_Doi_Bong_2 = 104) as temp;
  
--   -- truy van so cau thu nuoc ngoai trong 1 doi bong

-- -- select count(*) as So_Cau_Thu_Nuoc_Ngoai
-- -- from cau_thu
-- -- where DOI_BONG_ID_Doi_Bong = 101 and Loai_CT = 'NN';
  
-- -- -- truy van tong so ban thang cau cau thu 
-- -- select count(*) AS So_Ban_Thang
-- -- from ghi_ban
-- -- where CAU_THU_ID_Cau_thu = 1100
-- -- group by CAU_THU_ID_Cau_thu;



-- tra ve so ban thang cua tung cau thu
select CAU_THU_ID_Cau_Thu,CAU_THU_DOI_BONG_ID_Doi_Bong, count(*) AS So_Ban_Thang
from ghi_ban
group by CAU_THU_ID_Cau_thu,CAU_THU_DOI_BONG_ID_Doi_Bong
order by So_Ban_Thang desc;

-- update id doi_bong cua table cau_thu =0

update cau_thu
set DOI_BONG_ID_Doi_Bong = 1
where ID_Cau_Thu = 1100;

select * from cau_thu where ID_Cau_Thu = 1100;

--set logo for clubs
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/thumb/a/a1/Man_Utd_FC_.svg/1200px-Man_Utd_FC_.svg.png"where ID_Doi_Bong=101;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/1/1d/Manchester_City_FC_logo.svg"where ID_Doi_Bong=102;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/thumb/5/5c/Chelsea_crest.svg/1200px-Chelsea_crest.svg.png"where ID_Doi_Bong=103;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png"where ID_Doi_Bong=104;
update doi_bong set Logo ="https://cdne-totv8-prod.azureedge.net/media/40307/spurs-blue-compressed.png"where ID_Doi_Bong=105;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/thumb/7/7c/Everton_FC_logo.svg/1200px-Everton_FC_logo.svg.png"where ID_Doi_Bong=106;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png"where ID_Doi_Bong=107;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/West_Bromwich_Albion.svg/1200px-West_Bromwich_Albion.svg.png"where ID_Doi_Bong=108;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Swansea_City_AFC_logo.png/180px-Swansea_City_AFC_logo.png"where ID_Doi_Bong=109;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/b/b1/WestHam.png"where ID_Doi_Bong=110;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Norwich_City_FC_logo.svg/640px-Norwich_City_FC_logo.svg.png"where ID_Doi_Bong=111;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/8/8d/Fulham_FC.png"where ID_Doi_Bong=112;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Stoke_City_FC.svg/800px-Stoke_City_FC.svg.png"where ID_Doi_Bong=113;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/4/4b/356px-FC_Southampton.svg.png"where ID_Doi_Bong=114;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aston_Villa_FC_crest_%282016%29.svg/1200px-Aston_Villa_FC_crest_%282016%29.svg.png"where ID_Doi_Bong=115;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/0/0d/Newcastle_United_FC.png"where ID_Doi_Bong=116;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/d/d7/Sunderland_AFC.gif"where ID_Doi_Bong=117;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/vi/9/92/Wigan_Athletic.png"where ID_Doi_Bong=118;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Reading_FC.svg/640px-Reading_FC.svg.png"where ID_Doi_Bong=119;
update doi_bong set Logo ="https://upload.wikimedia.org/wikipedia/en/thumb/3/31/Queens_Park_Rangers_crest.svg/1200px-Queens_Park_Rangers_crest.svg.png"where ID_Doi_Bong=120;

