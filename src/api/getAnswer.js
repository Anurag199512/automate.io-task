const inquirer = require("inquirer");
const getDefinition = require("./getDefinition");

const askForWord = () => {
  const word = {
    type: "text",
    name: "WORD",
    message: "enter a word"
  };
  return inquirer.prompt(word);
};

const getAnswer = async MAIN_MENU => {
  switch (MAIN_MENU) {
    case "Definitions":
      // ask for a word
      const wordID = await askForWord();

      // call api to search for the word and get data
      getDefinition(MAIN_MENU, wordID.toString());

      break;
    case "Synonyms":
      // code block
      break;
    case "Antonyms":
      // code block
      break;
    case "Examples":
      // code block
      break;
    case "Dictionary":
      // code block
      break;
    case "Dictionary for 'Word of the Day'":
      // code block
      break;
    case "Play Word Game":
      // code block
      break;
    default:
    // code block
  }
};

module.exports = getAnswer;
