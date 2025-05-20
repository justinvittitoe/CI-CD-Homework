import models from '../models/index.js';
import db from '../config/connection.js';
export default async (modelName, collectionName) => {
    try {
        const model = models[modelName];
        console.log(modelName);
        if (!model) {
            throw new Error(`Model ${modelName} does not exist`);
        }
        let modelExists = await models[modelName].db.db.listCollections({
            name: collectionName
        }).toArray();
        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }
    }
    catch (err) {
        throw err;
    }
};
