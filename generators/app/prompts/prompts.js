const path = require("path")
const validatorsPath = path.resolve(__dirname, "..", "validators/validators.js")
const { inputExists } = require(validatorsPath)

const prompts = {
  componentNamePrompt: {
    type: "input",
    name: "name",
    message: "What's the name of your component?",
    validate(input) {
      return inputExists(input)
    }
  }
}

module.exports = prompts