import { processText } from '../service/nlpService1.js';

export async function analyzeText(req, res) {
  const { text } = req.body;
  const result = await processText(text);
  res.status(200).json(result);
}