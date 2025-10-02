const fs = require('fs');
const path = require('path');

const logFilePath = path.join(process.cwd(), 'logs');

if (!fs.existsSync(logFilePath)) {
    fs.mkdirSync(logFilePath);
}

process.chdir(logFilePath);

for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    const fileContent = `This is log file number ${i}`;
    fs.writeFileSync(fileName, fileContent);
    console.log(fileName);
}