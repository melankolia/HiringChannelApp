-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 05, 2020 at 03:00 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `HiringChannel`
--

-- --------------------------------------------------------

--
-- Table structure for table `Company`
--

CREATE TABLE `Company` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Logo` varchar(100) DEFAULT NULL,
  `Location` varchar(100) DEFAULT NULL,
  `Description` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Company`
--

INSERT INTO `Company` (`id`, `username`, `Name`, `Logo`, `Location`, `Description`) VALUES
(1, 'Qiscus', 'Qiscus', 'https://aditif.id/w/wp-content/uploads/2015/06/logo-Qiscus-new-300x115.png', 'Jogjakarta', 'Qiscus is a business-to-business (B2B) technology company '),
(2, 'Codex', 'Codex', 'https://codex.works/images/logo-baru.png', 'Jakarta', 'Digitalizing Indonesia through delivering high quality digital products'),
(3, 'SDD', 'SDD', 'https://aditif.id/w/wp-content/uploads/2015/06/logo-Qiscus-new-300x115.png', 'Palembang', 'Internet Security'),
(4, 'Tokopedia', 'Tokopedia', 'https://aditif.id/w/wp-content/uploads/2015/06/logo-Qiscus-new-300x115.png', 'Jakarta', 'E-Commerce'),
(5, 'Bukalapak', 'Bukalapak', 'https://aditif.id/w/wp-content/uploads/2015/06/logo-Qiscus-new-300x115.png', 'Jakarta', 'E-Commerce'),
(6, 'Shopee', 'Shopee', 'https://aditif.id/w/wp-content/uploads/2015/06/logo-Qiscus-new-300x115.png', 'Jakarta', 'E-Commerce'),
(8, 'Infinite Frameworks', 'Infinite Frameworks', 'https://aditif.id/w/wp-content/uploads/2015/06/logo-Qiscus-new-300x115.png', 'Batam', 'E-Commerce'),
(11, 'Qtasnim', 'Qtasnim', 'https://aditif.id/w/wp-content/uploads/2015/06/logo-Qiscus-new-300x115.png', 'Tanjung Enim', '3rd Party Dev, Bukit Asam'),
(12, 'MayBank', 'MayBank', 'https://aditif.id/w/wp-content/uploads/2015/06/logo-Qiscus-new-300x115.png', 'Palembang', 'Bank'),
(13, 'PT Pupuk Sriwijaya', 'PT Pupuk Sriwijaya', 'https://aditif.id/w/wp-content/uploads/2015/06/logo-Qiscus-new-300x115.png', 'Palembang', 'PT Pupuk Indonesia yang bergerak di bidang produksi dan pemasaran pupuk'),
(17, 'Arkademy', 'Arkademy', 'https://aditif.id/w/wp-content/uploads/2015/06/logo-Qiscus-new-300x115.png', 'Yogyakarta', 'Programmer Bootcamp'),
(21, 'Cotton Bacon', 'Prime', 'undefined', 'undefined', 'undefined'),
(22, 'Unsri', 'Universitas Sriwijaya', 'undefined', 'undefined', 'undefined'),
(23, 'DrVapor', 'Kodinger', 'undefined', 'undefined', 'undefined'),
(24, 'Mitsubishisme', 'Mitsubisa', 'undefined', 'undefined', 'undefined'),
(25, 'Cosmos', 'Cosmos', 'undefined', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `Engineer`
--

CREATE TABLE `Engineer` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(300) NOT NULL,
  `Location` varchar(100) NOT NULL,
  `DateofBirth` date DEFAULT NULL,
  `DateCreated` datetime NOT NULL,
  `DateUpdated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Engineer`
--

INSERT INTO `Engineer` (`id`, `username`, `Name`, `Description`, `Location`, `DateofBirth`, `DateCreated`, `DateUpdated`) VALUES
(1, 'getsman', 'Ageng Setyo', 'Frontend Developer', 'Yogyakarta', '1996-04-12', '2019-12-18 00:00:00', '2020-01-03 15:14:36'),
(2, 'massgt', 'Sigit', 'Fresh Graduate', 'Sungai Lilin', '2019-12-18', '2019-12-18 23:59:29', '2019-12-18 22:10:15'),
(3, 'IwanPG', 'Ridwan', 'Fresh Graduate', 'Gunung Dempo', '1996-07-18', '2019-12-18 22:31:08', '2019-12-18 22:31:08'),
(4, 'AdeRahmad', 'Ade', 'Fresh Graduate', 'Palembang', '1997-12-18', '2019-12-18 00:00:00', '2019-12-19 13:07:16'),
(5, 'Turaraz', 'Faris', 'Pipeline TD', 'Jambi', '1996-01-01', '2019-12-19 01:47:19', '2019-12-19 01:48:56'),
(6, 'RahmatRi', 'Rahmat', 'Fullstack Dev', 'Palembang', '1996-12-31', '2019-12-19 16:31:48', '2019-12-19 16:31:48'),
(7, 'Alfisyahriin', 'Ridho', 'Back End Dev', 'Palembang', '1996-06-20', '2019-12-19 16:33:16', '2019-12-19 16:33:16'),
(8, 'Rizqeqeh', 'Rizqi Putri', 'Front End Dev', 'Palembang', '1996-06-10', '2019-12-19 16:36:13', '2019-12-19 16:38:16'),
(9, 'AgungGoks', 'Agung', 'Programmer', 'Palembang', '1996-05-12', '2019-12-19 16:37:00', '2019-12-19 16:38:23'),
(10, 'RyanGoks', 'Ryan', 'Engineer', 'Palembang', '1996-07-12', '2019-12-19 16:37:36', '2019-12-19 16:38:28'),
(11, 'AidilFY', 'Aidil', 'Engineer', 'Palembang', '1996-07-12', '2019-12-19 23:51:48', '2019-12-20 19:22:27'),
(12, 'massFadli', 'Fadli Nurhuda', 'Fresh Graduate', 'Padang', '1996-05-12', '2019-12-20 23:53:32', '2019-12-20 23:53:32'),
(13, 'ngaFahron', 'Fahron', 'Flutter Developer', 'Lubuk Linggau', '1996-05-12', '2019-12-21 03:21:36', '2019-12-21 03:21:36'),
(14, 'Aldonation', 'Aldo', 'Flutter Developer', 'Jakarta Selatan', '1996-05-12', '2019-12-21 08:01:32', '2019-12-21 08:01:32'),
(15, 'AgungFyT', 'Agung Gabus', 'Frontend Developer', 'Yogyakarta', '1995-03-03', '2019-12-21 12:27:51', '2019-12-21 12:27:51'),
(140, 'Peradaban', 'Mass Baskoro', 'Vocalist', 'Jakarta Selatan', '1996-04-15', '2019-12-26 23:52:41', '2019-12-29 12:24:24'),
(141, 'Getsmans', 'Setyo', 'Backend Developer', 'Palembang', '2000-12-04', '2019-12-26 23:55:46', '2019-12-29 18:38:35'),
(143, 'Gusmawan', 'Agus ', 'Backend Developer', 'Kediri', '2001-01-16', '2019-12-27 20:21:27', '2019-12-29 17:29:39'),
(144, 'Geforce', 'Sigit', 'Dewa', 'Yogyakarta', '2000-01-01', '2019-12-28 11:33:24', '2020-01-02 16:21:10');

-- --------------------------------------------------------

--
-- Table structure for table `request_project`
--

CREATE TABLE `request_project` (
  `No` int(11) NOT NULL,
  `id_engineer` int(11) NOT NULL,
  `id_company` int(11) NOT NULL,
  `name_project` varchar(100) NOT NULL,
  `status_project` varchar(100) NOT NULL,
  `status_engineer` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request_project`
--

INSERT INTO `request_project` (`No`, `id_engineer`, `id_company`, `name_project`, `status_project`, `status_engineer`) VALUES
(1, 1, 5, 'Membuat RESTful API', 'Completed', 'Completed'),
(2, 1, 2, 'Membuat RESTful API', 'Abandoned', 'Abandoned'),
(3, 1, 4, 'Backend Logic', 'Completed', 'Completed'),
(4, 144, 17, 'Fulltime Fullstack Web Dev', 'Completed', 'Completed'),
(6, 140, 17, 'Sudah', 'Completed', 'Completed'),
(7, 1, 17, 'Prototype Hiring Channel App', 'Completed', 'Completed'),
(8, 1, 17, 'Testing Project', 'Declined', 'Declined'),
(9, 4, 17, 'Becawa', 'Sent', 'Received'),
(11, 143, 17, 'pp', 'Completed', 'Completed'),
(12, 11, 17, 'Hero', 'Completed', 'Completed'),
(13, 13, 8, 'Aplikasi Android', 'Sent', 'Received'),
(14, 8, 4, 'Aplikasi JS', 'Completed', 'Completed'),
(15, 8, 2, 'Design Front End', 'Abandoned', 'Abandoned'),
(16, 140, 2, 'Debugging Redux', 'Completed', 'Completed');

-- --------------------------------------------------------

--
-- Table structure for table `Showcases`
--

CREATE TABLE `Showcases` (
  `id` int(11) NOT NULL,
  `Showcase` varchar(100) NOT NULL,
  `id_Engineer` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Showcases`
--

INSERT INTO `Showcases` (`id`, `Showcase`, `id_Engineer`) VALUES
(1, 'Encrypted Chat', 1),
(3, 'Paralel Computation', 3),
(4, 'Network Specialist', 3),
(5, 'Vaporista', 2),
(6, 'SysAdmin', 3),
(7, 'System Admin', 1),
(8, 'Elbow Angle Measure Application ', 1),
(9, 'Hacker', 4),
(10, 'CeH Certified', 4),
(11, 'PCAP', 5),
(12, 'E-Commerce Web', 7),
(13, 'Social Media Web', 7),
(14, 'E-Commerce Web', 6),
(15, 'Web Chat', 8),
(16, 'Cracker', 9),
(17, 'Web Social Media', 10),
(18, 'Web Counter Hero ML', 10),
(19, 'Aplikasi Hero Counter ML', 10),
(20, 'PCAP', 4),
(21, 'C# Dev', 12),
(22, 'Hiring App', 11),
(23, 'Service IT', 13),
(24, 'IT Support', 13),
(25, 'Speech Skills', 14),
(26, 'Javanation', 14),
(27, 'Soundsation', 14),
(28, 'Vevvervile', 14),
(29, 'Project Show', 15),
(30, 'Software ', 15),
(31, 'Hardware', 15),
(32, 'PlayStation', 15),
(33, 'Hardware', 15),
(34, 'IT Enthusiast', 15),
(35, 'Hardware', 15),
(36, 'IT Enthusiast', 15);

-- --------------------------------------------------------

--
-- Table structure for table `Skills`
--

CREATE TABLE `Skills` (
  `id` int(11) NOT NULL,
  `id_Engineer` int(11) NOT NULL,
  `SkillsName` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Skills`
--

INSERT INTO `Skills` (`id`, `id_Engineer`, `SkillsName`) VALUES
(1, 1, 'Javascript'),
(9, 2, 'Vape'),
(10, 2, 'JavaScript'),
(11, 3, 'JavaScript'),
(15, 2, 'C#'),
(16, 2, 'C#'),
(17, 3, 'Linux'),
(18, 4, 'Python'),
(19, 4, 'Network Security'),
(20, 5, 'Python'),
(21, 5, 'C#'),
(22, 5, 'MySQL'),
(23, 6, 'Php'),
(24, 6, 'Python'),
(25, 7, 'Nursing'),
(26, 7, 'Javascript'),
(27, 8, 'Vue.js'),
(28, 9, 'Javascript'),
(29, 9, 'Network Security'),
(30, 10, 'Pro Player Dota 2'),
(31, 10, 'Python'),
(34, 12, 'IT Support'),
(35, 14, 'Dart'),
(36, 6, 'Dart'),
(37, 11, 'Vue.js'),
(38, 13, 'Dart'),
(39, 15, 'React Native'),
(40, 15, 'ReactJS'),
(41, 140, 'NodeJS'),
(42, 140, 'ExpressJS'),
(43, 141, 'Python'),
(45, 143, 'Javascript'),
(46, 143, 'Html'),
(47, 143, 'CSS'),
(64, 141, 'C#'),
(65, 144, 'Vue.js'),
(75, 144, 'Express JS'),
(77, 1, 'MySQL'),
(79, 1, 'React JS'),
(80, 1, 'Express JS');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `role`) VALUES
('AdeRahmad', '$2a$08$MVscDJ9riweISZIwuC9kcOiTyWlvHsucrUNtONnDzd4VHM7HfQ7z2', 'engineer'),
('AgungFyT', '$2a$08$zUd0/I7tDZPkKSHVCRSabOS2MEvewSeCbI9hIjb67AEWkbZaNHNSW', 'engineer'),
('AgungGoks', '$2a$08$Q7DAOvHGJBHRr98P31.Ja.J1biPNwiUw3BKeb3qDJ.dctxCr1LYmS', 'engineer'),
('Aldonation', '$2a$08$eLlP31wEhy59.HSPrZbAHOAcZ36P15GwLSSe6dxRjrmxiSAvEYgnK', 'engineer'),
('Alfisyahriin', '$2a$08$jvWn20Ztgb4THe1XnGAkS.T9NSYJN9duRtmcoCL/9bqjtbOvcgXkK', 'engineer'),
('Arkademy', '$2a$08$FQHGsM45xe/PpuNh6t9w.e1VGzUTQz.mD00gmW4H.7L32LekoMdIm', 'company'),
('Bukalapak', '$2a$08$kQaRwD9tNK60lzAe6TCDQ.lQFzbBWAFFO.YBZoQ9kMpvBtVzs.4EW', 'company'),
('Codex', '$2a$08$lvHoCVeBC9uj.5zO7txhmegIAdSdRacPksTbaC5nuFKBo2WNiYgW6', 'company'),
('Cosmos', '$2a$08$p1TcmVAW9ZIWsN81GwJASuQpXL22SkHJ3EEm/4oWBLATD0oj1BARu', 'company'),
('Cotton Bacon', '$2a$08$OTdgB6IEz6uAUzrZt3prOu3QGA4L6iJxLnz7N.M6bVYEe5D0hBU/W', 'company'),
('DrVapor', '$2a$08$HnWa6kEuyVPLiDZZPEtUNeUY22EqGu1sM60hviaUDuyDBxhQneyBy', 'company'),
('Geforce', '$2a$08$XxRox1joW3aeb5.UJYJda.ykpVtSOFfsZV9qGkqfpZZL.fyt3pBH6', 'engineer'),
('getsman', '$2a$08$enqDGqtixf4vywZLzAv43eQDlH8rnfolaBUoRvlHxc49pdJP4BPGy', 'engineer'),
('Getsmans', '$2a$08$6ejf.fAvsLmojYR7ygXr2ukAv0WS4xUFeyy3i5EL7Yz5uC12dib6q', 'engineer'),
('Gusmawan', '$2a$08$pGiriWD28GjZfzj2WpqRCO3sgjBm7g8255E05nVlzEcp8stmVXB/C', 'engineer'),
('Infinite Frameworks', '$2a$08$GRWJN4Xgn6czWuGnCvL2mumFnDodz3x3R.KtJltjscne4bZhkUeBq', 'company'),
('MayBank', '$2a$08$Ixrk8mdfF2aJ1zjzyFOczu.xSDZZxCTAHO1MPb8ARTaTbGWEzxjhK', 'company'),
('Mitsubishisme', '$2a$08$h9anpvpJI2HW/ODqRJJYieQgEcy4Ntk3BHkGJ2aDMtUMgvklBciBm', 'company'),
('Peradaban', '$2a$08$jQN5/NJ4tgiUpWJCevMJN.8x2NxwXKDMnWXlE7K0vE55884bOnZiG', 'engineer'),
('PT Pupuk Sriwijaya', '$2a$08$jVvg50CUDHCoxTguXJKzH.WDC1bkKFrPdzlS31hT9rFNoyj3UuX1O', 'company'),
('Qiscus', '$2a$08$Tg/ksqfZR2cAre1w1vnBN.jW9iBZlnCEMWRcGUIbMI1cLelw9Qykq', 'company'),
('Qtasnim', '$2a$08$waKNkeqr8iNmuSi.NVyklOoNHnQEUlRAX4Bdj4pSa4E4zmtWzvJym', 'company'),
('RahmatRi', '$2a$08$Ki9mCh09N4Yq3CWO2e2HUu3o5W82I74e8uBrF11S45uSr9GoSxcRu', 'engineer'),
('Rizqeqeh', '$2a$08$asm1SCqGuoytADMcpX4sauBHQ.bTWOjQ4LLnJRkxISDMt9dgWXw8C', 'engineer'),
('RyanGoks', '$2a$08$UIYy.Oky7mJ7vuxc3jCYUugyiP6is2mFO.nl5NDI.jlwZqWhXabie', 'engineer'),
('Shopee', '$2a$08$7RzTr94freJ6kXjLNEg3MOc7ZbBf701YhdYX.8sMQt2eR1Kd6.dvC', 'company'),
('Tokopedia', '$2a$08$kdq/PZenkYwdRwGKycYBle8211kpmoTPLp6RfsJdzRNz4.ViJ8hkm', 'company'),
('Turaraz', '$2a$08$uXdtj8U4P2nd4MHnKKjBL.XPI5JVm6bBQsoHF.nm0I.exRkjfKHl6', 'engineer'),
('Unsri', '$2a$08$It9wCp62qhe3x1cXMldNHemf8qUcz1gBHyjqm4VdOstmig.6JHcxi', 'company');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Company`
--
ALTER TABLE `Company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Engineer`
--
ALTER TABLE `Engineer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `request_project`
--
ALTER TABLE `request_project`
  ADD PRIMARY KEY (`No`),
  ADD KEY `id_company` (`id_company`),
  ADD KEY `id_engineer` (`id_engineer`);

--
-- Indexes for table `Showcases`
--
ALTER TABLE `Showcases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_Engineer` (`id_Engineer`);

--
-- Indexes for table `Skills`
--
ALTER TABLE `Skills`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Skills_ibfk_1` (`id_Engineer`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Company`
--
ALTER TABLE `Company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `Engineer`
--
ALTER TABLE `Engineer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- AUTO_INCREMENT for table `request_project`
--
ALTER TABLE `request_project`
  MODIFY `No` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `Showcases`
--
ALTER TABLE `Showcases`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `Skills`
--
ALTER TABLE `Skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `request_project`
--
ALTER TABLE `request_project`
  ADD CONSTRAINT `request_project_ibfk_1` FOREIGN KEY (`id_company`) REFERENCES `Company` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `request_project_ibfk_2` FOREIGN KEY (`id_engineer`) REFERENCES `Engineer` (`id`);

--
-- Constraints for table `Showcases`
--
ALTER TABLE `Showcases`
  ADD CONSTRAINT `Showcases_ibfk_1` FOREIGN KEY (`id_Engineer`) REFERENCES `Engineer` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `Skills`
--
ALTER TABLE `Skills`
  ADD CONSTRAINT `Skills_ibfk_1` FOREIGN KEY (`id_Engineer`) REFERENCES `Engineer` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
