-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: myorganizer
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userno` int NOT NULL AUTO_INCREMENT,
  `username` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `userpassword` varchar(8) NOT NULL,
  PRIMARY KEY (`username`,`userno`),
  UNIQUE KEY `userno` (`userno`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (25,'Amarachi','okoamarachi7@gmail.com','amarachi'),(6,'Anita','anitaezenwa@yahoo.com','nitarita'),(13,'Benedeto','benedettoasp@gmail.com','spagnol0'),(2,'Gregory22','jonah.greg@gmail.com','gregory2'),(9,'Helishah','Elisarikki@gmail.com','helishah'),(18,'Hope','hopenunn@gmail.com','hope9999'),(37,'Jamey','jamesholland@gmail.com','Jamey88.'),(19,'Jason','jasonhusman@gmail.com','jason987'),(20,'Jessica','jessicaosas@gmail.com','jessy123'),(7,'Jessy Bby','jessyjes@gmail.com','1234ttii'),(15,'Joanna Retty','joannaretty@gmail.com','retty665'),(24,'John','johnthebest@yahoo.com','johnny34'),(16,'Kola','kolanutty@gmail.com','naijacon'),(1,'Laura','laura.brusco@stu.cu.edu.ng','laura123'),(23,'Light','lightenluce@gmail.com','luce0oo0'),(36,'Lila','lilacpurple@gmail.com','Lilac56<'),(35,'Lisa','bruslisa15q@gmail.com','lotussut'),(17,'Love','lovaintheair@gmail.com','lavarair'),(22,'Lynch','rosslinch@gmail.com','yeahnope'),(14,'Mattie','Matildeyours@gmail.com','mattieur'),(21,'Miracle','treasuredmiracles@gmail.com','miratrea'),(5,'Nick','nicholas@gmail.com','nicholas'),(11,'Olamide','olamid67e@yahoo.com','67olaplu'),(4,'Ritar','ritaedochiee@gmail.com','Ritabby2'),(12,'Sera0','seraat20@gmail.com','sera1987'),(10,'The King','theking334@gmail.com','royal334'),(8,'Victor','victorthebest@gmail.com','The7Best'),(38,'Vincent','vincent98john@gmail.com','vinceN8.');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-11 11:53:03
