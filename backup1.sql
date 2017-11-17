-- MySQL dump 10.13  Distrib 5.7.18, for osx10.12 (x86_64)
--
-- Host: localhost    Database: hoppy_reviews
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `brew_name` varchar(255) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'Dallas Best','Community Beer Company','The process of re-inventing itself is well underway and very visible as there are many new retail stores, restaurants, cocktail bars and coffee shops in the area. And in this day of \"out with the old and in with the new\" it\'s refreshing to see these places are reusing existing space.  While the insides are largely gutted/updated the original walls and foundation are reused.  ',8),(2,'Love Pat\'s Brew House','Braindead Brewing',' came here with 2 of my friends on a Friday night around 6:30pm. Our first stop was Cane Russo for some dinner and dessert pizzas (which was delicious, by the way!) and then decided to walk around the area. Deep Ellum is known for its culture and artwork so there\'s a ton artsy murals around. \nWhile walking around after dinner, we saw a cute dance stage set up with couples dancing. It was such a nice event and really such a great end to the night.',8),(3,'Big Easy','Penticolas Brewing','They had some really cool iconic architecture and sculptures that took a little while to actually locate, but I was determined to find them. I even found plenty of  hidden gems as well. They have a incredible amount of street art including graffiti work and wall murals. You want to check out Deep Ellum when your in the Dallas area! They have lots of engaging visual art pieces, dining and shops. I know I\'ll be back.',7),(4,'Third Refiew','Nobel Ray Brewing','Why only 4 and not 5 stars - because this place is getting \"gentrified\" like a set of brownstones in Harlem   That fact will turn this place into a stuffy and snooty area.  Pretentiousness will soon be the norm.  Rent is going up and just like in Austin, Harlem, NYC, etc - artists, musicians, artisans, laid back cool folk, etc are getting priced out.',10),(5,'Less Filling','Oak Highlands Brewery','I felt completely safe and comfortable here with my kiddos. Lots to see and nosh on, but I would love to visit at night with hubs for some\ndin and bar hopping. If I ever find myself in Dallas again, DE is definitely on my list of places to hit up. (again). \n\nParking wasn\'t found immediately during the festival which I can safely assume is one of the more difficult times, but we weren\'t in a rush and very much enjoyed the slow circling. There were a few lots also.',5),(6,'I love brew','Texas Ale Project','There\'s a great amount of music venues which I loved. We could enjoy lots of them just walking down the street! I can imagine a night out here is a fun, easy one as you can just walk to the next unique little spot. This section of the city has a lot of interesting little bars, and even their own brewery! Lost of semi open restaurants and coffee joints which I love too! And we can\'t forget the oh so popular Glazed Donuts. That\'s  a hot spot! Line down the block!\n',9),(7,'McKinney Finest','On Rotation','You will always catch live music and even karaoke singers on the street screaming their hearts out on their favorite song. I notice places like Trees, Green Room, Piano Bar & Glazed Dounts have lines wrapped outside the doors. Mostly on weekends.... \n\nYou will normally see plenty of Dallas police around which makes you feel a little safe. As it tends to get really packed on the weekends.  ',10),(8,'My App is Working!','Lone Star Taps & Caps','Observe the people, have fun and interact!\n\nMy only reason for less than 5 stars is parking.  It can be hit and miss. I\'ve driven around for quite a while in the past and felt I was just overly lucky this trip.',10),(10,'This place is over priced','Bishop Cider Company','This is a fun neighborhood, Exclamation Point!  Be it the bars, the restaurants, the people watching, the music act watching, \n\nMy last trip was to grab a donut from my favorite late night donut shop on the way home.  I got lucky and snagged a spot right outside the door.  Deep Ellum is not a boring area and neither is this donut shop or their works of art. ',2),(11,'Thirsty Thursdays','Deep Ellum','Luckily to my surprise this place has picked back up and there are a lot of new places and coffee shops that have piped up. I love seeing a lot of artistic stuff and the vive is definitely nice. I did not get a chance to check out a few of the spots that I have booked marked but I am looking forward to my next trip back soon to Texas. ',9),(12,'Starbucks of Beer','Four Corners Brewing Company','Amazing art work adorning the walls of EVERY building and some of my fave restaurants down there. I particularly enjoy partaking in the monthly wine walks during the summer (third Thursday of the month), because it is such a great way to meet new people and meet the merchants of the participating stores. Great casual vibe. The bars and clubs on the weekends are great to go hopping around - usually there is no cover to any that I can think of',7),(13,'Texas Best Brewery','Deep Ellum','I lived in Deep Ellington neighborhood back in 2008-2009 and it was quite nice, but not as safe at night. There was a lot t of people under the Bruges and asking for money or just laying on the ground of unoccupied buildings. Plus lots of business had closed down. ',7);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-11-17 14:46:23
