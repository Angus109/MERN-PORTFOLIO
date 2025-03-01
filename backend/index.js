import app from "./app.js";
import cloudinary from "cloudinary";

const PORT = process.env.PORT || 3500  || 4000 || 5000;

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.listen(PORT, () => {
  console.log(`Server listening at port: ${PORT}`);
});
