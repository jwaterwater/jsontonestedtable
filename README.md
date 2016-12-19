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
	console.log(res);
});
```
'<html><head><style type="text/css"> 
body,table{ 
font-size:12px; 
} 
table{ 
table-layout:fixed; 
empty-cells:show; 
border-collapse: collapse; 
margin:0 auto; 
} 
td{ 
height:30px; 
} 
h1,h2,h3{ 
font-size:12px; 
margin:0; 
padding:0; 
} 
.table{ 
border:1px solid #cad9ea; 
color:#666; 
} 
.table th { 
background-repeat:repeat-x; 
height:30px; 
} 
.table td,.table th{ 
border:1px solid #cad9ea; 
padding:0 1em 0; 
} 
.table tr.alter{ 
background-color:#f5fafe; 
} 
</style> 
</head><body>

<script src="jsontonestedtable.js"></script>
<script>
var json = [
	['red','blue'],
	['big','small']
];
window.json2table.createHtml(json).then(function(res){
	document.write('<table width="100%" class="table">'+res+'</table>');
});
</script><table width="100%" class="table"><tbody><tr><td rowspan="2">red</td><td rowspan="1">big</td></tr><tr><td rowspan="1">small</td></tr><tr><td rowspan="2">blue</td><td rowspan="1">big</td></tr><tr><td rowspan="1">small</td></tr></tbody></table>
</body></html>'
