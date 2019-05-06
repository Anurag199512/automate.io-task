const inquirer = require("inquirer");

const askQuestions = () => {
  const mainQuestions = [
    {
      type: "list",
      name: "MAIN_MENU",
      message: "select an option",
      choices: [
        { name: "Definitions" },
        { name: "Synonyms" },
        { name: "Antonyms" },
        { name: "Examples" },
        { name: "Dictionary" },
        { name: "Dictionary for 'Word of the Day'" },
        { name: "Play Word Game" }
      ]
    }
  ];
  return inquirer.prompt(mainQuestions);
};

module.exports = askQuestions;
