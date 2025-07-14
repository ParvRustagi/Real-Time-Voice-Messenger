const fs = require('fs');

exports.parseLog = (logFilePath) => {
  const raw = fs.readFileSync(logFilePath, 'utf-8');
  const json = JSON.parse(raw);

  return json.map(entry => ({
    timestamp: entry.timestamp,
    userMessage: entry.message,
    entities: entry.entities || []
  }));
};