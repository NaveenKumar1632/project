// let button = document.querySelector(".arrow"),
//     links = document.querySelector(".nav-links");
//     textarea = document.querySelector(".login");
//     form = document.querySelector(".login-box");

// button.addEventListener("click",()=>{
//     links.classList.toggle("display");
//     textarea.classList.toggle("textareahide");
//     form.classList.toggle("formhide");
// })

// var counter = 1;
// setInterval(function(){
//     document.getElementById("radio" + counter).checked =true; 
//    counter= counter + 1;
//     if(counter>4){
//         counter = 1;
//     }
// },3000);

// {
//     let g="car"                    // let scope use panna scope kulla mattum tha use agum
// }
// function data(){
//     var g="car"                   // scope 
// }
// data()
// console.log(g);

// function data(num1,num2,callback){
//     let r=(num1*num2)
//     return callback(r);
// }  

// function good(t){
//     console.log("its good " +t);


// }



// data(5,4,good)


// web storage

// 1) localStorage
// 2) sessionStorage
// 3) cookies

// 1) localStorage
// let store=localStorage.setItem("name","navin")
// console.log(localStorage.getItem("name"))
// localStorage.removeItem("name")

// 2) sessionStorage
// let store=sessionStorage.setItem("name","navin")
// sessionStorage.removeItem("name")
// console.log(store);

// let r=(new Date().toUTCString())

// document.cookie ="name=praveen"
// console.log(document.cookie);


//Synchronous and Asynchronous :

// 1) Synchronous :

// console.log("navin")

// for(let i=0;i<=1100;i++){
//     console.log("good")
// }
// console.log("kumar")
// Fake url
// 2) Asynchronous ://API

// setTimeout(function(){
//     console.log("good");

// },1000);

// console.log("f");

// open menthod open panni athukulla tha request method enanu mention pannanum nxt ulr insert pannanum.Open method (method ex:get,post: nxt url) 

// New XMLHttpRequest  API

// let data=document.getElementsByClassName("data")[0]
// console.log(data);

// function handle(good){
//     for(let i=0;i<good.length;i++){
//         let newelement=document.createElement("li")
//         newelement.textContent=`${i+1} ${good[i].email}`
//         data.append(newelement)
//     }
// }



// let xml = new XMLHttpRequest()
// let url = "https://jsonplaceholder.typicode.com/users"

// xml.onreadystatechange = function () {
//     if (xml.readyState === 4) {
//         if (xml.status === 200) {
//             let covert = JSON.parse(xml.response);
//             handle(covert)
//             console.log(covert[0]);  
//             console.log(covert); 

//         }
//         else{
//             console.log(error);
//         }
//     }
// }
// xml.open("GET", url)
// xml.send()
// console.log(xml);

// XMLHttpRequest GET and POST

// let dummy=[{id: 1, name: "محمدرضا راد", username: "Morad", email: "morad@april.biz", password: "Ab485652"}]
// let display=document.getElementsByClassName("display")[0]
// let input=document.getElementById("input")
// let btn=document.getElementById("btn")
// console.log(btn);
// console.log(input);

// btn.addEventListener("click",inputPost)



// function showData(name,getid){
//     newelement=document.createElement("h2")
//     newelement.setAttribute("id",getid)
//     newelement.textContent= name
//     // console.log(newelement);
//     display.append(newelement)

// }


// let url='https://jsonplaceholder.ir/users'
// function fetch(){
//     let xml=new XMLHttpRequest()
//     xml.onload=function(){
//             if(xml.status===200){
//                 let covert=JSON.parse(xml.response);

//                 console.log(covert);
//                 for(let value of covert){
//                 // console.log(value.username);
//                 showData(value.username,value.id)
//                 }
//             }else{
//                 console.log("ERROR");
//             }

//     }    
//     xml.open("GET",url)
//     xml.send()

// }


// function inputPost(){
//     let xml=new XMLHttpRequest()
//     let object={post:input.value}
//     let json=JSON.stringify(object)
//     xml.onload=function(){
//         if(xml.status===201){
//             let object=JSON.parse(xml.response) 
//             showData(object.post,object.id) 
//         }else{
//             console.log("faild");
//         }
//     }
//     console.log(object);
//     console.log(xml);
//     xml.open("POST",url)
//     xml.setRequestHeader("content-type","application/json")
//     xml.send(json)
// }
// fetch();


