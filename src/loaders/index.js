import mongooseLoader from "./mongoose.js";

export default async() => {
    // Load the mongodb connection
    const mongooseConnection = await mongooseLoader();
}