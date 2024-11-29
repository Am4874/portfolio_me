import { Client, ID, Databases, Storage } from "appwrite";
import conf from "../config/conf";



export class Service {
    client = new Client()
    databases
    bucket
    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getBlogPost() {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
            )
        } catch (error) {
            console.error("Appwrite Get Post Error: : ", error);
        }
    }

    async addBlogPost() {
        try {
            return await this.client.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {}

            )
        } catch (error) {
            console.error("Appwrite add Blog Post Error : :", error);

        }
    }
}

const service = new Service

export default service