//......

// let dummyresponse = [{ id: 1, name: "محمدرضا راد", username: "Morad", email: "morad@april.biz", password: "Ab485652" }]
// // {/* <h3 id="1">some</h3> */ }

// let deletebtn = document.getElementById("btn1")



// /* <div id="123" class="delete">
// <h3 >some</h3>
//         <button id="btn1">remove</button>
//     </div> */

// let display = document.getElementsByClassName("display")[0]
// console.log(display);
// function showGet(name, idget) {
//     let postdiv = document.createElement("div")
//     postdiv.setAttribute("id", idget)
//     postdiv.setAttribute("class", "delete")

//     postelement = document.createElement("h3")
//     postelement.textContent = name

//     let deletebtn = document.createElement("button")
//     deletebtn.setAttribute("id", "btn1")
//     deletebtn.textContent = "remove"


//     deletebtn.addEventListener("click", function (event) {
//         let element = event.target.parentElement
//         // let deleteitem=event.target.parentElement.id

//         remove(element)
//     })


//     postdiv.append(postelement, deletebtn)
//     display.append(postdiv)


// }

// // GET

// let url = "https://jsonplaceholder.ir/users"

// function fetchget() {
//     let xhr = new XMLHttpRequest()
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             let parse = JSON.parse(xhr.response);

//             for (let value of parse) {
//                 showGet(value.username, value.id);
//             }

//         } else {
//             console.log("ERROR");
//         }
//     }
//     xhr.open("GET", url)
//     xhr.send()

//     console.log(xhr);
// }

// //post

// let input = document.getElementById("input")
// let btn = document.getElementById("btn")


// btn.addEventListener("click", showPost)

// function showPost() {
//     let xhrpost = new XMLHttpRequest()
//     let object = JSON.stringify({ post: input.value })
//     xhrpost.onload = function () {

//         if (xhrpost.status === 201) {
//             let parsepost = JSON.parse(xhrpost.response)
//             showGet(parsepost.post, parsepost.id)
//             console.log(parsepost);

//         }
//         else {
//             console.log("ERROR");
//         }
//     }

//     xhrpost.open("POST", url)
//     xhrpost.setRequestHeader("content-type", "application/json")
//     xhrpost.send(object)
// }


// function remove(element) {
//     let deleteid = element.id
//     let xhr = new XMLHttpRequest()
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             element.remove()
//         } else {
//             console.log("ERROR");
//         }
//     }


//     xhr.open("DELETE", `${url}/${deleteid}`)
//     xhr.send()
// }
// fetchget()


///
// GET...
// let dummyresponse=[{id: 1, name: "محمدرضا راد", username: "Morad", email: "morad@april.biz", password: "Ab485652"}]
// {/* <h3 id="1">some</h3> */}
// let url = 'https://jsonplaceholder.ir/users'
// // let url="https://jsonplaceholder.typicode.com/users"
// let display = document.getElementsByClassName("display")[0]
// let updatebtn = document.getElementById("updatebtn")


// // //update...






// // /* <div class="delete" id="1">
// //         <h3>some</h3>
// //         <button id="updatebtn">update</button>
// //         <button id="button">remove</button>
// //     </div>
// //     */


// function showGet(name, getid) {
//     let divEl = document.createElement("div")
//     divEl.setAttribute("class", "delete")
//     divEl.setAttribute("id", getid)

//     getelement = document.createElement("h3")
//     // getelement.setAttribute("id", getid)
//     getelement.textContent = name

//     let updateEL = document.createElement("button")
//     updateEL.setAttribute("id", "buttton")
//     updateEL.textContent = "update"


//     updateEL.addEventListener("click", function (event) {
//         let updateid = event.target.parentElement.id
//         let element = event.target.parentElement
//         let currentvalue = event.target.previousElementSibling.textContent
//         let newvalue = prompt(`currentvalue : ${currentvalue}`, currentvalue)
//         console.log(newvalue);
//         if (newvalue !== null && newvalue !== currentvalue && newvalue.replace(/[\s+]/, "").length > 0) {
//             console.log("go to back end");
//             update(newvalue, updateid,element)

//         }
//         else {
//             console.log("no need update..");
//         }

//     })

//     let buttonEL = document.createElement("button")
//     buttonEL.setAttribute("id", "button")
//     buttonEL.textContent = "remove"

