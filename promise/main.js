// Ly thuyet, cach hoat dong 
// Can hieu Promise la gi va cah tao ra promise -> Promise su ly cac thao tac bat dong bo, khac phuc cac callback hell

//Promise can chuyen vao 1 function : called Executor
//1. Khoi tao Promise: new Promise
//2.Executor


//Cac trang thai cua Promise
//1. Pedding: trang thai cho -> memory leak
//2.Fullfilled: khi ma resolve
//3.Reject: da tach 
//==========================================================================================================================
/*var promise = new Promise(
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
       ]); //-> se tra la successfully -> done

       //reject('Co loi'); // -> se tra la faliure -> done
       resolve();
    }
);
*/
//======================================================================================================================
//Cach su dung
//Tinh chat chuoi (chain)
// Co the co nhien .then noi duoi nhau, va ket qua tra ve cua thang trc co the la tham so dau vao cua thang sau 
//Tinh chat chuoi (chain) se giong callback hell, nhung no ko bi di sau vao ben trong, ma xep thanh hang, de doc, de hieu hon
// Vay neu return ra 1 promise thi sao -> no se return cai promise ma co trong then.
//======================================================================================================================
/*promise
       //resolve 
      .then(function(){
         //console.log(courses);  
         //console.log('Successfully!');
         //return 1
         return new Promise(function(resolve){
            setTimeout(resolve,5000);
         });
      })
      .then(function(data){
         console.log(data);
         return 2;
      })
      .then(function(data){
         console.log(data)
         return 3;
      })
      .then(function(data){
         console.log(data)
      })
      //reject
      .catch(function(){
         console.log('Failure!');
      })
      //resolve / reject
      .finally(function(){
         console.log('Done!');
          
      })
*/

// Vi du khac
/*function sleep(ms){
   return new Promise(function(resolve){
      setTimeout(resolve,ms);
   });
}

sleep(1000)
      .then(function(){
         console.log(1);
         return sleep(1000);
      })
       .then(function(){
         console.log(2);
         return new Promise(function(resolve,reject){
            reject();
         });
      })
       .then(function(){
         console.log(3);
         return sleep(1000);
      }) 
      .then(function(){
         console.log(4);
         return sleep(1000);
      })
      .catch(function(){
         console.log('Failure');
      })
*/
//===============================================================
//1.Promise.resolve
//2.Promise.reject
//3.Promise.all

//let promise =Promise.resolve('Success!); -> 100% thanh cong
//let promise =Promise.reject('Failure!); -> 100% that bai
//=============================================================
/*let promise =new Promise(
   function(resolve, reject){
      //Logic
      resolve('Success!');
   }
)

promise
      .then(function(result){
         console.log('result', result);
      })
      .catch(function(error){
         console.log('err',error);
      })*/


//Promise.all
let promise1=new Promise(function(resolve){
   setTimeout(function(){
      resolve([1]);
   },1000);
})

let promise2=new Promise(function(resolve){
   setTimeout(function(){
      resolve([2,3]);
   },2000);
})
//==========================================================================================================================
//Hop nhat 2 mang lai
// Dung promise.all khi ma muon 2 viec no chay ket thuc het cung luc va dung ket qua cu 2 tk do de ma dung den viec tiep theo ( chay dong thoi, song song) 
// -> mat thoi gian bang thang co tong thoi gian lau nhat
//==========================================================================================================================

Promise.all([promise1,promise2])
     .then(function(result){
         //console.log(result);
         let result1=result[0];
         let result2=result[1];

         console.log(result1.concat(result2));
     })