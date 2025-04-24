import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema/index.ts",
    dbCredentials: {
        host: 'localhost',
        port: 5432,
        user: 'docker',
        password: 'docker',
        database: 'pizza_shop'
    }
});
