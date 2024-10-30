const {exec} =require('child_process');


const cmd ='dir';
exec(cmd{encoding:'utf-8'},(err,stdout,stderr)=>{
    if(err){
        console.log(`err 발생 :${err}`);
        return;
    }
    console.log(stdout);
})