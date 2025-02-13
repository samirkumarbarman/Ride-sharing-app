import mongoose from 'mongoose';


const connectDB = async () => {
    try {
        const conect = mongoose.connect(process.env. MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (error) {
        console.error('Error: ${error.message}');
        process.exit(1)
    }
};

export default connectDB;