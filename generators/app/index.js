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
    this.log("this is my component name", this.answers.name)
  }

  paths() {
    this.destinationRoot(this.answers.name)
    this.log(this.destinationRoot())
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath("**/*"),
      this.destinationPath(),
      this.answers
    )
  }
}

