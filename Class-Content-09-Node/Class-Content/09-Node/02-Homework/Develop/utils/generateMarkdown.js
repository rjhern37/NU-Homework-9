
function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}



function generateMarkdown(data) {
  console.log(data);
  return `
#project Title 
${data.projectTitle}

#project URL
${generateProjectUrl(data.githubName, data.projectTitle)}



##description 
${data.description}

## Table of Contents 

*[Installation] (#Installation)
${data.install}

*[Usage] (#Usage)
${data.usage}

*[License] (#License)
${data.license}

*[Tests] (#Test)
${data.runTest}

*[Picture] (#Picture)
${data.avatar_url}

*[Email] (#Email)
${data.email}


`;
}

module.exports = generateMarkdown;
