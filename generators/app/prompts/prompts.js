const path = require("path")
const validatorsPath = path.resolve(__dirname, "..", "validators/validators.js")
const { validateComponentName } = require(validatorsPath)

const prompts = {
  componentNamePrompt: {
    type: "input",
    name: "name",
    message: "What's the name of your component?",
    validate(input) {
      return validateComponentName(input)
    }
  }
}

module.exports = prompts