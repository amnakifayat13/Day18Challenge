/* Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you
need at that moment, like adjusting labels on user choices.*/
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
function flexibleObject(Program, totalStudents) {
    var adjustingObject = {};
    adjustingObject[Program] = totalStudents;
    return adjustingObject;
}
var userChoice = flexibleObject("AI Initiative Program", 50000);
console.log(userChoice);
