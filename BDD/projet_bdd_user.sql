
USE projet_bdd;
-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: projet_bdd
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id_user` tinyint NOT NULL AUTO_INCREMENT,
  `nom` varchar(16) NOT NULL,
  `prenom` varchar(16) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `service` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Zoumata','Hasni','admin@esi.dz','$2a$08$mPZjPoRWngcKMwo82IeTZuybxF8lfU1OoK/HkrgkiYge82wLqf8Wa','admin','modifier','2021-06-29 03:25:54'),(19,'Dahmani','Saad','marche@esi.dz','$2a$08$mYavhrQynU47jhfLfLHoUuxTGwNaicfLxz/jVpCMDwT3x8S9nYBkm','marche','modifier','2021-07-05 23:31:51'),(20,'Larbi','Morad','commande@esi.dz','$2a$08$9vckuaFIIcw30WuBOoT96uoKnk.4LKd4I8RcpZ5OWJLYGq2o93XGG','commande','modifier','2021-07-05 23:32:31'),(21,'Khedir','Meriem','budget@esi.dz','$2a$08$lvsAIFtj2.DA2LLsv9thAOj.5VblHVcgGHOCuVUYV0o1M/A79905S','budget','modifier','2021-07-05 23:33:15'),(22,'Soltani','Meriem','ordonnateur@esi.dz','$2a$08$Fj8og7r8moDb/quSAvjEW.igHnz2d1I/eyYVjrU5aAxHIrpYJVhP2','ordonnateur','modifier','2021-07-05 23:33:37'),(29,'Dahmani','Saad','marche2@esi.dz','$2a$08$wL2dDsKN7r0u1uaz1zp.TO1Cd9fyqbssLHBjnkUVFSGv/I7Km5ple','marche','consulter','2021-07-06 08:32:16'),(30,'Zoumata','Hasni','comptable2@esi.dz','$2a$08$SeNpA95BCWcU.u9tVsCFyOo4.Anq8Xes56nYRo6cn2tYykZpZMfCC','comptable','consulter','2021-07-06 08:32:41');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-18  1:34:19
