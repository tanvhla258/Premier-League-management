USE `bong_da` ;

-- insert neu Ten_User chua co trong bang
INSERT INTO user ( ID_User,Password,Email,Ten_User,Ngay_Sinh,Phone,Role) 
SELECT * FROM ( SELECT 3,'321','gher.gmail.com','VanA','2002-3-24','97584354931','Quan ly') AS tmp
WHERE NOT EXISTS (
  select Ten_User from user where Ten_User = 'VanA' and Email = 'gher.gmail.com'
);
	

-- bang xep hang theo thu tu tang dan 
select * from bang_xep_hang
order by Tong_Diem;

-- tim id doi bong khi co ten doi bong

select ID_Doi_Bong
from doi_bong
where Ten_DB = 'Fulham'