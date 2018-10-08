const fs = require('fs');
const path = require('path');
const dbConnection = require('./dbConnection');


const dbBuild = (fileName, cb) => {
  const sql = fs.readFileSync(path.join(__dirname, fileName)).toString();
  dbConnection.query(sql, (err, res) => {
    if (err) return cb(err);
    cb(null, res);
  });
};

dbBuild('dbBuild.sql',(err,result)=>{
  console.log(result);
  
});
module.exports = dbBuild;
