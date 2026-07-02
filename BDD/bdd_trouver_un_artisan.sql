SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema trouver_un_artisan
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema trouver_un_artisan
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `trouver_un_artisan` DEFAULT CHARACTER SET utf8 ;
USE `trouver_un_artisan` ;

-- -----------------------------------------------------
-- Table `trouver_un_artisan`.`categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trouver_un_artisan`.`categories` ;

CREATE TABLE IF NOT EXISTS `trouver_un_artisan`.`categories` (
  `id_categories` INT NOT NULL AUTO_INCREMENT,
  `nom_categories` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_categories`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trouver_un_artisan`.`specialite`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trouver_un_artisan`.`specialite` ;

CREATE TABLE IF NOT EXISTS `trouver_un_artisan`.`specialite` (
  `id_specialite` INT NOT NULL AUTO_INCREMENT,
  `nom_specialite` VARCHAR(45) NOT NULL,
  `fk_categories_specialite` INT NOT NULL,
  PRIMARY KEY (`id_specialite`),
  INDEX `fk_specialite_categories_idx` (`fk_categories_specialite` ASC) VISIBLE,
  CONSTRAINT `fk_specialite_categories`
    FOREIGN KEY (`fk_categories_specialite`)
    REFERENCES `trouver_un_artisan`.`categories` (`id_categories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `trouver_un_artisan`.`artisans`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `trouver_un_artisan`.`artisans` ;

CREATE TABLE IF NOT EXISTS `trouver_un_artisan`.`artisans` (
  `id_artisans` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(45) NOT NULL,
  `note` DECIMAL(2,1) NOT NULL,
  `ville` VARCHAR(45) NOT NULL,
  `about` VARCHAR(255) NULL,
  `mail` VARCHAR(255) NOT NULL,
  `site` VARCHAR(100) NULL,
  `top` TINYINT NOT NULL,
  `fk_specialite_artisans` INT NOT NULL,
  PRIMARY KEY (`id_artisans`),
  INDEX `fk_artisans_specialite1_idx` (`fk_specialite_artisans` ASC) VISIBLE,
  CONSTRAINT `fk_artisans_specialite1`
    FOREIGN KEY (`fk_specialite_artisans`)
    REFERENCES `trouver_un_artisan`.`specialite` (`id_specialite`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
