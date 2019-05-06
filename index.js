#!/usr/bin/env node

const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const askQuestions = require("./src/questions");
const getAnswer = require("./src/api/getAnswer");

const init = () => {
  console.log(
    chalk.yellow(
      figlet.textSync("Dictionary Palace", {
        font: "Varsity",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
};

const run = async () => {
  // display intro message
  init();

  // display main menu
  const answer = await askQuestions();
  const { MAIN_MENU } = answer;

  // call api based on the answer
  const data = await getAnswer(MAIN_MENU);
};

run();
