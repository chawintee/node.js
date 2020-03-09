// import { reject } from "async";

// import { reject } from "async"

// import { reject } from "async";

/************************************Set time out hell function ************************************************/

// setTimeout(()=>{
//     console.log('a')
//     setTimeout(()=>{
//             console.log('b')
//             setTimeout(()=>{
//                     console.log('c')
//                     setTimeout(()=>{
//                         console.log('d')
//                     },1000);
//             },1000);
//     },1000);
// },1000);



/***************************************  Promise setTimeoutAndLog *****************************************************/

// function setTimeoutAndLog(input){
//     return new Promise(function(fulfill,reject){
//         setTimeout(function(){
//             fulfill(`${input}`)
//         }, 1000)
//     })
// }

// setTimeoutAndLog('a')
//     .then(function(result){
//         console.log(result)
//         return setTimeoutAndLog("b")
//     }).then(function(result){
//         console.log(result)
//         return setTimeoutAndLog('c')
//     }).then(function(result){
//         console.log(result)
//         return setTimeoutAndLog('d')
//     }).then(function(result){
//         console.log(result)
//     })


/***************************************  Promise setTimeoutAndLog *****************************************************/

// function setTimeoutAndLog(input){
//     return new Promise(function(fulfill,reject){
//         setTimeout(function(){
//             fulfill(console.log(input))
//         }, 1000)
//     })
// }

// setTimeoutAndLog('a')
//     .then(function(result){
//         return setTimeoutAndLog("b")
//     }).then(function(result){
//         return setTimeoutAndLog('c')
//     }).then(function(result){
//         return setTimeoutAndLog('d')
//     }).then(function(result){})

    
    
    /********************************************* Promise trial   *******************************************/
    
    // function trialpromise(inputtrial){
        //     return new Promise((fulfill,reject)=>{
            //         if(inputtrial==2){
                //             setTimeout(()=>fulfill (`${inputtrial} in 2 sec`),2000);
                //         }
                //         else{
                    //             setTimeout(()=>reject (`${inputtrial} in 1 sec`),1000);
                    //         }
                    //     })
                    // }
                    
                    // trialpromise(2)
                    // .then((result)=>{
                        // console.log(result)
                        // return trialpromise(2)
                        // })
                        // .then((result)=>
                        // console.log(result))
                        // .catch((err)=>
                        // console.log(err))
                        
                        
/***************************************  async await setTimeoutAndLog *****************************************************/
function setTimeoutAndLog(input){
    return new Promise(function(fulfill,reject){
        setTimeout(function(){
            fulfill(console.log(input))
        }, 1000)
    })
}

setTimeoutAndLog('a')
    .then(function(result){
        return setTimeoutAndLog("b")
    }).then(function(result){
        return setTimeoutAndLog('c')
    }).then(function(result){
        return setTimeoutAndLog('d')
    }).then(function(result){})
                        
