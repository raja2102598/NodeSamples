-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2021 at 11:59 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `userdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `p_id` int(40) NOT NULL,
  `p_name` varchar(40) NOT NULL,
  `company` varchar(40) NOT NULL,
  `descrip` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`p_id`, `p_name`, `company`, `descrip`) VALUES
(29, 'test 3', 'Microsoft', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `project_user_map`
--

CREATE TABLE `project_user_map` (
  `id` int(40) NOT NULL,
  `proj_id` int(40) NOT NULL,
  `stud_id` int(40) NOT NULL,
  `status` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project_user_map`
--

INSERT INTO `project_user_map` (`id`, `proj_id`, `stud_id`, `status`) VALUES
(113, 29, 4, 'new'),
(114, 29, 9, 'new'),
(115, 29, 12, 'new'),
(116, 29, 67, 'new');

-- --------------------------------------------------------

--
-- Table structure for table `user_tasks`
--

CREATE TABLE `user_tasks` (
  `id` int(40) NOT NULL,
  `proj_id` int(40) NOT NULL,
  `stud_id` int(40) NOT NULL,
  `task_name` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_tasks`
--

INSERT INTO `user_tasks` (`id`, `proj_id`, `stud_id`, `task_name`) VALUES
(71, 29, 4, 'app development'),
(72, 29, 4, 'login activity'),
(73, 29, 9, 'web development'),
(74, 29, 9, 'testing'),
(75, 29, 12, 'coding'),
(76, 29, 67, 'debugging'),
(77, 29, 67, 'db design');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `project_user_map`
--
ALTER TABLE `project_user_map`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stud_id` (`stud_id`),
  ADD KEY `proj_id` (`proj_id`);

--
-- Indexes for table `user_tasks`
--
ALTER TABLE `user_tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `p_id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `project_user_map`
--
ALTER TABLE `project_user_map`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=117;

--
-- AUTO_INCREMENT for table `user_tasks`
--
ALTER TABLE `user_tasks`
  MODIFY `id` int(40) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
