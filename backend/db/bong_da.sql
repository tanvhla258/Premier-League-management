
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bong_da
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bong_da
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bong_da` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `bong_da` ;

-- -----------------------------------------------------
-- Table `bong_da`.`DOI_BONG`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bong_da`.`DOI_BONG` (
  `ID_Doi_Bong` INT NOT NULL auto_increment,
  `Ten_DB` VARCHAR(60) NOT NULL,
  `San_Nha` VARCHAR(60) NOT NULL,
  `Logo` VARBINARY(100) NULL,
  PRIMARY KEY (`ID_Doi_Bong`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bong_da`.`GIAI_DAU`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bong_da`.`GIAI_DAU` (
  `ID_Giai_Dau` INT NOT NULL auto_increment,
  `Ten_GD` VARCHAR(60) NOT NULL,
  `Ngay_Bat_Dau` DATE NOT NULL,
  `Ngay_Ket_Thuc` DATE NOT NULL,
  PRIMARY KEY (`ID_Giai_Dau`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bong_da`.`LOAI_BAN_THANG`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bong_da`.`LOAI_BAN_THANG` (
  `ID_Loai_Ban_Thang` INT NOT NULL auto_increment,
  `Ten_LBT` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`ID_Loai_Ban_Thang`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bong_da`.`TRAN_DAU`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bong_da`.`TRAN_DAU` (
  `ID_Tran_Dau` INT NOT NULL auto_increment,
  `Ti_So` VARCHAR(5) NOT NULL,
  `Vong_Dau` INT NOT NULL,
  `DOI_BONG_ID_Doi_Bong_1` INT NOT NULL ,
  `DOI_BONG_ID_Doi_Bong_2` INT NOT NULL ,
  `GIAI_DAU_ID_Giai_Dau` INT NOT NULL ,
  `Lich_Thi_Dau` DATETIME NOT NULL,
  PRIMARY KEY (`ID_Tran_Dau`, `DOI_BONG_ID_Doi_Bong_1`, `DOI_BONG_ID_Doi_Bong_2`, `GIAI_DAU_ID_Giai_Dau`),
  INDEX `fk_TRAN_DAU_DOI_BONG1_idx` (`DOI_BONG_ID_Doi_Bong_1` ASC) VISIBLE,
  INDEX `fk_TRAN_DAU_DOI_BONG2_idx` (`DOI_BONG_ID_Doi_Bong_2` ASC) VISIBLE,
  INDEX `fk_TRAN_DAU_GIAI_DAU1_idx` (`GIAI_DAU_ID_Giai_Dau` ASC) VISIBLE,
  CONSTRAINT `fk_TRAN_DAU_DOI_BONG1`
    FOREIGN KEY (`DOI_BONG_ID_Doi_Bong_1`)
    REFERENCES `bong_da`.`DOI_BONG` (`ID_Doi_Bong`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TRAN_DAU_DOI_BONG2`
    FOREIGN KEY (`DOI_BONG_ID_Doi_Bong_2`)
    REFERENCES `bong_da`.`DOI_BONG` (`ID_Doi_Bong`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_TRAN_DAU_GIAI_DAU1`
    FOREIGN KEY (`GIAI_DAU_ID_Giai_Dau`)
    REFERENCES `bong_da`.`GIAI_DAU` (`ID_Giai_Dau`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bong_da`.`KET_QUA_TRAN_DAU`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bong_da`.`KET_QUA_TRAN_DAU` (
  `Ten_Doi_Thang` VARCHAR(60) NOT NULL,
  `Ten_Doi_Thua` VARCHAR(60) NOT NULL,
  `TRAN_DAU_ID_Tran_Dau` INT NOT NULL,
  `TRAN_DAU_DOI_BONG_ID_Doi_Bong_1` INT NOT NULL ,
  `TRAN_DAU_DOI_BONG_ID_Doi_Bong_2` INT NOT NULL ,
  `TRAN_DAU_GIAI_DAU_ID_Giai_Dau` INT NOT NULL ,
  INDEX `fk_KET_QUA_TRAN_DAU_TRAN_DAU1_idx` (`TRAN_DAU_ID_Tran_Dau` ASC, `TRAN_DAU_DOI_BONG_ID_Doi_Bong_1` ASC, `TRAN_DAU_DOI_BONG_ID_Doi_Bong_2` ASC, `TRAN_DAU_GIAI_DAU_ID_Giai_Dau` ASC) VISIBLE,
  PRIMARY KEY (`TRAN_DAU_ID_Tran_Dau`),
  CONSTRAINT `fk_KET_QUA_TRAN_DAU_TRAN_DAU1`
    FOREIGN KEY (`TRAN_DAU_ID_Tran_Dau` , `TRAN_DAU_DOI_BONG_ID_Doi_Bong_1` , `TRAN_DAU_DOI_BONG_ID_Doi_Bong_2` , `TRAN_DAU_GIAI_DAU_ID_Giai_Dau`)
    REFERENCES `bong_da`.`TRAN_DAU` (`ID_Tran_Dau` , `DOI_BONG_ID_Doi_Bong_1` , `DOI_BONG_ID_Doi_Bong_2` , `GIAI_DAU_ID_Giai_Dau`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bong_da`.`GHI_BAN`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bong_da`.`GHI_BAN` (
  `ID_Ghi_Ban` INT NOT NULL auto_increment,
  `Thoi_Diem` INT NOT NULL,
  `ID_Cau_Thu` INT NOT NULL,
  `LOAI_BAN_THANG_ID_Loai_Ban_Thang` INT NOT NULL ,
  `KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau` INT NOT NULL ,
  PRIMARY KEY (`ID_Ghi_Ban`, `LOAI_BAN_THANG_ID_Loai_Ban_Thang`, `KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau`),
  INDEX `fk_GHI_BAN_LOAI_BAN_THANG1_idx` (`LOAI_BAN_THANG_ID_Loai_Ban_Thang` ASC) VISIBLE,
  INDEX `fk_GHI_BAN_KET_QUA_TRAN_DAU1_idx` (`KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau` ASC) VISIBLE,
  CONSTRAINT `fk_GHI_BAN_LOAI_BAN_THANG1`
    FOREIGN KEY (`LOAI_BAN_THANG_ID_Loai_Ban_Thang`)
    REFERENCES `bong_da`.`LOAI_BAN_THANG` (`ID_Loai_Ban_Thang`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_GHI_BAN_KET_QUA_TRAN_DAU1`
    FOREIGN KEY (`KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau`)
    REFERENCES `bong_da`.`KET_QUA_TRAN_DAU` (`TRAN_DAU_ID_Tran_Dau`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bong_da`.`BANG_XEP_HANG`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bong_da`.`BANG_XEP_HANG` (
  `ID_BXH` INT NOT NULL auto_increment,
  `Hang` INT NOT NULL,
  `Thang` INT NOT NULL,
  `Hoa` INT NOT NULL,
  `Thua` INT NOT NULL,
  `Tong_Diem` INT NOT NULL,
  `DOI_BONG_ID_Doi_Bong` INT NOT NULL ,
  `GIAI_DAU_ID_Giai_Dau` INT NOT NULL ,
  PRIMARY KEY (`ID_BXH`, `DOI_BONG_ID_Doi_Bong`, `GIAI_DAU_ID_Giai_Dau`),
  INDEX `fk_BANG_XEP_HANG_DOI_BONG1_idx` (`DOI_BONG_ID_Doi_Bong` ASC) VISIBLE,
  INDEX `fk_BANG_XEP_HANG_GIAI_DAU1_idx` (`GIAI_DAU_ID_Giai_Dau` ASC) VISIBLE,
  CONSTRAINT `fk_BANG_XEP_HANG_DOI_BONG1`
    FOREIGN KEY (`DOI_BONG_ID_Doi_Bong`)
    REFERENCES `bong_da`.`DOI_BONG` (`ID_Doi_Bong`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_BANG_XEP_HANG_GIAI_DAU1`
    FOREIGN KEY (`GIAI_DAU_ID_Giai_Dau`)
    REFERENCES `bong_da`.`GIAI_DAU` (`ID_Giai_Dau`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bong_da`.`CAU_THU`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bong_da`.`CAU_THU` (
  `ID_Cau_Thu` INT NOT NULL auto_increment,
  `Ten_CT` VARCHAR(60) NOT NULL,
  `Loai_CT` VARCHAR(60) NOT NULL,
  `Ngay_Sinh_CT` DATE NULL,
  `Ghi_Chu` VARCHAR(60) NULL,
  `DOI_BONG_ID_Doi_Bong` INT NOT NULL ,
  PRIMARY KEY (`ID_Cau_Thu`, `DOI_BONG_ID_Doi_Bong`),
  INDEX `fk_CAU_THU_DOI_BONG_idx` (`DOI_BONG_ID_Doi_Bong` ASC) VISIBLE,
  CONSTRAINT `fk_CAU_THU_DOI_BONG`
    FOREIGN KEY (`DOI_BONG_ID_Doi_Bong`)
    REFERENCES `bong_da`.`DOI_BONG` (`ID_Doi_Bong`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bong_da`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bong_da`.`USER` (
  `ID_User` INT NOT NULL auto_increment,
  `Password` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(60) NOT NULL,
  `Ten_User` VARCHAR(60) NOT NULL,
  `Ngay_Sinh` DATE NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `Role` varchar(60) NOT NULL,
  PRIMARY KEY (`ID_User`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- ------------------------------------------------------------------------------------

-- DOI BONG
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (101, 'Manchester United', 'Old Trafford',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (102, 'Manchester City', 'Etihad Stadium',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (103, 'Chelsea', 'Stamford Bridge',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (104, 'Arsenal', 'Emirates Stadium',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (105, 'Tottenham Hotspur', 'White Hart Lane',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (106, 'Everton', 'Goodison Park',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (107, 'Liverpool', 'Anfield',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (108, 'West Bromwich Albion', 'The Hawthorns',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (109, 'Swansea City', 'The Liberty Stadium',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (110, 'West Ham United', 'Upton Park',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (111, 'Norwich City', 'Carrow Road',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (112, 'Fulham', 'Craven Cottage',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (113, 'Stoke City', 'Britannia Stadium',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (114, 'Southampton', 'St. Mary''s Stadium',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (115, 'Aston Villa', 'Villa Park',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (116, 'Newcastle United', 'St James'' Park',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (117, 'Sunderland', 'Stadium of Light',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (118, 'Wigan Athletic', 'DW Stadium',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (119, 'Reading', 'Madejski Stadium',' ');
INSERT doi_bong (ID_Doi_Bong,Ten_DB,San_nha,Logo) VALUES (120, 'Queens Park Rangers', 'Loftus Road',' ');


-- CAU THU
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES ('1001', 'Andrey Arshavin', 'TN', '101');
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1002, 'Mikel Arteta','TN', 104 );
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1003, 'Santi Cazorla','TN', 104 );
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1004, 'Marouane Chamakh','TN', 104  );
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1005, 'Andre Dos Santos','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1006, 'Abou Diaby','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1007, 'Johan Djourou','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1008, 'Lukasz Fabianski','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1009, 'Gervinho','TN', 104 );
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1010, 'Kieran Gibbs','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1011, 'Olivier Giroud','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1012, 'Laurent Koscielny','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1013, 'Vito Mannone','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1014, 'Per Mertesacker','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1015, 'Lukas Podolski','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1016, 'Aaron Ramsey','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1017, 'Tomas Rosicky','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1018, 'Bacary Sagna','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1019, 'Sebastien Squillaci','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1020, 'Wojciech Szczesny','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1021, 'Thomas Vermaelen','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1022, 'Theo Walcott','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1023, 'Craig Eastmond.','TN', 104);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1024, 'Gabriel Agbonlahor','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1025, 'Marc Albrighton','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1026, 'Barry Bannan','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1027, 'Darren Bent','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1028, 'Ciaran Clark','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1029, 'Fabian Delph','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1030, 'Richard Dunne','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1031, 'Karim El Ahmadi','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1032, 'Shay Given','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1033, 'Bradley Guzan','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1034, 'Christopher Herd','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1035, 'Brett Holman','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1036, 'Alan Hutton','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1037, 'Stephen Ireland','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1038, 'Eric Lichaj','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1039, 'Matthew Lowton','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1040, 'Ashley Westwood','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1041, 'Andrew Marshall','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1042, 'Charles ''Zogbia','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1043, 'Stiliyan Petrov','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1044, 'Enda Stevens','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1045, 'Ron Vlaar','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1046, 'Stephen Warnock','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1047, 'Joseph Bennett','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1048, 'Christian Benteke.','TN', 115);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1049, 'Petr Cech','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1050, 'Branislav Ivanovic','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1051, 'Cesar Azpilicueta','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1052, 'Ashley Cole','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1053, 'David Luiz','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1054, 'Ramires','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1055, 'Frank Lampard','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1056, 'Fernando Torres','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1057, 'Juan Mata','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1058, 'Victor Moses','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1059, 'John Obi Mikel','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1060, 'Florent Malouda','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1061, 'Paulo Ferreira','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1062, 'Marko Marin','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1063, 'Ross Turnbull','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1064, 'Daniel Sturridge','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1065, 'Gary Cahill','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1066, 'John Terry','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1067, 'Ryan Bertrand','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1068, 'Hilario.','TN', 103);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1069, 'Victor Anichebe','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1070, 'Leighton Baines','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1071, 'Darron Gibson','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1072, 'Anthony Hibbert','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1073, 'Philip Jagielka','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1074, 'Philip Neville','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1075, 'Leon Osman','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1076, 'Seamus Coleman','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1077, 'Sylvain Distin','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1078, 'Marouane Fellaini','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1079, 'Magaye Gueye', 'TN',106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1080, 'John Heitinga','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1081, 'Timothy Howard','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1082, 'Nikica Jelavic','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1083, 'Jan Mucha','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1084, 'Steven Naismith','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1085, 'Steven Pienaar','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1086, 'Kevin Mirallas','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1087, 'Bryan Oviedo.','TN', 106);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1088, 'Mark Schwarzer','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1089, 'Csaba Somogyi','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1090, 'David Stockdale','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1091, 'Neil Etheridge','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1092, 'Sascha Riether','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1093, 'Stephen Kelly','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1094, 'Aaron Hughes','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1095, 'Brede Hangeland','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1096, 'Philippe Senderos','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1097, 'John Arne Riise','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1098, 'Damien Duff','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1099, 'Ashkan Dejagah','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1100, 'Simon Davies','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1101, 'Christopher Baird','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1102, 'Steven Sidwell','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1103, 'Mahamadou Diarra','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1104, 'Bryan Ruiz','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1105, 'Kieran Richardson','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1106, 'Mladen Petric','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1107, 'Hugo Rodallega','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1108, 'Dimitar Berbatov.','TN', 112);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1109, 'Daniel Agger','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1110, 'Joe Allen','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1111, 'Ossama Assaidi','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1112, 'Jamie Carragher','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1113, 'Sebastian Coates','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1114, 'Joe Cole','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1115, 'Doni','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1116, 'Stewart Downing','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1117, 'Steven Gerrard','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1118, 'Peter Gulacsi','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1119, 'Jordan Henderson','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1120, 'Glen Johnson','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1121, 'Bradley Jones','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1122, 'Jose Enrique','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1123, 'Martin Kelly','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1124, 'Lucas Leiva','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1125, 'Jose Manuel Reina','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1126, 'Nuri Sahin','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1127, 'Martin Skrtel','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1128, 'Luis Suarez.','TN', 107);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1129, 'Joe Hart','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1130, 'Micah Richards','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1131, 'Vincent Kompany','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1132, 'Pablo Zabaleta','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1133, 'Joleon Lescott','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1134, 'James Milner','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1135, 'Samir Nasri','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1136, 'Edin Dzeko','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1137, 'Scott Sinclair','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1138, 'Aleksandar Kolarov','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1139, 'Sergio Aguero','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1140, 'Gareth Barry','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1141, 'David Silva','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1142, 'Gael Clichy','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1143, 'Kolo Toure', 'TN',102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1144, 'Richard Wright','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1145, 'Costel Pantilimon','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1146, 'Carlos Tevez','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1147, 'Yaya Toure','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1148, 'Maicon','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1149, 'Javi Garcia','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1150, 'Mario Balotelli.','TN', 102);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1151, 'Anderson','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1152, 'Bebe','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1153, 'Alexander Buttner','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1154, 'Michael Carrick','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1155, 'Javier Hernandez','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1156, 'Tom Cleverley','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1157, 'David De Gea','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1158, 'Jonathan Evans','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1159, 'Patrice Evra','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1160, 'Rio Ferdinand','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1161, 'Darren Fletcher','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1162, 'Ryan Giggs','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1163, 'Shinji Kagawa','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1164, 'Anders Lindegaard','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1165, 'Nani','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1166, 'Rafael da Silva','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1167, 'Wayne Rooney','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1168, 'Paul Scholes','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1169, 'Chris Smalling','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1170, 'Luis Antonio Valencia','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1171, 'Robin Van Persie','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1172, 'Nemanja Vidic','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1173, 'Daniel Welbeck','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1174, 'Ashley Young.','TN', 101);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1175, 'Romain Amalfitano','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1176, 'Shola Ameobi','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1177, 'Vurnon Anita','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1178, 'Demba Ba','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1179, 'Hatem Ben Arfa','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1180, 'Yohan Cabaye','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1181, 'Papiss Cisse','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1182, 'Fabricio Coloccini','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1183, 'Robert Elliot','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1184, 'Dan Gosling','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1185, 'Stephen Harper', 'TN',116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1186, 'Jonas Gutierrez','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1187, 'Timothy Krul','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1188, 'Sylvain Marveaux','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1189, 'Gabriel Obertan','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1190, 'James Perch','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1191, 'Daniel Simpson','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1192, 'Ryan Taylor','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1193, 'Steven Taylor','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1194, 'Cheick Tiote','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1195, 'Mike Williamson','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1196, 'Xisco.','TN', 116);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1197, 'Leon Barnett','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1198, 'Sebastian Bassong','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1199, 'Elliott Bennett','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1200, 'Ryan Bennett','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1201, 'Mark Bunn','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1202, 'Jacob Butterfield','TN', 111);

INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1203, 'David Fox','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1204, 'Javier Garrido','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1205, 'Grant Holt','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1206, 'Wesley Hoolahan','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1207, 'Jonathan Howson','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1208, 'Simeon Jackson','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1209, 'Bradley Johnson','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1210, 'Simon Lappin','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1211, 'Chris Martin','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1212, 'Russell Martin','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1213, 'Steven Morison','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1214, 'Anthony Pilkington','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1215, 'John Ruddy','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1216, 'Robert Snodgrass','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1217, 'Andrew Surman','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1218, 'Alexander Tettey','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1219, 'Marc Tierney','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1220, 'Michael Turner','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1221, 'Steven Whittaker.','TN', 111);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1222, 'Robert Green','TN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1223, 'Samba Diakite','TN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1224, 'Armand Traore','TN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1225, 'Shaun Derry','TN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1226, 'Anton Ferdinand','TN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1227, 'Clinton Hill','TN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1228, 'Ji-Sung Park','TN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1229, 'Andrew Johnson','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1230, 'Djibril Cisse','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1231, 'Adel Taarabt','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1232, 'Bradley Wright-Phillips','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1233, 'James Mackie','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1234, 'Nedum Onuoha','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1235, 'Stephane Mbia','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1236, 'Ryan Nelsen','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1237, 'Kieron Dyer','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1238, 'Fabio da Silva','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1239, 'Hogan Ephraim','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1240, 'David Wayne Hoilett','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1241, 'Brian Murphy','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1242, 'Robert Zamora','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1243, 'Julio Cesar','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1244, 'Alejandro Faurlin','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1245, 'Esteban Granero','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1246, 'Jose Bosingwa.','NN', 120);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1247, 'Simon Church','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1248, 'Shaun Cummings','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1249, 'Christopher Gunter','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1250, 'Danny Guthrie','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1251, 'Ian Harte','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1252, 'Jem Karacan','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1253, 'Adam Le Fondre','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1254, 'Mikele Leigertwood','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1255, 'Joel McAnuff','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1256, 'Alex McCarthy','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1257, 'Garath McCleary','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1258, 'Adrian Mariappa','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1259, 'Alexander Pearce','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1260, 'Jason Roberts','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1261, 'Thomas Robson-Kanu','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1262, 'Nicholas Shorey','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1263, 'Jay Tabb','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1264, 'Stuart Taylor','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1265, 'Mikkel Andersen','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1266, 'Adam Federici','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1267, 'Kaspars Gorkss','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1268, 'Brynjar Gunnarsson','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1269, 'Noel Hunt','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1270, 'Jimmy Kebe','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1271, 'Pavel Pogrebnyak.','NN', 119);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1272, 'Daniel Butterfield','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1273, 'Richard Chaplow','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1274, 'Jack Cork','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1275, 'Kelvin Davis','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1276, 'Steven Davis','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1277, 'Steve De Ridder','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1278, 'Ryan Dickson','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1279, 'Guilherme Do Prado','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1280, 'Jose Fonte','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1281, 'Jonathan Forte','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1282, 'Daniel Fox','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1283, 'Jos Hooiveld','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1284, 'Adam Lallana','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1285, 'Rickie Lambert','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1286, 'Tadanari Lee','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1287, 'Emmanuel Mayuka','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1288, 'Jason Puncheon','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1289, 'Gaston Ramirez','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1290, 'Frazer Richardson','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1291, 'Jay Rodriguez','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1292, 'Morgan Schneiderlin','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1293, 'Daniel Seaborne','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1294, 'Maya Yoshida.','NN', 114);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1295, 'Charlie Adam','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1296, 'Asmir Begovic','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1297, 'Geoff Cameron','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1298, 'Peter Crouch','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1299, 'Rory Delap','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1300, 'Maurice Edu', 'NN',113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1301, 'Matthew Etherington','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1302, 'Robert Huth','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1303, 'Cameron Jerome','NN', 113);


INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1304, 'Kenwyne Jones','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1305, 'Michael Kightly','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1306, 'Carlo Nash','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1307, 'Steven N’Zonzi','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1308, 'Michael Owen','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1309, 'Wilson Palacios','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1310, 'Jermaine Pennant','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1311, 'Ryan Shawcross','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1312, 'Ryan Shotton','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1313, 'Thomas Sorensen','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1314, 'Matthew Upson','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1315, 'Jonathan Walters','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1316, 'Glenn Whelan','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1317, 'Dean Whitehead','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1318, 'Andy Wilkinson','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1319, 'Marc Wilson.','NN', 113);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1320, 'Phillip Bardsley','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1321, 'Titus Bramble','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1322, 'Wesley Brown','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1323, 'Frazier Campbell','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1324, 'Lee Cattermole','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1325, 'Jack Colback','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1326, 'Carlos Cuellar','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1327, 'Steven Fletcher','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1328, 'Craig Gardner','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1329, 'Adam Johnson','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1330, 'Matthew Kilgallon','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1331, 'Sebastian Larsson','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1332, 'James McClean','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1333, 'David Meyler','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1334, 'Simon Mignolet','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1335, 'John O''Shea','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1336, 'Daniel Rose','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1337, 'Louis Saha','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1338, 'Stephane Sessegnon','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1339, 'David Vaughan','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1340, 'Keiren Westwood.','NN', 117);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1341, 'Germaine Agustien','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1342, 'Leon Britton','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1343, 'Jonathan De Guzman','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1344, 'Nathan Dyer','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1345, 'Jose Manuel Flores','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1346, 'Mark Gower','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1347, 'Daniel Graham','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1348, 'Pablo Hernandez','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1349, 'Sung Yeung Ki','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1350, 'Leroy Lita','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1351, 'Michu','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1352, 'Garry Monk','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1353, 'Luke Moore','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1354, 'Curtis Obeng','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1355, 'Wayne Routledge','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1356, 'Etey Shechter','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1357, 'Alan Tate','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1358, 'Neil Taylor','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1359, 'Gerhard Tremmel','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1360, 'Michel Vorm','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1361, 'Ashley Williams','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1362, 'Angel Rangel.','NN', 109);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1363, 'Heurelho Gomes','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1364, 'Carlo Cudicini','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1365, 'Bradley Friedel','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1366, 'Hugo Lloris','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1367, 'Younes Kaboul','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1368, 'William Gallas','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1369, 'Emmanuel Adebayor','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1370, 'Jan Vertonghen','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1371, 'Benoit Assou-Ekotto','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1372, 'Sandro','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1373, 'Yago Falque','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1374, 'Gylfi Sigurdsson','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1375, 'Clint Dempsey','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1376, 'Aaron Lennon','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1377, 'Kyle Walker','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1378, 'Kyle Naughton','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1379, 'Michael Dawson','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1380, 'Mousa Dembele','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1381, 'Thomas Huddlestone','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1382, 'Scott Parker','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1383, 'Jake Livermore','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1384, 'Jermaine Jenas','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1385, 'Gareth Bale','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1386, 'Jermain Defoe','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1387, 'David Bentley.','NN', 105);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1388, 'Christopher Brunt','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1389, 'Luke Daniels','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1390, 'Craig Dawson','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1391, 'Graham Dorrans','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1392, 'Yassine El Ghanassy','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1393, 'Marc-Antoine Fortune','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1394, 'Ben Foster','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1395, 'Zoltan Gera','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1396, 'Gonzalo Jara','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1397, 'Billy Jones','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1398, 'Shane Long','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1399, 'Gareth McAuley','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1400, 'James Morrison','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1401, 'Youssouf Mulumbu','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1402, 'Glyn Myhill','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1403, 'Peter Odemwingie','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1404, 'Jonas Olsson','NN', 108);


INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1405, 'Goran Popov','NN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1406, 'Steven Reid','TN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1407, 'Liam Ridgewell','TN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1408, 'Nils Rosenberg','TN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1409, 'Gabriel Tamas','TN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1410, 'Jerome Thomas','TN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1411, 'Claudio Yacob.','TN', 108);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1412, 'Yossi Benayoun','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1413, 'Andrew Carroll','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1414, 'Carlton Cole','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1415, 'James Collins', 'TN',110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1416, 'Jack Collison','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1417, 'Guy Demel','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1418, 'Mohamed Diame','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1419, 'Alou Diarra','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1420, 'Stephen Henderson','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1421, 'Jussi Jaaskelainen','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1422, 'Matthew Jarvis','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1423, 'Modibo Maiga','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1424, 'George McCartney','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1425, 'Mark Noble','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1426, 'Kevin Nolan','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1427, 'Joseph O''Brien','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1428, 'Gary O''Neil','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1429, 'Winston Reid','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1430, 'Jordan Spence','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1431, 'Matthew Taylor','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1432, 'James Tomkins','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1433, 'Ricardo Vaz Te.','TN', 110);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1434, 'Ali Al-Habsi','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1435, 'Antolin Alcaraz','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1436, 'Jean Beausejour','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1437, 'Mauro Boselli','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1438, 'Emmerson Boyce','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1439, 'Gary Caldwell','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1440, 'Albert Crusat','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1441, 'Franco Di Santo','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1442, 'Maynor Figueroa','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1443, 'Jordi Gomez','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1444, 'David Jones','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1445, 'Arouna Kone','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1446, 'Piscu','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1447, 'Shaun Maloney','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1448, 'James McArthur','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1449, 'James McCarthy','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1450, 'Michael Pollitt','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1451, 'Ivan Ramis','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1452, 'Ronnie Stam','TN', 118);
INSERT cau_thu (ID_Cau_Thu, Ten_CT, Loai_CT, DOI_BONG_ID_Doi_Bong) VALUES (1453, 'Ben Watson.', 'TN',118);


-- GIAI DAU 
INSERT giai_dau (ID_Giai_Dau,Ten_GD,Ngay_Bat_Dau,Ngay_Ket_Thuc) VALUES (1, 'premier league season 2020/21', '2020-09-12','2021-05-23');
INSERT giai_dau (ID_Giai_Dau,Ten_GD,Ngay_Bat_Dau,Ngay_Ket_Thuc) VALUES (2, 'premier league season 2021/22', '2021-08-13','2022-05-23');
INSERT giai_dau (ID_Giai_Dau,Ten_GD,Ngay_Bat_Dau,Ngay_Ket_Thuc) VALUES (3, 'premier league season 2022/23', '2022-08-06','2023-05-28');

select * from giai_dau;

-- BANG XEP HANG
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,1,27,5,6,86,'102','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,2,21,11,6,74,'101','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,3,20,9,9,69,'103','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,4,19,10,9,67,'104','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,5,20,6,12,66,'105','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,6,19,8,11,65,'106','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,7,18,8,12,62,'107','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,8,18,7,13,62,'108','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,9,18,5,15,61,'109','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,10,17,8,17,59,'110','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,11,16,7,17,55,'111','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,12,12,9,18,45,'112','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,13,12,9,19,45,'113','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,14,12,8,18,44,'114','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,15,12,7,19,43,'115','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,16,9,14,15,41,'116','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,17,10,9,19,39,'117','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,18,5,13,20,28,'118','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,19,5,11,22,26,'119','1');
INSERT bang_xep_hang (ID_BXH,Hang,Thang,Hoa,Thua,Tong_Diem,DOI_BONG_ID_Doi_Bong,GIAI_DAU_ID_Giai_Dau) VALUES (1,20,7,2,29,23,'120','1');

select * from bang_xep_hang;
-- TRAN DAU 
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,Ti_So,GIAI_DAU_ID_Giai_Dau,Lich_Thi_Dau) VALUES (1, 112, 111, 1, '5-0',1,'2020-09-14 20:00:00');
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,Ti_So,GIAI_DAU_ID_Giai_Dau,Lich_Thi_Dau) VALUES (2, 120, 109, 1, '0-5', 1,'2020-09-16 20:00:00');
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,Ti_So,GIAI_DAU_ID_Giai_Dau,Lich_Thi_Dau) VALUES (3, 119, 113, 1, '1-1', 1,'2020-09-18 20:00:00');
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,Ti_So,GIAI_DAU_ID_Giai_Dau,Lich_Thi_Dau) VALUES (4, 108, 107, 1, '3-0', 1,'2020-09-20 20:00:00');
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,Ti_So,GIAI_DAU_ID_Giai_Dau,Lich_Thi_Dau) VALUES (5, 110, 115, 1, '1-0', 1,'2020-09-22 20:00:00');
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,Ti_So,GIAI_DAU_ID_Giai_Dau,Lich_Thi_Dau) VALUES (6, 104, 117, 1, '0-0', 1,'2020-09-24 20:00:00');
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,Ti_So,GIAI_DAU_ID_Giai_Dau,Lich_Thi_Dau) VALUES (7, 116, 105, 1, '2-1', 1,'2020-09-26 20:00:00');
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,Ti_So,GIAI_DAU_ID_Giai_Dau,Lich_Thi_Dau) VALUES (8, 118, 103, 1, '0-2', 1,'2020-09-28 20:00:00');
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,Ti_So,GIAI_DAU_ID_Giai_Dau,Lich_Thi_Dau) VALUES (9, 102, 114, 1,'3-2', 1,'2020-09-30 20:00:00');
INSERT tran_dau ( ID_Tran_Dau,DOI_BONG_ID_Doi_Bong_1,DOI_BONG_ID_Doi_Bong_2,Vong_Dau,Ti_So,GIAI_DAU_ID_Giai_Dau,Lich_Thi_Dau) VALUES (10, 106, 101, 1, '1-0', 1,'2020-10-4 20:00:00');

select * from tran_dau;

-- KET QUA TRAN DAU 
INSERT ket_qua_tran_dau (Ten_Doi_Thang,Ten_Doi_thua,TRAN_DAU_ID_Tran_Dau,TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,TRAN_DAU_GIAI_DAU_ID_Giai_Dau ) VALUES ('Fulham','Norwich City',1,112,111,1);
INSERT ket_qua_tran_dau (Ten_Doi_Thang,Ten_Doi_thua,TRAN_DAU_ID_Tran_Dau,TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,TRAN_DAU_GIAI_DAU_ID_Giai_Dau ) VALUES ('Queens Park Rangers','Swansea City',2,120, 109,1);
INSERT ket_qua_tran_dau (Ten_Doi_Thang,Ten_Doi_thua,TRAN_DAU_ID_Tran_Dau,TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,TRAN_DAU_GIAI_DAU_ID_Giai_Dau ) VALUES ('Reading','Stoke City',3,119, 113,1);
INSERT ket_qua_tran_dau (Ten_Doi_Thang,Ten_Doi_thua,TRAN_DAU_ID_Tran_Dau,TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,TRAN_DAU_GIAI_DAU_ID_Giai_Dau ) VALUES ('West Bromwich Albion','Liverpool',4,108, 107,1);
INSERT ket_qua_tran_dau (Ten_Doi_Thang,Ten_Doi_thua,TRAN_DAU_ID_Tran_Dau,TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,TRAN_DAU_GIAI_DAU_ID_Giai_Dau ) VALUES ('West Ham United','Aston Villa',5, 110, 115,1);
INSERT ket_qua_tran_dau (Ten_Doi_Thang,Ten_Doi_thua,TRAN_DAU_ID_Tran_Dau,TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,TRAN_DAU_GIAI_DAU_ID_Giai_Dau ) VALUES ('Arsenal','Sunderland',6,104, 117,1);
INSERT ket_qua_tran_dau (Ten_Doi_Thang,Ten_Doi_thua,TRAN_DAU_ID_Tran_Dau,TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,TRAN_DAU_GIAI_DAU_ID_Giai_Dau ) VALUES ('Newcastle United','Tottenham Hotspur',7,116, 105,1);
INSERT ket_qua_tran_dau (Ten_Doi_Thang,Ten_Doi_thua,TRAN_DAU_ID_Tran_Dau,TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,TRAN_DAU_GIAI_DAU_ID_Giai_Dau ) VALUES ('Wigan Athletic','Chelsea',8,118, 103,1);
INSERT ket_qua_tran_dau (Ten_Doi_Thang,Ten_Doi_thua,TRAN_DAU_ID_Tran_Dau,TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,TRAN_DAU_GIAI_DAU_ID_Giai_Dau ) VALUES ('Manchester City','Southampton',9,102, 114,1);
INSERT ket_qua_tran_dau (Ten_Doi_Thang,Ten_Doi_thua,TRAN_DAU_ID_Tran_Dau,TRAN_DAU_DOI_BONG_ID_Doi_Bong_1,TRAN_DAU_DOI_BONG_ID_Doi_Bong_2,TRAN_DAU_GIAI_DAU_ID_Giai_Dau ) VALUES ('Everton','Manchester United',10,106, 101,1);
select * from ket_qua_tran_dau;


-- LOAI BAN THANG
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 1,'A');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 2,'A');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 3,'A');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 4,'A');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 5,'A');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 6,'A');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 7,'A');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 8,'A');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 9,'A');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 10,'B');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 11,'B');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 12,'B');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 13,'B');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 14,'B');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 15,'B');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 16,'B');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 17,'B');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 18,'B');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 19,'B');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 20,'C');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 21,'C');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 22,'C');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 23,'C');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 24,'C');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 25,'C');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 26,'C');
INSERT loai_ban_thang ( ID_Loai_Ban_Thang,Ten_LBT) VALUES ( 27,'C');

