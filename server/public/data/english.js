const english = [
  {
    id: 1,
    question: 'What is a colloquial?',
    selection: ['Informal spoken language', 'An exaggeration used for effect', 'An imitation of a sound they represent', 'A comparison of two things'],
    answer: 'Informal spoken language',
    description: 'Informal spoken language is used to give a conversational tone.',
    level: 1,
    subject: 1
  },
  {
    id: 2,
    question: 'What is an example of a Personification?',
    selection: ['"Traffic slowed to a crawl."', '"The sun is bright and yellow."', '"The door went SLAM!"', '"The snow is a white blanket."'],
    answer: '"Traffic slowed to a crawl."',
    description: 'A Personification is the attribution of a personal nature or human characteristics to something non-human, or the representation of an abstract quality in human form.',
    level: 1,
    subject: 1
  },
  {
    id: 3,
    question: 'What is a Euphemism?',
    selection: ['A way of emphasising a point.', 'A phrase that is less offensive or less troubling than another.', 'Language that makes fun of someone.', 'A direct request or command.'],
    answer: 'A phrase that is less offensive or less troubling than another.',
    description: 'A Euphemism is a mild or indirect word or expression substituted for one considered to be too harsh or blunt when referring to something unpleasant or embarrassing.',
    level: 1,
    subject: 1
  },
  {
    id: 4,
    question: 'What is third person viewpoint?',
    selection: ['Uses "I"', 'Uses "he, she"', 'An all seeing, all knowing narrator.', 'Uses "their, them"'],
    answer: 'Uses "he, she"',
    description: 'Third Person Viewpoint is when the narrator is not a character, therefore uses "he, she".',
    level: 1,
    subject: 1
  },
  {
    id: 5,
    question: 'What is the coreect term for an exaggeration used for effect?',
    selection: ['Repitition', 'Hyperbole', 'Anecdote', 'Pun'],
    answer: 'Hyperbole',
    description: 'A Hyperbole is an exaggerated statement or claim not meant to be taken literally (for effect).',
    level: 1,
    subject: 1
  },
  {
    id: 1,
    question: 'What is the method of which the ordinary expression of the word is more or less the opposite of what is intended.',
    selection: ['Allusion', 'Irony', 'Euphemism', 'Denotation'],
    answer: 'Irony',
    description: 'Irony is the method of which the ordinary expression of the word is more or less the opposite of what is intended. Eg. "That will do extremely well, you have delighted us long enough." to someone playing the piano awfully. It may seem like praise but it\'s not. Irony draws attention to the real meaning of the word and may carry the character or writer\'s atttude. May be used for humour.',
    level: 2,
    subject: 1
  },
  {
    id: 2,
    question: 'What is the term for an indirect reference to a person or event. ',
    selection: ['Antithesis', 'Allusion', 'Apostrophe', 'Assonance'],
    answer: 'Allusion',
    description: 'An Allusion is an indirect reference to a person or event. These may be, but not necessarily, people and events in mythology or history.. An allusion can create an added dimension to an image ofter by comparison to similar qualities.',
    level: 2,
    subject: 1
  },
  {
    id: 3,
    question: 'What is a Caesura?',
    selection: ['A punctuation mark that creates natural pause.', 'Two words or phrases of contrasting meaning put together.', 'Comparison of two ideas by using "as" or "like."', 'Giving human qualities to inhuman, inanimate objects.'],
    answer: 'A punctuation mark that creates natural pause.',
    description: 'A Caesura is a natural pause, a break in a line of poetry, usually indicated by a punctuation mark. Eg. "When will the bell ring, and end this weariness?"',
    level: 2,
    subject: 1
  },
  {
    id: 4,
    question: 'What is the correct English term for "toilet humour"?',
    selection: ['Scatalogical Language', 'Elevated Language', 'Archaisms', 'Dysphemism'],
    answer: 'Scatalogical Language',
    description: 'Scatalogical Language is characterized by obscenity or preoccupation with obscenity, especially in the form of references to excrement.',
    level: 2,
    subject: 1
  },
  {
    id: 5,
    question: 'What is the term when the meaning of a line of poetry is completed on the next line?',
    selection: ['Sibilance.', 'Alliteration.', 'Onomatopoeia.', 'Enjambment.'],
    answer: 'Enjambment.',
    description: 'When the meaning of a line of poetry is completed on the next line. Can emphasize an idea or add to the rhythm and flow of lines. Eg. "How long have they tugged the leash, and strained apart /n My pack of unruly hounds".',
    level: 2,
    subject: 1
  },
  {
    id: 1,
    question: 'What is an example of a Personification?',
    selection: ['"Traffic slowed to a crawl."', '"The sun is bright and yellow."', '"The door went SLAM!"', '"The snow is a white blanket."'],
    answer: '"Traffic slowed to a crawl."',
    description: 'A Personification is the attribution of a personal nature or human characteristics to something non-human, or the representation of an abstract quality in human form.',
    level: 3,
    subject: 1
  },
  {
    id: 2,
    question: 'What is a Caesura?',
    selection: ['A punctuation mark that creates natural pause.', 'Two words or phrases of contrasting meaning put together.', 'Comparison of two ideas by using "as" or "like."', 'Giving human qualities to inhuman, inanimate objects.'],
    answer: 'A punctuation mark that creates natural pause.',
    description: 'A Caesura is a natural pause, a break in a line of poetry, usually indicated by a punctuation mark. Eg. "When will the bell ring, and end this weariness?"',
    level: 3,
    subject: 1
  },
  {
    id: 3,
    question: 'What is a Euphemism?',
    selection: ['A way of emphasising a point.', 'A phrase that is less offensive or less troubling than another.', 'Language that makes fun of someone.', 'A direct request or command.'],
    answer: 'A phrase that is less offensive or less troubling than another.',
    description: 'A Euphemism is a mild or indirect word or expression substituted for one considered to be too harsh or blunt when referring to something unpleasant or embarrassing.',
    level: 3,
    subject: 1
  },
  {
    id: 4,
    question: 'What is the method of which the ordinary expression of the word is more or less the opposite of what is intended.',
    selection: ['Allusion', 'Irony', 'Euphemism', 'Denotation'],
    answer: 'Irony',
    description: 'Irony is the method of which the ordinary expression of the word is more or less the opposite of what is intended. Eg. "That will do extremely well, you have delighted us long enough." to someone playing the piano awfully. It may seem like praise but it\'s not. Irony draws attention to the real meaning of the word and may carry the character or writer\'s atttude. May be used for humour.',
    level: 3,
    subject: 1
  },
  {
    id: 5,
    question: 'What is third person viewpoint?',
    selection: ['Uses "I"', 'Uses "he, she"', 'An all seeing, all knowing narrator.', 'Uses "their, them"'],
    answer: 'Uses "he, she"',
    description: 'Third Person Viewpoint is when the narrator is not a character, therefore uses "he, she".',
    level: 3,
    subject: 1
  }
]

export default english
