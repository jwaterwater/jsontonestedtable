# jsontonestedtable
使用json数据自动生成嵌套table

#使用方法
引入 jsontonestedtable.js
```js
var json = [
	['red','blue'],
	['big','small']
];
window.json2table.createHtml(json).then(function(res){
	var table = '<table width="100%">' + res + '</table>';
	console.log(table);
});
```
#结果
'<table width="100%" class="table"><tbody><tr><td rowspan="2">red</td><td rowspan="1">big</td></tr><tr><td rowspan="1">small</td></tr><tr><td rowspan="2">blue</td><td rowspan="1">big</td></tr><tr><td rowspan="1">small</td></tr></tbody></table>'
