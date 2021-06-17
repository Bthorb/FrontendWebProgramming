// document.getElementById('name').innerHTML = " <h5> N </h5>  "
// document.getElementById('name').style = " color: red ; "

// // document.write('GG')
// // console.log('kuy')

// // alert('OK')

// // var name = "NN"
// // var Name = "N"

// // console.log("NN"+"N")

// // var num = 12
// // num += 1

// // console.log(num)

// // var num = 8
// // let name = "Ben"

// // const PI = 3.1415

// // {
// //     num = 6.6
// //     console.log("function :" + num )
// // }
// // console.log("without :" + num )

// // const ClickME = () => {
// //     document.getElementById("button1").innerHTML = "Hiiiiii"
// // }

// // var arr1 = [2,8]
// // arr1[1] = 20 
// // arr1.push(22)
// // // arr1.pop(1)
// // arr1.sort( (a, b) => a-b)

// // console.log(arr1)

//  var num = 8
//  var n = "B"

// if (num == 1){
//     num = 2
// } else{
//     num = 12
// }

// if (n == "t"){
//     n = "m"
// } else if(n == "k"){
//     n = "p"
// } else {
//     n = "e"
// }

// switch (num) {
//     case 8:
//         num = 5
//         break;

//     default:
//         num = 6
//         break;
// }

//  console.log(num)
//  console.log(n)



//  let i=0
//  let arr = [10,20,30,40]
// // console.log(arr.length) // นับอาเรย์
// //  for(i=0 ; i<=10 ; i+=3){
// //      console.log(i);
// //  }

//  for(i=0; i< arr.length; i++){
//     console.log(arr[i])
// }

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }


// do {
//     console.log(arr[i]);
//     i++;
// } while (i< arr.length);

// for(i=0; i < arr.length; i++){

//     if(i == 2){
//         //  break
//         continue
//     }

//         console.log(arr[i])
// }

// JSON

const byname = [
    {
        id:0,
        user: "ben",
        login: true,
    },

    {
        id:1,
        user: "nn",
        login: false,
    }
];

// byname.map((b)=>
// console.log(b)
// );

console.log(byname[1].user)
console.log(byname[1].login)

// let free = byname[1].user + " " + (byname[1].login)
// document.getElementById("nameme").innerHTML =  byname[0].user

console.log(byname[0].user)
document.getElementById("nameme").innerHTML = byname[0].user
// document.getElementById("test").innerHTML = "sassatast"