select * from loai_ban_thang;
-- GHI BAN 
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (1, 1, 50, 1100,1);
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (2, 1, 48, 1106,2);
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (3, 1, 72, 1100,3 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (4, 1, 64, 1106,4);
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (5, 1, 52, 1089, 5);
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (6, 2,  7, 1358, 6);
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (7, 2, 37, 1358, 7);
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (8, 2, 48, 1357, 8);
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (9, 2, 37, 1357, 9);
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (10, 2, 21, 1350, 10);
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (11, 3, 87, 1266,11 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (12, 3, 62, 1299,12 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (13, 4, 83, 1408,13 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (14, 4, 89, 1408,14 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (15, 4, 75, 1408,15 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (16, 5, 20, 1416,16 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (17, 7, 71, 1184,17 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (18, 7, 18, 1175,18 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (19, 7, 24, 1382,19 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (20, 8, 4, 1068,20 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (21, 8, 21, 1057,21 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (22, 9, 29, 1134,22 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (23, 9, 82, 1133,23 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (24, 9, 56, 1133,24 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (25, 9, 79, 1279,25 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (26, 9, 13, 1294,26 );
INSERT ghi_ban ( ID_Ghi_Ban,KET_QUA_TRAN_DAU_TRAN_DAU_ID_Tran_Dau,Thoi_diem,ID_Cau_Thu,LOAI_BAN_THANG_ID_Loai_Ban_Thang) VALUES (27, 10, 23, 1072,27 );

select * from ghi_ban;

-- USER
INSERT user ( ID_User,Password,Email,Ten_User,Ngay_Sinh,Phone,Role) VALUES ( 1,'123','abc.gmail.com','Hoaiminh','2002-1-2','0123456789','Quan ly');
INSERT user ( ID_User,Password,Email,Ten_User,Ngay_Sinh,Phone,Role) VALUES ( 2,'321','xyz.gmail.com','Vietpham','2002-2-28','9758734931','Quan ly');

SELECT EXISTS(SELECT 1 FROM mysql.user WHERE user = 'username')
