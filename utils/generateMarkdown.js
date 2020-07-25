//this function will take the licensing selected by the user prompt and add the corresponding badge at the top of the file and
//the description in the licensing section of the final README.
const generateLicense = license => {
  console.log("inside generateLicense");
  switch (license) {
    case "MIT":
      console.log("You have selected the MIT license");
      return `This software is licensed under the [MIT license](https://choosealicense.com/licenses/mit/).`
    case "GNU GPLv3":
      console.log("You have selected the GNU GPLv3 license");
      return `This software is licensed under the [GNU GPLv3 license](https://choosealicense.com/licenses/gpl-3.0/).`
    case "Mozilla 2.0":
      console.log("You have selected the Mozilla Public License 2.0");
      return `This software is licensed under the [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/).`
    case "Apache 2.0":
      console.log("You have selected the Apache License 2.0");
      return `This software is licensed under the [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/).`
    default:
      console.log("You have selected Unlicensed");
      return `This software is not available under any license and may not be copied, distributed, or modified.`
  }
}


// function to generate markdown for README
function generateMarkdown(data) {

  const {title, description, installation, usage, license, contribute, tests, ...contact} = data;

  console.log(data);
  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## License
  ${generateLicense(license)}

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
