import { sql } from "drizzle-orm";
import { pgTable, serial, text, uuid, varchar } from "drizzle-orm/pg-core";
 
export const users = pgTable('users', {
  id: uuid('id').default(sql`get_random_uuid()`).primaryKey(),
  fistName: varchar('first_name'),
  lastName: varchar('last_name'),
  nickname: varchar('nickname'),
  email: varchar('email').notNull(),
  status: varchar('status'),
});