//     buttonEL.addEventListener("click", function (event) {
//         let parentElement = event.target.parentElement
//         remove(parentElement)

//     })

//     divEl.append(getelement, updateEL, buttonEL)

//     display.append(divEl)

//     // getelement.setAttribute("id", getid)

// }


// function get() {
//     let xhrget = new XMLHttpRequest
//     xhrget.onload = function () {
//         if (xhrget.status === 200) {
//             let parse = JSON.parse(xhrget.response)
//             for (let value of parse) {
//                 showGet(value.username, value.id);
//             }
//         } else {
//             console.log("ERROR");
//         }
//     }
//     xhrget.open("GET", url)
//     xhrget.send()

// };
// // get()

// //post...

// let btn = document.getElementById("btn")
// let input = document.getElementById("inputbox")

// btn.addEventListener("click", post)

// function post() {
//     let xhrpost = new XMLHttpRequest()
//     let stringify = JSON.stringify({ post: input.value });
//     console.log(typeof stringify);
//     xhrpost.onload = function () {
//         if (xhrpost.status === 201) {
//             let parse = JSON.parse(xhrpost.response);
//             showGet(parse.post, parse.id)
//         }
//         else {
//             console.log("ERROR");
//         }
//     }

//     xhrpost.open("POST", url)
//     xhrpost.setRequestHeader("content-type", "application/json")
//     xhrpost.send(stringify)
// }

// function remove(element) {
//     let deleteid = element.id
//     let xhrdelete = new XMLHttpRequest()
//     xhrdelete.onload = function () {
//         if (xhrdelete.status === 200) {
//             element.remove()
//         }
//         else {
//             console.log("ERROR");
//         }
//     }
//     console.log(xhrdelete);
//     xhrdelete.open("DELETE", `${url}/${deleteid}`)
//     xhrdelete.send()

// };

// // PATCH AND PUT...

// function update(newvalue,updateid,element) {
//     let xhrupdate = new XMLHttpRequest()
//     let stringify = JSON.stringify({ id: updateid ,post:newvalue})
//     console.log(stringify);
//     xhrupdate.onload = function () {
//         if (xhrupdate.status === 200) {
//             element.textContent=newvalue

//         }
//         else {
//             console.log("ERROR");
//         }
//     }
//     xhrupdate.open("PUT",url)
//     xhrupdate.setRequestHeader("content-type","application/json")
//     xhrupdate.send(stringify)
// }
// get()

//pratice ...

// let dummyresponse = [{ id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" }]
// let url = "https://jsonplaceholder.typicode.com/users"
// let display = document.getElementsByClassName("display")[0]
// let btn = document.getElementById("btn")
// let input = document.getElementById("inputbox")

// // <h3 id="1">some</h3>

// // {/* <div class="post" id="1">
// //         <h3>some</h>
// // {/* <button id="update">update</button> */}
// //         <button id="remove">remove</button>
// //     </div> */}




// function showget(name, getid) {
//     let divEl = document.createElement("div")
//     divEl.setAttribute("class", "post")
//     divEl.setAttribute("id", "1")

//     newElement = document.createElement("h3")
//     newElement.setAttribute("id", getid)
//     newElement.textContent = name

//     let updatebtn=document.createElement("button")
//     updatebtn.setAttribute("id","update")
//     updatebtn.textContent="update"

//     updatebtn.addEventListener("click",function(event){
//         let updateit = event.target.parentElement.id
//         let currentvalue=event.target.parentElement.textContent
//         let newvalue=prompt(`currentvalue : ${currentvalue}`,currentvalue)
//         console.log(newvalue);
//         if(newvalue !==null && newvalue !==currentvalue && newvalue.replace(/[\s+]/,"").length>0){
//             put(newvalue,updateit)
//         }
//         else{
//             console.log("ERROR");
//         }
//     })

//     let buttonEL = document.createElement("button")
//     buttonEL.setAttribute("id", "remove")
//     buttonEL.textContent = "remove"

//     buttonEL.addEventListener("click", function (event) {
//         let parentelement = event.target.parentElement
//         deleteEl(parentelement)
//     })

//     divEl.append(newElement,updatebtn,buttonEL)

//     display.append(divEl)

// }

// function get() {
//     let xhrget = new XMLHttpRequest()
//     xhrget.onload = function () {
//         if (xhrget.status === 200) {
//             let parse = JSON.parse(xhrget.response);
//             console.log(parse);
//             for (let value of parse) {
//                 showget(value.name, value.id);
//             }
//         }
//         else {
//             console.log("ERROR");
//         }
//     }

