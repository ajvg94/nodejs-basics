//#region import and export
/*
    To import a module:
    const mod_name = require('mod_dir');

    To export a module:
    module.exports = varToExport;
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/
//#region Process arguments
/*
    When you call node to execute a file you can add arguments and get them in the following way:
    Call:
    node app.js argument

    Get arguments: process.argv[]
    console.log(process.argv[2]); //log first argument, because the 0 is node and 1 is app.js

    It is recommended to is yargs instead of this
*/
//#endregion
/*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*/