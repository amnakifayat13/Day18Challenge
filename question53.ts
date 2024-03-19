/* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer
knows, like coding languages, tools and software frameworks. find a way to get three specific skills from this list 
and show them.*/

let programmerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    tools: ["Git", "Webpack", "Docker"],
    frameworks: ["React", "Angular", "Vue"],
}

let{ languages, tools, frameworks} = programmerSkills
console.log(`language: ${languages[0]}, tool:${tools[0]}, framework: ${frameworks[0]}`);
console.log(`language: ${languages[1]}, tool:${tools[1]}, framework: ${frameworks[1]}`);
console.log(`language: ${languages[2]}, tool:${tools[2]}, framework: ${frameworks[2]}`);
