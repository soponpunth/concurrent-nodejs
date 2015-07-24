//create new instance to Workpool class
var Workpool = require('./workpool.js');

//init new workpool object with 2 concurrent functions
var workpoolInstance = new Workpool(2, function(datalist){
  console.log('alldone');
  //do whatever here with returned data
  // {"tag1": somedata1, "tag2": somedata2}
});

//perform asynchronous function call and store returned jsondata in Workpool class 		  
someobject.functioncall(params, function(jsonData){
  console.log('large');
  workpoolInstance.done('tag1',jsonData);
});

//perform another asynchronous function call and store returned jsondata in Workpool class 		  
someobject.functioncall2(params, function(jsonData){
  console.log('small');
  workpoolInstance.done('tag2',jsonData);
});		
