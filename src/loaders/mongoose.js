import mongoose from "mongoose";

export default async () => {
    mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,  
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => console.log('Connect to mongodb!'))
    .catch(e => console.log(e));
}