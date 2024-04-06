-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : sam. 06 avr. 2024 à 10:09
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `SAE4_DWeb_DI_01`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Action'),
(2, 'Film d’animation'),
(3, 'Science-fiction'),
(4, 'Drame'),
(5, 'Super-héros'),
(6, 'Comédie'),
(7, 'Fantaisie');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20240315100545', '2024-03-18 18:39:47', 181),
('DoctrineMigrations\\Version20240315124333', '2024-03-18 18:39:48', 18),
('DoctrineMigrations\\Version20240315134527', '2024-03-18 18:39:48', 10),
('DoctrineMigrations\\Version20240318145448', '2024-03-18 18:39:48', 10),
('DoctrineMigrations\\Version20240318145824', '2024-03-18 18:39:48', 9),
('DoctrineMigrations\\Version20240318150508', '2024-03-18 18:39:48', 10),
('DoctrineMigrations\\Version20240318150657', '2024-03-18 18:39:48', 10),
('DoctrineMigrations\\Version20240327114837', '2024-03-27 11:48:42', 31),
('DoctrineMigrations\\Version20240327135846', '2024-03-27 13:58:53', 45),
('DoctrineMigrations\\Version20240327140301', '2024-03-27 14:03:07', 22),
('DoctrineMigrations\\Version20240327141955', '2024-03-27 14:19:57', 28),
('DoctrineMigrations\\Version20240328100336', '2024-03-28 10:03:41', 39),
('DoctrineMigrations\\Version20240404082030', '2024-04-04 08:20:35', 17),
('DoctrineMigrations\\Version20240404083315', '2024-04-04 08:33:20', 151),
('DoctrineMigrations\\Version20240404084027', '2024-04-04 08:40:32', 22),
('DoctrineMigrations\\Version20240404092329', '2024-04-04 09:23:35', 34),
('DoctrineMigrations\\Version20240404112452', '2024-04-04 11:24:58', 108),
('DoctrineMigrations\\Version20240404113729', '2024-04-04 11:37:32', 190),
('DoctrineMigrations\\Version20240404115550', '2024-04-04 11:55:57', 63),
('DoctrineMigrations\\Version20240404150323', '2024-04-04 15:03:28', 69),
('DoctrineMigrations\\Version20240404151616', '2024-04-04 15:16:21', 177);

-- --------------------------------------------------------

--
-- Structure de la table `movie`
--

CREATE TABLE `movie` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `realisateur` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `annee_sortie` int NOT NULL,
  `affiche_verticale` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `affiche_horizontale` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `trailer` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `duree` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `synopsis` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `mis_en_avant` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `movie`
--

