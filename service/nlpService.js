import { NlpManager } from 'node-nlp';

const manager = new NlpManager({ languages: ['en'], forceNER: true });

(async () => {
  manager.addDocument('en', 'I need help with %product%', 'support.request');
  manager.addAnswer('en', 'support.request', 'Sure, I can help you with %product%!');
  await manager.train();
  manager.save();
})();

export async function processText(text) {
  const response = await manager.process('en', text);
  return response;
}