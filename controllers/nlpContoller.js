const { processText } = require('../service/nlpService');

exports.analyzeText = async (req, res) => {
  try {
    const { text } = req.body;
    const result = await processText(text);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to process text' });
  }
};