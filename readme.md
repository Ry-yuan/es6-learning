
# (一)let 和 const
### 1.let只在其块级内有效
```js
// 1.let const拥有块级作用域
{
    let a = 21;
    var b = 32;
}
// 报错
console.log(a);  

// 不报错
console.log(b);
```

### 2.let 不存在变量提升，所以必须先声明在使用
```js
console.log(x);  //报错
let x =  12;
```

### 3.暂时性死区：  
> 在代码块内，使用let命令声明变量之前，该变量都是不可用的。  
这在语法上，称为“暂时性死区”（temporal dead zone，简称 TDZ）。

```js
//即使在外面定义了
var a = 'hello';
{
    console.log(a);  //报错
    //因为我在块中有let，那么a就被let锁定，在let前使用变量就报错
    let a;
}
```
#### 4.let 不能重复声明，注意一下
```js
// 不能够重复声明变量
let x = 12;
let x = 1;  //报错
```

#### 5.es6中支持在块中声明函数，es5以前在块中声明函数是可能报错的

#### 6.do表达式：在块级作用域之前加上do，使它变为do表达式，然后就会返回内部最后执行的表达式的值

```js
//会返回b给x
let x = do {
    let t = 123;
    let b = 123+t;
}
```

#### 7.const声明一个只读的常量。一旦声明，常量的值就不能改变。const和let也是支持块级
```js
const ry = 'yuan';
const ry = 1;  //报错
```

# (二).解构：  
> 解构包含:变量数组解构，对象解构，字符串解构，数值布尔值解构，函数参数解构（4种）

### 1.变量数组解构：
```js
//在数组中，按照一定的模式匹配到对应的变量，即可对其赋值
let [a,b,c] = [1,2,3];  //a=1,b=2,c=3
let [foo,[[bar],baz]  = [21,[[31],41]];  //foo=21 bar=31 baz=41
let [head,...tail] = [1,23,4,,124,2]; //head=1  tail=[23,4,124,2]
//没有解构成功
let [x,y] = [1] //x=1 y没有值，默认为undefined
//注意：等号两边必须是相同的解构，比如都是数组，右边的值如果不是数组，则解构失败，报错
//比如：以下都报错
let [foo] = false;
let [foo] = 1;
let [foo] = null;
let [foo] = {};

//解构可以设置默认值
let [x , y=1] = [3];  //x=3 y=1
```

### 2.对象的解构：
```js
let {x:1,y:2} = {x,y};
```

### 3.字符串解构
```js
//逐个字符赋予每个变量
let [a,b,c,d,e] = 'ryuan';  //a='r'  b='y' c='u' d='a' e='n'
```

### 4.函数参数解构
```js
let item = [1,2,3,4];
function add(a,b,c,d){
    return a+b+c+d;
}
console.log(add(...item));   //10
```
# （三）扩展：  
> 对常用的引用类型进行了扩展： 字符串，数组，函数，对象，数值

## 扩展常用举例： 
### 1.String对象扩展：
```js
//includes()某个字符串是否包含另一个字符串
var s = 'hello';
s.includes('he');  //true
//startsWith()某个字符串是否一另一个字符串开头
s.startsWith('hell');  //true
//endsWith()是否已某个字符串结尾 
s.endsWith('l');  //false
//repeat 将某个字符串重复n次,小于0或非数字都是0次
s.repeat(3);   //hellohellohello
//padStart()， padEnd() 在头或尾部补全长度
'ss'.padStart(6,'a');  //'aaaass'  用a从头部开始补全到6长度
//模板字符串${val}
//反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
var num = 12;
`the num is ${num*2} `  //"the num is 24"   大括号中可以放表达式

//还有模板编译没搞懂xxx
```



### 2.函数对象扩展

1.允许默认值：es5时用的是||来变通，表示默认值：如y = y || 'world';
```js
//es6允许了默认：
function fn(x, y = ' world'){
    console.log(x+y);
}
fn('hello');  //'hello world'
```
2.rest参数  形式： ...变量名
```js

//获取函数的多余参数，这样就不需要使用arguments对象
function a (...val){
    for(var i of val){
        console.log(i);
    }
}
a(12,2,1,21,1);  //12,2,1,21,1
```


3.ES2016 做了一点修改，规定只要函数参数使用了
```js
//默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式,否则会报错
function add(x,y=1){
    'use strict'
    console.log(x+y);
}
add(1);  //报错，有默认值情况不可以使用严格模式
```

4. name 属性获得函数名
```js
function foo(){
}
fn.name;  //"foo"
```

