var a= "a b c";
var b = a.split(" ");
console.log(Array.isArray(b));
var d=b.join(" ");
console.log( typeof d); // array.isarray() kiểm tra xem đó có phải là mảng hay không
 var c= a.slice(1);// cắt
 console.log( typeof c);
 console.log("Thao tác với mảng");
 var array =[
    "java",
    "python",
    "javascript",
    "c#",
    "java"
 ];
 var sear = array.filter(function(elememt){
   if(elememt === 'java'){
      return elememt;
   }
 })
 console.log(sear);
 //console.log(array.join(" - "));
var p=0;
var st ="tôi là java";
// method filter2

Array.prototype.filter2 = function(callback){
   var arrNew =[];
   for(var i in this){
      if(this.hasOwnProperty(i)){
         if(callback(this[i],i) === "java" ||callback(this[i],i) === "c#"  ){
             arrNew.push(this[i]);

         }
      }
   }
   return arrNew;
};

var  n =array.filter2(function(elememt){
   return elememt;
});

console.log(n);











// method forEach2

Array.prototype.forEach2= function(callback){
for(var i=0; i<this.length;i++){
   var resulft= callback(this[i]);
   console.log(resulft);
}
};
array.forEach2(function(elememt){
   return elememt;
});

// kết thúc forEach2


// tạo find2 method

Array.prototype.find2 = function(callback){
var oder=[], arrLength= this.length;
for(var i=0;i<arrLength;i++){
   var resulft= callback(this[i]);
   if(resulft ==="java"){
      oder.push(resulft);
      
   }
   break;
   
}
return oder;
};

var html1 =array.find2(function(elememt){
        return elememt;
});

console.log(html1);





// tự tạo method map2
Array.prototype.map2 = function(callback){
var order =[], arrLength = this.length;
for(var i=0;i<arrLength;i++){
 var resulft= callback(this[i]);
 order.push(resulft);
}
return order;

};

 var html =array.map2(function(elememt){
   return `<h2>${elememt}</h2>`;
 });

console.log(html.join(""));
// kết thức method map2

/*
var arr = array.some(function(elememt){
   return elememt ==="java";
});

var map1= array.map(function(elememt){
   return `<h2>${elememt}</h2>`;
})
console.log(map1.join(""));
console.log(st.includes('java'));
*/

/*
var newArray = array.reduce(function(m,n){
   p++;
  console.table({
       'Lượt :' :p,
       'Giá trị hiện tại':n,
       'Giá trị lưu trữ':m

  });
 
   return  m+" "+n;
} , '');*/
  // muốn nhận đc giá trị j thì hãy khởi tạo nó kiểu đố , vị trị trên '' ta muốn string
  
  /* if(element[0] =="j"){
      return `${index} ${element}`;
   }
   console.log( newArray);*/









 console.log(array);
 var  mykey='email';
 var ob ={
   name:'Em',
   age:20,
   [mykey]:'tttttt',
   getName:function(){
      return this.name;
   }
 };


 console.log( ob['name']);
 function mess(arr,arr1){
   //console.log(arguments);
   
    var b;
   for(var a  of arguments){
      b=a;
    
   
   }
   console.log(b);


 }
 mess([1,2,2]);
 console.log('ttt \'Sơn Đặng\'');
 var chuoi='la, thao, yen';
 console.log(chuoi[3]);
 var a=99.956666;
console.log( typeof a.toFixed(1));
console.log(typeof NaN);

// ob contructor
 function User(firsName,lastName){
   this.firsName1=firsName;
   this.lastName2=lastName;
   this.getName= function(){
      return `${this.firsName1} ${this.lastName2}`;
   }
 }
 var author= new User("Sơn","Đặng");
 User.prototype.className='F8';
 console.log(author['lastName2']);
console.log(author.getName());
var date = new Date();
console.log( typeof date.getFullYear());


console.log( typeof Math)

console.log(Math.floor(Math.random() *100));



