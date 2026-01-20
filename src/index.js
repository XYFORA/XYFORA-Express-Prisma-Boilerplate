import ApiRoutes from "./routes/api.js";
import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use("/api", ApiRoutes);

if (process.env.NODE_ENV !== "production") {

    app.listen(PORT, () => console.log(`Server Is Running On PORT ${PORT}`));

}

export default app;