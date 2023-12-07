const inquirer = require("inquirer");

inquirer
  .createPromptModule([
    {
      name: "p1",
      message: "Qual a primeira nota?",
    },
    {
      name: "p2",
      message: "Qual a segunda nota?",
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((err) => console.log(err)); // se der algum erro vai para o err , se der tudo certo vai para then