INSERT INTO `movie` (`id`, `name`, `realisateur`, `annee_sortie`, `affiche_verticale`, `affiche_horizontale`, `trailer`, `duree`, `synopsis`, `mis_en_avant`) VALUES
(1, 'Interstellar', 'Christopher Nolan', 2014, 'interstellar_vertical.webp', 'interstellar_horizontal.webp', 'https://www.youtube.com/embed/HsPP6xSzQoE', '2h 49m', 'Dans un futur où la Terre est devenue inhospitalière, un groupe d\'explorateurs se lance dans un voyage intergalactique pour trouver une nouvelle planète habitable pour l\'humanité. Au cœur de cette odyssée spatiale épique, le film explore les liens familiaux, les dimensions temporelles et les mystères de l\'univers.', 1),
(2, 'Mon voisin Totoro', 'Hayao Miyazaki', 1988, 'mon-voisin-totoro_vertical.webp', 'mon-voisin-totoro_horizontal.webp', 'https://www.youtube.com/embed/bQPeA_ekBpc', '1h 26m', 'Deux jeunes sœurs découvrent un monde enchanté peuplé d\'esprits de la nature, incluant le doux et bienveillant Totoro, tandis qu\'elles vivent avec leur père dans la campagne japonaise, explorant ensemble un univers fantastique et surmontant les défis de la vie quotidienne.', 1),
(3, 'Le Château ambulant', 'Hayao Miyazaki', 2004, 'le-chateau-ambulant_vertical.webp', 'le-chateau-ambulant_horizontal.webp', 'https://www.youtube.com/embed/Bqt1_J4GUIc', '1h 59m', 'Une jeune femme nommée Sophie, transformée en vieille femme par une sorcière, trouve refuge dans un château ambulant appartenant au mystérieux sorcier Howl. Alors qu\'elle s\'adapte à sa nouvelle apparence, elle découvre les secrets de Howl et les enjeux d\'un conflit menaçant le royaume.', 1),
(4, '8 Mile', 'Curtis Hanson', 2002, '8mile_vertical.webp', '8mile_horizontal.webp', 'https://www.youtube.com/embed/f8qFwSBVRYQ', '1h 50m', 'Un jeune rappeur blanc du nom de Jimmy \"B-Rabbit\" Smith Jr., résidant dans un quartier ouvrier de Détroit, lutte pour trouver sa voix artistique et surmonter les obstacles de sa vie quotidienne, notamment la pauvreté, les relations compliquées et les rivalités dans le monde du rap, dans sa quête pour réaliser ses rêves.', 0),
(5, 'Spider-Man : No Way Home', 'Jon Watts', 2021, 'spider-man-no-way-home_vertical.webp', 'spider-man-no-way-home_horizontal.webp', 'https://www.youtube.com/embed/7w_w10HVa54', '2h 30m', 'Peter Parker cherche désespérément à effacer l\'identité de Spider-Man de tous les esprits, mais les choses tournent mal lorsqu\'il se retrouve confronté à des ennemis de son passé, provoquant un chaos multiversel et mettant à l\'épreuve ses liens avec ses alliés, y compris d\'autres versions de Spider-Man.', 0),
(6, 'Fast and Furious: Tokyo Drift', 'Justin Lin', 2006, 'fast-and-furious-tokyo-drift_vertical.webp', 'fast-and-furious-tokyo-drift_horizontal.webp', 'https://www.youtube.com/embed/p8HQ2JLlc4E', '1h 30m', 'Tokyo Drift marque un tournant dans la série Fast and Furious, se déroulant en grande partie au Japon et introduisant de nouveaux personnages et styles de course. Le film suit le jeune coureur de rue Sean Boswell alors qu\'il s\'aventure dans le monde des courses clandestines à Tokyo, apprenant les règles de la route et se mesurant aux meilleurs pilotes de la ville.', 0),
(7, 'Fast and Furious', 'Rob Cohen', 2001, 'fast-and-furious_vertical.webp', 'fast-and-furious_horizontal.webp', 'https://www.youtube.com/embed/2TAOizOnNPo', '1h 47m', 'Le premier film de la série Fast and Furious suit le coureur de rue et ex-détenu Dominic Toretto alors qu\'il recrute le policier Brian O\'Conner pour aider à voler des marchandises de valeur. La tension monte alors que Brian se rapproche de Dominic et de son équipe, mettant en jeu ses convictions et sa loyauté.', 0),
(8, '2 Fast 2 Furious', 'John Singleton', 2003, '2-Fast-2-Furious_vertical.webp', '2-Fast-2-Furious_horizontal.webp', 'https://www.youtube.com/embed/F_VIM03DXWI', '1h 40m', 'La suite de Fast and Furious voit Brian O\'Conner collaborer avec son ami d\'enfance Roman Pearce pour infiltrer le réseau de trafic de drogue d\'un criminel à Miami. Entre courses de rue et confrontations explosives, Brian et Roman doivent faire équipe pour démanteler le syndicat et sauver leurs peaux.', 0),
(9, 'Fast and Furious 4', 'Justin Lin', 2009, 'Fast-and-Furious-4_vertical.webp', 'Fast-and-Furious-4_horizontal.webp', 'https://www.youtube.com/embed/99XOxDLMvBg', '1h 40m', 'Dominic Toretto est de retour dans cette suite directe du premier film, affrontant des ennemis du passé alors qu\'il recherche la vengeance et la rédemption. Avec des courses de rue palpitantes et des scènes d\'action explosives, Fast and Furious 4 offre une dose d\'adrénaline ininterrompue.', 0),
(10, 'Fast and Furious 5', 'Justin Lin', 2011, 'Fast-and-Furious-5_vertical.webp', 'Fast-and-Furious-5_horizontal.webp', 'https://www.youtube.com/embed/CYV-mTqlI_g', '2h 10m', 'Dominic Toretto et son équipe se lancent dans une autre aventure à grande vitesse, cette fois au Brésil, alors qu\'ils planifient un dernier coup pour se retirer pour de bon. Avec des cascades époustouflantes et des moments d\'action épiques, Fast Five est un tour de force cinématographique.', 0),
(11, 'Fast and Furious 6', 'Justin Lin', 2013, 'Fast-and-Furious-6_vertical.webp', 'Fast-and-Furious-6_horizontal.webp', 'https://www.youtube.com/embed/Ewu0WTPbOVY', '2h 10m', 'Dominic Toretto et son équipe sont recrutés par l\'agent fédéral Luke Hobbs pour arrêter une organisation criminelle internationale menée par l\'impitoyable Owen Shaw. Avec des courses de rue spectaculaires et des combats d\'anthologie, Fast and Furious 6 repousse les limites de l\'action.', 0),
(12, 'Fast and Furious 7', 'James Wan', 2015, 'Fast-and-Furious-7_vertical.webp', 'Fast-and-Furious-7_horizontal.webp', 'https://www.youtube.com/embed/Wm3jXZhqj-I', '2h 20m', 'La franchise Fast and Furious atteint de nouveaux sommets d\'action et d\'émotion dans ce septième volet, marqué par la disparition tragique de l\'acteur principal Paul Walker. Avec des cascades à couper le souffle et un hommage touchant à l\'un de ses membres les plus emblématiques, Fast and Furious 7 est un hommage à la famille et à la loyauté.', 0),
(13, 'Fast and Furious 8', 'F. Gary Gray', 2017, 'Fast-and-Furious-8_vertical.webp', 'Fast-and-Furious-8_horizontal.webp', 'https://www.youtube.com/embed/P9us4Tp4hvU', '2h 16m', 'La famille de Dominic Toretto est mise à l\'épreuve lorsque le cyber-terroriste Cipher les manipule pour ses propres desseins malveillants. Avec des courses de rue spectaculaires et des combats épiques, Fast and Furious 8 pousse l\'action à un niveau supérieur.', 0),
(14, 'Fast and Furious 9', 'Justin Lin', 2021, 'Fast-and-Furious-9_vertical.webp', 'Fast-and-Furious-9_horizontal.webp', 'https://www.youtube.com/embed/tOfqpdJGWL0', '2h 15m', 'Dominic Toretto et son équipe sont de retour pour une aventure encore plus explosive, affrontant un nouvel ennemi redoutable et des défis inédits. Avec des courses de rue palpitantes et des scènes d\'action à couper le souffle, Fast and Furious 9 est un tour de force cinématographique.', 0),
(15, 'Fast and Furious 10', 'Louis Leterrier', 2023, 'Fast-and-Furious-10_vertical.webp', 'Fast-and-Furious-10_horizontal.webp', 'https://www.youtube.com/embed/rPmA-4AhA94', '2h 21m', 'La saga Fast and Furious atteint son apogée dans ce dernier volet, réunissant les personnages emblématiques pour une dernière mission. Avec des courses de rue épiques et des confrontations explosives, Fast and Furious 10 offre une conclusion spectaculaire à l\'une des franchises les plus populaires de tous les temps.', 0),
(16, 'Jurassic Park', 'Steven Spielberg', 1993, 'Jurassic-Park_vertical.webp', 'Jurassic-Park_horizontal.webp', 'https://www.youtube.com/embed/kxNDbxUZxNI', '2h 2m', 'Une équipe de scientifiques découvre un parc d\'attractions peuplé de dinosaures génétiquement recréés, mais les choses tournent mal lorsque les créatures s\'échappent et mettent en péril la vie de tous ceux sur l\'île. Avec des effets spéciaux révolutionnaires et une tension palpable, Jurassic Park est un classique du cinéma d\'aventure.', 2),
(17, 'Le Voyage de Chihiro', 'Hayao Miyazaki', 2001, 'Le-Voyage-de-Chihiro_vertical.webp', 'Le-Voyage-de-Chihiro_horizontal.webp', 'https://www.youtube.com/embed/EhIZrZQoHuA', '2h 5m', 'Une jeune fille nommée Chihiro se retrouve piégée dans un monde mystérieux peuplé de dieux et de créatures fantastiques, où elle doit travailler dans un bain public pour sauver ses parents transformés en cochons. Avec des thèmes riches et une animation époustouflante, Le Voyage de Chihiro est un chef-d\'œuvre du studio Ghibli.', 1),
(18, 'La Cinquième Vague', 'J Blakeson', 2016, 'La-Cinquième-Vague_vertical.webp', 'La-Cinquième-Vague_horizontal.webp', 'https://www.youtube.com/embed/l3ImzAoQq7k', '1h 52m', 'Dans un monde dévasté par des attaques extraterrestres, une jeune fille nommée Cassie Sullivan lutte pour survivre et sauver son petit frère. Alors qu\'elle se bat pour rester en vie, Cassie découvre des secrets troublants sur la véritable nature de l\'invasion et sur son propre rôle dans la lutte pour l\'avenir de l\'humanité.', 0),
(19, 'Je suis une légende', 'Francis Lawrence', 2007, 'Je-suis-une-legende_vertical.webp', 'Je-suis-une-legende_horizontal.webp', 'https://www.youtube.com/embed/yTNKbLhVAQA', '1h 41m', 'Dans un monde post-apocalyptique ravagé par un virus mortel, le dernier homme sur Terre, Robert Neville, lutte pour survivre tout en cherchant un remède pour sauver l\'humanité. Avec des performances captivantes et une atmosphère oppressante, Je suis une légende est un thriller palpitant.', 0),
(20, 'Jurassic World', 'Colin Trevorrow', 2015, 'Jurassic-World_vertical.webp', 'Jurassic-World_horizontal.webp', 'https://www.youtube.com/embed/RFinNxS5KN4', '2h 4m', 'Des décennies après les événements de Jurassic Park, le parc à thème Jurassic World ouvre ses portes sur l\'île d\'Isla Nublar, attirant des millions de visiteurs du monde entier. Mais lorsque des scientifiques créent un hybride de dinosaure dangereux, le parc devient le théâtre d\'un cauchemar préhistorique. Avec des effets spéciaux époustouflants et des scènes d\'action haletantes, Jurassic World est un retour triomphal à l\'île des dinosaures.', 2),
(21, 'Jurassic World: Fallen Kingdom', 'Juan Antonio Bayona', 2018, 'Jurassic-World-Fallen-Kingdom_vertical.webp', 'Jurassic-World-Fallen-Kingdom_horizontal.webp', 'https://www.youtube.com/embed/C4WBNqV407Q', '2h 9m', 'Après la destruction du parc à thème Jurassic World, les dinosaures survivants sont menacés par une éruption volcanique imminente sur l\'île d\'Isla Nublar. Owen Grady et Claire Dearing unissent leurs forces pour sauver les dinosaures de l\'extinction, mais découvrent rapidement un complot sinistre qui pourrait mettre en péril l\'avenir de la planète entière.', 0),
(22, 'Jurassic World : Le Monde d\'après', 'Colin Trevorrow', 2022, 'Jurassic-World-Le-Monde-d-après_vertical.webp', 'Jurassic-World-Le-Monde-d-après_horizontal.webp', 'https://www.youtube.com/embed/8UZ6NOLR9sQ', '2h 4m', 'La saga Jurassic World se poursuit avec de nouvelles révélations sur les dinosaures et les mystères de l\'île d\'Isla Nublar. Alors que des factions rivales se disputent le contrôle des créatures préhistoriques, une équipe de scientifiques tente de percer les secrets de leur ADN pour prévenir une catastrophe mondiale.', 0),
(23, 'Titanic', 'James Cameron', 1997, 'Titanic_vertical.webp', 'Titanic_horizontal.webp', 'https://www.youtube.com/embed/kVrqfYjkTdQ', '3h 14m', 'Une histoire d\'amour épique se déroulant à bord du légendaire paquebot Titanic, alors qu\'il effectue son voyage inaugural et rencontre son destin tragique dans l\'océan Atlantique. Avec des performances inoubliables et des effets spéciaux révolutionnaires, Titanic est un classique du cinéma romantique.', 2),
(24, 'Arrietty : Le Petit Monde des Chapardeurs', 'Hiromasa Yonebayashi', 2010, 'Arrietty-Le-Petit-Monde-des-Chapardeurs_vertical.webp', 'Arrietty-Le-Petit-Monde-des-Chapardeurs_horizontal.webp', 'https://www.youtube.com/embed/RYwYgH9uA_8', '1h 34m', 'Basé sur le roman \"Les Chapardeurs\" de Mary Norton, ce film d\'animation du studio Ghibli suit les aventures d\'Arrietty, une jeune chapardeuse, et de sa famille alors qu\'ils tentent de survivre discrètement dans la maison des humains. Avec une animation somptueuse et une histoire touchante, Arrietty : Le Petit Monde des Chapardeurs est un conte magique pour tous les âges.', 0),
(25, 'Avatar', 'James Cameron', 2009, 'avatar_vertical.webp', 'avatar_horizontal.webp', 'https://www.youtube.com/embed/O1CzgULNRGs', '2h 41m', 'Dans un monde lointain appelé Pandora, un ex-marine paraplégique est envoyé en mission pour infiltrer la civilisation des Na\'vi et gagner leur confiance. Mais lorsque ses sentiments pour une Na\'vi nommée Neytiri se développent, il se retrouve pris entre deux mondes, confronté à un choix impossible entre son devoir et son cœur.', 0),
(26, 'Avatar : La Voie de l\'eau', 'James Cameron', 2022, 'Avatar-La-Voie-de-l-eau_vertical.webp', 'Avatar-La-Voie-de-l-eau_horizontal.webp', 'https://www.youtube.com/embed/V_pb0BT2USk', '3h 12m', 'Suite très attendue du film à succès Avatar, cette suite continue de suivre les aventures de Jake Sully et Neytiri sur la planète Pandora, explorant de nouveaux territoires et rencontrant de nouveaux défis alors qu\'ils luttent pour protéger leur foyer et leur peuple.', 1),
(27, 'Ponyo sur la falaise', 'Hayao Miyazaki', 2008, 'ponyo-sur-la-falaise_vertical.webp', 'ponyo-sur-la-falaise_horizontal.webp', 'https://www.youtube.com/embed/eC0JThNWT2A', '1h 43m', 'Inspiré par \"La Petite Sirène\" d\'Hans Christian Andersen, ce film du studio Ghibli raconte l\'histoire d\'une jeune princesse poisson nommée Ponyo, qui tombe amoureuse d\'un garçon humain et décide de devenir humaine elle-même. Avec son animation charmante et son message écologique, Ponyo sur la falaise est un conte merveilleux pour tous les âges.', 0),
(28, 'La Traversée', 'Varante Soudjian', 2022, 'La-Traversee_vertical.webp', 'La-Traversee_horizontal.webp', 'https://www.youtube.com/embed/kzliCmVh5Qs', '1h 45m', 'Une comédie dramatique sur fond de crise migratoire, La Traversée suit les péripéties d\'un groupe de réfugiés et de bénévoles alors qu\'ils traversent l\'Europe à la recherche d\'un refuge sûr. Avec des performances émouvantes et un humour piquant, le film offre un regard poignant sur les défis de l\'immigration.', 0),
(29, 'Les Tuche', 'Olivier Baroux', 2011, 'Les-Tuche_vertical.webp', 'Les-Tuche_horizontal.webp', 'https://www.youtube.com/embed/ndCzT6dyOqk', '1h 35m', 'Une famille modeste du nord de la France gagne soudainement à la loterie et décide de s\'installer dans un château luxueux, entraînant des situations comiques et des quiproquos hilarants. Avec son humour décalé et ses personnages attachants, Les Tuche est une comédie rafraîchissante pour toute la famille.', 0),
(30, 'Pulp Fiction', 'Quentin Tarantino', 1994, 'Pulp-Fiction_vertical.webp', 'Pulp-Fiction_horizontal.webp', 'https://www.youtube.com/embed/tGpTpVyI_OQ', '2h 34m', 'Une série d\'histoires entrelacées mettant en scène des gangsters, des boxeurs, des danseurs et des tueurs à gages dans un Los Angeles sombre et décadent. Avec son style audacieux et son dialogue percutant, Pulp Fiction est un classique du cinéma indépendant, acclamé par la critique et le public.', 0),
(31, 'Matrix', 'Les Wachowski', 1999, 'matrix_vertical.webp', 'matrix_horizontal.webp', 'https://www.youtube.com/embed/8xx91zoASLY', '2h 16m', 'Dans un avenir dystopique, un hacker nommé Neo découvre la vérité sur la réalité qu\'il connaît, apprenant qu\'il vit dans un monde contrôlé par des machines intelligentes. Avec l\'aide de combattants de la résistance, Neo se lance dans une quête pour libérer l\'humanité de l\'emprise des machines et découvrir sa véritable destinée.', 0),
(32, 'Le Cinquième Élément', 'Luc Besson', 1997, 'Le-Cinquième-element_vertical.webp', 'Le-Cinquième-element_horizontal.webp', 'https://www.youtube.com/embed/7rzmiE-pESk', '1h 53m', 'Dans un avenir lointain, un chauffeur de taxi et une mystérieuse jeune femme se retrouvent impliqués dans une lutte épique pour sauver la Terre d\'une force maléfique ancestrale. Avec ses décors futuristes et son action survoltée, Le Cinquième Élément est un chef-d\'œuvre de la science-fiction.', 0),
(33, 'Arthur et les Minimoys', 'Luc Besson', 2006, 'Arthur-et-les-Minimoys_vertical.webp', 'Arthur-et-les-Minimoys_horizontal.webp', 'https://www.youtube.com/embed/SPL7aomflq8', '1h 34m', 'Inspiré par les livres de Luc Besson, ce film d\'animation suit les aventures d\'un jeune garçon nommé Arthur alors qu\'il explore un monde magique peuplé de créatures fantastiques. Avec des effets visuels époustouflants et une histoire captivante, Arthur et les Minimoys est un voyage enchanteur pour toute la famille.', 0);

