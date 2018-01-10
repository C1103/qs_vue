// var a = {};
// // 精细化的操作对象的属性访问
// // 三个参数 目标对象
// // 需要定义的属性或方法的名字
// // 目标属性所拥有的特性 descriptor
// Object.defineProperty(a, 'b', {
//   value: 123,
//   writable: true,
//   configurable: false
// });
// a.b = 234;
// console.log(a.b);

// var a = {}; //被代理或被劫持的
// Object.defineProperty(a, "b", {
//   value: 3445,
//   enumerable: false
// })
// for (key in a) {
//   console.log(key, a[key]);
// }

var a = {};
Object.defineProperty(a, 'b', {
  set: function(newVal) {
    console.log("你要赋值给我，我的值是" + this.value + "新值是" + newVal);
    this.value = newVal;
  },
  get: function () {
    console.log("你取我的值");
    return this.value;
  }
})
a.b = 1;
console.log(a.b);
a.b = 0;
console.log(a.b);
// console.log(value);