// set数据结构 不会有重复的值
// 使用方法：new Set()
let setArr = new Set([1,2,3,4]);
// 添加元素：add
setArr.add('a');
console.log(setArr);
setArr.add(1);
console.log(setArr);

// 查找：has
console.log(setArr.has(1));

// 删除：delete
setArr.delete(1);
console.log(setArr);

// 遍历set和arr一样，forEach是其中一个
setArr.forEach(val=>console.log(val));
for(item of setArr){
    console.log(item);
}

// 长度：size
console.log('长度：'+setArr.size);


// WeakSet参数是对象
let weakObj = new WeakSet();
let obj  =  {a:'ry',b:'yuan'};
weakObj.add(obj); 
console.log(weakObj);