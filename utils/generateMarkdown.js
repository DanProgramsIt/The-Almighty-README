const licenseBadgeLinks = require('./licenseBages');
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  data.licenseBadge = licenseBadgeLinks[data.license];

  return `# ${data.title}

  ${data.licenseBadge}
  
  ## description

  ${data.description}

  ## Table of Contents

  ============================

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

  ============================

  ## Installation

  To install dependencies, simply run the following:

  \`
  ${data.installation}
  \`

  ## Usage
  
  ${data.usage}

  ## License

  This repository is licensed by the ${data.license} license.

  ## Contributing

  ${data.contribute}

  ## Tests

  To run the tests, use the following:

  \`
  ${data.tests}
  \`

  ## Questions

  For any questions about this repo, Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.username}](https://github.com/${data.username})

  `;
}

module.exports = generateMarkdown;
