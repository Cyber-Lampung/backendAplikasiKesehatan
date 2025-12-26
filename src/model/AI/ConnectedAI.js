// import { GoogleGenerativeAI } from "@google/generative-ai";
// import * as dotenv from "dotenv";
// dotenv.config();

// const ConnectionAiAPI = async (message) => {
//   //  initialisasi AI
//   const GenAI = new GoogleGenerativeAI(process.env.API_GEMINI_AI);

//   const model = GenAI.getGenerativeModel({
//     model: "gemini-3-pro-preview", // cepat gratis dan friendly
//   });

//   const request = await model.generateContent(message);
//   const response = await request.response.text();
//   console.log(response);
// };

// export default ConnectionAiAPI;

import { GoogleGenAI } from "@google/genai";
import * as dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.API_GEMINI_AI,
});

const main = async (message) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: message,
  });

  return await response.text;
};

export default main;
