let chalk = require("chalk");
let df = require('dateformat');

module.exports = {
    info(message, module) {
        if(!module){
            return console.log(chalk.green("[" + df(new Date(), "dd.mm.yyyy HH:MM:ss") + "][INFO]") + ": " + message);
        }
        return console.log(chalk.green("[" + df(new Date(), "dd.mm.yyyy HH:MM:ss") + "][INFO]" + "[" + module + "]") + ": " + message);
    },
    warn(message, module) {
        if(!module){
            return console.log(chalk.yellow("[" + df(new Date(), "dd.mm.yyyy HH:MM:ss") + "][WARNING]") + ": " + message);
        }
        return console.log(chalk.yellow("[" + df(new Date(), "dd.mm.yyyy HH:MM:ss") + "][WARNING]" + "[" + module + "]") + ": " + message);
    },
    error(message, module) {
        if(!module){
            return console.log(chalk.red("[" + df(new Date(), "dd.mm.yyyy HH:MM:ss") + "][ERROR]") + ": " + message);
        }
        return console.log(chalk.red("[" + df(new Date(), "dd.mm.yyyy HH:MM:ss") + "][ERROR]" + "[" + module + "]") + ": " + message);
    },
    fatal(message, module) {
        if(!module){
            return console.log(chalk.red("[" + df(new Date(), "dd.mm.yyyy HH:MM:ss") + "][FATAL]") + ": " + message);
        }
        return console.log(chalk.red("[" + df(new Date(), "dd.mm.yyyy HH:MM:ss") + "][FATAL]" + "[" + module + "]") + ": " + message);
    },
    debug(message, module) {
        if(!module){
            return console.log(chalk.blue("[" + df(new Date(), "dd.mm.yyyy HH:MM:ss") + "][DEBUG]") + ": " + message);
        }
        return console.log(chalk.blue("[" + df(new Date(), "dd.mm.yyyy HH:MM:ss") + "][DEBUG]" + "[" + module + "]") + ": " + message);
    },
}