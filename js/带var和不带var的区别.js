//带var 和不带var的区别
//==> 在全局作用域下声明一个变量，也相当于给window全局对象设置了一个属性，变量的值就是这个属性的值（私有作用域中声明的私有变量和window没有关系）
console.log(a); //undefined
console.log(window.a); //undefined
console.log('a' in window); //true 在变量提升阶段，在全局作用域中声明了一个变量A，此时就已经把A当做属性赋值给window了，只不过此时还没有给a赋值，默认值是undefined  in:检测某个属性是否隶属于这个对象

var a = 12;
console.log(a); //12
console.log(window.a); //12