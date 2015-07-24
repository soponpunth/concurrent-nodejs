# Multiple Asynchronous NodeJS
Simple class to perform multiple asynchronous tasks and return the whole pack of data after every function finished
. This usage will be useful when computing independent multiple asynchronous tasks such as fetch data from database.

  When call a lot of function in waterfall structure will block each function inside which supposed to be run in concurrent
  ```
  someobj.function_call1(function(data1){
    someobj.function_call2(function(data2){
        someobj.function_call3(function(data3){
          console.log(data1 + data2 + data3);
      });
    });
  });
  ```
  see that `function_call2` will be called after `function_call1` is finished and so on...
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
  Therefore, here is the solution using `Workpool` like snippet example below to fetch data from database with 3 query
  ```
  var Workpool = require('./lib/workpool.js');
  var workpoolInstance = new Workpool(3, function(datalist){
    //do something with data1,data2,data3 here
    //{"query1":somevalue, "query2":somevalue, "query3":somevalue }
  });
  
  sqlObj.fetchFromDatabase(query1, function(rows1){
    workpoolInstance.done('query1',rows1);
  });
  sqlObj.fetchFromDatabase(query2, function(rows2){
    workpoolInstance.done('query2',rows2);
  });
  sqlObj.fetchFromDatabase(query3, function(rows3){
    workpoolInstance.done('query3',rows3);
  });
  ```
  
