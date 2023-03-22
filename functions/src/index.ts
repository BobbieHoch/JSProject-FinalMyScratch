import * as functions from "firebase-functions";
import express, { Application } from "express";
import cors from "cors";
//import {shoutOutRoutes} from “./routes/ShoutOutRoutes”;

const app: Application = express();
app.use(cors());
app.use(express.json());

//app.use(“/shoutouts”, shoutOutRoutes);
//from internet request for api  **runs app
export const api = functions.https.onRequest(app);
