const fs = require('fs');
const path = require('path');

const logFilePath = path.join(process.cwd(), 'logs');

if (fs.existsSync(logFilePath)) {
    const files = fs.readdirSync(logFilePath);

    files.forEach(file => {
        const filePath = path.join(logFilePath, file);
        fs.unlinkSync(filePath);
        console.log(`Deleted file: ${filePath}`);
    });

    fs.rmdirSync(logFilePath);
    console.log(`Deleted directory: ${logFilePath}`);
} else {
    console.log(`Directory does not exist: ${logFilePath}`);
}