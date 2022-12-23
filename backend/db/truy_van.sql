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

SELECT * FROM bong_da.cau_thu;
update cau_thu set Picture = "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/124933.png"where ID_Cau_Thu = 1153;
update cau_thu set Picture = "https://images.squarespace-cdn.com/content/v1/5a787f048c56a8f8f9e9798d/1548866428084-V1YTQNFTXMYO1NRM6XLP/Michael-Carrick-Carousel-11.jpg?format=1000w"where ID_Cau_Thu = 1154;
update cau_thu set Picture = "https://medias.spotern.com/people/w320/1/1272-1532336937.jpg"where ID_Cau_Thu = 1155; 

update cau_thu set Picture = "https://resources.premierleague.com/premierleague/photos/players/250x250/p20658.png"where ID_Cau_Thu = 1132;
update cau_thu set Picture = "https://i2-prod.birminghammail.co.uk/sport/football/football-news/article9971040.ece/ALTERNATES/s615/JS71133798.jpg"where ID_Cau_Thu = 1133;
update cau_thu set Picture = "https://resources.premierleague.com/premierleague/photos/players/250x250/p15157.png"where ID_Cau_Thu = 1134;

update cau_thu set Picture = "https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/8054.png"where ID_Cau_Thu = 1052;
update cau_thu set Picture = "https://resources.premierleague.com/premierleague/photos/players/250x250/p41270.png"where ID_Cau_Thu = 1053;
update cau_thu set Picture = "https://cdn.resfu.com/img_data/players/big/32837.jpg"where ID_Cau_Thu = 1054;

update cau_thu set Picture = "https://media.gettyimages.com/id/473052004/photo/andre-santos-of-clube-de-regatas-do-flamengo-poses-during-a-portrait-session-on-august-14-2014.jpg?s=612x612&w=gi&k=20&c=bx0vgxeBfueGtixWOmoEWQO9_aviI13HQeR2tl-jZg0="where ID_Cau_Thu = 1005;
update cau_thu set Picture = "https://futhead.cursecdn.com/static/img/14/players/163423.png"where ID_Cau_Thu = 1006;
update cau_thu set Picture = "https://www.arsenalpics.com/p/5/johan-djourou-arsenal-523417.jpg.webp"where ID_Cau_Thu = 1007;

update cau_thu set Picture = "https://i.pinimg.com/474x/3f/93/f6/3f93f6a379a7234373d206e450373b0c.jpg"where ID_Cau_Thu = 1366;
update cau_thu set Picture = "https://resources.premierleague.com/premierleague/photos/players/250x250/p37742.png"where ID_Cau_Thu = 1367;
update cau_thu set Picture = "https://www.themoviedb.org/t/p/original/8Yf2xrdNV1HsBnCIAgDRIgN6DrT.jpg"where ID_Cau_Thu = 1368;

update cau_thu set Picture = "https://m.footballdatabase.eu/images/photos/players/a_2/2190.jpg"where ID_Cau_Thu = 1072;
update cau_thu set Picture = "https://bet-bet.net/wp-content/uploads/2021/03/Phil-Jagielka.png"where ID_Cau_Thu = 1073;
update cau_thu set Picture = "https://i.pinimg.com/474x/d1/49/b8/d149b8a4ea42c584370ced3b7f2fb9d0.jpg"where ID_Cau_Thu = 1074;

update cau_thu set Picture = "https://img.a.transfermarkt.technology/portrait/big/3597-1476358918.jpg?lm=1"where ID_Cau_Thu = 1112;
update cau_thu set Picture = "https://i.pinimg.com/originals/d3/c7/36/d3c736da5845944148c87dd9c528fb00.jpg"where ID_Cau_Thu = 1113;
update cau_thu set Picture = "https://www.lfchistory.net/images/profiles/player_colejoe.jpg"where ID_Cau_Thu = 1114;

update cau_thu set Picture = "https://images.fotmob.com/image_resources/playerimages/32734.png"where ID_Cau_Thu = 1391;
update cau_thu set Picture = "https://img.a.transfermarkt.technology/portrait/big/90368-1487767598.jpg?lm=1"where ID_Cau_Thu = 1392;
update cau_thu set Picture = "http://cdn.soccerwiki.org/images/player/3136.png"where ID_Cau_Thu = 1393;

update cau_thu set Picture = "https://fmdataba.com/images/p2/534313.png"where ID_Cau_Thu = 1344;
update cau_thu set Picture = "https://www.bdfutbol.com/i/j/6108c.jpg"where ID_Cau_Thu = 1345;
update cau_thu set Picture = "https://alchetron.com/cdn/mark-gower-2771d357-1094-484a-898c-a49d5f66c8b-resize-750.png"where ID_Cau_Thu = 1346;