-- --------------------------------------------------------

--
-- Structure de la table `movie_category`
--

CREATE TABLE `movie_category` (
  `movie_id` int NOT NULL,
  `category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `movie_category`
--

INSERT INTO `movie_category` (`movie_id`, `category_id`) VALUES
(1, 3),
(1, 4),
(2, 2),
(3, 2),
(4, 4),
(5, 5),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 1),
(12, 1),
(13, 1),
(14, 1),
(15, 1),
(16, 3),
(17, 2),
(17, 7),
(18, 1),
(18, 3),
(19, 1),
(19, 3),
(20, 1),
(20, 3),
(21, 1),
(21, 3),
(22, 1),
(22, 3),
(23, 4),
(24, 2),
(24, 7),
(25, 1),
(25, 3),
(26, 1),
(26, 3),
(27, 2),
(27, 7),
(28, 6),
(29, 6),
(30, 4),
(31, 1),
(31, 3),
(32, 1),
(32, 3),
(33, 6),
(33, 7);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(180) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `pseudo` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`, `pseudo`) VALUES
(14, 'admin@gmail.com', '[\"ROLE_USER\", \"ROLE_ADMIN\"]', '$2y$13$mFsfo8tlwexwggF1txY9mOhLcTs256XmbI/je6re3tpLnz.bLiUFO', 'Compte Admin'),
(15, 'user@gmail.com', '[]', '$2y$13$fb4PNz.UQzkfqHWKvMZJ5ePvseWWiadJpSsFaXfZSGmdcUagAfP7q', 'Pseudo User');

