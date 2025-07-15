const intents = [
  // Smalltalk Intents
  {
    intent: 'smalltalk.greetings',
    questions: ['Hi', 'Hello', 'Hey there', 'Good morning', 'How are you?'],
    answers: ['Hey! How can I assist you?', 'I’m great, how about you?', 'Hello there!']
  },
  {
    intent: 'smalltalk.thanks',
    questions: ['Thank you', 'Thanks', 'Thanks a lot'],
    answers: ['You’re welcome!', 'Happy to help!', 'Anytime!']
  },
  {
    intent: 'smalltalk.goodbye',
    questions: ['Bye', 'See you later', 'Goodbye', 'Talk to you soon'],
    answers: ['Goodbye!', 'Take care!', 'Catch you later!']
  },

  // FAQ Intents
  {
    intent: 'faq.hours',
    questions: ['What are your working hours?', 'When are you open?', 'What time do you close?'],
    answers: ['We’re open 9am to 6pm, Monday to Friday.']
  },
  {
    intent: 'faq.location',
    questions: ['Where are you located?', 'What is your address?', 'Where can I find you?'],
    answers: ['We are located at 123 Developer Lane, Code City.']
  },
  {
    intent: 'faq.contact',
    questions: ['How can I contact support?', 'What’s your phone number?', 'Can I email you?'],
    answers: ['You can reach us at support@example.com or call 1-800-DEV-NODE.']
  },

  // Support Intents
  {
    intent: 'support.request',
    questions: [
      'I need help with billing',
      'Can you help me with dashboard?',
      'I have an issue with login',
      'Problem with password reset'
    ],
    answers: ['Sure, I can help you with {{product}}!']
  },
  {
    intent: 'support.cancel',
    questions: [
      'I want to cancel my subscription',
      'Cancel my membership',
      'I’d like to stop using your service'
    ],
    answers: ['Your subscription to {{product}} has been cancelled.']
  },
  {
    intent: 'support.resetPassword',
    questions: [
      'I forgot my password',
      'How do I reset my password?',
      'Can you help me recover my login?'
    ],
    answers: ['Click the "Forgot Password" link on the login page to reset it.']
  },

  // Fallback
  {
    intent: 'fallback',
    questions: ['...'],
    answers: ['Sorry, I didn’t understand that. Can you try again?']
  }
];

module.exports = intents;