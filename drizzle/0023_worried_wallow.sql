ALTER TABLE `inquiry` ADD `project_stage` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `role` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `board_platform` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `construction` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `customization` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `packaging` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `compliance` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `docs` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `annual_volume` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `budget` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `nda` text DEFAULT 'no' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `consent` text DEFAULT '' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `score` integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `tier` text DEFAULT 'C' NOT NULL;--> statement-breakpoint

-- Remap previously stored option values to the new RFQ option sets.
UPDATE `inquiry` SET `quantity` = 'q10-49' WHERE `quantity` = 'q5';
UPDATE `inquiry` SET `quantity` = 'q50-99' WHERE `quantity` = 'q50';
UPDATE `inquiry` SET `quantity` = 'q100-299' WHERE `quantity` = 'q100';
UPDATE `inquiry` SET `quantity` = 'q300-499' WHERE `quantity` = 'q300';
UPDATE `inquiry` SET `product_type` = 'all-around' WHERE `product_type` = 'inflatable-sup';
UPDATE `inquiry` SET `product_type` = 'hard' WHERE `product_type` = 'hard-sup';
UPDATE `inquiry` SET `timeline` = 't12mo+' WHERE `timeline` = 't6mo+';