var myInfo={
   name:"rrr",
   age:48
};
var arrNew =[];
console.log(Object.entries(myInfo));
for(var i of Object.entries(myInfo)){
   arrNew.push(i);
     //var arr =i;
    
   
}
 console.log(arrNew);

var i =0;
var isSuccess = false;

do{
   i++;
   console.log(`nạp thẻ lần `,i);
   // thành công
 
        if(false){
        isSuccess= true;
        }
        console.log(isSuccess);

} while( isSuccess==false  && i<3);






var arr = [
   ['name', 'Sơn Đặng'],
   ['age', 18],
   ['number', 78564]
];



function arrToObj(arr){


var a = arr.reduce(function(ob,value){
      ob[value[0]] = value[1];
      return ob;
      
},{});
return a;


}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

 Array.prototype.reduce8 = function(callback,value){
   for(var i in this){
      if(this.hasOwnProperty(i)){
        value =callback(value,this[i],i,this);
      //  console.log(this[i][0]);
      }
   }
   return value;

 }

 var red = arr.reduce8(function(stor,indexValue){
    stor[indexValue[0]] = indexValue[1] ;// thêm vào một object trống
    return stor;

 },{});

console.log( red);



















// method reduce3
Array.prototype.forEach3= function(callback){// callback hàm truyền vào, initValue tham số lưu trữ

for(var index in this){
   if(this.hasOwnProperty(index)){// kiểm tra xem index có nằm trong arr gần nhất hay không
      callback(this[index],index);

   }
      //callback(this[index],index)
  // initValue= callback(initValue,this[i],i,this)
}
for(var i=0; i<this.length;i++){
   console.log(i);
}

};

Array.prototype.number=8;


var ap=['JS',2,3];
console.log(ap);
ap.forEach3(function(elememt,index){
   console.log(elememt);
});




























function myFunction(value){
 value(3)
//console.log(value());
}
function myCallback(one){
console.log("Tôi yêu Hà Nội"+one);
}
myFunction(myCallback);



var productsListElement =document.getElementsByClassName('title');
console.log(productsListElement);


 var firstProductElement =document.querySelectorAll(".title");
 console.log(firstProductElement);
var buttonElements =document.getElementsByClassName('cta-btn');

console.log(buttonElements);