//     xhrget.open("GET", url)
//     xhrget.send()

// }

// btn.addEventListener("click", post)


// function post() {
//     let xhrpost = new XMLHttpRequest()
//     let stringify = JSON.stringify({ post: input.value })
//     console.log(stringify);
//     xhrpost.onload = function () {
//         if (xhrpost.status === 201) {
//             let parse = JSON.parse(xhrpost.response);
//             console.log(parse);
//             showget(parse.post, parse.id);

//         }
//         else {
//             console.log("ERROR");
//         }
//     }

//     xhrpost.open("POST", url)
//     xhrpost.setRequestHeader("content-type", "application/json")
//     xhrpost.send(stringify)

// }

// function deleteEl(element) {
//     let deleteitem = element.id
//     let xhrdelete = new XMLHttpRequest()
//     xhrdelete.onload = function () {
//         if (xhrdelete.status === 200) {
//             element.remove()
//         }
//         else {
//             console.log("ERROR");
//         }
//     }

//     xhrdelete.open("DELETE", `${url}/${deleteitem}`)
//     xhrdelete.send()
// }

// function put(newvalue,updateit){
//     let xhrput=new XMLHttpRequest()
//     let stringify=JSON.stringify({post:newvalue,id:updateit})
//     // xhrput.onload=function(){
//     //     if(xhrput.status===200){
//     //         console.log(xhrput); 
//     //     }
//     //     else{
//     //         console.log("ERROR");
//     //     }
//     // }

//     console.log(stringify);
//     xhrput.open("put",url)
//     xhrput.send(stringify)
// }

// get()


// callback function ...

// function login(emailid,password,callback){
//     setTimeout(()=>{

//         callback({username:"navin"})
//     })

// }
// function data(username,callback){
//     setTimeout(() => {

//         callback({username,post:2})
//     }, 2000);
// }
// login("navin@gmail.com","123",function(value){
// console.log(value);
// data(value.username,function(details){

//     console.log(details);
// })
// })

// //promises...
// function log(emailid,password){
//     let promises=new Promise(function(resolve,reject){
//        setTimeout(function(){

//            resolve({username:"navin"}) 
//        },2000)

//     })

//     promises.then(function(x){
//     console.log(x);
//     }).catch(function(){
//         console.log("ERROR");
//     })

// }
// log("navin@gmai.com",123)


// let i=0
// let t=new Promise(function(resolve,reject){
//     setTimeout(() => {
//         if(i==1){

//             resolve({username:"navin"})
//         }else{
//             reject({username:"navin"})
//        }

//     }, 2000);
// }).then(function(value){
// console.log(value);
// }).catch(function(er){
//     console.log("ERROR");
// })
// console.log(t);




// async function wait(){
// let result=await log("navin@gmail",222)
// console.log(result);
// }
// wait()

// let url = "https://jsonplaceholder.typicode.com/users"

// let xhr=new XMLHttpRequest()
// xhr.onreadystatechange=function(){
//     if(xhr.readyState===4){
//         if(xhr.status===200){
//             let res=JSON.parse(xhr.response)
//             console.log(res);
//         }
//         else{
//             console.log("ERROR")
//         }

//     }
// }
// xhr.open("GET",url)
// xhr.send()

//FETCH...


// let promise=fetch(url,{
//     method:"GET"
// })

// promise.then(function(res){
//     if(res.status===200){
//         return res.json()
//     }
//     else{
//         throw new Error("something error")
//     }
// })
// .then(function(data){
//     console.log(data[0]);
// }).catch(function(data){
//     console.log("ERROR");
// })

/* <h3>some</h3> */
// [{id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz",…},…]
/* <div class="post" id="1">
        <h3>some</h3>
        <button id="update">update</button>
        <button id="remove">remove</button>
    // </div>  */

// let url = "https://jsonplaceholder.typicode.com/users"
// let display = document.getElementsByClassName("display")[0]
// let inputbox = document.getElementById("inputbox")
// let btn = document.getElementById("btn")

// function showget(name, getid) {
//     let divEl = document.createElement("div")
//     divEl.setAttribute("class", "post")
//     divEl.setAttribute("id", "1")

//     let newEl = document.createElement("h3")
//     newEl.setAttribute("id", getid)
//     newEl.textContent = name

