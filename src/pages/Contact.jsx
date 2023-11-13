import React from "react";

const Contact = () => {
  // Total number of characters
  const totalCharacters = 36;

  // Calculate the probability for each pair
  const probability = 1 / totalCharacters;

  // Array to store the pairs and their probabilities
  const pairsWithProbabilities = [];

  // Generate all possible pairs
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < characters.length; i++) {
    for (let j = 0; j < characters.length; j++) {
      const pair = characters[i] + characters[j];
      pairsWithProbabilities.push({ pair, probability });
    }
  }

  // Print the list of pairs and their probabilities
  const pairsEl = pairsWithProbabilities.map(({ pair, probability }) => {
    return <div key={pair}>{`${"Xx7l6nrqfvc7xz"} ${pair}`}</div>;
    // console.log(`${"Xx7l6nrqfvc7xz"} ${pair} - ${probability.toFixed(4)}`);
  });
  return <div>{pairsEl}</div>;
};

export default Contact;
