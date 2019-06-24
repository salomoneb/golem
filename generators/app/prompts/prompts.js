const path = require("path")
const validatorsPath = path.resolve(__dirname, "..", "validators/validators.js")
const { inputExists } = require(validatorsPath)

const prompts = {
  namePrompt: {
    type: "input",
    name: "componentName",
    message: "What's the name of your component?",
    validate(input) {
      return inputExists(input)
    }
  },
  descriptionPrompt: {
    type: "input",
    name: "componentDescription",
    message: "Enter a component description (optional)"
  }
}

module.exports = prompts