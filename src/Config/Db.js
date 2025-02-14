import { Client, Databases, ID } from "appwrite"
const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); const database = new Databases(client);
export { database, client }    