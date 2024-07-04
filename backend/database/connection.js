import mongoose from "mongoose";

export const dbConnection = () => {
  const DB = process.env.PORTFOLIO_DB_URL;

                           
  mongoose.connect(DB,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