-- --------------------------------------------------------

--
-- Structure de la table `watchlist`
--

CREATE TABLE `watchlist` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `watchlist`
--

INSERT INTO `watchlist` (`id`, `user_id`) VALUES
(8, 14),
(9, 15);

-- --------------------------------------------------------

--
-- Structure de la table `watchlist_movie`
--

CREATE TABLE `watchlist_movie` (
  `watchlist_id` int NOT NULL,
  `movie_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `movie_category`
--
ALTER TABLE `movie_category`
  ADD PRIMARY KEY (`movie_id`,`category_id`),
  ADD KEY `IDX_DABA824C8F93B6FC` (`movie_id`),
  ADD KEY `IDX_DABA824C12469DE2` (`category_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_IDENTIFIER_EMAIL` (`email`);

--
-- Index pour la table `watchlist`
--
ALTER TABLE `watchlist`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_340388D3A76ED395` (`user_id`);

--
-- Index pour la table `watchlist_movie`
--
ALTER TABLE `watchlist_movie`
  ADD PRIMARY KEY (`watchlist_id`,`movie_id`),
  ADD KEY `IDX_B38D698383DD0D94` (`watchlist_id`),
  ADD KEY `IDX_B38D69838F93B6FC` (`movie_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `watchlist`
--
ALTER TABLE `watchlist`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `movie_category`
--
ALTER TABLE `movie_category`
  ADD CONSTRAINT `FK_DABA824C12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_DABA824C8F93B6FC` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `watchlist`
--
ALTER TABLE `watchlist`
  ADD CONSTRAINT `FK_340388D3A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `watchlist_movie`
--
ALTER TABLE `watchlist_movie`
  ADD CONSTRAINT `FK_B38D698383DD0D94` FOREIGN KEY (`watchlist_id`) REFERENCES `watchlist` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_B38D69838F93B6FC` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
