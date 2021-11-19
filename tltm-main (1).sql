-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 10, 2021 at 06:07 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tltm-main`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_cards`
--

CREATE TABLE `account_cards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `card_holder_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_number` bigint(20) NOT NULL,
  `expiry_month` tinyint(4) NOT NULL,
  `expiry_year` int(11) NOT NULL,
  `cvv` int(11) DEFAULT NULL,
  `notes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `add_on`
--

CREATE TABLE `add_on` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cost` int(11) NOT NULL,
  `subscription_plan_id` int(11) NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `session_benifits` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `add_on`
--

INSERT INTO `add_on` (`id`, `cost`, `subscription_plan_id`, `description`, `session_benifits`, `created_at`, `updated_at`) VALUES
(1, 100, 0, '100 per month for unlimited 30-minut sessions per month(no-refund)', 'unlimited 30-minut sessions per month(no-refund)', '2021-09-01 17:43:08', '2021-09-15 17:47:53'),
(2, 50, 0, 'One time 30 minutes session for $50', 'One time 30 minutes session', '2021-09-07 17:43:13', '2021-09-15 17:05:55');

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `discount_percentage` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_cancel` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `booking_items`
--

CREATE TABLE `booking_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `booking_id` int(11) NOT NULL,
  `shift_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT 'second_professional',
  `booking_date` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `forms`
--

CREATE TABLE `forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `fields` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`fields`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `legal_forms`
--

CREATE TABLE `legal_forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` smallint(6) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `legal_forms`
--

INSERT INTO `legal_forms` (`id`, `title`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Mutual Non disclosurer Agreement', '', 1, '2021-11-06 09:37:35', '2021-11-06 09:37:35');

-- --------------------------------------------------------

--
-- Table structure for table `legal_form_pages`
--

CREATE TABLE `legal_form_pages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `legal_form_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` smallint(6) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `legal_form_pages`
--