update cau_thu set Picture = "https://e7.pngegg.com/pngimages/701/167/png-clipart-james-collins-west-ham-united-f-c-premier-league-wales-national-football-team-premier-league-tshirt-team-thumbnail.png"where ID_Cau_Thu = 1415;
update cau_thu set Picture = "https://cdn.resfu.com/img_data/players/medium/38344.jpg?size=180x&lossy=1"where ID_Cau_Thu = 1416;
update cau_thu set Picture = "http://cdn.soccerwiki.org/images/player/4657.png"where ID_Cau_Thu = 1417;

update cau_thu set Picture = "https://resources.premierleague.com/premierleague/photos/players/250x250/p41727.png"where ID_Cau_Thu = 1200;
update cau_thu set Picture = "https://resources.premierleague.com/premierleague/photos/players/250x250/p10954.png"where ID_Cau_Thu = 1201;
update cau_thu set Picture = "https://www.scunthorpe-united.co.uk/api/image/cropandgreyscale/90f2ec7e-04d8-427b-a11a-0a7cb145fde7/?preset=player&greyscale=false"where ID_Cau_Thu = 1202;

update cau_thu set Picture = "https://resources.premierleague.com/premierleague/photos/players/250x250/p88734.png"where ID_Cau_Thu = 1091;
update cau_thu set Picture = "http://cdn.soccerwiki.org/images/player/7784.png"where ID_Cau_Thu = 1092;
update cau_thu set Picture = "http://cdn.soccerwiki.org/images/player/1843.png"where ID_Cau_Thu = 1093;

update cau_thu set Picture = "https://futhead.cursecdn.com/static/img/19/players/51257.png"where ID_Cau_Thu = 1298;
update cau_thu set Picture = "https://static.wikia.nocookie.net/the-football-database/images/2/27/Rory_Delap.png/revision/latest?cb=20210121174651"where ID_Cau_Thu = 1299;
update cau_thu set Picture = "https://img.a.transfermarkt.technology/portrait/big/50987-1489602860.jpg?lm=1"where ID_Cau_Thu = 1300;

update cau_thu set Picture = "https://resources.premierleague.com/premierleague/photos/players/250x250/p3673.png"where ID_Cau_Thu = 1275;
update cau_thu set Picture = "https://resources.premierleague.com/premierleague/photos/players/250x250/p17339.png"where ID_Cau_Thu = 1276;
update cau_thu set Picture = "https://m.footballdatabase.eu/images/photos/players/2020-2021/a_28/28883.jpg"where ID_Cau_Thu = 1277;

update cau_thu set Picture = "http://cdn.soccerwiki.org/images/player/448.png"where ID_Cau_Thu = 1027;
update cau_thu set Picture = "https://sortitoutsi.net/uploads/megapacks/cutoutfaces/originals/11.00/29000029.png"where ID_Cau_Thu = 1028;
update cau_thu set Picture = "https://cdn.soccerwiki.org/images/player/29444.png"where ID_Cau_Thu = 1029;

update cau_thu set Picture = "https://futhead.cursecdn.com/static/img/14/players/177134.png"where ID_Cau_Thu = 1178;
update cau_thu set Picture = "https://cdn.soccerwiki.org/images/player/3883.png"where ID_Cau_Thu = 1179;
update cau_thu set Picture = "http://cdn.soccerwiki.org/images/player/5580.png"where ID_Cau_Thu = 1180;

update cau_thu set Picture = "https://m.footballdatabase.eu/images/photos/players/2020-2021/a_21/21824.jpg"where ID_Cau_Thu = 1323;
update cau_thu set Picture = "https://fmdataba.com/images/p2/534073.png"where ID_Cau_Thu = 1324;
update cau_thu set Picture = "https://futhead.cursecdn.com/static/img/19/players/193942.png"where ID_Cau_Thu = 1325;

update cau_thu set Picture = "https://cdn.soccerwiki.org/images/player/18318.png"where ID_Cau_Thu = 1437;
update cau_thu set Picture = "http://cdn.soccerwiki.org/images/player/592.png"where ID_Cau_Thu = 1438;
update cau_thu set Picture = "https://futhead.cursecdn.com/static/img/15/players/45098.png"where ID_Cau_Thu = 1439;

update cau_thu set Picture = "https://fmdataba.com/images/p2/534503.png"where ID_Cau_Thu = 1250;
update cau_thu set Picture = "https://s.hs-data.com/bilder/spieler/gross/1168.jpg"where ID_Cau_Thu = 1251;
update cau_thu set Picture = "https://www.playmakerstats.com/img/jogadores/13/300113_med_jem_karacan.jpg"where ID_Cau_Thu = 1252;

update cau_thu set Picture = "https://pbs.twimg.com/profile_images/632932737809272832/13CnkvD4_400x400.jpg"where ID_Cau_Thu = 1225;
update cau_thu set Picture = "http://cdn.soccerwiki.org/images/player/1975.png"where ID_Cau_Thu = 1226;
update cau_thu set Picture = "https://cdn.resfu.com/img_data/players/big/24071.jpg"where ID_Cau_Thu = 1227;