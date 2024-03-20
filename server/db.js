import mongoose from "mongoose";

const db = () => {
  const connDB = mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database Connected Successfully");
  });
};

export default db;
