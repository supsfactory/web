import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

/** B2B project inquiries submitted via the /contact form. */
export const inquiry = sqliteTable('inquiry', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  company: text('company').notNull().default(''),
  country: text('country').notNull().default(''),
  email: text('email').notNull(),
  whatsapp: text('whatsapp').notNull().default(''),
  businessType: text('business_type').notNull().default('other'), // InquiryBusinessType
  quantity: text('quantity').notNull().default('unsure'),         // InquiryQuantity
  requirements: text('requirements').notNull().default(''),
  logoKey: text('logo_key'),                                       // R2 object key (inquiry-logos/...)
  status: text('status').notNull().default('new'),                 // InquiryStatus
  locale: text('locale').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp_ms' }).notNull(),
})

export type Inquiry = typeof inquiry.$inferSelect
