import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI saknas i .env-filen');
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB ansluten');
  } catch (err) {
    console.error('Fel vid MongoDB-anslutning:', err);
  }
};

export default connectDB;
