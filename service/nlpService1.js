import { NlpManager } from 'node-nlp';
import intents from '../intents.js';

// Create manager instance
const manager = new NlpManager({ languages: ['en'], forceNER: true });

(async () => {
  // === 1. Define Entities ===
  for (const item of intents) {
    item.questions.forEach(q => manager.addDocument('en', q, item.intent));
    item.answers.forEach(a => manager.addAnswer('en', item.intent, a));
  }
  manager.addNamedEntityText('product', 'billing', ['en'], ['billing', 'my bill']);
  manager.addNamedEntityText('product', 'dashboard', ['en'], ['dashboard', 'UI']);
  manager.addNamedEntityText('product', 'login', ['en'], ['login', 'sign in']);
  manager.addNamedEntityText('product', 'password', ['en'], ['password', 'reset password']);

  await manager.train();
  manager.save();
})();

// === 5. Text Analysis Exported Function ===
export async function processText(text) {
  const result = await manager.process('en', text);
  return result;
}