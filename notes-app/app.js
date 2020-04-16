const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs')

yargs.command({
    
    command:"add" ,
    describe:"add a new note",
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{ 
            describe:'note body',
            demandOption:true,
            type:'string',
        }
    },
    handler(){
        console.log('title:' + argv.title);
        console.log('body:'+ argv.body);
    }
})

yargs.command({

    command:"remove" ,
    describe:"remove a  note",
    handler:function(){
        console.log('remove file')
    }
})

console.log(yargs.argv);

 

