
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
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `nmr_dossier_sm` int NOT NULL AUTO_INCREMENT,
  `type_de_prestation` varchar(200) DEFAULT NULL,
  `objet` varchar(200) DEFAULT NULL,
  `date_de_lancement_sm` date DEFAULT NULL,
  `date_douverture_sm` date DEFAULT NULL,
  `observation_sm` varchar(200) DEFAULT NULL,
  `fournisseur` varchar(200) DEFAULT NULL,
  `date_de_transmission_au_scm` date DEFAULT NULL,
  `decision_sm` varchar(200) DEFAULT NULL,
  `nmr_de_convention` varchar(200) DEFAULT NULL,
  `responsable_de_dossier_sm` varchar(200) DEFAULT NULL,
  `duree_de_traitement_de_dossier_sm` date DEFAULT NULL,
  `nmr_dossier_scm` int DEFAULT NULL,
  `date_de_reception_scm` date DEFAULT NULL,
  `responsable_dossier_scm` varchar(200) DEFAULT NULL,
  `decision_scm` varchar(200) DEFAULT NULL,
  `observation_scm` varchar(200) DEFAULT NULL,
  `nmr_facture_proforma_scm` varchar(200) DEFAULT NULL,
  `date_facture_proforma_scm` date DEFAULT NULL,
  `montant_scm` double DEFAULT NULL,
  `nmr_bon_commande` varchar(200) DEFAULT NULL,
  `date_du_bon_commande` date DEFAULT NULL,
  `date_de_reception_de_la_prestation` date DEFAULT NULL,
  `nmr_facture_difinitive_scm` varchar(200) DEFAULT NULL,
  `nmr_de_bon_de_reception_scm` varchar(200) DEFAULT NULL,
  `date_denvoi_au_sb` date DEFAULT NULL,
  `duree_de_traitement_dossier_scm` date DEFAULT NULL,
  `nmr_dossier_sb` int DEFAULT NULL,
  `date_de_reception_sb` date DEFAULT NULL,
  `responsable_dossier_sb` varchar(200) DEFAULT NULL,
  `observation_sb` varchar(200) DEFAULT NULL,
  `date_dengagement_au_cf` date DEFAULT NULL,
  `motif_de_rejet_eventuel_sb` varchar(200) DEFAULT NULL,
  `date_de_Visa_ou_rejet_definitif_du_controleur_financier` date DEFAULT NULL,
  `date_de_mandatement` date DEFAULT NULL,
  `date_de_transmission_au_ac` date DEFAULT NULL,
  `duree_de_traitement_dossier_sb` date DEFAULT NULL,
  `nmr_dossier_ac` int DEFAULT NULL,
  `date_reception_ac` date DEFAULT NULL,
  `responsable_dossier_ac` varchar(200) DEFAULT NULL,
  `decision_acp_ou_rej_ac` varchar(45) DEFAULT NULL,
  `pieces_a_completer` varchar(200) DEFAULT NULL,
  `date_complement_dossier` date DEFAULT NULL,
  `date_de_paiment_ac` date DEFAULT NULL,
  `observation_ac` varchar(500) DEFAULT NULL,
  `duree_de_traitement_ac` date DEFAULT NULL,
  `observation_generales` varchar(45) DEFAULT NULL,
  `servicescol` varchar(45) DEFAULT NULL,
  `cbn` int DEFAULT NULL,
  `duree1` int DEFAULT NULL,
  `duree2` int DEFAULT NULL,
  `duree3` int DEFAULT NULL,
  `duree4` int DEFAULT NULL,
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `march_cmnde` varchar(200) DEFAULT NULL,
  `cmnde_budget` varchar(45) DEFAULT NULL,
  `budget_compt` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`nmr_dossier_sm`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (1,'marche1','objt1','2021-07-06','2021-06-06','rmrq1','frnsr','2021-07-07','dec1','888','respo1','2021-07-25',1,'2021-07-06','respo1','dec1','obsrv','65','2021-07-16',35186,'88','2021-07-15','2021-07-15','889','655','2021-07-23','2021-07-15',1,'2021-07-06','saad','rmrq1','2021-07-14','bieen','2021-07-23','2021-07-09','2021-07-31','2021-07-10',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,20,10,5,5,'2021-07-06 08:10:18','2021-07-06 09:11:20.758','2021-07-06 09:12:33.157','2021-07-06 09:22:45.913'),(2,'marche1','obnjt2','2021-07-06','2021-06-06','rmrq','frnsr','2021-07-09','dec1','8897','respo2','2021-07-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,20,10,5,5,'2021-07-06 08:13:08','2021-07-06 09:13:38.340',NULL,NULL),(3,'marche1','objt3','2021-07-06','2021-06-06','obsrv','frnsr3','2021-07-29','dec1','64568','respo3','2021-07-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,20,10,5,5,'2021-07-06 08:13:49','2021-07-06 09:14:55.542',NULL,NULL),(4,'marche1','objt4','2021-07-06','2021-06-06','rmrq4','frnsr','2021-07-14','dec1','65178','respo4','2021-07-25',4,'2021-07-06','moi meme','dec1','ca marche','6248','2021-07-17',62488,'546555','2021-07-28','2021-07-30','45154','45154','2021-07-24','2021-07-15',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,20,10,5,5,'2021-07-06 08:13:52','2021-07-06 09:15:26.630',NULL,NULL),(5,'marche1','objt5','2021-07-06','2021-06-06','rmrq5','frnnsr5','2021-07-10','dec1','65145','respo5','2021-07-25',5,'2021-07-06','respood','dec1','rmrq','6848','2021-07-24',615478,'8578','2021-07-23','2021-07-28','65185','8489','2021-07-18','2021-07-15',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,20,10,5,5,'2021-07-06 08:13:54','2021-07-06 09:15:59.608','2021-07-06 09:19:45.129',NULL),(6,'marche1','objt6','2021-07-06','2021-06-06','obsrv6','frnsr6','2021-07-10','dec1','654798','respo6','2021-07-25',6,'2021-07-06','hasni','dec1','rien','86478','2021-07-28',652458,'5458','2021-07-16','2021-07-22','517687','652688','2021-07-30','2021-07-15',6,'2021-07-06','morad','supeer','2021-07-17','rien','2021-07-15','2021-07-16','2021-07-23','2021-07-10',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,20,10,5,5,'2021-07-06 08:14:10','2021-07-06 09:16:59.572','2021-07-06 09:20:45.008','2021-07-06 09:23:19.794'),(7,'marche1','objt7','2021-07-06','2021-06-06','rmrq7','frnsr7','2021-07-08','dec1','62478','respo7','2021-07-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,20,10,5,5,'2021-07-06 08:14:24','2021-07-06 09:17:31.636',NULL,NULL),(8,'marche1','objt8','2021-07-06','2021-06-06','rmrq8','frnsr','2021-07-08','dec1','65289','respo8','2021-07-25',8,'2021-07-06','morad','dec1','ca marche ','562488','2021-07-23',3488,'62188','2021-07-16','2021-07-22','2488','62348','2021-07-24','2021-07-15',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,20,10,5,5,'2021-07-06 08:14:28','2021-07-06 09:18:00.654',NULL,NULL),(9,'marche2','ceci','2021-07-06','2021-06-06','genial','larbi','2021-07-07','dec1','8789','meriem','2021-07-25',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10,5,10,5,'2021-07-06 08:24:08',NULL,NULL,NULL),(10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,20,10,5,5,'2021-07-06 08:25:21',NULL,NULL,NULL),(11,'marche2','objet','2021-07-06','2021-06-06','bien','saadou','2021-07-17','dec1','889878','saad','2021-07-25',11,'2021-07-06','saad','dec1','rien','27988488','2021-07-09',7488,'2418','2021-07-06','2021-07-30','4888','48488','2021-07-29','2021-07-15',11,'2021-07-06','respo','bien','2021-07-14','rien','2021-07-17','2021-07-07','2021-07-28','2021-07-10',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,20,10,5,5,'2021-07-06 10:58:23','2021-07-06 12:05:48.330','2021-07-06 12:09:16.371',NULL),(12,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,20,10,5,5,'2021-07-06 11:17:32',NULL,NULL,NULL);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
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
