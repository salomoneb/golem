const Generator = require('yeoman-generator')
const path = require("path")
const promptPath = path.resolve(__dirname, "prompts/prompts.js")
const { componentNamePrompt } = require(promptPath)

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }

  async prompting() {
    this.answers = await this.prompt([componentNamePrompt])
  }

  paths() {
    this.destinationRoot(this.answers.name)
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("**/*"),
      this.destinationPath(),
      this.answers
    )
  }
}

