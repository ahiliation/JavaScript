const mongoose = require('mongoose');
// ... connect to MongoDB ...

// Assuming a Mongoose schema and model named 'Article' exists
// and an index on 'title' and 'content' has been created.

async function searchArticles(query) {
    try {
        // Use the $text operator and $search expression
        const results = await Article.find({ $text: { $search: query } });
        return results;
    } catch (error) {
        console.error('Search failed:', error);
        throw error;
    }
}

// Example usage:
searchArticles("MongoDB tutorial")
    .then(articles => console.log('Search results:', articles))
    .catch(err => console.error(err));
