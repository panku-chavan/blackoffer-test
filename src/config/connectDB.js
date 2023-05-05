import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connet to Mongodb database ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
