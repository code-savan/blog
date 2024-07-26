import mongoose from "mongoose";

let isConnected = false;
console.log("heyyy")

export const connectToDB = async () => {
    console.log("hii")
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "blog",
      useNewURLParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Mongo is connected");
  }
};
