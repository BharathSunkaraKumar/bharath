import dotenv from 'dotenv'
import connectDB from './config/database.js';

dotenv.config({
    path: "./.env"
});

const startServer = async () => {
    try {
        await connectDB();
        app.on("error", (error) => {
            console.log("error", error)
            throw error
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running on port: ${process.env.PORT}`)
        });

    } catch (error) {
        console.log("mongoDB connection failed!", error)
    }
}

startServer()