//     let updateEL = document.createElement("button")
//     updateEL.setAttribute("id", "update")
//     updateEL.textContent = "update"

//     updateEL.addEventListener("click", function (event) {
//         let text = event.target.parentElement
//         console.dir(event.target.previousElementSibling.id);
//         let parentel = event.target.previousElementSibling.id
//         // console.log(parentel);
//         let currentvalue = event.target.parentElement.previousElementSibling.textContent
//         let newvalue = prompt(`currenvalue :${currentvalue}`, currentvalue)
//         if (newvalue !== null && newvalue !== currentvalue && newvalue.replace(/[\s+]/, "").length > 0) {
//             update(newvalue, text, parentel)
//         }
//         else {

//             console.log("no update");
//         }

//     })

//     let removeEL = document.createElement("button")
//     removeEL.setAttribute("id", "remove")
//     removeEL.textContent = "remove"

//     removeEL.addEventListener("click", function (event) {
//         let parentel = event.target.parentElement

//         remove(parentel)

//     })

//     divEl.append(newEl, updateEL, removeEL)
//     display.append(divEl)

// }


// async function get() {
//     try {
//         let response = await fetch(url, {
//             method: "GET",
//         })

//         if (response.ok) {
//             let json = await response.json();
//             console.log(json);
//             for (let value of json) {
//                 showget(value.name, value.id)
//             }
//         }
//         else {
//             throw new Error("ERROR")
//         }

//     } catch (err) {
//         console.log(err);
//     }
// }
// get()

// btn.addEventListener("click", post)

// async function post() {
//     let jsonstring = JSON.stringify({ post: inputbox.value })
//     console.log(jsonstring);
//     try {
//         let response = await fetch(url, {
//             method: "POST",
//             body: jsonstring,
//             headers: {
//                 "content-type": "application/json"
//             }
//         })
//         if (response.ok) {
//             let json = await response.json()
//             showget(json.post, json.id)

//         }
//         else {
//             throw new Error("ERROR")
//         }
//     } catch (err) {
//         console.log(err);
//     }
// }
// post()


// async function remove(parentel) {
//     let deleteitem = parentel.id
//     try {
//         let response = await fetch(`${url}/${deleteitem}`, {
//             method: "DELETE",
//             headers: {
//                 "content-type": "application/json"
//             }
//         })
//         if (response.ok) {
//             parentel.remove()

//         }
//         else {
//             throw new Error("ERROR")
//         }
//     } catch (err) {
//         console.log(err);
//     }


// }

// async function update(newvalue, parentel, text) {
//         try {
//         let value = JSON.stringify({id: parentel,post: newvalue})
//         let response = await fetch(url, {
//             method: "PUT",
//             headers: {
//                 "content-type": "application/json"
//             },
//             body: value,
//         })
//         if (response.ok) {
//             text.textContent = newvalue

//         }
//         else {
//             throw new Error("ERROR")
//         }
//     } catch (err) {
//         console.log(err);
//     }

// }
// update()

// calculator...

// let inputbox=document.getElementById("inputbox")


// function display(event){
//    console.log(event);
//    inputbox.value+=event
// }

// function equal(event){ 
// try{
//     let r=event
//     r=eval(inputbox.value)
//     inputbox.value=r
//     console.log(r);

// } catch(err){
//     console.log("ERROR");
// }   
// }

// function cl(){
//     inputbox.value=""
// }
// function del(){
//     let t=inputbox.value
//     let y=t.slice(1)
//     inputbox.value=y

// }

// let tableContainer = document.getElementsByClassName("table-container")[0]


// tableContainer.addEventListener("click", table)

// let select;
// function table(event) {
//     if (event.target.tagName === "TH") {
//         return;
//     }
//     console.dir(event.target.parentElement.innerText)
//     // alert(event.target.innerText)
//     console.log(select);
//     if (select !== undefined) {

//         select.classList.remove("display")
//     }
//     let t = event.target.parentElement
//     t.classList.add("display")
//     console.log(event.target);
//     console.log(t);
//     select = t

// }



///....

// let btn1 = document.getElementById("btn1")
// let btn2 = document.getElementById("btn2")

// btn1.addEventListener("click", first)
// btn2.addEventListener("click", first)

// let secondinput = document.getElementById("secondinput")
// let firstinput = document.getElementById("firstinput")
// let textarea = document.getElementById("textarea")

