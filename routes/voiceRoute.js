const express = require('express');
const multer = require('multer');
const { execFile, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { processText } = require('../service/nlpService1.js');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('audio'), (req, res) => {
  const uploadedPath = path.resolve(req.file.path);
  const wavPath = `${uploadedPath}.wav`;

  const ffmpeg = spawn('ffmpeg', [
    '-i', uploadedPath,
    '-ar', '16000',
    '-ac', '1',
    '-c:a', 'pcm_s16le',
    wavPath
  ]);

  ffmpeg.on('close', (code) => {
    if (code !== 0) {
      console.error(`[FFMPEG] exited with code ${code}`);
      return res.status(500).json({ error: 'FFmpeg audio conversion failed' });
    }

    console.log('[INFO] Running Whisper on:', wavPath);

    execFile('python', ['transcribe.py', wavPath], (err, stdout, stderr) => {
      if (err) return res.status(500).json({ error: 'Whisper failed' });

      try {
        const result = JSON.parse(stdout);
        const userText = result.text;

        processText(userText).then(nlpResult => {
          res.json({ transcript: userText, ...nlpResult });
        });
      } catch (parseError) {
        res.status(500).json({ error: 'Failed to parse Whisper output.' });
      }
      processText(transcript).then(nlpResult => {
        console.log('[NLP RESULT]', nlpResult);

        // Send response
        res.json({
          transcript,
          intent: nlpResult.intent || null,
          score: nlpResult.score || 0,
          answer: nlpResult.answer || '[No answer]'
        });
      }).catch(err => {
        console.error('[NLP ERROR]', err);
        res.status(500).json({ error: 'Failed to process NLP' });
      });
    });
  });
});

module.exports = router;