5.箭头函数（用的多）
```js
//ES6 允许使用“箭头”（=>）定义函数。
function sum (n1,n2){
    return n1+n2;
}
//箭头函数表示
var sum = (n1,n2) => n1+n2;

//如果箭头函数的函数体多于一条语句 ， 用花括号括起来
var fn = (n1,n2) => {var n = 100; return n1+n2+n;}

//如果返回的是对象，用圆括号括起来
let getObj = (id)  => ({id:id,name:'jack'});


//箭头函数的一个用处是简化回调函数
[1,2,3].map(function(x){
        return x*2;
    }
)
//箭头写法
[1,2,3].map(x => x*2);

// 正常函数写法
var result = values.sort(function (a, b) {
  return a - b;
});

// 箭头函数写法
var result = values.sort((a, b) => a - b);

//箭头函数的this指向的是它外层函数的this，也就是说它的没有自己的this
```


6.扩展运算符：...  , 可用于用于将数组转成用逗号分隔的参数列表：主要用于函数传递参数
```js
console.log(...[1,2,3]);   //1,2,3
```


## 3.数组扩展
```js
// 1.Array.form();  类数组转换成数组

let json = {
    0:1,
    1:'12',
    2:'ry',
    length : 3
};
console.log('from:  '+Array.from(json));  //[ 1, '12', 'ry' ]


// 2.Array.of() 将一组值转换成数组
console.log("of:  "+Array.of(2,3,4,5,5));  //[2,3,4,,5,5]



// 3.find()实例方法  查找
let arr = [1,2,3,4,5];
// find传入回调， function(){}  val代表当前值，index当前下标，arr当前数组
// 用于查找某满足条件的一个值
arr.find(function(val,index,arr){
    return val >5;
});


// 4.fill()替换
let arrFill = ['ry',1,2];
arrFill.fill('yuan',1,2);  //1参数是要替换成值，2参数是开始位置，3参数是结束位置但不包含
console.log('fill:  '+arrFill);


// 5.数组循环 for of
let arr5 = ['ry','元','yuan'];
console.log('输出值:')
for(let val of arr5){
    console.log(val);
}
//输出值时，用实例方法keys
console.log('输出下标：');
for(let key of arr5.keys()){
    console.log(key);
}
//都要输出时使用entries
console.log('值和下标都输出：');
for(let [vals, keys] of arr5.entries()){
    console.log(keys+ ' :'+ vals);
}

// 6.entries可以使得数组变成ArrayInterator
let list = arr5.entries();
//就可以这样用
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

// 7.in判断数组的值
let arr7 = [1,,3,4,5];
console.log('--------------in的使用----------');
//判断0位有没有值
console.log(0 in arr7);  //true
// 判断1位有没有值
console.log(1 in arr7);  //false


// 8.数组遍历的方法
console.log('----------数组遍历方式------------')
// forEach
let arr8 = ['ry','yuan','元'];
arr8.forEach((val,index)=>console.log(val,index));

//filter
arr8.filter((x)=>console.log(x));

//map 将会替换成1
console.log(arr8.map(x=>'1'));


// 9.数组转为字符串
console.log('---------数组转字符串--------');
let arr9 = [1,2,3];
console.log(arr9.toString());
console.log(arr9.join(''));
```

## 4.对象扩展
```js
// es6中对象拓展
// is()方法 比较对象
let obj1 = {name:'ry'};
let obj2 = {name:'ry'};
console.log(Object.is(obj1.name,obj2.name));


// assign合并对象
let a = {a:1};
let b = {b:2};
let c = {c:3};
let d = Object.assign(a,b,c);
console.log(d);
```

## 5.数值扩展
```js
// 数值类型扩展


// 声明二进制binary  0b开头
let binary = 0b010101;
console.log(binary);
// 声明八进制Octal  0o开头
let octal = 0o666;
console.log(octal);

//判断一个数：Number.isFinite()
let a = 12;
console.log(Number.isFinite(a));
// console.log(Number.isFinite('S'));
// console.log(Number.isFinite(NaN));
// console.log(Number.isFinite(false));

// 判断是否非数字:Number.isNaN()
console.log('是否NaN：'+Number.isNaN(12));


// 判断是否是整数:Number.isIteger()
console.log('是否整数'+Number.isInteger(123));


// 类型转换：Number.parseInt
Number.parseInt(12.2);
console.log(Number.parseFloat('123.33$'));  //123.33

// 最大安全整数 最小安全整数 判断是否安全整数
// 通常一些比较大的数时判断 超出的建议转为字符串
console.log(Number.MAX_SAFE_INTEGER+1); 
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));  //true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1));  //false
```




