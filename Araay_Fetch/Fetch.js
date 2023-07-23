/* Fetch : lấy dữ liệu từ back end trả về
API: application programming interface > cổng giao tiếp giữa các phần mềm
hiểu đơn giản (URL)
Back-end  trả > API  sử dụng >Fetch để lấy dữ liệu > nhận được JSON/XML
>JSON.parse > nhận về js type > render(là đầu ra cuối cx từ dl đầu vào) ra giao diện vs html


JSON server(thư viện) : tạo fake API



*/

/*
var postAPI ='https://jsonplaceholder.typicode.com/posts';
 
fetch(postAPI) //  nhận lại 1 promise
        . then(function(response){ // fetch trả về luồng or response là một đối tượng promise
           return response.json();// muốn nhận đc JSON thì response.json() và return thì nó lại trả lại promise
       // trả lại promise
             // JSON.parse --JSON > JS types

        })
        .then(function(posts){ // post là nhận đc từ response chuyển từ JSON > js types
            var html = posts.map(function(element,index){
                return `
                <li>
                ${index}
                 <h2>${element.title}</h2>
                 <p>${element.body}</p>
                </li>
                
                `
            });

            var ulElement = document.querySelector("ul");
            ulElement.id="fetch";


            var ulElement1 = document.getElementById("fetch");

            ulElement1.innerHTML = html;
            

           
            
        });

  var dbApi ='http://localhost:3000/courses';

  fetch(dbApi)
              .then(function(response){
                  return response.json();

              })
           .then(function(courses){
                var img = courses.map(function(element){
                    return element.img;
                 });
              var StringAnh= img.join("");
               var ulElement = document.getElementById("Fake_API");
               console.log(StringAnh);
               ulElement.innerHTML =`<img src="${StringAnh}" alt="" width="100px">`
              })

// Mock API như API Fake
/*
API server lấy dl web site (thêm sửa xóa)
REST API sử dụng các phương thức trong giao thức HTTPS
CRUD: create:tạo mới> POST
       Read:lấy dl > GET
       Update:chỉnh sửa >PUT || PATCH
       Delete:xóa > DELETE
Postman làm vc vs API nhanh chóng , gửi đi đc 4 hành động CRUD
*/
var courseAPI ='http://localhost:3000/courses';

function start(){
   getCourses(renderCourse);

  handleCourses();
  
}
start();


function creatCourses(data,callback1){
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         body: JSON.stringify(data)
    };
fetch(courseAPI,options)
     .then(function(response){
        return response.json();
     })
     .then(callback1);
    
}


function handleDeleteCourses(id){
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
         
    };
fetch(courseAPI + '/' +id,options)
     .then(function(response){
        response.json();
     })
     .then(function(){
       var deleteCoures= document.querySelector(".data-item-course-"+id);
       if(deleteCoures){
        deleteCoures.remove();
       }
     });
    
}

 function UpdateCourses(id){
    var name = document.querySelector(".name-"+id);
    console.log(name);
   var description = document.querySelector(".description-" +id);
   console.log(description);
   var nameInput = document.querySelector('input[name="name"]');
   console.log(nameInput);
   var descriptionInput = document.querySelector('input[name="description"]');
   console.log(descriptionInput);
   var buttUpdate = document.querySelector("#create");
   console.log(buttUpdate);

   if(name && description){
    nameInput.value = name.innerText;
    descriptionInput.value  = description.innerText;
    buttUpdate.innerText="Update";
   }
  buttUpdate.onclick = function(){
    var data ={
        name :nameInput.value,
        description:descriptionInput.value
    }

    handleUpdateCourses(id,data,function(){
    getCourses(renderCourse);
    });
nameInput.value = "";
  
    descriptionInput.value = "";
 
    buttUpdate = "Create";
  
  }
  

 }

 function handleUpdateCourses(id,data,callback){
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body:JSON.stringify(data)
         
    };

    fetch(courseAPI +'/' +id,options)
         .then(function(response){
            return response.json();
         })
         .then(callback)
 }


function getCourses(callback){
    fetch(courseAPI)
                    .then(function(response){
                     return response.json();
                    })

                    .then(callback) 
}



function renderCourse(courses){
    var ulElement = document.getElementById("Fake_API");
    var html ="";
  var arrHTML=  courses.map(function(element){
        return `
           <li class="data-item-course-"+ ${element.id}>
             <h2 class="name-${element.id}"  >${element.name}</h2>
             <p class="description-${element.id}" >${element.description}</p>
             <img src="${element.img}" alt="" width="100px">
           <button onclick="handleDeleteCourses(${element.id})">Xóa</button>
           <button class="update" onclick="UpdateCourses(${element.id})">Sửa</button>
           </li>
        
        
        
        `
    });

     ulElement.innerHTML = arrHTML.join("");

}

function handleCourses(){
   
   var butElement = document.querySelector("#create");
   
   
   butElement.onclick = function(){
                 var name = document.querySelector('input[name="name"]').value ;
           
                var description=  document.querySelector('input[name="description"]').value;
                if(name == '' || description == ''){
                    alert("Nhập thông tin!!");
                    return;
                }
              
                var data ={
                    name:name,
                    description:description
                };
                creatCourses(data,function(){
                    getCourses(renderCourse);
                });
   }
 
   
}

// var // let or const: scope, hosting(đưa lên trên)
// const // let or var : assignment: không thể gán const lần thứ 2

console.log(`Template string nội suy : \${}`);

//Destructuring Phân rã đối vs mảng và object
/*
vd : var arr=[1,2,3];
var [a,b,c] = arr// kết quả a=1,b=2,c=3 phân rã
var [a,,c] = arr// kết quả a=1,,c=3 phân rã

//  Rest parameter : lấy ra phần còn lại

 [a, ...rest] = arr // trả về mảng gồm 2 phần tử [2,3]

  Object

  var course ={
    name:"js",
    price:1000,
    children:{
        name:"Reaj"
    }
  };
  var {name,price}=course;
  console.log(name,price); trả về js 1000

  var {name:parenName,children:{name:childrenName}}= course
  // parenName:Js , childrentName: Reajs
   console.log(parenName);

   // them gia trij mac dinh khi khong ton tai thuoc tinh
{name,dis="default"}= course

function looger(...para){// ...para đây là biến rest  ,khi nó là tham số thì nó luôn là mảng lấy ra phần tử còn lại
    console.log(para) // trả về mảng

}
looger({
    name:"js",
    price:1000
});

or

function looger({name,price}){// ...para đây là biến rest  ,khi nó là tham số thì nó luôn là mảng lấy ra phần tử còn lại
    console.log(name)  : js
     console.log(price)  // 1000

}


// Spread : giải / thg dùng trong truyền đối số
rest thg dùng trong tham số truyền vào hàm


*/
var arr1 =['js'];
var arr2 =["php"];
var arr3 = [...arr1 ,...arr2];
console.log(arr3)

/*
Tagged template literals: sử dụng cho function()


*/
function highlight([first,...strings],...value){
   return value.reduce((acc,curr) => [...acc,curr,strings.shift()]
   ,
    [first]
   ).join("");
}
var course ="JavaScript";
var at ="F8";
var html =highlight`Học lập trình ${course} tai ${at} !`;
console.log(html);



// Moduel : tách ra các file riêng để làm nv riêng