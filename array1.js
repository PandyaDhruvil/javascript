/*let CEO = [
    {name:"roy",age:22,collifcation :"Mscit"},
    {name:"joy",age:32,collifcation :"Phd"},
    {name:"toy",age:21,collification:"MCA"}
];
        //console.log(CEO[1].collifcation);


        CEO.forEach(ceo => {
            console.log(`${ceo.name} is ${ceo.age} years with grade ${ceo.collifcation}`);
        });*/

//implict
       

        let num_int = 10;
let num_float = num_int;  // Implicitly converts int to float

//map
    let arr = [2,4,8,10]
    let updateArr = arr.map(val=> val+2)
    console.log(arr);
    console.log(updateArr);

    //filter
    let fruits = ["apple","pomogrnate","pineaple","orange","banana"]

    let longfruits = fruits.filter(fruit => fruit.length >6);

    console.log(longfruits);
    console.log(fruits);

    /*let array =[2,4,8,10];
    let uarr = arr.slice().filter(val = val <5);
    console.log(array);
    console.log(uarr);*/


    /*const nums = [1,3,5,7,9,11,13,15]
    const newnum =  nums.filter( (num) => num > 6)
    console.log(newnum);*/

    /*const nums = [1,3,5,7,9,11,13,15]
    const newnum =  nums.filter( (num) => { return num > 6 } )
    console.log(newnum);*/

    /*const nums = [1,3,5,7,9,11,13,15]
    const newnum = []
     nums.forEach(( num) =>{
        if (num > 6) {
            newnum.push(num)
        }
     }) 
    console.log(newnum);*/


    /*const car = [
        {name: 'ciaz' ,model:'2022', company:'maruti sujuki' },
        {name: 'xuv700' ,model:'2022', company:'mahindra' },
        {name: 'innova' ,model:'2021', company:'toyota' },
        {name: 'xuv300' ,model:'2020', company:'mahindra' },
        {name: 'fortuner' ,model:'2022', company:'toyota' }
    ]

      const cars = car.filter((yeah) =>yeah.company === 'toyota')

      console.log(cars);*/

      const mynumbers = [1,2,3,4,5,6,7,8,9,10]

      const newnums = mynumbers
      .map( (num) => num * 10)
      .map( (num) => num + 10)
      .filter( (num) => num >=40)//true flase


      //console.log(newnums);

      //reduce
      //const numberr =  [1,2,3,4,5,6,7]
      //const total = numberr.reduce(function (acc,currentval) {
        //        console.log(`acc:${acc} and currval:${currentval}`);
          //      return acc + currentval
      //},1)
        
       //const total = numberr.reduce((acc,curr) => acc+curr, 1)
       //console.log(total);

       const shoppingcart = [
        {
            itemname : "js course",
            price : "$500"
        },

         {
            itemname : "py course",
            price : "$600"
        },

         {
            itemname : "AI/Ml course",
            price : "$100"
        },
       ] 

        const pricetopay = shoppingcart.reduce((acc,item) =>  acc + item.price, 0)

        console.log(pricetopay);





    