# concurrent-nodejs
Simple class to perform multiple asynchronous tasks and return the whole pack of data after every function finished

Example 
  when call a lot of function in waterfall structure will block each function inside which supposed to be run in concurrent
  ```
  someobj.function_call1(function(data1){
    someobj.function_call2(function(data2){
        someobj.function_call3(function(data3){
          console.log(data1 + data2 + data3);
      });
    });
  });
  ```
  see that function_call2 will be called after function_call1 is finished and so on...
  So how about...
  ```
  someobj.function_call1(function(data1){

  });
  someobj.function_call2(function(data2){
  
  });
  someobj.function_call3(function(data3){
  
  });
  ```
  Now asynchronous tasks are not blocking each other but how do we know which data is returned first?
  Therefore, here is the solution using Workpool
  ```
  var Workpool = require('./lib/workpool.js');
  var workpoolInstance = new Workpool(3, function(datalist){
    //do something with data1,data2,data3 here
    //{"data1":somevalue, "data2":somevalue, "data3":somevalue }
  });
  
  someobj.function_call1(function(data1){
    workpoolInstance.done('data1',data1);
  });
  someobj.function_call2(function(data2){
    workpoolInstance.done('data2',data2);
  });
  someobj.function_call3(function(data3){
    workpoolInstance.done('data2',data3);
  });
  ```
  
