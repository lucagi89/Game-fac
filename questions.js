
const questions = [
    {
      question: "Did World War II start in 1940?",      
      correctAnswer: 'no'
    },
    {
      question: "Did the ancient Egyptians build the Great Wall of China?",   
      correctAnswer: 'no'
    },
    {
      question: "Did Martin Luther King Jr. deliver his famous 'I Have a Dream' speech in 1963?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the United States a colony of Spain before gaining independence?",
      correctAnswer: 'no'
    },
    {
      question: "Did the French Revolution take place in the 18th century?",
      correctAnswer: 'yes'
    },
    {
      question: "Did Neil Armstrong land on Mars during the Apollo 11 mission?",
      correctAnswer: 'no'
    },
    {
      question: "Did Christopher Columbus discover America in the 15th century?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Industrial Revolution occur in the 19th century?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Roman Empire exist during the Middle Ages?",
      correctAnswer: 'no'
    },
    {
      question: "Did Albert Einstein develop the theory of relativity in the 20th century?",
      correctAnswer: 'yes'
    },
 
    {
      question: "Did Julius Caesar rule the Roman Republic?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the American Civil War take place in the 19th century?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Berlin Wall built in the 20th century?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Renaissance occur after the Middle Ages?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Cold War primarily involve the United States and the Soviet Union?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Declaration of Independence signed in the 18th century?",
      correctAnswer: 'yes'
    },
    {
      question: "Did Nelson Mandela become the President of South Africa?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Russian Revolution lead to the establishment of the Soviet Union?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Titanic sink in 1912?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Magna Carta establish principles of limited government?",
      correctAnswer: 'yes'
    },
    {
      question: "Can light behave both as a particle and a wave?",
      correctAnswer: 'yes'
    },
    {
      question: "Can the human brain generate new neurons throughout life?",
      correctAnswer: 'yes'
    },
    {
      question: "Is it possible for an electron to be in multiple places at once?",
      correctAnswer: 'yes'
    },
    {
      question: "Can a computer program exhibit human-like intelligence?",
      correctAnswer: 'yes'
    },
    {
      question: "Can quantum entanglement enable instantaneous communication?",
      correctAnswer: 'yes'
    },
    {
      question: "Is it possible to create artificial organs through 3D printing?",
      correctAnswer: 'yes'
    },
    {
      question: "Can certain species of plants exhibit rapid movement?",
      correctAnswer: 'yes'
    },
    {
      question: "Is the concept of time travel currently proven by scientific evidence?",
      correctAnswer: 'no'
    },
    {
      question: "Is it possible to divide a number by zero?",
      correctAnswer: 'no'
    },
    {
      question: "Can humans see infrared light without the aid of technology?",
      correctAnswer: 'no'
    },
    {
      question: "Does every species of penguin live in Antarctica?",
      correctAnswer: 'no'
    },
    {
      question: "Is there a single universal language spoken by all humans?",
      correctAnswer: 'no'
    },
    {
      question: "Is there scientific evidence supporting the existence of Bigfoot?",
      correctAnswer: 'no'
    },
    {
      question: "Does the human brain have a fixed storage capacity for memories?",
      correctAnswer: 'no'
    },
    {
      question: "Can a computer algorithm solve any computational problem?",
      correctAnswer: 'no'
    },
    {
      question: "Is the concept of perpetual motion machines achievable in reality?",
      correctAnswer: 'no'
    },
    {
      question: "Is there a direct causal link between vaccines and autism?",
      correctAnswer: 'no'
    },
    {
      question: "Can humans survive without sleep indefinitely?",
      correctAnswer: 'no'
    },
    {
      question: "Does astrology have a scientific basis for predicting future events?",
      correctAnswer: 'no'
    },
    {
      question: "Is there an even number greater than any other even number?",
      correctAnswer: 'no'
    },
    {
      question: "Can a single drop of water contain an infinite number of molecules?",
      correctAnswer: 'no'
    },
    {
      question: "Does every living organism require oxygen to survive?",
      correctAnswer: 'no'
    },
    {
      question: "Is there a unique fingerprint pattern shared by identical twins?",
      correctAnswer: 'no'
    },
    {
      question: "Can an object be in two places at the same time?",
      correctAnswer: 'no'
    },
    {
      question: "Do all birds possess the ability to fly?",
      correctAnswer: 'no'
    },
    {
      question: "Is there scientific evidence supporting the existence of unicorns?",
      correctAnswer: 'no'
    },
    {
      question: "Is it possible to create an object with zero mass?",
      correctAnswer: 'no'
    },
    {
      question: "Can a particle exist in multiple states simultaneously through quantum superposition?",
      correctAnswer: 'yes'
    },
    {
      question: "Is it possible to create a vaccine for every infectious disease?",
      correctAnswer: 'yes'
    },
    {
      question: "Can an object be both a wave and a particle at the same time?",
      correctAnswer: 'yes'
    },
    {
      question: "Is it possible for an individual to have a photographic memory?",
      correctAnswer: 'yes'
    },
    {
      question: "Can consciousness exist independent of a physical body?",
      correctAnswer: 'yes'
    },
    {
      question: "Is it possible to create an artificial intelligence that surpasses human intelligence?",
      correctAnswer: 'yes'
    },
    {
      question: "Was Joan of Arc a French military leader during the Hundred Years' War?",
      correctAnswer: 'yes'
    },
    {
      question: "Did Christopher Columbus discover America?",
      correctAnswer: 'no'
    },
    {
      question: "Was Julius Caesar the first Emperor of Rome?",
      correctAnswer: 'no'
    },
    {
      question: "Was the signing of the Declaration of Independence in 1776?",
      correctAnswer: 'yes'
    },
    {
      question: "Did World War I start in 1914?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Battle of Waterloo fought in 1815?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Renaissance period occur during the 14th to 17th centuries?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Berlin Wall constructed in 1961?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the signing of the Treaty of Versailles in 1919?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Crusades occur during the Middle Ages?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Cuban Missile Crisis in 1962?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Apollo 11 mission land humans on the Moon in 1969?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Battle of Hastings in 1066?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Ancient Egyptians build the Great Pyramid of Giza?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Roman Empire exist during the 1st century AD?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Battle of Stalingrad a turning point in World War II?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Spanish Armada attempt to invade England in 1588?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the signing of the Treaty of Tordesillas in 1494?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the American Revolutionary War begin in 1775?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Louisiana Purchase made in 1803?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Bolshevik Revolution lead to the establishment of the Soviet Union?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Battle of Gettysburg a major conflict in the American Civil War?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Mongol Empire conquer a significant portion of Asia and Europe?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the construction of the Great Wall of China completed in the 16th century?",
      correctAnswer: 'no'
    },
    {
      question: "Did the Vikings originate from Scandinavia?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Renaissance a period of cultural and intellectual transformation in Europe?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Battle of Waterloo mark the end of Napoleon Bonaparte's rule?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Treaty of Versailles signed at the end of World War I?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Cold War involve ideological tensions between the United States and the Soviet Union?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the discovery of the Americas by Christopher Columbus in 1492?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Black Death pandemic occur in the 14th century?",
      correctAnswer: 'yes'
    },
    {
      question: "Was the Battle of Hastings fought in 1066?",
      correctAnswer: 'yes'
    },
    {
      question: "Did the Industrial Revolution begin in the 18th century?",
      correctAnswer: 'yes'
    }
  
  ];


export default questions;