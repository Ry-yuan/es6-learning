// map数据类型

let map = new Map();
// 表示a为key指向ry
// 添加值：set
map.set('a','ry');
map.set('b','yuan');
console.log(map);

//取值：get
console.log(map.get('a'));

// 删除：delete
map.delete('a');
console.log(map);  //Map { 'b' => 'yuan' }

// 获得长度：size
console.log(map.size);

// 查找：has

console.log(map.has('b'));   //true

// clear全部删除
map.clear();