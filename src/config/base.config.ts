import * as dotenv from "dotenv";
// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
dotenv.config();
console.log("Loaded");

export const USER = process.env.USER_NAME;
