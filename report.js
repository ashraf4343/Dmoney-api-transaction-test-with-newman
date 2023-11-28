const newman = require('newman');
require('dotenv').config();

newman.run({
    //collection: require('./collection/dmoney.json'),
    collection: `https://api.postman.com/collections/31309464-e081fa7f-1546-4752-a06f-1dc3bd37b5dd?access_key=${process.env.accessKey}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});