// function first() {  
//     if(firstinput.value !== "" ){
//         console.dir(firstinput.value);
//         let li=document.createElement("li")
//         li.setAttribute("id","1")
//         li.classList.add("color")
//         li.textContent=firstinput.value
//         firstinput.value=""
//         firstinput.focus()
//         console.log(li);
//         textarea.append(li)

//     }

//     else if(secondinput.value !==""){
//         let li=document.createElement("li")
//         li.setAttribute("id","1")
//         li.textContent=secondinput.value
//         li.classList.add("style")
//         secondinput.value=""
//         secondinput.focus()
//         console.log(li);
//         textarea.append(li)


//     }


// }



//...stop watch





// function timer(){
//     let date=new Date()
//     let getdate=date.getDate()
//     let gethours=date.getHours()
//     let getMinutes=date.getMinutes()
//     let getSeconds=date.getSeconds()
//     let getMilliseconds=date.getMilliseconds()
//     if(gethours>12){
//        gethours=gethours-12
//        console.log("work");
//     }
//     if(gethours>9){

//     }
//     let hours=document.getElementsByClassName("hours")[0].innerText=gethours
//     let minutes=document.getElementsByClassName("minutes")[0].innerText=getMinutes
//     let sec=document.getElementsByClassName("sec")[0].innerText=getSeconds
//     let milisec=document.getElementsByClassName("milisec")[0]
//     milisec.innerText=getMilliseconds



// }

// let stopbtn=document.getElementById("stop")
// stopbtn.addEventListener("click",stopbutton)
// let startbtn=document.getElementById("start")
// startbtn.addEventListener("click",start)


// function stopbutton(){
//     clearInterval(stop)
// }


// function start(){
//     stop=setInterval(timer) 
// }

// let reset=document.getElementById("reset")
// reset.addEventListener("click",resetbtn)

// function resetbtn(){
//     clearInterval(stop)
//     gethours= "00"
//     getMinutes="00"
//     getSeconds="00"
//     getMilliseconds="000"

//    let hours=document.getElementsByClassName("hours")[0].innerText=gethours
//    let minutes=document.getElementsByClassName("minutes")[0].innerText=getMinutes
//    let sec=document.getElementsByClassName("sec")[0].innerText=getSeconds
//    let milisec=document.getElementsByClassName("milisec")[0]

// hours.innerText=gethours
// minutes.innerText=getMinutes
// sec.innerText=getSeconds
// milisec.innerText=getMilliseconds

// }

//promise 
//resolve successfuly complete
//reject is some error
// promises .then and catch
// function login(email,password){

//     let promise=new Promise(function(resolve,reject){
//         setTimeout(function(){

//             resolve ({usename:"navin"})
//         },2000)

//     })
//     promise.then(function(res){
//         console.log(res);
//     }).catch(function(err){
//         console.log(err);
//     })
// }
// login("navin@gmail.com",123)

//xmlhttprequest

// let dummyresponse = [{ id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz" }]
// let url = "https://jsonplaceholder.typicode.com/users"
// let display = document.getElementsByClassName("display")[0]
// let inputbox = document.getElementById("inputbox")



// function showGet(name, getid) {
//     let div = document.createElement("div")
//     div.setAttribute("id", getid)
//     div.setAttribute("class", "post")

//     let newEl = document.createElement("h3")
//     // newEl.setAttribute("id", "1")
//     newEl.textContent = name

//     let buttonEl = document.createElement("button")
//     buttonEl.setAttribute("id", "remove")
//     buttonEl.textContent = "remove"

//     buttonEl.addEventListener("click", function (event) {
//         let parentEl = event.target.parentElement
//         remove(parentEl)

//     })

//     let updateEL = document.createElement("button")
//     updateEL.setAttribute("id", "update")
//     updateEL.textContent = "update"

//     updateEL.addEventListener("click", function (event) {
//         let currentvalue = event.target.previousElementSibling.previousElementSibling.innerText
//         let updateid=event.target.id
//         let newvalue = prompt(`currentvalue:${currentvalue}`, currentvalue)
//         console.log(newvalue);
//         if (newvalue !== "null" && newvalue !== currentvalue && newvalue.replace(/[\s+]/, "").length > 0) {
//             put(newvalue, updateid)
//         }
//         else {
//             console.log("ERROR");
//         }


//     })