function run() {
	var person  = {
		firstName:"Trung",
		lastName:"Vuong",
		age:50,
		eyeColor:"blue"
	};
	
	var arr = Object.keys(person);
	console.log(arr.join("\n"));
	
}
run();



 // làm việc với mảng cần nhớ các phg thức 
 /*
 toString(): biến mảng về String
 join(): nối các phân tử mảng , trả về string
pop() : xóa phẩn tử cuỗi mảng và trả về phần tử xóa
shift(): xóa phần tử đầu mảng và trả về phần tử xóa
push(): thêm phần tử vào cuỗi mảng và trả về độ dài mới của mảng
unshift(): thêm phần tử đầu mảng và trả về độ dài mảng mới 
splice(vi tri cần bd xóa,số phần tử muốn xóa): xóa phần tử bất kỳ trong mảng và trả về mảng chứa phần tử muốn xóa
concat(): nối 2 mảng với nhau
slice(vi trí bd cắt,vị trí end): cắt phần tử mong muốn trả về mảng phần tử đc cắt
kiểm tra xem biến đó là kiểu array hay không, dùng Array.isArray(tênbieens);



// làm việc với object
có hai cách để lấy giá trị trong object
ob.name;
ob['name'];
muốn lấy thuộc tính trong object thông qua biến khác :ob[mykey];

khi sử dụng tạo thuộc tính trong object phải nhớ [tenbien];
xóa thuộc tính trong object
delete ob.name;

// kiểu dữ liệu js
/ nguyên thủy
string,numberr,underfined,null, boolean,symbol

/ không nguyên thủy
 function,object



// làm việc vs chuỗi 
length
indexOf, lastindexOf: tìm kiếm vị trí,indextOf("",2);
search(): tìm kiếm vị trí, khác indexOf : k có tham số thứ 2 xác định vị trị tìm kiếm lần thứ n, dành cho tìm kiếm biểu thức chính quy
slice(): cut chuỗi
replace(): thay đổi, vd a.replace(/Js/g,"Java"): thay thế tất cá Js trong code thày Java
toLowwerCase(): thg
toUpperCase():hoa
trim(): bỏ khoảng trắng 2 đầu 
split(): biến đổi string thành array, biến 1 phần tử string thành 1 phần tử trong mảng
chartAt(vitri): trả về giá trị tại vị trí


include property chỉ có trong arr và string

vd : arr.includes(giá trị cần duyệt, vị trị duyệt(default =0)) : trả về true or false khi tìm đc kết quả,
 nếu vị trị truyền vào là số âm thì nó sẽ duyệt cả mảng vd vị trị duyệt =-1 thì nó duyệt từ arr.length +(-1)











// làm việc vs kiểu số
nhớ tới có thể biến đổi kiểu số về String, sử dụng toString
toFixed(): làm tròn số, thập phân số đuôi kiểu trả về String



// function 
có 3 loại: declaration
          expression 
          arrow

// cú pháp object contructor: hàm tạo như một bản thiết kế

function User(....){
   ....
}


// object prototype : cấu thành nên đối tượng của hàm tạo(thuộc tính, method)
nó dùng để có thể thêm các thuộc tính, method thêm cho phg thức khởi tạo
User.prototype.ten_thuojc_tinh="";

khi sử dụng vòng lặp để in ra các chỉ mục trong mảng thì nó sẽ in ra cả chỉ mục
trong prototype đã định nghĩa , vậy nên ta cần duyệt qua các phần tử gần vs mảng
bằng cách  this.hasOwnPropertype(index);











// lưu ý object date
method getMonth(): miền giá trị tử 0-11;
getFullYear();
getDay();



// các phg thức trong Math object
Math.floor(): luôn làm tròn dưới


//ternary operator - toán tử 3 ngôi

// vòng lặp -loop

for-in : lấy ra key của ob(arr, string, object)
for-of: lấy ra giá trị ob(arr, string , đb vs object ta cần duyệt Object.value(ten_ob));

// mảng lần 2
method forEarch(truyền vào 1 hàm (Call back)): duyệt từng các phân tử mảng
vd arr.forEarch(function(emlemetn, index) {

});// duyệt qua tất cả các phần tử mảng

  arr.every(function(elememt, index){

  }); lập qua mỗi phần tử để kiểm tra điều kiện, chỉ cần 1 phần tử sai thì sẽ ngưng lai luôn, trả về true or false


arr.some(function(element , index){

});lặp qua các phần tử trong mảng, chỉ cần 1 phần tử thỏa mãn đk là đúng, trả về true or false



arr.find(function(element , index){

}); tìm phần tử trong mảng thỏa mãn đk và trả về phần tử thỏa mãn và kết thúc luôn , k tìm thấy trả về undefined


arr.filter(function(element , index){

}); tìm ra danh sách phần tử thỏa mãn đk , trả về mảng chứa phần tử đó

// mỗi phần tử của mảng sẽ đc 1 gọi funtion() trong các method(filter,map....) giống như vòng lặp


arr.map(function(element , index){

}); trả về array, mảng array mới sẽ phụ thuộc và function trả về cái j, dùng để chỉnh sửa array

arr.reduce(hender,0){

}); // có hai tham số truyền vào : function và giá trị khởi tạo, giá trị khởi tạo sẽ đc gán cho biến lưu trữ
function hander(biến lưu trữ, giá trị hiện tại,chỉ số của giá trị hiện tại,mảng sử dụng method reduce)
 function(accumulator,currentValue, currentIndex,originArray)
trong function return về gì thì biến  giá trị lưu trũ sẽ thay đổi
  -- reduce muốn trả về giá trị duy nhất 






  // HTML DOM(document object model): quy chuẩn W3C, đó là sơ đồ cây gồm element , attribute, text
  js chỉ cung cấp công cụ để trọc vào HTML DOM

  Browser: HTML -> DOM -> Web API(một ứng dụng mở ra con đg cho ứng dụng khác nhìn thấy đc)
  DOM nằm trong web API
  Web API chỉ có trong có nền tảng giúp mở đc web
  Server chỉ lưu trữ website thôi

// Document object: đại diện toàn bộ website
truy cập vào đc các element
document.getElementById("tenId") : lấy ra chỉ 1 cả phần tử có Id
document.getElementBysByClassName("tenId"): trả về HTML Collection các phần tử có class Ở dang vd h1.ten_class
document.getElementBysByTagName("ten_the"): trả về HTML Collection các phần tử
// lấy ra các attribute trong các element

consolse.log(document.querySelector("").id)
                                       .className)














document.querySelectorAll(".h1"): trả về NodeList các phần tử
// thông qua HTML  collection
document.forms: đvs from
document.anchors : đvs các thẻ a có name

// atribute
var a = docement.querySelector("h1");
a.id="";
a.className="";
// muốn thêm thuộc tính của thẻ k có thuộc tính này ta sử dụng method setAttribute
a.setAttribute("ten thuocj tính","giá trị"); // thêm thuộc tính
// các thuộc tính innerText, textContent(thuộc tính trên cả element Node và text Node) là thuộc tính trong element Node
lấy ra giá trị trong text Node
 innerText : trả lại giá trị giống y như chúng ta nhìn thấy trên màn hình
 textContent: trả lại giá trị trong element Node kể cả các khoảng trắng xg dòng, giá trị thực sự trong Text Node kể các có css ẩn hay j 
 các element con trong 1 element lớn sẽ bị bỏ qua mà chỉ lấy giá trị bên trong element con  và coi nó là text node


// thêm element vào element có sẵn dùng innerHTMl(ngoài ra còn thêm các thuộc tính cũng như các text node)

// DOM style > là Object
thêm nhiều thuộc tính CSS cx 1 lúc 
Object.assign(docement.querySelector().style,{
width:"100px";
....
}); // có 2 tham số : element Node và đối tượng , sinh ra css nội tuyến




/// classList property là thuộc tính của Element Node > là mảng DOMTokenList chỉ trả về class của element Node đó thôi class nội tuyến
thêm class
 document...classList.add("tenClass");
                      .contain('tenClass'): kiểm tra xem có class trong element Node không , trả về true or false
                       .remove("tenClass"): xóa tên class trong element Node
                        .toggle('tenClass'):nếu có class thì gỡ bỏ, nếu không có class thì thêm vào

// DOM events: sự kiện
+ attribute evnet
+ assign event usingg the element node

vd <h1 onclicl="consolo.log(this)"></h1> : this chinsh laf element chứa sự kiện

// sự kiện nổi bọt
 vd   <ul class="freetut" onclick="">/// khi kích vào h3 thì nó nổi lên ul , h3 vẫn đc thực thi trc r mới lên ul
       <h3  onclick="">Khóa học 1</h3>
       <h3 class="demo"> Name: PHP</h3>
       <h3 class="demo">Time: 48 Videos</h3>
       <h3 class="demo">Author: Nguyễn Văn A</h3>
   </ul>

///  assign event usingg the element node

 var firstProductElement =document.querySelector(".title");


firstProductElement.onclick= function(e){// tạo phương thức onclic ,function mới là callback             trả về e,            e là callback(PointerMouse)
console.log(e.target);// trả về chính cái phần tử đc click bên trong thẻ cha
};



// DOM event 
 preventDefault  : ngăn chặn sự kiện mặc định
 stopPropagation : ngăn chặn sự kiện nổi bọt , nổi từ con ra cha,ông

 // sử dụng DOM event khi k có nhu cầu gỡ bỏ sự kiện
 // sử dung Event listener xử lý nhiều việc cx 1 lúc, và hủy bỏ sự kiện lắng nghe
 cú phấp Event listener:
 .addEventListener("ten_sự kiện",function(e){

 });
  .removeEventListener("ten_sự kiện",function(e){

 });

// JSON : một định dạng dữ liệu (chuỗi), JavaScript Object Notation
JSON: thể hiện dạng dữ liệu trong js(Number, Boolean,Null, Array, Object,String)


//( mã hóa / giải mã) - Stringify(chuyển đổi từ js sang JSON) / Parse(Chuyển lại từ JSON  sang js)

vd: var json = "true"
             ="null"
             ='["Java","Js"]';
             ={"name":"Sơn","age":18};
             ='2';


 */
