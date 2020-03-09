const fs = require('fs');

console.log(typeof fs);

// fs.writeFileSync('trialwritefilesync.txt','Hello world ,how are you ? Today is 9 March 2020');

// let content = fs.readFileSync('trialwritefilesync.txt',{encoding : 'utf-8'});
// let content = fs.readFileSync('trialwritefilesync.txt','utf-8');

// console.log(content);

fs.writeFileSync('trialwritefilesynctoappend.txt','Hello world ,how are you ? Today is 9 March 2020 trial to append file sync');

let contentappernt = fs.appendFileSync('trialwritefilesync',)
