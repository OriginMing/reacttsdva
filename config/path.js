const path = require('path');

// node中的api
const appDir = process.cwd();
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);
//console.log(path.resolve("./src"));// 默认和 process.cwd()拼接 而非__dirname dirname是
module.exports = resolveApp;