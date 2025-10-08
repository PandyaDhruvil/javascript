// const promises = new Promise((resolve, reject) => {

//   let success = false;

//   if (success) {
//     resolve(" Operation successful!"); 
//   } else {
//     reject(" error 404 could not found!"); 
//   }
// });

// promises
// .then((message) => {
//     console.log(message);
// })
// .catch((error) => 
// {
//     console.log(error);
// })
// .finally(() => {
//     console.log("promise is completed");
// });



  // function getdata(dataid,getnextData) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log("data",dataid);
  //       resolve("sucess");
  //       if (getnextData) {
  //         getnextData();
  //       }
  //     },5000);
  //   });
  // }
  
    // let getpromise = () => {
    //    return new Promise((resolve,reject) => {
    //     console.log("i am promise");
    //     //resolve("sucess");
    //     reject("err");
    //    });
    // };

    // let promise = getpromise();
    // promise.then(() => {
    //   console.log("promise fullfilled");
    // });

    // promise.catch(()=> {
    //   console.log("reejcted",error);
    // });


    function asyncfunction1 () {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("some data");
          resolve("sucess");
        },4000
      );
      });
    }


     function asyncfunction2 () {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("some data");
          resolve("sucess");
        },4000
      );
      });
    }
        console.log("fethcing data1");
       asyncfunction1().then((res)=> {
         

           console.log("fethcing data2");
        asyncfunction2().then((res)=> {});
});

       

      
          

       





// let promise = new Promise((resolve,reject) => {

//     let complete = true;

//     if (complete) {
//         resolve("operion sucessfully");

//     }else {
//         reject("error 404 could not found");
//     }
// });