import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { users } from './schema';
import { faker } from '@faker-js/faker'

const connectionString = 'postgres://postgres:QnGIfYHfg@172.10.0.13:5432/customer_1687456421491';


const client = postgres(connectionString);
const db = drizzle(client);
(async () => {
    await db.transaction(async tx => {
        for (let index = 0; index < 5; index++) {
            await tx.insert(users).values({
                email: faker.internet.email(),
                fistName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                status: 'enabled'
            })
        }
    })
    console.log('done')
})()