//     div.append(newEl, buttonEl, updateEL)
//     display.append(div)
//     console.log(display);

// }



// function get() {

//     let xhrget = new XMLHttpRequest()
//     xhrget.onreadystatechange = function () {
//         if (xhrget.readyState === 4) {

//             if (xhrget.status === 200) {
//                 let parse = JSON.parse(xhrget.response)
//                 for (let value of parse) {
//                     showGet(value.name, value.id);
//                 }
//             }
//             else {
//                 console.log("ERROR");
//             }
//         }
//     }
//     xhrget.open("GET", url)
//     xhrget.send()
// }

// let btn = document.getElementById("btn")
// btn.addEventListener("click", post)


// function post() {

//     let xhrpost = new XMLHttpRequest()
//     let stringify = JSON.stringify({ post: inputbox.value, id: 1 });

//     xhrpost.onreadystatechange = function () {
//         if (xhrpost.readyState === 4) {
//             if (xhrpost.status === 201) {
//                 let parse = JSON.parse(xhrpost.response)
//                 console.log(parse);
//                 showGet(parse.post, parse.id)
//                 inputbox.value = ""
//             }
//             else {
//                 console.log("ERROR");
//             }

//         }
//     }

//     xhrpost.open("POST", url)
//     xhrpost.setRequestHeader("content-type", "application/json")
//     xhrpost.send(stringify)
// }

// function remove(element) {
//     let deleteid = element.id
//     console.log(deleteid);
//     let xhrremove = new XMLHttpRequest()
//     xhrremove.onreadystatechange = function () {
//         if (xhrremove.readyState === 4) {
//             if (xhrremove.status === 200) {
//                 element.remove()
//             }
//             else {
//                 console.log("ERROR");
//             }
//         }

//     }

//     xhrremove.open("DELETE", `${url}/${deleteid}`)
//     xhrremove.send()
// }


// function put(newvalue,id){
//     let stringify=JSON.stringify({post:newvalue,id:id})
//     let xhrput = new XMLHttpRequest()
//     xhrput.onreadystatechange=function(){
//         if(xhrput.readyState===4){
//             if(xhrput.status===200){
//                 console.log(xhrput.response);
//             }
//             else{
//                 console.log("ERROR");
//             }
//         }
//     }

//     xhrput.open("PUT", url)
//     xhrput.setRequestHeader("content-type","application/json")
//     xhrput.send(stringify);
// }
// get()




// fetch
// let url = "https://jsonplaceholder.typicode.com/users"
// let display=document.getElementsByClassName("display")[0]



// function showget(name,getid){
//     let divEl=document.createElement("div")
//     divEl.setAttribute("class","post")

//     let newEl=document.createElement("h3")
//     newEl.setAttribute("id",getid)
//     newEl.textContent=name

//     let remove=document.createElement("button")
//     remove.setAttribute("id","1")
//     remove.textContent="remove"

//     remove.addEventListener("click",function(event){
//     let parentEl=event.target.parentElement
//     remove(parentEl)
//     })

//     divEl.append(newEl,remove)
//     display.append(divEl)


// }

// function get(){

//     let promise=fetch(url,{
//         method:"GET"
//     })

//     promise.then(function(res){
//         if(res.status===200){
//            return res.json();
//         }

//         else{
//             throw new Error("ERROR")
//         }

//     })
//     .then(function(value){
//         for(let text of value){
//             showget(text.name,text.id);
//         }
//     }).catch(function(err){
//         console.log(err);
//     })
// }

// let btn=document.getElementById("btn")
// let inputbox=document.getElementById("inputbox")

// btn.addEventListener("click",post)

// function post(){
//     let stringify=JSON.stringify({post:inputbox.value,id:1})
//     let promise=fetch(url,{
//         method:"POST",
//         body:stringify,
//         headers:{
//             "content-type":"application/json"
//         }
//     })
//     promise.then(function(res){
//         if(res.status===201){
//             return res.json()
//         }
//         else{
//             throw new Error("ERROR")
//         }

//     })
//     .then(function(value){
//         if(inputbox.value!==""){

//             inputbox.value=""
//             showget(value.post,value.id)
//         }
//     }).catch(function(err){
//         console.log(err);
//     })
// }


// async function remove(element){
//     let deleteid=element.id
//     try{
//         let promise=await fetch(`${url}/${deleteid}`,{
//             method:"DELETE",
//             headers:{
//                 "content-type":"application/json"
//             }

