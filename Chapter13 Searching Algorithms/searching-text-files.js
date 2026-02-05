const fs = require('fs');

function searchInFile(filePath, query) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        // Use a case-insensitive regular expression to find matches
        const regex = new RegExp(query, 'i');
        const lines = data.split('\n');
        const matches = lines.filter(line => regex.test(line));
        
        console.log(`Found ${matches.length} matches for "${query}" in ${filePath}:`);
        matches.forEach(match => console.log(`- ${match.trim()}`));
    });
}

// Example usage:
fs.writeFileSync('sample.txt', 'Hello world\nNode.js is great\nNodejs text search example');
searchInFile('sample.txt', 'Node');
