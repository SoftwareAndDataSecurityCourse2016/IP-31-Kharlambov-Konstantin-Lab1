/**
 * Created by Konstantin on 08.10.2016.
 */
var fs = require('fs');

var task1 = fs.readFileSync('task1.txt', 'utf8');



function decrypt(data) {
    console.log(data);
}


decrypt(task1);