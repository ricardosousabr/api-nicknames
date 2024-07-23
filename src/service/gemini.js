import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);

export default async function run() {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: { maxOutputTokens: 2000, temperature: 2.0 },
  });

  const prompt =
    "Me mostre uma lista de até 10 nomes Criativos para se usar em jogos, sem explicação apenas a lista";

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log(text);

  return text.split("\n").filter((line) => line.trim().length > 0);
}
