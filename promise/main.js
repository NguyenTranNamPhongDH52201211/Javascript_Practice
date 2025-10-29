// Ly thuyet, cach hoat dong 
// Can hieu Promise la gi va cah tao ra promise -> Promise su ly cac thao tac bat dong bo, khac phuc cac callback hell

//Promise can chuyen vao 1 function : called Executor
//1. Khoi tao Promise: new Promise
//2.Executor


//Cac trang thai cua Promise
//1. Pedding: trang thai tro -> memory leak
//2.Fullfilled: khi ma resolve
//3.Reject: da tach 
var promise = new Promise(
    //Executor -> tra ve 2 tham so: thanh cong / that bai
    function(resolve, reject){
       //logic
       //Thanh cong: resolve()
       //That bai: reject()
       //Fake call api
       /*resolve([
        {
            id:1,
            name:'Js',
        }
       ]); //-> se tra la successfully -> done*/

       reject('Co loi'); // -> se tra la faliure -> done
    }
);

//Cach su dung
promise
       //resolve 
      .then(function(courses){
         console.log(courses);  
         //console.log('Successfully!');

      })
      //reject
      .catch(function(){
         console.log('Failure!');
      })
      //resolve / reject
      .finally(function(){
         console.log('Done!');
          
      })
