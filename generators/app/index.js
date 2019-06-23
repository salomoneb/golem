const Generator = require('yeoman-generator')
const path = require("path")
const promptPath = path.resolve(__dirname, "prompts/prompts.js")
const { componentNamePrompt } = require(promptPath)

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    const prompt = await this.prompt([componentNamePrompt])
    this.log("this is my component name", prompt.name)
    this.log(this.destinationRoot())
  }
}

