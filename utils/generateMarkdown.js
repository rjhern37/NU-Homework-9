
function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}



function generateMarkdown(data) {
  // console.log(data);
  return `
# Project Title 
${data.projectTitle}


# Project URL
${generateProjectUrl(data.githubName, data.projectTitle)}

## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Test](#test)
* [Picture](#picture)
* [Email](#email)


## Installation
${data.install}

## Usage
${data.usage}

## Test
${data.runTest}

## License
${renderBadge(data.license)}

## Picture
<img src="${data.avatar_url}"/>

## Email
${data.email}
`;
}

function renderBadge(license){
  if(license !== "NONE"){
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg"/>`
  } 
  return ""
}

module.exports = generateMarkdown;
