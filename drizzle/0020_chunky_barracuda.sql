ALTER TABLE `inquiry` ADD `product_type` text DEFAULT 'unsure' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `model` text DEFAULT 'unsure' NOT NULL;--> statement-breakpoint
ALTER TABLE `inquiry` ADD `target_market` text DEFAULT '' NOT NULL;