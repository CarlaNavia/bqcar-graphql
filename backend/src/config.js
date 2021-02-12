import dotenv from "dotenv";
dotenv.config({path:`.env.${process.env.NODE_ENV}`});
export const PORT = process.env.PORT || 4000;
export const SECRET_TOKEN = process.env.SECRET_TOKEN;