var json;
console.log( typeof json);
console.log( typeof JSON.stringify(json));
var a = '"abc"';
console.log(JSON.parse(a));
var arrJSON = '["Java","PHP","C#"]';
arrNJSON= (JSON.parse(arrJSON));
console.log((arrNJSON));

arrNJSON.forEach(function(elememt){
    console.log(elememt);
})


/*  JSON

Promise : + sync(đồng bộ)- thực hiện theo luồng tuần tự và 
          +  async(bất đồng bộ)- thực hiện theo luồng không tuần tự
async(setTimeOut m setInterval,fetch,XMLHttpRequest, file reading, request animation frame)
callback để xử dụng để giải quyết bất đồng bộ


// Promise(Pain): callback hell 
vd setTimeout(fuction(){
  cosole.log("V 1");
      setTimeout(fuction(){
          cosole.log("V 2");
      setTimeout(fuction(){
           cosole.log("V 3");
  
          },1000);
       },1000);


},1000);  > gọi là callback hell


// Promise(concept): khái niệm , cách hoạt động
  khởi tạo đối tượng: new Promise
  Executor:

  vd var promise = new Promise(
   fucntion(resolve, reject){
      // logic : nghiệp vụ
      // thành công : resolve()
      // thất bại : reject()

   }



  );


  các phương thức trong promise

  promise .then(funtion(){ // khi tk resolve đc gọi thì funtion của then đc gọi

  });

          .catch(funtion(){ // khi tk reject đc gọi thì funtion của then đc gọi

  });
    
          .finnally(funtion(){ khi 1 trong resolve hay reject đc gọi thì finnally đều đc gọi

  });

  Promise: sinh ra để xử lý thao tác bất đồng bộ, trước khi sd promise chúng ta thg sd callback 
  mà callback thì thg sẽ xảy ra callback hell
  
  Promise có 3 trạng thái: chờ, thành công, thất bại


  // Promise (chain)

*/
/*
var promise = new Promise(
     function(resolve,reject){
      resolve(); // callback
     }
);

promise
.then(function(){
  // return 1; // kết quả của then đầu sẽ là tham số cho then 2, kq then 2 là tham số then 3....
              // lưu ý nếu return new Promise(function(resolve){}); thì sẽ trả về undefined
          /*  setTimeout(function(){
                console.log(1);       
              },1000);
         */
   /*     return new Promise(function(resolve){
                    setTimeout(resolve,1000);
        });
//})

//.then(function(){
 //  console.log(data)
  /* setTimeout(function(){
      console.log(2);   
    },2000);
    */
  /* console.log(1);
   return new Promise(function(resolve){
      setTimeout(resolve,1000);
});

})

.then(function(){
 
  /* setTimeout(function(){
      console.log(3);     
    },3000);
    */
 /*   console.log(2);
    return new Promise(function(resolve){
       setTimeout(resolve,1000);
 });
})    
.then(function(data){
   console.log(data)
});



/*
 function sleep(ms){
   return new Promise(function(resolve,reject){
               setTimeout(resolve,ms);
   });
 }

 sleep(1000).then(function(){
   console.log(1);
   return sleep(1000);
 })
 .then(function(){
   console.log(2);
   return sleep(1000);
 })
 .then(function(){
   console.log(3);
   return sleep(1000);
 })
 .then(function(){
   console.log(4);
   return sleep(1000);
 })

 function hell(value, cb) {
   cb(value);
}

// Không sử dụng Promise dẫn đến tạo ra callback hell 
hell(1, function (valueFromA) {
   hell(valueFromA + 1, function (valueFromB) {
       hell(valueFromB + 1, function (valueFromC) {
           hell(valueFromC + 1, function (valueFromD) {
               console.log(valueFromD + 1);
           });
       });
   });
});

function Hell(){
   return new Promise(function(resolve){
      resolve();
   });
}

Hell().then(function(){
   return 1;
})
.then(function(data){
   return data +1;
})
.then(function(data){
   return data +1;
})
.then(function(data){
   return data+ 1;
})
.then(function(data){
  console.log(data+1);
})
*/
// Promise.resolve() : luôn thành công
// Promise.rejeact(): luôn thất bại
// Promise.all([promise1,promise2]).then(function([thamso1, thamso2]){}): trả lại đối tượng Promise trả lại mảng chạy song song , đồng thời



