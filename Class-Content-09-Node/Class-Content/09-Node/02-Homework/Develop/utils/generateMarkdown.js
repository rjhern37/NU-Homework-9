



function generateMarkdown(data) {
  return `
#project Title 
${data.projectTitle}

##description 
${data.description}

## Table of Contents 

*[Installation] (#Installation)
${data.avatar_url}

*[Usage] (#Usage)
${data.avatar_url}

*[License] (#License)
${data.avatar_url}

*[Contributing] (#Contributing)
${data.avatar_url}

*[Tests] (#Test)
${data.avatar_url}

*[Questions] (#Questions)
${data.avatar_url}

*[Picture] (#Picture)
${data.avatar_url}

*[Email] (#Email)
${data.avatar_url}

`;
}

module.exports = generateMarkdown;
