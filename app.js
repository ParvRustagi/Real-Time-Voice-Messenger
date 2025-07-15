const express = require('express');
const cors = require('cors');
const nlpRoutes = require('./routes/nlpRoutes');
const voiceRoute = require('./routes/voiceRoute');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/nlp', nlpRoutes);
app.use('/api/voice', voiceRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`NLP server running at http://localhost:${PORT}`));