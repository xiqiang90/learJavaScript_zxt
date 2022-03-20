// var a = 12;
// /*
//  * 1.先声明一个变量a ，没有赋值（默认值是undefined）
//  * 2.在当前作用域中开辟一个位置存储12这个值
//  * 3.让变量a和12关联在一起（定义：赋值） 
//  * 
//  */
// var b = a;
// b = 13;
// console.log(a); // a = 12

// var ary1 = [12, 23];
// var ary2 = ary1;
// ary1.push(100);
// console.log(ary1); // ary1 = [12,23,100] 

// //任意数求和
// function sum() {
//     var total = null;
//     for (var i = 0; i < arguments.length; i++) {
//         var item = parseFloat(arguments[i]);
//         !isNaN(item) ? total += item : null;
//     };
//     return total;
// };

// console.log(sum(1, 2, 3, 4, '12', '12px'))

a = 12;

console.log(a);
var a = 13;



/* 
 * 变量提升：
 *     ==>当栈内存（作用域）形成，JS代码自上而下执行之前，浏览器首先会把所有带"var" / "function" 关键词的进行提前"声明"或者"定义",这种预先处理机制称之为"变量提升"
 *     
 *    =>声明（declare）: var a 或者 function sum  (默认值是undefined)
 *    =>定义（defined）: a = 12 (定义其实就是赋值操作)
 *    
 *    [变量提升阶段]
 *    => 带"var"的是只声明未定义
 *    => 带"function" 的声明和赋值都完成了
 *  
 *    => 变量提升只发生在当前作用域（例如：开始加载页面的时候只对全局作用域下的进行提升，因为此时函数中存储的都是字符串而已）
 *    => 在全局作用域下声明的函数或者变量是"全局变量"，同理，在私有作用域下声明的变量是"私有变量"[带var / function 的才是声明]
 * 
 *    =>浏览器很懒，做过的事情不会重复执行第二遍，也就是，当代码执行遇到创建函数这部分代码后，直接跳过即可（因为在提升阶段就已经完成函数的赋值操作了）
 * 
 */