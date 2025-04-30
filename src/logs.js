// Import modules
const fs = require("fs")
const { constrainedMemory } = require("process")


// Define logs file
logs_file = "../logs.txt"


// Write a new log entry to the logs file
function Write(content) {
    console.log(`Writing ${content} to ${logs_file}`)
    fs.writeFile(logs_file, `\n content`, error => {
        console.log(`Writing ${content} to ${logs_file}`)
        if (error) console.log(`Error while logging ${content}`)
    })
}

// Clear the logs file
function Clear() {
    fs.writeFileSync(logs_file, "", error => {
        if (error) console.log("Error while clearing logs file");
    });
}


// Exports
module.exports = {
    Write,
    Clear
}
