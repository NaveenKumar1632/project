let fa = document.querySelector("#nav-bar")
let cart = document.querySelector(".cart")
let carticon = document.querySelector("#cart-icon")
let cartclose = document.querySelector("#cart-close")
let links = document.querySelector(".nav-links")
let text = document.querySelector(".text")
console.log(text);


fa.addEventListener("click", () => {
    links.classList.toggle("display")
    text.classList.toggle("textstyle")
    console.log("click");

})

carticon.addEventListener("click", () => {
    cart.classList.add("cart-active")
    console.log("work");
})

cartclose.addEventListener("click", () => {
    cart.classList.remove("cart-active")
})

document.addEventListener("DOMContentLoaded", loaded)

function loaded() {
    loadContent();
}



// console.log(addcart);

function loadContent() {
    let dushpin = document.querySelectorAll(".dush-pin")
    dushpin.forEach((item) => {
        item.addEventListener("click", removeitem)
    })


    let qtybtn = document.querySelectorAll(".quanty-btn")
    qtybtn.forEach((item) => {
        item.addEventListener("change", changeqty)
    })


    let addcart = document.querySelectorAll(".addcart")
    addcart.forEach((item) => {
        item.addEventListener("click", insertcart)
    })

    totalPrice();

}

// removeitem


function removeitem() {
    this.parentElement.remove()

}

function changeqty() {

    if (isNaN(this.value) || this.value < 1) {
        this.value = 1
    }

    loadContent()

}



let itemlist = []

function insertcart() {



    let parent = this.parentElement.parentElement
    console.log(parent);

    let costum = parent.querySelector(".costum").innerText
    let cost = parent.querySelector(".cost p").innerHTML
    let img = parent.querySelector(".food-img").src

    let productlist = { costum, cost, img }

    if (itemlist.find((find) => find.img == productlist.img)) {
        alert("this product already added")
        return
    } else {
        itemlist.push(productlist)
    }

    console.log(costum, cost, img);


    let newelement = createcart(costum, cost, img)
    let cartitem = document.createElement("div")
    cartitem.classList.add("carting")
    cartitem.classList.add("style")



    cartitem.innerHTML = newelement
    console.log(cartitem);
    let cartcontent = document.querySelector(".cart-content")

    cartcontent.append(cartitem)
    console.log(cartcontent);




    loadContent()
    count()

}



function createcart(costum, cost, img) {
    return `
        <div class="cart-img">
             <img src="${img}" alt="">
         </div>
         <div class="cart-text">
             <h3>${costum}</h3>
             <p>${cost}</p>
         </div>
         <div class="cart-quantity">
             <p>qty:<input type="number" name="number" id="" value="1" class="quanty-btn"></p>

         </div>
         
         <i class="fa-solid  fa-trash-can dush-pin "></i>
         <div class="cart-amount">
             <h4>Amount</h4>
             <p style="text-align: center;">$45</p>
         </div>
    
    `;
}



function totalPrice() {
    let carts = document.querySelectorAll(".carting")

    let total = 0

    carts.forEach(product => {
        let price = parseFloat(product.querySelector(".cart-text p").innerHTML.replace("$", ""))
        console.log(price);
        let cartqty = product.querySelector(".cart-quantity input").value
        total += (price * cartqty)
        console.log(cartqty);
        let p = product.querySelector(".cart-amount p").innerText = "$" + (price * cartqty)
        console.log(p);

    })
    document.querySelector(".total").innerHTML = "Total:$" + total

}

// 



function count() {
    let cartcount = document.querySelector(".fa-solid span")
    console.log(cartcount);
    let count = itemlist.length
    cartcount.textContent = count

    if(count===0){
        cartcount.style.display="none"
    }else{
        cartcount.style.display="block"
    }
}
