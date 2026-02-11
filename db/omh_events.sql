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
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `event_id` int NOT NULL AUTO_INCREMENT,
  `name_event` varchar(100) DEFAULT NULL,
  `event_date` date DEFAULT NULL,
  `team` varchar(10) DEFAULT NULL,
  `tier_event` enum('Urgent','Normal','Special') DEFAULT 'Normal',
  `total_participation` int DEFAULT NULL,
  `season` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (11,'Black Gold Battle - Team A','2026-01-06','Team A','Normal',14,5,'2026-02-06 08:31:18'),(12,'Black Gold Battle - Team B','2026-02-06','Team B','Normal',17,5,'2026-02-06 09:15:33'),(13,'Frank - 18 GT','2026-01-08','-','Normal',49,5,'2026-02-06 11:20:12'),(14,'Frank - 12 GT','2026-01-12','-','Normal',53,5,'2026-02-06 11:33:15'),(15,'Frank - 15 GT','2026-01-15','-','Normal',58,5,'2026-02-06 11:59:43'),(16,'Capital Clash - OMH Take Capital','2025-12-27','-','Urgent',26,5,'2026-02-06 13:30:51'),(17,'Week - 1 Contribute Soul Scramble','2025-12-23','-','Urgent',42,5,'2026-02-06 14:33:55'),(18,'Week - 2 Contribute Soul Scramble','2025-12-30','-','Urgent',29,5,'2026-02-06 14:57:59'),(19,'Week - 3 Contribute Soul Scramble','2026-01-06','-','Urgent',34,5,'2026-02-06 15:05:12'),(20,'Week - 4 Contribute Soul Scramble','2026-01-20','-','Urgent',43,5,'2026-02-06 15:11:55'),(21,'Capital Clash','2026-01-03','-','Normal',23,5,'2026-02-06 15:21:27'),(22,'AvA - Silver League','2026-01-02','-','Normal',86,5,'2026-02-06 16:08:19'),(23,'Frank - 18 GT','2026-01-18','-','Normal',56,5,'2026-02-06 16:40:46'),(24,'Frank - 1 GT','2026-01-20','-','Normal',49,5,'2026-02-06 17:54:56'),(25,'Frank - 18 GT','2026-01-24','-','Normal',51,5,'2026-02-06 18:46:08'),(26,'Capital Clash','2026-01-24','-','Normal',23,5,'2026-02-06 19:11:16'),(27,'Frank 1 GT','2026-01-29','-','Normal',63,5,'2026-02-06 19:20:59'),(28,'Black Gold Battle - (Team B)','2025-01-18','Team B','Normal',17,5,'2026-02-06 19:43:11'),(29,'Black Gold Battle - (Team A)','2024-01-18','Team A','Normal',36,5,'2026-02-06 19:52:51'),(30,'AvA - Silver League','2026-02-02','-','Special',92,5,'2026-02-06 20:22:39'),(31,'Frank - 1 GT','2026-02-01','-','Normal',59,5,'2026-02-07 04:21:17'),(32,'Frank - 18 GT','2026-02-04','-','Normal',58,5,'2026-02-07 05:06:45'),(33,'Black Gold Battle - Team B','2026-02-01','Team B','Normal',11,5,'2026-02-07 06:09:38'),(34,'Black Gold Battle - Team A','2026-02-01','Team A','Normal',20,5,'2026-02-07 06:16:19'),(35,'Frank - 18 GT','2026-08-02','-','Normal',49,5,'2026-02-08 16:30:30'),(36,'AvA - Gold League','2026-02-07','-','Special',92,5,'2026-02-08 16:57:28'),(37,'State of Supremacy - War','2026-02-08','-','Special',28,5,'2026-02-08 18:39:42'),(38,'Capital Clash','2026-02-08','-','Normal',99,5,'2026-02-08 18:50:55'),(39,'Frank - 10 GT','2026-02-10','-','Normal',56,5,'2026-02-10 04:40:25'),(40,'Contribution Tech','2026-02-09','-','Normal',91,5,'2026-02-10 07:36:19');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
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