INSERT INTO `legal_form_pages` (`id`, `legal_form_id`, `title`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'In what State would you like to form ____?', 'For the purpose of industry regulation, your details are required.', 1, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(2, 1, 'When do you want to start your business?', 'For the purpose of industry regulation, your details are required.', 1, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(3, 1, 'Enter Company 1 Details', 'For the purpose of industry regulation, your details are required.', 1, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(4, 1, 'Enter Company 2 Details', 'For the purpose of industry regulation, your details are required.', 1, '2021-11-06 09:37:35', '2021-11-06 09:37:35');

-- --------------------------------------------------------

--
-- Table structure for table `legal_form_page_questions`
--

CREATE TABLE `legal_form_page_questions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `legal_form_page_id` int(10) UNSIGNED NOT NULL,
  `label` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `placeholder` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` smallint(6) NOT NULL DEFAULT 1,
  `parent_id` int(10) UNSIGNED DEFAULT NULL,
  `parent_value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `legal_form_page_questions`
--

INSERT INTO `legal_form_page_questions` (`id`, `legal_form_page_id`, `label`, `name`, `type`, `placeholder`, `value`, `status`, `parent_id`, `parent_value`, `created_at`, `updated_at`) VALUES
(1, 1, 'Select your agreement brought state', 'agreement_brought_state', 'list', 'Select your state', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(2, 1, 'Enter your agreement constructed state', 'agreement_constructed_state', 'list', 'Select your state', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(3, 2, 'Select your Date', 'date_as_of', 'date', 'Select your date', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(4, 3, 'Enter company 1 name', 'text', 'company_one_name', 'Enter name', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(5, 3, 'Enter company 1 address', 'company_one_street_address', 'text', 'Enter address', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(6, 3, 'Enter company 1 name of representative', 'company_one_name_of_representative', 'text', 'Enter representative', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(7, 3, 'Enter company 1 Signature', 'company_one_signature', 'text', 'Enter signature', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(8, 4, 'Enter company 2 name', 'company_two_name', 'text', 'Enter name', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(9, 4, 'Enter company 2 address', 'company_two_street_address', 'text', 'Enter address', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(10, 4, 'Enter company 2 name of representative', 'company_two_name_of_representative', 'text', 'Enter representative name', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35'),
(11, 4, 'Enter company 2 Signature', 'company_two_signature', 'text', 'Enter signature', '', 1, NULL, NULL, '2021-11-06 09:37:35', '2021-11-06 09:37:35');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(50, '2014_10_12_000000_create_users_table', 1),
(51, '2014_10_12_100000_create_password_resets_table', 1),
(52, '2014_10_12_200000_add_two_factor_columns_to_users_table', 1),
(53, '2019_08_19_000000_create_failed_jobs_table', 1),
(54, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(55, '2021_01_14_073659_create_sessions_table', 1),
(56, '2021_01_19_061615_create_bookings_table', 1),
(57, '2021_01_19_062557_laratrust_setup_tables', 1),
(58, '2021_01_22_124345_create_booking_items_table', 1),
(59, '2021_01_22_125404_create_shifts_table', 1),
(60, '2021_09_13_111347_create_subscription_plans_table', 1),
(64, '2021_09_13_133354_add_subscription_plan_id_to_users', 2),
(66, '2021_09_14_145346_add_membership_cost_and_membership_description_to_subscription_plans', 3),
(73, '2021_09_14_151135_create_add_on_table', 4),
(74, '2021_09_14_153303_add_session_benifits_to_add_on', 4),
(75, '2021_09_15_105158_add_add_on_id_to_users', 5),
(77, '2021_09_20_150628_create_mutual_non_disclosuer_document', 6),
(78, '2021_09_20_151509_add_mutual_non_disclosuer_document_id_to_users', 7),
(79, '2021_10_08_203201_add_subscription_plan_id_to_add_on', 8),
(80, '2021_10_08_210428_forms', 8),
(81, '2021_10_08_212745_users_forms', 8),
(100, '2021_10_09_132355_user_form', 9),
(101, '2021_10_25_083443_create_account_cards_table', 9),
(102, '2021_10_25_083533_create_payments_table', 9),
(103, '2021_10_25_084912_create_wallets_table', 9),
(104, '2021_10_27_050059_create_payment_details_table', 9),
(105, '2021_11_02_104003_create_refunds_table', 9),
(106, '2021_11_05_192037_create_legal_forms_table', 9),
(107, '2021_11_05_192113_create_legal_form_pages_table', 9),
(108, '2021_11_05_192139_create_legal_form_page_questions_table', 9),
(112, '2021_11_08_165357_create_user_legal_forms_table', 10),
(113, '2021_11_08_165545_create_user_legal_form_answers_table', 10),
(114, '2021_11_10_155118_add_parent_coloumns_to_legal_form_page_questions_table', 10);

-- --------------------------------------------------------

--
-- Table structure for table `mutual_non_disclosuer_document`
--

CREATE TABLE `mutual_non_disclosuer_document` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `document_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `document_description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_one_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companu_one_street_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_two_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companu_two_street_address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agreement_construed_state` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `agreement_brought_state` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_one_signature` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_one_name_of_representative` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_one_title_of_representative` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_two_signature` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_two_name_of_representative` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company_two_title_of_representative` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_as_of` datetime NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mutual_non_disclosuer_document`
--

INSERT INTO `mutual_non_disclosuer_document` (`id`, `document_name`, `document_description`, `company_one_name`, `companu_one_street_address`, `company_two_name`, `companu_two_street_address`, `agreement_construed_state`, `agreement_brought_state`, `company_one_signature`, `company_one_name_of_representative`, `company_one_title_of_representative`, `company_two_signature`, `company_two_name_of_representative`, `company_two_title_of_representative`, `date_as_of`, `created_at`, `updated_at`) VALUES
(1, 'Mutual Non-Disclosure Agreement ', '    <h1>Mutual Non-Disclosure Agreement</h1>\r\n    <h3>Business Relations</h3>\r\n    <p>\r\n        This Mutual Non-Disclosure Agreement (\"<b>Agreement</b>\"), dated\r\n        as of\r\n        <span class=\"date_as_of\">________</span> (\"\r\n        <b>Effective Date</b>\"), is agreed by and between\r\n        <span class=\"company_one_name\">[COMPANY 1]</span>, with primary\r\n        offices located at\r\n        <span class=\"companu_one_street_address\"> [ADDRESS] </span>(“\r\n        <b>Company 1</b>”) , and\r\n        <span class=\"company_two_name\"> [COMPANY 2] </span>, with\r\n        primary offices located at\r\n        <span class=\"companu_two_street_address\"> [ADDRESS] </span>(“\r\n        <b>Company 2</b>”) .\r\n    </p>\r\n    <p>\r\n        Company 1 and Company 2 are individually referred to herein as,\r\n        the “<b>Party</b>”, and collectively as, the “<b>Parties</b>”.\r\n    </p>\r\n    <h3>RECITALS</h3>\r\n    <p>\r\n        <b>WHEREAS</b>, the Parties desire to explore and engage in\r\n        discussions regarding a potential business opportunity of mutual\r\n        interest between the Parties (“<b>Purpose</b>”); and\r\n    </p>\r\n    <p>\r\n        <b>WHEREAS</b>, in pursuit of such Purpose, either Party may\r\n        disclose (a “<b>Disclosing Party</b>\r\n        ”) to the other Party (a “<b>Recipient</b>”) confidential\r\n        information of such Party.\r\n    </p>\r\n    <p>\r\n        <b>NOW, THEREFORE</b>,for valuable consideration of the rights\r\n        and obligations hereunder, the Parties hereby agree as follows:\r\n    </p>\r\n    <ol>\r\n        <li>\r\n            Confidentiality\r\n            <ul>\r\n                <li>\r\n                    The Parties understand and acknowledge that in\r\n                    connection with the Purpose, each Party, and its\r\n                    Representatives, will receive, have access to, and\r\n                    learn confidential, secret, and proprietary\r\n                    information, documents, materials, data, and other\r\n                    information, in tangible and intangible form, of and\r\n                    relating to the other Party and its Affiliates, such\r\n                    as any information not generally known to the\r\n                    public, whether oral, in writing, electronic means,\r\n                    or any other form or medium, relating directly or\r\n                    indirectly to business processes and practices,\r\n                    plans, documents, research, operations, services,\r\n                    strategies, techniques, agreements, contracts, terms\r\n                    of agreements, transactions, potential transactions,\r\n                    compilations, metadata, technologies, know-how,\r\n                    trade secrets, computer software, applications,\r\n                    software design, web design, work-in-process,\r\n                    databases, device configurations, manuals, records,\r\n                    articles, systems, material, sources of material,\r\n                    supplier information, vendor information, financial\r\n                    information, legal information, marketing\r\n                    information, advertising information, credit\r\n                    information, design information, staffing\r\n                    information, developments, reports, internal\r\n                    controls, graphics, market studies, sales\r\n                    information, revenue, costs, notes, communications,\r\n                    algorithms, product plans, designs, styles, models,\r\n                    ideas, audiovisual programs, intellectual property\r\n                    such as copyrights, trademarks, patents, inventions,\r\n                    unpublished patent applications, and original works\r\n                    of authorship, discoveries, vendor and/or customer\r\n                    lists, client information, and manufacturing\r\n                    information, and distributor lists (\"\r\n                    <b>Confidential Information</b>\").The Parties\r\n                    understand that this list may not be exhaustive, and\r\n                    that Confidential Information of the other Party\r\n                    also includes other information that is marked as,\r\n                    or can be reasonably interpreted and identified as,\r\n                    confidential.\r\n                </li>\r\n                <li>\r\n                    The Parties further understand and acknowledge that\r\n                    this Confidential Information and the Disclosing\r\n                    Party\'s ability to reserve it for the exclusive\r\n                    knowledge and use of the Disclosing Party is of\r\n                    great competitive importance and commercial value to\r\n                    the Disclosing Party, and that improper use or\r\n                    disclosure of the Confidential Information by the\r\n                    Recipient might cause the Disclosing Party to incur\r\n                    financial costs or loss of business advantage, in\r\n                    which case Recipient may be subject to civil damages\r\n                    or criminal penalties\r\n                </li>\r\n                <li>\r\n                    Confidential Information shall not include\r\n                    information that is generally available to and known\r\n                    by the public at the time of disclosure to the\r\n                    Recipient, provided that such disclosure is through\r\n                    no fault, directly or indirectly, of the Recipient.\r\n                </li>\r\n                <li>\r\n                    Confidential Information shall not include\r\n                    information that is generally available to and known\r\n                    by the public at the time of disclosure to a\r\n                    Recipient, provided that such disclosure is through\r\n                    no direct or indirect fault of a Recipient.\r\n                </li>\r\n                <li>\r\n                    <u>Permitted disclosures</u>. Nothing in this\r\n                    Agreement shall be construed to prevent disclosure\r\n                    of Confidential Information as may be required by\r\n                    applicable law or regulation, or pursuant to the\r\n                    valid order of a court or an authorized government\r\n                    agency, provided that the disclosure does not exceed\r\n                    the extent of disclosure required by such law,\r\n                    regulation, or order. In any case, the Recipient, or\r\n                    its Representative, shall promptly provide written\r\n                    notice to the Disclosing Party of any such law,\r\n                    regulation, or order\r\n                </li>\r\n                <li>\r\n                    <u>Period of Confidentiality Obligations.</u>Each\r\n                    Party understands and acknowledges that its\r\n                    obligations under this Agreement with regard to any\r\n                    particular Confidential Information shall commence\r\n                    immediately upon the Effective Date between the\r\n                    Parties or such Party first having access to such\r\n                    Confidential Information, whichever comes first.\r\n                    Such period shall continue either (i) for{\" \"}\r\n                    <u>three (3)</u> years after expiration or\r\n                    termination of this Agreement or (ii) until such\r\n                    Confidential Information has become public knowledge\r\n                    other than as a result a Party’s breach of this\r\n                    Agreement.\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            Degree of Care\r\n            <ul>\r\n                <li>\r\n                    The Parties shall not use Confidential Information\r\n                    of the other Party for any purpose other than for\r\n                    the Purpose and shall hold in strictest confidence\r\n                    such Confidential Information disclosed by\r\n                    Disclosing Party to the Recipient under this\r\n                    Agreement. The Recipient shall protect and safeguard\r\n                    the confidentiality of all Confidential Information\r\n                    of the Disclosing Party with at least the same\r\n                    degree of care as the Recipient would in protecting\r\n                    its own Confidential Information, but in no event\r\n                    with less than a commercially reasonable degree of\r\n                    care, including but not limited to:\r\n                    <ul>\r\n                        <li>\r\n                            preventing any disclosure, publication,\r\n                            communication, or otherwise making available\r\n                            Confidential Information of the Disclosing\r\n                            Party, or allow it to be disclosed,\r\n                            published, communicated, or made available,\r\n                            in whole or part, to any person whatsoever,\r\n                            not having a need to know or authority to\r\n                            know;\r\n                        </li>\r\n                        <li>\r\n                            using any Confidential Information, except\r\n                            as may be required in connection with the\r\n                            Purpose or authorized in writing by the\r\n                            Disclosing Party, or its authorized\r\n                            Representative;\r\n                        </li>\r\n                        <li>\r\n                            preventing any access by a third-party, not\r\n                            having a need to know or authority to know;\r\n                            and\r\n                        </li>\r\n                        <li>\r\n                            preventing the copying of any documents,\r\n                            records, files, media, or other resources\r\n                            that may contain Confidential Information of\r\n                            the Disclosing Party\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n                <li>\r\n                    The Recipient shall not disclose any Confidential\r\n                    Information to any person other than to its\r\n                    Affiliates, employees, agents, representatives\r\n                    (including attorneys, accountants, consultants and\r\n                    advisors), directors, officers, employees and\r\n                    employees of Affiliates (collectively, “\r\n                    <b>Representatives</b>”) that have a need to know\r\n                    such information in connection with the Purpose and\r\n                    that such Representatives shall be informed of this\r\n                    Agreement and shall be directed to maintain the\r\n                    confidentiality of such Confidential Information.{\" \"}\r\n                    <b>“Affiliate”</b> shall mean any corporation,\r\n                    company, partnership, joint venture or other entity\r\n                    which controls, is controlled by, or is under common\r\n                    control with a Party hereto; for purposes of this\r\n                    definition, “control” shall mean (a) in the case of\r\n                    corporate entities, direct or indirect ownership of\r\n                    at least fifty percent (50%) of the stock or shares\r\n                    having the right to vote for the election of\r\n                    directors, and (b) in the case of non-corporate\r\n                    entities, direct or indirect ownership of at least\r\n                    fifty percent (50%) of the equity interest with the\r\n                    power to direct the management and policies of such\r\n                    non-corporate entities.\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            No License.\r\n            <ul>\r\n                <li>\r\n                    Unless otherwise agreed to in writing by the\r\n                    Disclosing Party or its Representatives,\r\n                    Confidential Information disclosed hereunder shall\r\n                    remain the property of the Disclosing Party.\r\n                    Disclosure of Confidential Information to the\r\n                    Disclosing Party shall not constitute any grant,\r\n                    option, or license to the Recipient, under any\r\n                    patent, trade secret, or other rights now or\r\n                    hereinafter held by the Disclosing Party, unless\r\n                    expressly agreed to in writing by both Parties, or\r\n                    their respective Representatives.\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            Return or Destruction of Confidential Information\r\n            <ul>\r\n                <li>\r\n                    At any time during or after the term of this\r\n                    Agreement and at the Disclosing Party\'s written\r\n                    request, or after expiration or termination of this\r\n                    Agreement, the Recipient and shall either destroy\r\n                    all copies all copies, whether in written,\r\n                    electronic, or other form or media, of the\r\n                    Disclosing Party\'s Confidential Information and\r\n                    certify in writing to the Disclosing Party that such\r\n                    Confidential Information has been destroyed, or upon\r\n                    Disclosing Party’s request, return all such copies\r\n                    to the Disclosing Party instead\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            Remedies\r\n            <ul>\r\n                <li>\r\n                    Each Party understands and acknowledges that\r\n                    disclosure or improper usage of the Confidential\r\n                    Information by the Recipient may cause irreparable\r\n                    harm to the Disclosing Party, and that the\r\n                    Disclosing Party\'s Confidential Information and its\r\n                    ability to reserve it for the exclusive knowledge\r\n                    and use of the Disclosing Party is of great\r\n                    competitive importance and commercial value to the\r\n                    Disclosing Party, in which remedies at law may not\r\n                    be adequate. In the event of a breach or threatened\r\n                    breach by the Recipient of any of the provisions of\r\n                    this Agreement, such Recipient consents that the\r\n                    Disclosing Party shall be entitled to seek, in\r\n                    addition to other potential and/or available\r\n                    remedies, a temporary or permanent injunction or\r\n                    other equitable relief against such breach or\r\n                    threatened breach from any court of competent\r\n                    jurisdiction, without the necessity of showing any\r\n                    actual damages or that monetary damages would not\r\n                    afford an adequate remedy. The aforementioned\r\n                    equitable relief shall not be in lieu of legal\r\n                    remedies, monetary damages, or other available forms\r\n                    of damages or relief.\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            No Assignment\r\n            <ul>\r\n                <li>\r\n                    No Party may assign this Agreement or any part\r\n                    hereof. Any purported assignment by either Party\r\n                    shall be null and void from the initial date of\r\n                    purported assignment.\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            Governing Law, Jurisdiction, and Venue\r\n            <ul>\r\n                <li>\r\n                    This Agreement, for all purposes, shall be construed\r\n                    in accordance with laws of the State of{\" \"}\r\n                    <span class=\"agreement_construed_state\">[____]</span> without regard to\r\n                    conflicts-of-law principles. Any action or\r\n                    proceeding by either Party to enforce this Agreement\r\n                    shall be brought only in any state or federal court\r\n                    located in the State of <span class=\"agreement_construed_state\">[______]</span>.\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            Entire Agreement\r\n            <ul>\r\n                <li>\r\n                    Unless specifically provided herein, this Agreement\r\n                    contains all the understandings and representations\r\n                    between the Parties pertaining to the subject matter\r\n                    hereof and supersedes all prior and contemporaneous\r\n                    understandings, agreements, representations, and\r\n                    warranties, both written and oral, with respect to\r\n                    such subject matter.\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            Modification and Waiver\r\n            <ul>\r\n                <li>\r\n                    No modification of or amendment to this Agreement,\r\n                    nor any waiver of any rights under this Agreement,\r\n                    will be effective unless in a writing signed by the\r\n                    Parties or an authorized Representative. Waiver by\r\n                    either Party of a breach of any provision of this\r\n                    Agreement will not operate as a waiver of any other\r\n                    or subsequent breach\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            Severability\r\n            <ul>\r\n                <li>\r\n                    Should any provision of this Agreement be held by a\r\n                    court of competent jurisdiction to be enforceable\r\n                    only if modified, or if any portion of this\r\n                    Agreement shall be held unenforceable and stricken,\r\n                    such holding shall not affect the validity of the\r\n                    remainder of this Agreement, the balance of which\r\n                    shall continue to be binding upon the Parties with\r\n                    any such modification to become a part hereof and\r\n                    treated as though originally set forth in this\r\n                    Agreement.\r\n                </li>\r\n            </ul>\r\n        </li>\r\n        <li>\r\n            Counterparts\r\n            <ul>\r\n                <li>\r\n                    This Agreement may be executed in counterparts, each\r\n                    of which shall be deemed an original, but all of\r\n                    which taken together shall constitute one and the\r\n                    same instrument. Delivery of an executed\r\n                    counterpart\'s signature page of this Agreement, by\r\n                    facsimile, email in portable document format .pdf,\r\n                    or by any other electronic means, such as DocuSign,\r\n                    that is intended to preserve the original graphic\r\n                    appearance of a document, has the same effect as\r\n                    delivery of an executed original of this Agreement.\r\n                </li>\r\n            </ul>\r\n        </li>\r\n    </ol>\r\n\r\n    <p>\r\n        <b>IN WITNESS WHEREOF</b>, THE PARTIES HAVE EXECUTED THIS\r\n        AGREEMENT AS OF THE EFFECTIVE DATE ABOVE\r\n    </p>\r\n    <h4>Signature Page Follows</h4>\r\n    <p>\r\n        <span class=\"company_one_name\">[COMPANY 1 NAME]</span>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        By (signature):<span class=\"company_one_signature\"> ______________________________</span>\r\n        <br>\r\n        Name of Representative: <span class=\"company_one_name_of_representative\">______________________</span>\r\n        <br>\r\n        Title of Representative:<span class=\"company_one_title_of_representative\"> ______________________</span>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <span class=\"company_two_name\">[COMPANY 2 NAME]</span>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        By (signature): <span class=\"company_two_signature\"> ______________________________</span>\r\n        <br>\r\n        Name of Representative: <span class=\"company_two_name_of_representative\"> ______________________</span>\r\n        <br>\r\n        Title of Representative: <span class=\"company_two_title_of_representative\"> ______________________</span>\r\n        <br>\r\n    </p>', 'Maqware Solution', 'Belle Planet lives at 223 Center Street, Venus, New York 10001.', 'TechSolutions', 'Hiroko Potter P.O. Box 887 2508 Dolor. Av. Muskegon KY 12482 (314) 244-6306', 'California', 'Texas', 'signature_company_one', 'John smith', 'alber stine', 'company_2_signature', 'Rahul askin', 'james bond', '2021-09-20 15:27:39', '2021-09-01 20:59:26', '2021-09-20 20:59:29');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('32s-=d1@iclosud.com', '$2y$10$4Hc1u5sfPqaZXVMyLcMSbuBWYzz0qh4OF3H689ZjsnwDylWlwF8ZG', '2021-10-10 01:35:29'),
('john@gmail.com', '$2y$10$y5MKipgaNLtrA8yo9Qq73enutW/umU55JebZF9FlDam80Jh3OdzsW', '2021-10-10 01:37:06'),
('ahjkhjkfrazmalik321@gmail.com', '$2y$10$0Q5/U.oJ6dSbP8NAhbFI.OJ2TCePqA9kFsvKUZ7LRlkqE0ZjhXmEW', '2021-10-10 01:37:57'),
('f321@gmail.com', '$2y$10$6IKNvq555FTNBxKQN/cejuw.wopEJVQBJzePs1vStrvlfuxXbj14e', '2021-10-10 01:38:25'),
('afrazmalik321@gmail.com', '$2y$10$kDdZRrugspw5Nl9loqz55ONhgiw2.bccyAXtYxN.DkGJxI8UCZEzq', '2021-10-10 03:59:21'),
('nbutt@gmail.com', '$2y$10$icyEm7rDO/tfQddaSAnVn.fiiMIiPYtIbIw4I3DRCXa7cyQFHekAm', '2021-10-11 06:07:05');

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `card_id` int(11) DEFAULT NULL,
  `wallet_id` int(11) DEFAULT NULL,
  `plan_id` int(11) DEFAULT NULL,
  `transaction_id` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` int(11) DEFAULT NULL,
  `amount` double(8,2) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_details`
--

CREATE TABLE `payment_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `payment_id` int(11) NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `addon_fields` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`addon_fields`)),
  `wallet_amount` double(8,2) DEFAULT 0.00,
  `plan_amount` double(8,2) DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

CREATE TABLE `permission_role` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permission_user`
--

CREATE TABLE `permission_user` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(3, 'App\\Models\\User', 2, 'authToken', 'aaea5cb344ca68181af37b76366be185bb49bc74eccc7fdd9d043d0c70f07235', '[\"*\"]', '2021-10-02 06:47:16', '2021-09-15 14:03:12', '2021-10-02 06:47:16'),
(4, 'App\\Models\\User', 3, 'authToken', 'adb2183f3e5e9f2ec22209bb1ad955696dd555cdd78841d51560d9bf93bd2b3d', '[\"*\"]', NULL, '2021-09-30 17:53:17', '2021-09-30 17:53:17'),
(7, 'App\\Models\\User', 4, 'authToken', 'e1be809b56b5b74fadb8705ed64b4a06b58be37fb960246047052d34f8d7f514', '[\"*\"]', NULL, '2021-10-01 06:01:13', '2021-10-01 06:01:13'),
(15, 'App\\Models\\User', 5, 'authToken', 'b53a8a8c5037d02c8a44ad3b983a061e0e6f1f29f09827cb0a5136c5939ecb34', '[\"*\"]', NULL, '2021-10-01 08:10:29', '2021-10-01 08:10:29'),
(16, 'App\\Models\\User', 6, 'authToken', 'daf26e69cbe8eba6c443eed7548899e2c23a987837c3b8020c9d9a6b4bb904a9', '[\"*\"]', NULL, '2021-10-01 08:22:58', '2021-10-01 08:22:58'),
(17, 'App\\Models\\User', 7, 'authToken', '16ae4ebdcb59581dfcbf6b69da5605c2185afe1135192ae7c72a7a596d2babfc', '[\"*\"]', NULL, '2021-10-01 08:23:30', '2021-10-01 08:23:30'),
(18, 'App\\Models\\User', 8, 'authToken', '618d0329a9e4c60314f50144dedc4dcdb6396ef8631b39c6e4965f083676d973', '[\"*\"]', NULL, '2021-10-01 08:39:34', '2021-10-01 08:39:34'),
(19, 'App\\Models\\User', 9, 'authToken', '448575d8554d30946ea627a29f82e085ec98c6b21632b0cd8b2d7c934c853a21', '[\"*\"]', NULL, '2021-10-01 09:39:11', '2021-10-01 09:39:11'),
(20, 'App\\Models\\User', 10, 'authToken', '940552c9cdd5c9c889a6462d9c22765978be690ec9221c343f5a8e69474f2063', '[\"*\"]', NULL, '2021-10-01 09:40:12', '2021-10-01 09:40:12'),
(21, 'App\\Models\\User', 11, 'authToken', 'b8c5516d65f06ad2d57153d1a9c124ab439e0ccf174183c1f3207cfcc1f279e2', '[\"*\"]', NULL, '2021-10-01 09:42:02', '2021-10-01 09:42:02'),
(22, 'App\\Models\\User', 12, 'authToken', 'aa73fbe7959bbc3b09ca573fcf5c8f13411c5abd3488c3c3e1149cbdd76f2e3b', '[\"*\"]', NULL, '2021-10-01 10:33:10', '2021-10-01 10:33:10'),
(23, 'App\\Models\\User', 13, 'authToken', '3c8dc5d3dd25e6c81cd70cdc05aac82b7f969f203dc53ef8cda3d2e89278e5b8', '[\"*\"]', NULL, '2021-10-01 10:33:44', '2021-10-01 10:33:44'),
(24, 'App\\Models\\User', 14, 'authToken', 'b2c2a8e10e28ff308fd381f11433ce8dafc459aeaff5c12ca496d91adc21f92a', '[\"*\"]', NULL, '2021-10-01 10:34:10', '2021-10-01 10:34:10'),
(26, 'App\\Models\\User', 16, 'authToken', '84b072e6df80d056bbbb93b28bf276682149544dfc158ef3b4296ac92d22209a', '[\"*\"]', NULL, '2021-10-01 10:54:16', '2021-10-01 10:54:16'),
(45, 'App\\Models\\User', 1, 'authToken', 'dd2eae77db7b7b1da30ee56e4f46d7ebb54b83a7ba8c354d57d6687b1b6f8d0d', '[\"*\"]', NULL, '2021-10-02 06:37:15', '2021-10-02 06:37:15');

-- --------------------------------------------------------

--
-- Table structure for table `refunds`
--

CREATE TABLE `refunds` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `payment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `approved_by` int(11) DEFAULT NULL,
  `reason` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('pending','approved','canceled') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `amount` double(8,2) DEFAULT 0.00,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

CREATE TABLE `role_user` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `user_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payload` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('1ZesLQMUcBXtsqBrzwMV6S7PQbqmMNxM9iqftZg8', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUGR2ZW16M2RDUmRwU0cyNzJ6bUJZb2hMRTVEM0hLR2VXUHJTeTNNYSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9nZXQtc3Vic2NyaXB0aW9uLXBsYW4vMTkiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633952455),
('2WhCgZwopQfGFpZmBl9SxQB17HIRngvPaLBMkoHv', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiejl4QXRCeXlxQk8yc1RSMUxubndIWDJQYXljN0F2YUs3RURqS2VxMCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633972889),
('2wyEYKt0SEDlKlXopgrKCukupPezuIqPb4YKwmmJ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoib0tTU2hyYTg4aFNxOGNNOWZpeHJDUHhtdVc3bmFhZmlPZEtBTFZmMCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633973958),
('3BROpcnXsGKAqvCR1vMBVk1pgbDT3M5UqQ5PMegL', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiWXF2UTdtcUllY29rRVY2bnM0QXZpUGE3bzBsd3A1d3ByNHhmSzNxciI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633970664),
('3EUyy5OrJvtv0h44LeRPDwNxx0MPPYyoMjzX0T7P', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWkQ0QUZsWnZnMzBlbU9BUjFaSU5XdmNza2NSVFNhVjE1a0NHcWE5MyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957451),
('3pTd6klLAqBE5IjEWjAkWIKh8SQBQdJYd813Hfp7', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiODNoYzZXQ1d2cmN2eEkzSXI0T1VIcWpHVmd1TjZlQXd4cDQzSEl6USI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9nZXQtc3Vic2NyaXB0aW9uLXBsYW4vMTkiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633954734),
('5DUguvkLzG22OcQTSnZZwiMlMbhk75VuZtzx72ca', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiaVZmZGZWZXl1UnZ3akkwVlEyTURNbjI3a2Y3UHRnZ2ZEakp6QXZESSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633969023),
('67d5hEK9jBsP4mdaAICZdsjRCJYpLLhfWQNYS5h8', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiVFl1YTkybXlTenVWczFicDJBdHNaSGh2bDJZOFhiMENkRVk5cUt4VyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633970370),
('6WiZWB3gd1v4a1ssh7SdSsu0XN5viQKzhak8uBpy', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiMENEMzlwVXJHU1Ftd0tIaDVzSDdBNVZ6OXYxbkxrdHhRR0lHZVdqYiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9nZXQtc3Vic2NyaXB0aW9uLXBsYW4vMTkiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633951994),
('7EIOF535wIgA6eBBnoZuIH3bP0Y0B5yiXFNCxir7', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoibVNBN01IVUxiOVpLSHNyUElFNzZERTU5NzhDVW9tMUxmSzN0TXRMeCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633954326),
('81iAzreC5MjqPoUpkLru6banmbg6KRKANqNFz6FV', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoieVdSc2RpM2RUVzlWNkNLcEljSmVRNDcyN1FROTZmR2FuaUtWQzRrdCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957446),
('8bbeTv24mqRmDgh0NgEAWauHHD3dZdMU8BgH3SMo', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoibTlFd1VUYkFiYXBvY0UyUERRWTk2eWFpbGlQVkFISFpORUtrS2U0TiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633973509),
('8G0lgE7rRSXwkM2V5RiliiJJVYfLG8WAqhKfUOJQ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiMzZCaVVtWndxZTc1QXFSSjFuQmJLTTk2OW9HMFRvTzh5VFNYTnBvaSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633952141),
('9mGROBV9h0ITc3eVLkFqxPNs083GQDAhCBpsyFjP', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiR0NWM1dYOHVHbWpFbFY5WTlEUGJXR3QyVmpsUWVxdGNoaGJwcGp5ciI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633957438),
('aapuecBPZ60dtqJ6v9YOvCbLj5KWA7ShOSl3Miq1', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoienhYNVZLWmtLWVBidEhIOFRVSnFwaXcyemZiOEh2eHZMRkpRY3NKdyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633953382),
('AjpwqS9WTRU30FDkFn4KIb0ZESvMk0Mj5CQe6jBE', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidTRQQmRDWVdJbFdSQ1NUQXVxY1dHQmhJMHJaVVNHY01KMG5IOFN1ZSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957135),
('aNFaf0j9UOYk8TGOMMsp8Kf7pXw9LqHcTvTX3Q80', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidjBvbUd0VEVISDF0Z0R6R0pUU094bnhNNjcyWTk0VFJYa2s0S2c2QSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633954332),
('bE4fsu3XgHBup0Ufaa4NeyBDFRB1vOcYcMbYXTBs', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZDZ4bHRwcld4WXM5U1RLOTJaZWFlcDkyekZSeW1PdGZlZEl4bDdMRyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957672),
('BJBdBZoJkGqqh2YTJqD5u3P03xgq2VjQFkx0vdIZ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiUWMzNlJJQ0Q1UVE2SWVxMlg5ajdDVW1aMEh2YjFvaFg5MXlVTDBCTiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633974773),
('bKaXl7dqFIEy7w0Koey0qsAbWpeuChe43DfrGJg0', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicVBjVVJMVkFIZ1g5bmVuT0RyQm0wcnBma0ZTMHpRWVIxazI0U3RtbyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957653),
('dFNXzyXb3YZ2GurMv5tlK9SGR66xrxZOlflPShRU', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRW9NUFhtaWNraHJ3WGRmN3p6eEZTUVlSbUxGT2VhbDRqcXZuZGhLcCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633969589),
('e8KAJ0YPjkBG9TaR0ReSWbcyyOy2e6VqACyB7umd', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSGpJUGFRZUJmTHZHemRGb2RBa3ZLQU5pRVM2WnhBQWZQWWVUZFAxNCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633970224),
('eaKgAKeHnD1IbrXbKPghQZvGLBaosKGpIWQ7l8CU', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYnUzWExBcjhQMHdhS2E2MDRXZG5Dd2p0TGFldEhKR0pJYmIxcmR6cSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633953533),
('EdKNaEv7cGW5YR2UsjTLte975VhC3Urf9HGKIqJ3', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiYTBOWG5ZZUFMTWxJeHN4QW1IU2tTRHVWQXVQTHhPY1R3Zm1pZE9uWiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633970496),
('eSNSmXFMxCzQRrPThBkW4U95q3R1T71f4gZnI3y3', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYVVYMkhLNGdmUHBtUk9OT25ZdW55RWZHaVczQXo1VUI5ZlU5SDNmNiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633974474),
('eyeLkHWL0ESmc6fn3YhUfDEuKvRGAlKXu7adDQRd', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiZkRtT29OM1NKbVZoVmtVaHNzYWZycXRXWkhzMzV1NVZZaUlvTVQ1MCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633957816),
('favgZwkjozHYda2RCyipAFoi67U2a3qF5W7ueT1F', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZW1VWTB2MGp0RVpLcHh1N2R2ZzBVcElNN1RhMnQ0U0RNQkxpWUpVZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633968980),
('FmVZoy9DJwcOtsTQd7C8TBWOFTmqStKFXJLeJ5m9', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiV2ZQajhrNmRTR2lKVVM0QmNTSHd6TzZHUm0zSlZGUXJNaEZXN3pOTyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633970231),
('fqz4eB55CzuMLsyaQLdrBot0zqNSjJul5WbeUAbJ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiWjg4UHRPUER6dGxkMTZvU0RzUjlRbzU4STlEaWdHUlQ5WWM4NndqZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957234),
('g3uYNxaS3h3l4jZnJLho9kGviktN0BUzZE4fvKKi', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiWFVsVW9lN1E0QWlrMGdtNzhrb2hWMnM3Y3VnQ1pZejFteW9SZG9PZSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633957671),
('IGzQXw5bXAkmZoJxdmxDZzOKyZqRpXlmUBb26nz5', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRzZmczJhd2xTM3U5V21kVEwycDVTSnZuaGQ2eXRyRnN1MDR1VTZ1RCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633974473),
('iPUXJe6yRNviPhxYTlUklW71iDi9mwaLO87hOYq3', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRzlVV1BOWGhBQXRlUnYwRUFlU0h5QjNMMFpvMGFxWWpUSDUwUlJnMSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633968261),
('J64x1ZqdXcuXoFG5onRfX569CAMxT534Y1eWpb8y', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibUJYY3JxMTlnTE5Tb1hENWpFVmdFZW5RbzdpMjJPUWpZdDFoVjlMdSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633968911),
('kaxxlt5KXLFYTwRMhVnZf6ULuFffXCFSWleQmEih', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoidlBKVXZIUnlMRU94cmtSV21NRXRNTmtGMFhudHplRklFWTJjR2EwdCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633970266),
('kr5RDLD4UYO9OA08W8GNR194qiYbgcsXDETPNNN2', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoia0VpaTNCMVRiUHU4c2lVZkowMzlTOE1QNHNNV3Q4S3B0NFEwMFhFeSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633968937),
('krONTL9gMi7pClaKASd1xkzrySBf96YblXVZEWgI', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiMXh6N21vbnFSY082c1hIRUM1QnVET2lkM2pSSVBUZ1pHNFNsUGFyTyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633957782),
('l8X9NehOm9NuWUxbZESJ6r6KtHTbOpJXDmOYuXyi', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiczQ4QlVqSzVldVpibnhScmI0Mk41TzZjNW9WTDEzRjgzQVRNOEtqWSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633972927),
('LbgdaedcxBBSIgJeo3yWbyqlEOmSqiprpnGbjJv9', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY3VZNTg5djRVZDlIcXFuUWhjZ0MxRjNCamUyNExXSmtmblh4NmI1YiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633956926),
('lxBEq1F4QIZdexIEnAHfb5anv5ehwidKr9ofdbsQ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibFRiQVB3cWhUNVJPVVVjaWs0UUlrZHdTZ3l1dmhvaHo4aUVFV2U4eCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633970517),
('lYiO3n9mEe1SowRVKwKzoLQzTrpc0LjLzHj3jeax', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiU2JTS1VzNWtteVdpVjRrTVlaYWhveHV0alkyTHJzSklwNXE5aG5CQiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633968357),
('LzPHRA6t1Byd74BZ15Gkyw4bU3d1TjCT8jDwr550', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiaDJDWUx2U2NHdmhJWTZMS3RmaUl5OEg3UWZscDQybFFqRU42U2kxbCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633953807),
('mfHDwLAs0oFBZtLaQ8rjueULP1rU0BPXuhGI3bLI', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoid1lsV1Y2d0JsRENodUpHU3BqVWxEaDFhTHp1VWdmRDNuZmllRkZIeCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633970296),
('n8b2jl8kd3qcfcu6LwmNIEAByTv6bn1DD0MXeA2T', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiUnFadkgyYXYzWEtjWnZWMXVYcHVRcGNJS3hYanlpWElIQ3V3RjRpcSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633971919),
('N9SJfNSUcl3cQD1Tn4JcdiFGExDckZo95FND6McD', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNlNkVHFabFdCQXBkNkQxYzllNnA1enlJdHdReEhwUngwQmxabDRwRCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTU6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9nZXQtc3Vic2NyaXB0aW9uLXBsYW4vMTkiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633954311),
('NBZWX1xfZkg5zREHipnkKLavP8am7Bzj5EVFzm2E', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR0ROWGtsSDRtS1VGd0hmM1U5SlNpQXNwSEFwYUx1dkhabnNDcEo3MiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957809),
('oiPsmEn2ixBCvKQ74eDBmfgPEfQKJCrlCHZOBui6', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiQ2w4allVZjFORTFCeWFiaWxxSW04NkxuSHZwdndaSng5WlNiU29WQiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957820),
('OnWVSKdQenLuKOtBAyyXRr1r5THBFFg1MhKwanWL', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiS2lyVm5yc3lOOUx6aVBNRWhsZnZDM3ZCZTlkVFowS2tESU9WclhBMiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633974495),
('owxRp8L1Sm0d7YCqwUabjgiqkrTnr7IGokyGeiLX', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSGFsM24wMEJsZFJEV3R6bHhiMkpxd3RhaEhRM0EzTzBrNW54OXY3dSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633969089),
('oX52Q7cym15FWXtJsL3uAEQdyZzSGitmb5tz8Uyj', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiVFp1YnNINjg4U2p6RlBQd1ZMcFI3dXlWNFEzSEs5TUpLTE5ZOWY4NiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633970407),
('oz3rJAj4kabEGDnnW1kgbPX80Vqhfinwy4Jg25Ys', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicE9oQ1RnOG91S3EzNmhFaVZ0WUQyU3d3cW1PdG1VRU1PMnhkMno4OSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633974774),
('pdyIC42SsvwBW9xdMEhmbhNUOhKdErZpDDFbnVaa', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRGRnMlBZU2N6MHU0aDRVMmpaVkhZVDlIRHp3ZHRGV05QNWxDV0ljQiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633970514),
('PiVPAuPxCXycI8rGJ2Ul3zTa41kxrOO12MR1lxVN', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiTXpMeFZQY2dNTlFQMzhZZEVjcmZuVm1tc2xONk1ROTFNY2dPZ3pxSCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633957134),
('pOiisx0AvfhnFh6dIILDFdUuQWMNQhP7QMLgJ9jN', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVUFFdWJucFZpN1J2Y3o2enBWYWxadUdubEc1d3lmNDRocGRlVlI2USI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957229),
('pxRzZ4UaF5d8oLTXZ97YTxzgzqjr746e5fCroLDG', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiVFpoVjZrb0RjcVBHOHowRlhNUzl0R1Zac3RmekRrMzhKSzFsenQ5biI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633970261),
('QKIadxlzpgniJvwJ9cPt3eAcyyG3VT3uAw9NaBDl', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY295blNDTTN2cVhpQ2toRngzNDh3bFg2UmJSakxxWmtuNnhFZFE1cyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633953345),
('QOWPygoHzfSaIX25hOFivEuNk2PsGXkqK54VLkA9', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRWY0UGZlYTM2Nk1uZUxvQzRnTnl3dUFhNGdSUTU1V0xzb2xnQ25iOSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633968272),
('RHYteo4GqDY1ph9JAVjS9IdbCigl1G2oGrlryOVq', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiNGNTbnlCZDljVkhQMUhiZ3JLVHB5ZVZDNnp5MzJlS1RiWGRVOGRWbyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633975163),
('RTvuWisCuUF3qAQyEPUtztTzS2oX96NXTAbpT6Tk', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZlpKSEoxZWtkUUlXU0tvZzhCbmdhOThCa1dqVEU1ZjBTWjZwY0hnRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957390),
('RVeuefqfqhAvKOTHXRxZH9SMB8KdFePMO3DsBnRM', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSHBTZWZvdzMyN1VlZVNJZzNSZDU1MEtPbm94QUd6SFY5R2hyQTJNMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633970703),
('rxDSFdm7rniDYLGjBz61X5FosMlLzAXGjvTsSYnG', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRG9KRFRkT0pqMFpqQVUxWm05UzFzcFZDcHd0RHFUUm53b0Jia2JQNyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTA6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9zdWJzY3JpYmUtcGxhbi8xOS8zIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633952454),
('ShZkqdxoZQOayzJmouL8Oax9hWaWXeDxrpNg8ruE', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiR1h6eG42VWV4OTR6dnpSTDFpajltODNVcEptanVSYTQxVGowZ1pPQiI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTk7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633951992),
('SMhDrb5Yxna8LSgRYnuhh9oJowZDN8oGZjMZk1qG', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiTWtxTkQ2SFpUUWR1cjBrdjBDdmplbmZJNHFuTThuNUZMY3dpUHBNRyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957787),
('SWlsBIxTJL0HYpV7bBBqiCzzll5yriCeN1Je7ku4', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiS09LbnRNdjB6N05hUVR6NnNWUE04bU9tenM1R3pyZ3YwU3ZWcU9KVCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633974458),
('TfdAO7UQTMdIFuW08yCJQfzO8qyoGvdgZ2JkCeyv', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiUGJJR3FyZ0x5bndBYTFiSGgwaUdBbzhJSXRwT21ja0NsOE5idlB3ZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633969092),
('tNwTL9CzajYFEFnkPBIjjI4lgTdT6qYwoyC757yQ', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiQWVCSDNDMEIxaHU1S1pDb1ZUTUV5OXlwS1FUeXJnWXRsaUpoWGNqZCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633968977),
('Ts0Zyme9rwadjQCUAkUjzr1Dsan9Av4VLHn1jka6', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRlFvRjNwVzhOYlpyeG51RDJQMEh4ZXlKUkNVeFNUTExIWEdsYlBzRSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957511),
('uY6UOZzqJzl0Q26zhsFRSNYTINb7fjlbsSufpR4B', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoidkJvVFRTV0RDVTF4cmh6Q0VsNTQ1Njl2REd2aFlkT2NyMTNRRWIxUSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633969184),
('VNYeazi9eqbMpUCnXvDRGXrveYzG7tO8Gem4PwKU', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicThPSUs3Ym42dVptVTRXQWh6bFRuM0ZWRWsxdmpCRWlpeXhHdGJXaSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633970408),
('W0SQZ00B7j8kx0TucfPfx7qhoB2mfM1JbXBTR48J', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiYTZIRXhXNGJyWnFJd3E4a3pRVVZuTG01UHVjT3ZTTXFzYVlPS3l4VSI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTk7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633954310),
('woH5LM545TSmwVrta2PFFyUoPKZHeSWzIRiSXMML', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoidlVmYWx1Q2tPV2d6UUlMZUNqcWxzVXU3N1JGVVMzbjl4dmRyR2RkdiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633952372),
('WPLoroWg0SoOfK9MSTRDDjus5VMD0Ff9M4Y8eKdC', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiY2VhRVdiYzMzcE1ERllTSjEzbXJFbU5SQTFXTGE0cVQ0WE5MaXVGdSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633974034),
('xfaDfS0DApKRCNZqPdRY7TlIC93ffWzoBjsoMdAQ', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiSTl3TzZaampBempuSEZXQkNERmVWTTF0QjV0dG45NVVBdm9Ea0pLMSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633955200),
('XU2A5H3Vfpx4FAMpOVb044wnBUpYyzvdNYQxfk8a', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiTDdoM1Z6czQ2ZjVKcVJJa1U5UUp6bjAwTnU3WWVSb3RTbEc2WHhrZCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633957283),
('Y13wdAWy2BvUrd9k8VWVQs2mGsJY3ThZooDa5c3K', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiem9DU3UzTDdtbEZsczhJTjlpUEVxWkxVekNJbWlleFZUY0x6cnVQTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633954319),
('yfz6t2NmS4trujCpH4tQcMSJSr8TTBLHg88jSfUE', 19, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiRFMwb1NuNmYwb3FQMW5oa3MxZktwUHNWcHZ5STZIeFlsODJWTFVuRSI7czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTk7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633954734),
('YMOD5igddtPIySJ6pyjJCPcvjMaa1Ag6KwfwB2eI', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiVFdBdmlTVWZ6MHJpSmtmMFkxY3d4SlBQVTJOdUd3TFBCTTBmRGdzSCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633957232),
('yNqCHHoe8FBEMoyTLx4TXgVIivjXVbT7qPIvU3tB', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiRHY3ckQ1OHFJSEtUcFlNcEhVajBLNnJ0MG5GNWtUV2ljc3BtQ0lMZSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633972888),
('yON0dl7ZC4ybi3eN1q8gty3oQbmt8MrMyn0Idzpn', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiN3dqc2FrNXVxa0luQ1V1NmI4TG04YTRuajE3Vjg1OUNkV29aT1oxTSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NTg6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbXV0dWFsLW5vbi1kaXNjbG9zdWVyLWRvY3VtZW50LzEiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX19', 1633957398),
('yyyVK0HJXZ6Ai5ysKQwBU8kOi1INXJBtY9qCqz45', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiMzdmUGdCMVlESDVncjZzUUNwalVoNGxEUjBTQVlKWExmSWFzS2tjTCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633968925),
('zGl9AXENaO6Bj4wTcEI5TBx2V5lRZZip6vZnTPSE', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36', 'YToyOntzOjY6Il90b2tlbiI7czo0MDoiN2ZJZnFKRXh2d1o1R1N6d01JVnR2bEtyQUtTMlJMZlNZeXU2ZUJnZSI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1633975161);

-- --------------------------------------------------------

--
-- Table structure for table `shifts`
--

CREATE TABLE `shifts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `shift` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_time` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `end_time` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shifts`
--

INSERT INTO `shifts` (`id`, `shift`, `start_time`, `end_time`, `created_at`, `updated_at`) VALUES
(1, 'morning', '08:00', '12:00', '2021-09-30 11:58:02', '2021-09-30 11:58:02'),
(2, 'afternoon', '12:00', '04:00', '2021-09-30 11:58:02', '2021-09-30 11:58:02'),
(3, 'evening', '04:00', '09:00', '2021-09-30 11:58:02', '2021-09-30 11:58:02'),
(4, 'morning', '08:00', '12:00', '2021-10-09 21:42:25', '2021-10-09 21:42:25'),
(5, 'afternoon', '12:00', '04:00', '2021-10-09 21:42:25', '2021-10-09 21:42:25'),
(6, 'evening', '04:00', '09:00', '2021-10-09 21:42:25', '2021-10-09 21:42:25');

-- --------------------------------------------------------

--
-- Table structure for table `subscription_plans`
--

CREATE TABLE `subscription_plans` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `membership_cost` int(11) NOT NULL,
  `membership_description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `no_of_documents` tinyint(4) NOT NULL,
  `units` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_period` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `subscription_plans`
--

INSERT INTO `subscription_plans` (`id`, `title`, `membership_cost`, `membership_description`, `no_of_documents`, `units`, `access_period`, `created_at`, `updated_at`) VALUES
(1, 'Silver', 110, '$110 Membership (You can save up to $105)', 4, 'days', 7, '2021-09-07 14:57:00', '2021-09-21 14:57:03'),
(2, 'Gold ', 200, '$200 Membership (You can save up to $175)', 8, 'days', 20, '2021-09-20 14:57:06', '2021-09-21 14:57:08'),
(3, 'Platinum', 500, '$500 Membership (You save a lot)', -1, 'month', 1, '2021-09-28 14:57:10', '2021-09-30 14:57:13');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_number` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `add_on_id` int(11) DEFAULT NULL,
  `mutual_non_disclosuer_document_id` int(11) DEFAULT NULL,
  `subscription_plan_id` int(11) DEFAULT NULL,
  `profession` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `document_proof` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint(20) UNSIGNED DEFAULT NULL,
  `profile_photo_path` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `last_name`, `id_number`, `add_on_id`, `mutual_non_disclosuer_document_id`, `subscription_plan_id`, `profession`, `document_proof`, `phone`, `email`, `email_verified_at`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(1, 'john', NULL, NULL, 2, 1, 1, NULL, NULL, NULL, 'albert@gmail.com', NULL, '$2y$10$TtXx8Z0hY4kLbcp4YM1hHO//J293JW1wzotYFh8SbKHovmpMqZToe', NULL, NULL, NULL, NULL, NULL, '2021-09-13 19:50:01', '2021-09-15 18:10:08'),
(2, 'albert', NULL, NULL, 1, NULL, 2, NULL, NULL, NULL, 'john@gmail.com', NULL, '$2y$10$CxpzJUkQDsxH6oird/tui..wjKGSEI2JtUN.w252qtRGMSBJfV2Sq', NULL, NULL, NULL, NULL, NULL, '2021-09-15 14:03:12', '2021-10-02 06:47:16'),
(3, 'john', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'johsdfdfdfn@gmail.com', NULL, '$2y$10$Zj65KioS7Ctm752KJJ5oLecEIg4KAmZhw87Yt5E3/teq2xgSC2PzW', NULL, NULL, NULL, NULL, NULL, '2021-09-30 17:53:16', '2021-09-30 17:53:16'),
(4, 'john', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'johsgfhdfdfdfn@gmail.com', NULL, '$2y$10$z0K4S17hBNIxrFhamAhr4O38EnzutYvz4FmSwLWDaiRENxNrlcUwS', NULL, NULL, NULL, NULL, NULL, '2021-10-01 06:01:13', '2021-10-01 06:01:13'),
(5, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'afrazmalik321@gmail.com', NULL, '$2y$10$FM6YgbCKXka/bMcS3dxXOujHS17lROSUc6u4wah4B1WNnNfrw8hqa', NULL, NULL, NULL, NULL, NULL, '2021-10-01 08:10:29', '2021-10-01 08:10:29'),
(6, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'afrazmalikk321@gmail.com', NULL, '$2y$10$fcGR1mI0Dxb7YWyY3E1niOFakIhF8Sh0jIlvjHCUbFyv0Byxo6jbq', NULL, NULL, NULL, NULL, NULL, '2021-10-01 08:22:58', '2021-10-01 08:22:58'),
(7, 'd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'afrazmadlik321@gmail.com', NULL, '$2y$10$1wWRVZufgOdVh.Hi4UqxGegN0YX8OwqwK0Fqjb5BuqcoRtU8FZFca', NULL, NULL, NULL, NULL, NULL, '2021-10-01 08:23:30', '2021-10-01 08:23:30'),
(8, 'hgjghj', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'afrazmalikkkk321@gmail.com', NULL, '$2y$10$DkPi./NVbmkmKAOxAn.r5ushE7gjRmT72BsUCTJ9G/01lqGurBJfm', NULL, NULL, NULL, NULL, NULL, '2021-10-01 08:39:34', '2021-10-01 08:39:34'),
(9, 'hjkhjk', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'ahjkhjkfrazmalik321@gmail.com', NULL, '$2y$10$O0llUiLcUGLh55VOReK0tOlvksOoPqjWB4VHHABPnZUJtKA7I6jv6', NULL, NULL, NULL, NULL, NULL, '2021-10-01 09:39:11', '2021-10-01 09:39:11'),
(10, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'f321@gmail.com', NULL, '$2y$10$onQvrBJRUS4tpb4VheZ9hu.8J4h0iXJh5Kz16cLHj8L7qJTYqIZZ2', NULL, NULL, NULL, NULL, NULL, '2021-10-01 09:40:12', '2021-10-01 09:40:12'),
(11, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'dalik321@gmail.com', NULL, '$2y$10$rGvAcIM39hbY.xPKKQMvNu/RAB.wKGerMCGIdIv0naNNs2IbLlqu6', NULL, NULL, NULL, NULL, NULL, '2021-10-01 09:42:02', '2021-10-01 09:42:02'),
(12, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'malikak321@icloud.com', NULL, '$2y$10$5pdFM2XkvH7h3ggC1YQx.uZhT3/suJGV9AT3z7hgbjb1UdlBEGnLq', NULL, NULL, NULL, NULL, NULL, '2021-10-01 10:33:10', '2021-10-01 10:33:10'),
(13, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'nbutt@gmail.com', NULL, '$2y$10$J.u1I1m6C0sLonT9dGFDweMAdB4rZ.AVE86tYJMustqdvFBAeJ07O', NULL, NULL, NULL, NULL, NULL, '2021-10-01 10:33:44', '2021-10-01 10:33:44'),
(14, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'moinmalik@gmail.com', NULL, '$2y$10$OINf5TyBh2n5956YQ4GJ1e27H7xzVaT3812JnnFQps5iTSAKX0eoG', NULL, NULL, NULL, NULL, NULL, '2021-10-01 10:34:10', '2021-10-01 10:34:10'),
(15, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '321@icloud.com', NULL, '$2y$10$FYzuH6N81IykTvmhNSx55eoI9s5oi3jEcv3hI660HlRop3Zgc0W3a', NULL, NULL, NULL, NULL, NULL, '2021-10-01 10:51:46', '2021-10-01 10:51:46'),
(16, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '32sd1@iclosud.com', NULL, '$2y$10$gqNW81LYI22P2FCz9wLvK.RHsxNl2jXs.2DTlO1tJLucZefkZpjQ2', NULL, NULL, NULL, NULL, NULL, '2021-10-01 10:54:16', '2021-10-01 10:54:16'),
(17, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '32s-=d1@iclosud.com', NULL, '$2y$10$E04WEOQrElb.nYkPEY3xEeX5yNEoYoAon2CVfqQjYgOq.NJP6Vnw2', NULL, NULL, NULL, NULL, NULL, '2021-10-01 10:55:18', '2021-10-01 10:55:18'),
(18, 'Afraz Malik', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '32s-=d1@icloshd.com', NULL, '$2y$10$IuEDKMihaNyFX43JUJi0reS5TrONGuvomjeVtFIW9sJbqV59tZh8W', NULL, NULL, NULL, NULL, NULL, '2021-10-10 02:05:36', '2021-10-10 02:05:36'),
(19, 'Afraz Malik', NULL, NULL, NULL, NULL, 3, NULL, NULL, NULL, '32s-=d1@iclosud.comf', NULL, '$2y$10$AWIVaq1GW1z27lTWNrwfDeuxGMz50/vIyaaQZDy8dM40TYqRWopsO', NULL, NULL, NULL, NULL, NULL, '2021-10-10 02:10:59', '2021-10-11 06:40:54');

-- --------------------------------------------------------

--
-- Table structure for table `users_forms`
--

CREATE TABLE `users_forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `form_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_form`
--

CREATE TABLE `user_form` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `fields` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`fields`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_legal_forms`
--

CREATE TABLE `user_legal_forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `legal_form_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` smallint(6) NOT NULL DEFAULT 1,
  `refund_status` smallint(6) NOT NULL DEFAULT 1,
  `paid_through` smallint(6) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_legal_form_answers`
--

CREATE TABLE `user_legal_form_answers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_legal_form_id` int(10) UNSIGNED NOT NULL,
  `ques_id` int(10) UNSIGNED NOT NULL,
  `value` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` smallint(6) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wallets`
--

CREATE TABLE `wallets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `total_amount` double(8,2) DEFAULT 0.00,
  `remaining_amount` double(8,2) NOT NULL,
  `notes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_used` tinyint(4) NOT NULL DEFAULT 0,
  `fields` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`fields`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_cards`
--
ALTER TABLE `account_cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `add_on`
--
ALTER TABLE `add_on`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `booking_items`
--
ALTER TABLE `booking_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `legal_forms`
--
ALTER TABLE `legal_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `legal_form_pages`
--
ALTER TABLE `legal_form_pages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `legal_form_page_questions`
--
ALTER TABLE `legal_form_page_questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mutual_non_disclosuer_document`
--
ALTER TABLE `mutual_non_disclosuer_document`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment_details`
--
ALTER TABLE `payment_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_unique` (`name`);

--
-- Indexes for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `permission_role_role_id_foreign` (`role_id`);

--
-- Indexes for table `permission_user`
--
ALTER TABLE `permission_user`
  ADD PRIMARY KEY (`user_id`,`permission_id`,`user_type`),
  ADD KEY `permission_user_permission_id_foreign` (`permission_id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `refunds`
--
ALTER TABLE `refunds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_unique` (`name`);

--
-- Indexes for table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`user_id`,`role_id`,`user_type`),
  ADD KEY `role_user_role_id_foreign` (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `shifts`
--
ALTER TABLE `shifts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscription_plans`
--
ALTER TABLE `subscription_plans`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `users_forms`
--
ALTER TABLE `users_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_form`
--
ALTER TABLE `user_form`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_legal_forms`
--
ALTER TABLE `user_legal_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_legal_form_answers`
--
ALTER TABLE `user_legal_form_answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallets`
--
ALTER TABLE `wallets`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_cards`
--
ALTER TABLE `account_cards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `add_on`
--
ALTER TABLE `add_on`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `booking_items`
--
ALTER TABLE `booking_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `forms`
--
ALTER TABLE `forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `legal_forms`
--
ALTER TABLE `legal_forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `legal_form_pages`
--
ALTER TABLE `legal_form_pages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `legal_form_page_questions`
--
ALTER TABLE `legal_form_page_questions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT for table `mutual_non_disclosuer_document`
--
ALTER TABLE `mutual_non_disclosuer_document`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `payment_details`
--
ALTER TABLE `payment_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `refunds`
--
ALTER TABLE `refunds`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shifts`
--
ALTER TABLE `shifts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `subscription_plans`
--
ALTER TABLE `subscription_plans`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users_forms`
--
ALTER TABLE `users_forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_form`
--
ALTER TABLE `user_form`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_legal_forms`
--
ALTER TABLE `user_legal_forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_legal_form_answers`
--
ALTER TABLE `user_legal_form_answers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wallets`
--
ALTER TABLE `wallets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `permission_user`
--
ALTER TABLE `permission_user`
  ADD CONSTRAINT `permission_user_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `role_user`
--
ALTER TABLE `role_user`
  ADD CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
