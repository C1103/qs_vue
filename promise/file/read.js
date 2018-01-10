var fs=require('fs');  
// js是异步的，回调
// node 异步无阻塞 性能，服务器需求
// 异步 同步
// const f1 = fs.readFileSync('input.txt', 'utf-8');
// console.log(f1);
// const f2 = fs.readFileSync('input2.txt', 'utf-8');
// console.log(f2);
// const f3 = fs.readFileSync('input3.txt', 'utf-8');
// console.log(f3);
// fs.readFile('input.txt','utf-8',function(err,data){  
//     if(err){  
//         console.error(err);  
//     }  
//     else{  
//         console.log(data);  
//     }  
// });  
// fs.readFile('input2.txt','utf-8',function(err,data){  
//     if(err){  
//         console.error(err);  
//     }  
//     else{  
//         console.log(data);  
//     }  
// });  
// fs.readFile('input3.txt','utf-8',function(err,data){  
//     if(err){  
//         console.error(err);  
//     }  
//     else{  
//         console.log(data);  
//     }  
// });

// 回调地狱
// fs.readFile('input.txt', function (err,data) {
//   console.log(data.toString());
//   fs.readFile('input2.txt', function(err,data) {
//     console.log(data.toString());
//     fs.readFile('input3.txt', function(err,data) {
//       // .....
//       console.log(data.toString());
//     })
//   })
// })

function readFile1() {
  return new Promise((resolve, reject) => {
    fs.readFile('input.txt', (err,data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  })
}
function readFile2() { 
  return new Promise((resolve, reject) => {
    fs.readFile('input2.txt', (err,data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  })
}
function readFile3() { 
  return new Promise((resolve, reject) => {
    fs.readFile('input3.txt', (err,data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  })
}
readFile1()
  .then(data => {
    console.log(data.toString());
    return readFile2();
  })
  .then(data => {
    console.log(data.toString());
    return readFile3();
  })
  .then(data => {
    console.log(data.toString());
  })
