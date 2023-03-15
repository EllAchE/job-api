import * as axios from axios
const url = require("url")
require("dotenv").config()

export const sendMessage = async (message) => {
    try {
    const baseURL = new url.URL(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`);
    baseURL.searchParams.set("chat_id", process.env.CHAT_ID);
    baseURL.searchParams.set("text", message);
    return await axios.default.get(baseURL.toString());
    }
    catch (err) {
    }
};