//1. lấy comment
//2 .từ comment lấy ra user_id
//từ user_id lấy ra user tương ứng


// fake API
/*
function getComment(){
   return new Promise(function(resolve,reject){
      setTimeout(function(){
              resolve(comments);
      },1000);
   })
}
function getUserByIds(userIds){
   return new Promise(function(resolve,rejeact){
      // từ userIds ta lấy ra danh sách user tương ứng
      var resulft =  users.filter(function(element){
               return userIds.includes(element.id);
      });
      resolve(resulft);
       
   })
}
getComment()
       .then(function(comments){
        // từ comment ta sẽ lấy ra danh sách các user_id
           var userIds = comments.map(function(elememt){
                         return elememt.user_id ;
           });

        return getUserByIds(userIds)  // trả về promise
                  .then(function(user){
                     return {
                        user:user,
                        comments:comments
                     };
                   })
       })// kết quả của tk này là đầu vào của tk dưới

        .then(function(data){
             var ulElment = document.getElementById("promise");
             var html ="";
             data.comments.forEach(function(elememtC){
                  var user = data.user.find(function(elementU){
                     return  elementU.id === elememtC.user_id;
                  });
                   html += `<li>${user.name} : ${elememtC.content}</li>`;




             });
              ulElment.innerHTML = html;

             


        })


// phụ thuộc vào nhau ta nhớ tới promise

*/

