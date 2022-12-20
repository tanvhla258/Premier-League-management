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
SELECT EXISTS(  select 1
  from tran_dau
  where DOI_BONG_ID_Doi_Bong_1 = 106 and DOI_BONG_ID_Doi_Bong_2 = 104) as temp;
  
  -- truy van so cau thu nuoc ngoai trong 1 doi bong

select count(*) as So_Cau_Thu_Nuoc_Ngoai
from cau_thu
where DOI_BONG_ID_Doi_Bong = 101 and Loai_CT = 'NN';
  
-- truy van tong so ban thang cau cau thu 
select count(*) AS So_Ban_Thang
from ghi_ban
where CAU_THU_ID_Cau_thu = 1100
group by CAU_THU_ID_Cau_thu;








