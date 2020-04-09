



function generateMarkdown(data) {
  return `
#project Title 
${data.projectTitle}

##description 
${data.description}

## Table of Contents 
*[Installation] (#Installation)

*[Usage] (#Usage)

*[License] (#License)

*[Contributing] (#Contributing)

*[Tests] (#Test)

*[Questions] (#Questions)

*[Picture] (#Picture)

*[Email] (#Email)

`;
}

module.exports = generateMarkdown;
