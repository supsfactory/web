CREATE TABLE `inquiry` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`company` text DEFAULT '' NOT NULL,
	`country` text DEFAULT '' NOT NULL,
	`email` text NOT NULL,
	`whatsapp` text DEFAULT '' NOT NULL,
	`business_type` text DEFAULT 'other' NOT NULL,
	`quantity` text DEFAULT 'unsure' NOT NULL,
	`requirements` text DEFAULT '' NOT NULL,
	`logo_key` text,
	`status` text DEFAULT 'new' NOT NULL,
	`locale` text NOT NULL,
	`created_at` integer NOT NULL
);