var users = [
   {
      id:1,
      name:"Kien Dang"
   },
   {
      id:2,
      name:"Sơn Đặng"
   }
];

var comments = [
   {
      id:1,
      user_id:1,
      content:"Anh chua ra video à!!"
   },
   {
      id:2,
      user_id:2,
      content:"Vừa ra em ơi :<"
   },
   {
      id:3,
      user_id:2,
      content:"Cảm ơn em<"
   },

   {
      id:4,
      user_id:1,
      content:"Không có gì à"
   },
];

function getComments(){
   return new Promise(function(resolve,rejeact){
      setTimeout(function(){
               resolve(comments);
      },1000);
   })
}
function getUserById(commentId){
   return new Promise(function(resolve,rejeact){
      var user = users.filter(function(elememt){
          return commentId.includes(elememt.id);
      });

      resolve(user);
   })
}

getComments()
             .then(function(comments){
                 var commentId= comments.map(function(elememt){
                   return elememt.user_id;
                 });
              return   getUserById(commentId)
                                       .then(function(user){
                                          return {
                                             user:user,
                                             comments:comments
                                          }
                                       });
             })



             .then(function(data){
               var ulElment = document.getElementById("promise");
               var html ="";
               data.comments.forEach(function(elememtC){
                  var userID = data.user.find(function(elementU){
                      return elementU.id == elememtC.user_id;

                  });

                  html += `<li>${userID.name}: ${elememtC.content}</li>`;
  
               });
             ulElment.innerHTML = html;
             })