//         })
//         if(promise.status===200){
//             element.remove()
//         }
//         else{
//             throw new Error("ERROR")
//         }

//     }catch(err){
//         console.log(err);
//     }

// }


// let inputname = document.getElementsByClassName("inputname")[0]
// let inputlast = document.getElementsByClassName("inputlast")[0]
// console.log(inputname);
// let error = document.getElementsByClassName("error")[0]
// console.log(error);
// console.dir(inputname);

// let formsEl = document.forms.form
// console.log(formsEl.elements);

// formsEl.addEventListener("submit", function (event) {
//     let inputbox = document.getElementById("inputbox").value
//     let text = formsEl.firstname.value
//     let password = formsEl.password
//     let repassword = formsEl.repassword
//     let date = formsEl.date
//     let num=formsEl.number
//     console.dir(formsEl);
//     event.preventDefault()
//     // let {firstname,lastname,dob,gender}=formsEl.elements
//     // console.log(formsEl);

//     let formsdata = [...new FormData(formsEl)]
//     post(formsdata)

//     if (firstname.value == "") {
//         inputname.classList.add("err")
//         inputlast.classList.add("err")
//         date.classList.add("err")
//         return false
//     }
//     else {
//         inputname.classList.add("success")
//     }

//     if (lastname.value == "") {
//         inputlast.classList.add("err")
//         return false
//     }
//     else {
//         inputlast.classList.add("success")

//     }

//     if (date.value == "") {
//         date.classList.add("err")
//         return false
//     }
//     else {
//         date.classList.add("success")
//     }

//     if (password.value == "") {
//         password.classList.add("err")
//         return false
//     }

//     // else{
//     //     password.classList.add("success")
//     // }
//     if (password.value == repassword.value) {
//         repassword.classList.add("success")
//         return true
//     }
//     else {
//         document.getElementById("newEl").innerText = "*password not same*"
//         repassword.classList.add("err")
//         return false

//     }





// });

//random quotes 

// let url = "https://jsonplaceholder.typicode.com/users"

// function post(formsdata) {
//     let stringify = JSON.stringify({ formsdata })
//     let xhrpost = new XMLHttpRequest()
//     xhrpost.onload = function () {
//         if (xhrpost.status === 201) {
//             let parse = JSON.parse(xhrpost.response);
//             console.log(parse.formsdata[0]);
//         }
//         else {
//             console.log("ERROR");
//         }
//     }

//     xhrpost.open("POST", url)
//     xhrpost.setRequestHeader("content-type", "application/json")
//     xhrpost.send(stringify)
// }






// let  quoteurl="https://api.quotable.io/random"

// let heading=document.getElementById("heading")
// let nxtquotes=document.getElementById("nxtquotes")
// let speak=document.getElementById("speak")
// let author=document.getElementById("author")

// console.log(heading)

// nxtquotes.addEventListener("click",random)

// function random(){
//     let promises=fetch(quoteurl,{
//         method:"GET"

//     })

//     promises.then(function(response){       
//        return response.json()

//     })
//     .then(function(data){
//         console.log(data.content);
//         let content=document.getElementById("content")
//         content.innerText=data.content
//         author.innerText=data.author

//     }).catch(function(err){
//         console.log(err);
//     })
// }

// speak.addEventListener("click",speech)

// function speech(){
// let utterance=new SpeechSynthesisUtterance(`${content.innerText} by ${author.innerText}`)
// speechSynthesis.speak(utterance)
// }



// //

// let firstinput=document.getElementById("firstinput")
// let secondinput=document.getElementById("secondinput")
// let speakbtn=document.getElementById("speakbtn")
// let copy=document.getElementById("copybtn")
// console.log(speakbtn);


// firstinput.addEventListener("keyup",firstinputvalue)

// function firstinputvalue(){
// secondinput.value=firstinput.value
// }
// speakbtn.addEventListener("click",speaktext)
// console.dir(secondinput);

// function speaktext(){
//     let utterance=new SpeechSynthesisUtterance(`${secondinput.value}`)
//     speechSynthesis.speak(utterance)
// }

// copy.addEventListener("click",copytext)

// function copytext(){
//     navigator.clipboard.writeText(secondinput.value)

// }

// console.log(18%10);
// console.log(parseInt(18/10));


// let num=
// let sum=0







