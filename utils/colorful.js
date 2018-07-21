var colors = require('colors');

function printMessageInRanbow(msg){
    console.log(colors.rainbow(msg));
}

module.exports = {
    printRanbow: printMessageInRanbow
}