// console.log("one");

// setTimeout(() => {
//     console.log("hello");

// },4000);

// function sum(a,b){
//     console.log(a * b);

// }
//     function calculator(a,b, sumCallback){
//         sumCallback(a,b);

//     }


    // let hello = () => {
    //     console.log("hello");
    // }
    // setTimeout(hello,3000);


    let age = 17;
    if (age >= 18) {
        if(age >=60) {
            console.log("senior");
        }else{
            console.log("middle");
        }
    }else {
            console.log("child");
        
    }
    

        function getdata(dataid,getnextData){
         return new Promise((reoslve,reject)=> {
            setTimeout(() => {
            console.log("data",dataid);
            resolve("sucess");
            if(getnextData){
            getnextData();
            }
            }, 2000 );
          });
    }
         //promise chain
         getdata(1).then((res) => {
        console.log(res);
 });

// //callback hell nested hell
//     getdata(1, () => { 
//         console.log("getting data2");
//         getdata(2, () => {
//             console.log("getting data3");
//             getdata(3 ,() => {
//                 console.log("gettingdata3");
//                 getdata(4,() =>{
//                     console.log("getdata4");
//                     getdata(5);
//                     console.log("getdata5");
//                 } );
//             });
//         });
//     });
   

let promise = new Promise((resolve,reject) =>
{
    console.log("i am promise");
    reject("something went wrong");
});