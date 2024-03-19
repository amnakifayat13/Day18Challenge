/* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer
knows, like coding languages, tools and software frameworks. find a way to get three specific skills from this list
and show them.*/
var programmerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    tools: ["Git", "Webpack", "Docker"],
    frameworks: ["React", "Angular", "Vue"],
};
var languages = programmerSkills.languages, tools = programmerSkills.tools, frameworks = programmerSkills.frameworks;
console.log("language: ".concat(languages[0], ", tool:").concat(tools[0], ", framework: ").concat(frameworks[0]));
console.log("language: ".concat(languages[1], ", tool:").concat(tools[1], ", framework: ").concat(frameworks[1]));
console.log("language: ".concat(languages[2], ", tool:").concat(tools[2], ", framework: ").concat(frameworks[2]));
