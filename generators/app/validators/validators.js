/**
 *  Prompt question validation
 */

const validators = {
  validateComponentName(input) {
    if (typeof input !== "string" || input.trim() === "") {
      return "Please provide a component name"
    }
    return true
  }
}

module.exports = validators