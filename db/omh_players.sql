-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: omh
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `player_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `watchtower` varchar(50) DEFAULT NULL,
  `march_power` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `rank_alliance` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`player_id`)
) ENGINE=InnoDB AUTO_INCREMENT=177 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (85,'Ozzie','I5','569M','Fighter','2026-01-22 16:46:06','R5'),(86,'Bindyy','I4','567M','Fighter','2026-01-22 16:46:06','R4'),(87,'BishopJJ','I3','362M','Fighter','2026-01-22 16:46:06','R3'),(88,'Clover','I3','410M','Rider','2026-01-22 16:46:06','R4'),(89,'Crazy Phuc','I6','1.2G','Fighter','2026-01-22 16:46:06','R4'),(90,'Danger Rider','I4','648M','Rider','2026-01-22 16:46:06','R4'),(91,'Darksylvanas','I5','619M','Fighter','2026-01-22 16:46:06','R4'),(92,'EchoOne','I5','1G','Fighter','2026-01-22 16:46:06','R4'),(93,'Killua','I4','756M','Fighter','2026-01-22 16:46:06','R4'),(94,'LUNE','I8','2.22G','Rider','2026-01-22 16:46:06','R4'),(95,'Malika','I4','312M','Rider','2026-01-22 16:46:06','R4'),(96,'Vadge','I3','365M','Fighter','2026-01-22 16:46:06','R4'),(97,'Aboninho','I5','675M','Fighter','2026-01-22 16:46:06','R3'),(98,'AcidBurn111','I3','189M','Fighter','2026-01-22 16:46:06','R2'),(99,'Adnama','I4','349M','Fighter','2026-01-22 16:46:06','R2'),(100,'Ameera ChaoS','I2','143M','Fighter','2026-01-22 16:46:06','R3'),(101,'AndyBrandy','I3','364M','Rider','2026-01-22 16:46:06','R2'),(102,'asleep1','I4','524M','Fighter','2026-01-22 16:46:06','R3'),(103,'BOPEE','I3','573M','Fighter','2026-01-22 16:46:06','R3'),(104,'Bullii','I3','257M','Shooter','2026-01-22 16:46:06','R2'),(105,'Calixto','I4','673M','Fighter','2026-01-22 16:46:06','R3'),(106,'Croot','I2','183M','Unknown','2026-01-22 16:46:06','R2'),(107,'dante08','I3','-','Unknown','2026-01-22 16:46:06','R3'),(108,'El Intrepido','I3','319M','Fighter','2026-01-22 16:46:06','R2'),(109,'Fat Of Steel','I4','564M','Rider','2026-01-22 16:46:06','R2'),(110,'FoolishGoose','I3','-','Unknown','2026-01-22 16:46:06','R2'),(111,'Furia BR','I3','242M','Fighter','2026-01-22 16:46:06','R2'),(112,'ger1122','I2','162M','Unknown','2026-01-22 16:46:06','R2'),(113,'InXs19','I3','416M','Shooter','2026-01-22 16:46:06','R3'),(114,'Justin Bober','I4','318M','Rider','2026-01-22 16:46:06','R3'),(115,'KevG','I4','475M','Fighter','2026-01-22 16:46:06','R3'),(116,'KiINGFLOKII','I5','576M','Fighter','2026-01-22 16:46:06','R3'),(117,'Kimi917','I3','448M','Shooter','2026-01-22 16:46:06','R3'),(118,'Knockoff','I5','712M','Fighter','2026-01-22 16:46:06','R1'),(119,'KOOPA','I4','434M','Rider','2026-01-22 16:46:06','R3'),(120,'LEEBUZZS','I3','516M','Fighter','2026-01-22 16:46:06','R3'),(121,'LOOPY1','I3','408M','Fighter','2026-01-22 16:46:06','R3'),(122,'Lowtide','I4','404M','Fighter','2026-01-22 16:46:06','R3'),(123,'Marius89','I4','660M','Fighter','2026-01-22 16:46:06','R3'),(124,'MaxxxxxxxB','I3','367M','Rider','2026-01-22 16:46:06','R3'),(125,'mini Porg','I2','409M','Unknown','2026-01-22 16:46:06','R2'),(126,'MQ1','I3','-','Unknown','2026-01-22 16:46:06','R2'),(127,'PaddyLast','I2','-','Unknown','2026-01-22 16:46:06','R3'),(128,'PENNYWISE','I2','116M','Unknown','2026-01-22 16:46:06','R2'),(129,'Prasi','I3','493M','Fighter','2026-01-22 16:46:06','R3'),(130,'princessxenna','I3','419M','Unknown','2026-01-22 16:46:06','R3'),(131,'Deno','I3','556M','Fighter','2026-01-22 16:46:06','R3'),(132,'ROBERT','I4','140M','Unknown','2026-01-22 16:46:06','R2'),(133,'SAYANG76','I3','-','Unknown','2026-01-22 16:46:06','R3'),(134,'SIR JB','I4','700M','Fighter','2026-01-22 16:46:06','R3'),(135,'Sonata90','I3','202M','Unknown','2026-01-22 16:46:06','R3'),(136,'Stefira','I6','1.28G','Fighter','2026-01-22 16:46:06','R3'),(137,'SuperMaman20','I4','651M','Fighter','2026-01-22 16:46:06','R3'),(138,'Swatt101','I6','-','Fighter','2026-01-22 16:46:06','R1'),(139,'TibbaR1','I2','126M','Unknown','2026-01-22 16:46:06','R3'),(140,'Tommyboy','I4','-','Fighter','2026-01-22 16:46:06','R3'),(141,'Touche','I4','648M','Fighter','2026-01-22 16:46:06','R2'),(142,'Vitaaa','I1','109M','Unknown','2026-01-22 16:46:06','R3'),(143,'Yawnn','I4','264M','Rider','2026-01-22 16:46:06','R2'),(144,'Yurka7','I5','773M','Rider','2026-01-22 16:46:06','R3'),(145,'Yuu Ishigami','I4','841M','Rider','2026-01-22 16:46:06','R3'),(146,'BOUNCE','I2','-','Fighter','2026-01-22 16:46:06','R1'),(147,'Diessio','I4','355M','Fighter','2026-01-22 16:46:06','R1'),(148,'elcoch','I2','-','Unknown','2026-01-22 16:46:06','R2'),(149,'Fernando SP','I2','-','Unknown','2026-01-22 16:46:06','R2'),(150,'FOX D ZEBIK','I4','436M','Rider','2026-01-22 16:46:06','R3'),(151,'Ghost757','I3','232M','Fighter','2026-01-22 16:46:06','R2'),(152,'GuicanCity','I3','359M','Unknown','2026-01-22 16:46:06','R3'),(153,'GVesselsBlxkLegal','I2','-','Unknown','2026-01-22 16:46:06','R2'),(154,'H9','I1','-','Unknown','2026-01-22 16:46:06','R2'),(155,'Ghost Rouge','I2','106M','Fighter','2026-01-22 16:46:06','R2'),(156,'LadyAnie','I2','-','Unknown','2026-01-22 16:46:06','R2'),(157,'Marialexa','I2','225M','Unknown','2026-01-22 16:46:06','R2'),(158,'MiphiasaihpiM','I4','465M','Shooter','2026-01-22 16:46:06','R2'),(159,'MR-BJ','I2','65M','Unknown','2026-01-22 16:46:06','R2'),(160,'Sobolanuu','I3','-','Unknown','2026-01-22 16:46:06','R2'),(161,'AHMED 89','I1','-','Unknown','2026-01-22 16:46:06','R1'),(162,'Dark Joe','I2','-','Unknown','2026-01-22 16:46:06','R1'),(163,'j s f','I3','205M','Unknown','2026-01-22 16:46:06','R1'),(164,'Eltzy','I2','349M','Fighter','2026-01-22 16:46:06','R1'),(165,'Robsaetre','I2','162M','Unknown','2026-01-22 16:46:06','R2'),(167,'TURKI','I2','115M','Unknown','2026-01-22 16:49:33','R2'),(169,'HeatX','I1','167M','FIghter','2026-01-23 08:32:31','R2'),(170,'Evostein','I1','-','Fighter','2026-01-27 11:37:58','R3'),(171,'Sophia Grace','I2','-','Fighter','2026-02-04 15:55:48','R2'),(172,'Nixy','I3','-','Fighter','2026-02-04 15:56:52','R1'),(173,'HolymyBeer','I2','-','Fighter','2026-02-04 15:59:03','R1'),(174,'Tigerpack','I1','-','Fighter','2026-02-06 16:59:43','R1'),(175,'gogo0362','I1','-','Fighter','2026-02-06 17:58:44','R1'),(176,'Yns4644','I1','-','Fighter','2026-02-06 19:01:26','R1');
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-02-11  8:01:14
