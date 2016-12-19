(function (window){
  var allcount =1,html = '',count = 0,arr = [],deepArr = [],json = '';
  window.json2table = {
    createHtml: function (jsondata) {
      json = jsondata;
      var len = json.length;
      for(i=0;i<len;i++){
        allcount *= json[i].length;
      }
      return this.handleJson(this.handleJson,0);
    },
    handleJson: function (fun, index, promiseResolve) {
      if(index == 0) {
        var promiseResolve = '';
        var promise = new Promise(function(resolve, reject) {
          promiseResolve = resolve;
        });
      }
      var item = json[index];;
			for(var x=0;x<item.length;x++){
				arr.push(item[x]);
				deepArr.push(x);
				if(json[index+1] && json[index+1].length>0){
					fun(this.handleJson,index+1,promiseResolve);
				}else{
					html += '<tr>';
					for(var i=0;i<arr.length;i++){
						var rowspan = 1;
						var show = true;
						for(var z=0;z<deepArr.length;z++){
							if(i<z){
								if(deepArr[z]!=0){
									show = false;
								}else{
									rowspan *= json[z].length;
								}
							}
						}
						if(show){
							html += '<td rowspan="'+rowspan+'">' + arr[i] + '</td>';
						}else if(deepArr[i+1] == undefined){
							html += '<td>' + arr[i] + '</td>';
						}
					}
					//add some code what you need here
					  
					//example:
					//html += '<td><input type="text"/></td>';
					arr.pop();
					deepArr.pop();
					html += '</tr>';
					count++;
					if(count == allcount){
						promiseResolve(html);
					}
				}
			}
			arr.pop();
			deepArr.pop();
      if(promise){
        return promise;
      }
    }
  }
})(window);