//=============================================//
let people = [
  { name: 'Jane', age: 20 },
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  {name : 'uhuy', age: 19},
  {name : 'yaya', age: 21}
];

const x = people.reduce(function (acc, obj) {
    //membuat key pada object inisialisasi acc
    let key = obj['age']
    //kondisi jika tidak ada object  dengan key maka membuat object dengan key baru yang menampung aray
    if (!acc[key]) {
      acc[key] = []
    }
    //push ke object/array people dengan key sesuai looping
    acc[key].push(obj)
    return acc
}, {})

console.log(x)

//===========================================//
var total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 5);
//perulangan 1 ------ 5 + 1 = 6
//perulangan 2 ------ 6 + 2 = 8
//perulangan 3 ------ 8 + 3 = 11
//perulangan 4 ------ 11+ 4 = 15
//perulangan 5 ------ 15+ 5 = 20
console.log(total)
//===========================================//

//================= object add property =================//
let objTest = {}
objTest['100'] = []
objTest['name'] = 'vvp'
objTest.x = 'none'
console.log(objTest)
//========================================//