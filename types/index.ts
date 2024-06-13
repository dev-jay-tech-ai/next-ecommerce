import { products } from '@/db/schema'
import { InferSelectModel } from 'drizzle-orm/table'

export type Product = InferSelectModel<typeof products>
