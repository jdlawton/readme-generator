// function to generate markdown for README
function generateMarkdown(data) {

  const {title, description, installation, usage, contribute, tests, ...contact} = data;

  //console.log(data);
  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * License Info (Not Implemented Yet)
  * [Contribution](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contribution
  ${contribute}

  ## Tests
  ${tests}

  ## Questions
  If you have any questions about this project, you can email me at ${contact.email}.
  For other projects, check out my [GitHub](https://github.com/${contact.username}).
`;
}

module.exports = generateMarkdown;
