export const questions = [
  {
    id: 1,
    question: "I'm usually open to getting to know people personally and establishing relationships with them.",
    optionA: "I'm usually open to getting to know people personally and establishing relationships with them.",
    optionB: "I'm not usually open to getting to know people personally and establishing relationships with them."
  },
  {
    id: 2,
    question: "How do you usually react?",
    optionA: "I usually react slowly and deliberately.",
    optionB: "I usually react quickly and spontaneously."
  },
  {
    id: 3,
    question: "How are you about other people's use of your time?",
    optionA: "I'm usually guarded about other people's use of my time.",
    optionB: "I'm usually open to other people's use of my time."
  },
  {
    id: 4,
    question: "At social gatherings, how do you typically behave?",
    optionA: "I usually introduce myself at social gatherings.",
    optionB: "I usually wait for others to introduce themselves to me at social gatherings."
  },
  {
    id: 5,
    question: "How do you focus your conversations?",
    optionA: "I usually focus my conversations on the interests of the people involved, even if that means straying from the business or subject at hand.",
    optionB: "I usually focus my conversations on the tasks, issues, business, or subject at hand."
  },
  {
    id: 6,
    question: "How would you describe your assertiveness and patience?",
    optionA: "I'm usually not assertive, and I can be patient with a slow pace.",
    optionB: "I'm usually assertive, and at times I can be impatient with a slow pace."
  },
  {
    id: 7,
    question: "How do you usually make decisions?",
    optionA: "I usually make decisions based on facts or evidence.",
    optionB: "I usually make decisions based on feelings, experiences or relationships."
  },
  {
    id: 8,
    question: "How much do you contribute to group conversations?",
    optionA: "I usually contribute frequently to group conversations.",
    optionB: "I usually contribute infrequently to group conversations."
  },
  {
    id: 9,
    question: "How do you prefer to work?",
    optionA: "I usually prefer to work with and through others, providing support when possible.",
    optionB: "I usually prefer to work independently or dictate the conditions in terms of how others are involved."
  },
  {
    id: 10,
    question: "How do you typically communicate?",
    optionA: "I usually ask questions or speak tentatively and indirectly.",
    optionB: "I usually make empathic statements or directly expressed opinions."
  },
  {
    id: 11,
    question: "What do you usually focus on?",
    optionA: "I usually focus primarily on ideas, concepts, or results.",
    optionB: "I usually focus primarily on persons, interactions, and feelings."
  },
  {
    id: 12,
    question: "How do you emphasize points when communicating?",
    optionA: "I usually use gestures, facial expression, and voice intonations to emphasize points.",
    optionB: "I usually do not use gestures, facial expressions, and voice intonations to emphasize points."
  },
  {
    id: 13,
    question: "How do you handle others' points of view?",
    optionA: "I usually accept others' points of view (ideas, feelings, and concerns).",
    optionB: "I usually don't accept others' points of view (ideas, feelings, and concerns)."
  },
  {
    id: 14,
    question: "How do you respond to risk and change?",
    optionA: "I usually respond to risk and change in a cautious or predictable manner.",
    optionB: "I usually respond to risk and change in a dynamic or unpredictable manner."
  },
  {
    id: 15,
    question: "How do you handle personal feelings and thoughts?",
    optionA: "I usually prefer to keep personal feelings and thoughts private, sharing only when I wish to do so.",
    optionB: "I usually find it natural and easy to share and discuss my feelings with others."
  },
  {
    id: 16,
    question: "What kind of experiences do you seek?",
    optionA: "I usually seek out new or different experiences and situations.",
    optionB: "I usually choose known or similar situations and relationships."
  },
  {
    id: 17,
    question: "How responsive are you to others?",
    optionA: "I'm usually responsive to others' agendas, interests, and concerns.",
    optionB: "I'm usually directed toward my own agendas, interests and concerns."
  },
  {
    id: 18,
    question: "How do you respond to conflict?",
    optionA: "I usually respond to conflict slowly and indirectly.",
    optionB: "I usually respond to conflict quickly and directly."
  }
];

// Scoring system
export const scoringSystem = {
  O: [1, 5, 9, 11, 13, 15, 17], // Questions where A = O
  G: [1, 3, 5, 7, 9, 11, 13, 15, 17], // Questions where B = G  
  D: [2, 4, 6, 8, 10, 12, 14, 16, 18], // Questions where B = D
  I: [2, 4, 6, 8, 10, 12, 14, 16, 18]  // Questions where A = I
};

// Communication style descriptions
export const communicationStyles = {
  'G_D': {
    title: 'CONTROLLER/DIRECTOR',
    subtitle: 'Commander',
    traits: [
      'Values getting the job done',
      'Decisive risk taker',
      'Good at delegating work to others',
      'Not shy but private about personal matters; comes on strong in conversation',
      'Likes to be where the action is',
      'Take charge, enterprising, competitive, efficient approach',
      'Fearless; no obstacle is too big to tackle',
      'Results Oriented'
    ]
  },
  'O_D': {
    title: 'PROMOTER/SOCIALIZER',
    subtitle: 'Entertainer',
    traits: [
      'Values enjoyment and helping others with the same',
      'Full of ideas and impulsive in trying them',
      'Wants to work to be fun for everyone',
      'Talkative and open about self; asks others\' opinions; loves to brainstorm',
      'Flexible; easily bored with routine',
      'Intuitive, creative, spontaneous, flamboyant approach',
      'Optimist; nothing is beyond hope',
      'Celebration Oriented'
    ]
  },
  'O_I': {
    title: 'SUPPORTER/RELATER',
    subtitle: 'Harmonizer',
    traits: [
      'Values acceptance and stability in circumstances',
      'Slow with big decisions; dislikes change',
      'Builds networks of friends to help do work',
      'Good listener; timid about voicing contrary opinions; concerned for others\' feelings',
      'Easy-going; likes slow, steady pace',
      'Friendly & sensitive; no person is unlovable',
      'Relationship Oriented'
    ]
  },
  'G_I': {
    title: 'ANALYZER/THINKER',
    subtitle: 'Assessor',
    traits: [
      'Values accuracy in details & being right',
      'Plans thoroughly before deciding to act',
      'Prefers to work alone',
      'Introverted; quick to think and slow to speak; closed about personal matters',
      'Highly organized; even plans spontaneity!',
      'Cautious, logical, thrifty approach',
      'Thoughtful; no problem is too big to ponder',
      'Idea Oriented'
    ]
  }
};