SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema rental_movie_4All
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema rental_movie_4All
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rental_movie_4All` DEFAULT CHARACTER SET utf8 ;
USE `rental_movie_4All` ;

-- -----------------------------------------------------
-- Table `rental_movie_4All`.`Movie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rental_movie_4All`.`Movie` (
  `idMovie` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(150) NOT NULL,
  `Director` VARCHAR(100) NOT NULL,
  `Copy_Number` INT NULL,
  PRIMARY KEY (`idMovie`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rental_movie_4All`.`Customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rental_movie_4All`.`Customer` (
  `idCustomer` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(150) NOT NULL,
  `Password` VARCHAR(50) NOT NULL,
  `Email` VARCHAR(150) NOT NULL,
  PRIMARY KEY (`idCustomer`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rental_movie_4All`.`Rental`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rental_movie_4All`.`Rental` (
  `idRental` INT NOT NULL AUTO_INCREMENT,
  `idMovie` INT NOT NULL,
  `idCustomer` INT NOT NULL,
  `Delivery` BIT(1) NULL,
  PRIMARY KEY (`idRental`),
  CONSTRAINT `fk_Rental_Movie`
    FOREIGN KEY (`idMovie`)
    REFERENCES `rental_movie_4All`.`Movie` (`idMovie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Rental_Customer1`
    FOREIGN KEY (`idCustomer`)
    REFERENCES `rental_movie_4All`.`Customer` (`idCustomer`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Rental_Movie_idx` ON `rental_movie_4All`.`Rental` (`idMovie` ASC);

CREATE INDEX `fk_Rental_Customer1_idx` ON `rental_movie_4All`.`Rental` (`idCustomer` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
