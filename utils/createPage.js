const fs = require('fs');

// function to write README file, it checks to see if the "dist" directory exists and if not, creates it, then writes the README to that directory.
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        const dir = "./dist"

        //check to see if the dist directory exists, if not, create it
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, err => {
                if (err) {
                    reject(err);
                    return;
                }
            });  
        }
        //write the README.md file to the ./dist directory
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: "File created!"
            });
        });
    });
    
}

module.exports = writeToFile;