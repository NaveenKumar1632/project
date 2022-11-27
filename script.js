let fa = document.querySelector("#nav-bar")
let cart = document.querySelector(".cart")
let carticon = document.querySelector("#cart-icon")
let cartclose = document.querySelector("#cart-close")
let links = document.querySelector(".nav-links")
let text = document.querySelector(".text")
let pic= document.querySelector(".pic")

pic.addEventListener("click",()=>{
    pic.classList.toggle("pic-active")

})


fa.addEventListener("click", () => {
    links.classList.toggle("display")
    text.classList.toggle("textstyle")


})

carticon.addEventListener("click", () => {
    cart.classList.add("cart-active")

})

cartclose.addEventListener("click", () => {
    cart.classList.remove("cart-active")
})

document.addEventListener("DOMContentLoaded", loaded)

function loaded() {
    loadContent();
}

let navlinks = document.querySelectorAll(".nav-links li")


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

    navlinks.forEach((item) => {
        item.addEventListener("click",(e)=>{
            activelinks(e)
        })

    })

    totalPrice();

}

// removeitem


function removeitem() {

    let productname = this.parentElement.querySelector(".cart-img img").src
    console.log(productname);
    itemlist = itemlist.filter(e => e.img != productname)
    console.log(itemlist);
    this.parentElement.remove()
    loadContent()
}

function changeqty() {

    if (isNaN(this.value) || this.value < 1) {
        this.value = 1
    }

    loadContent()

}


function activelinks(e) {
    navlinks.forEach((item) => {
        item.classList.remove("active-link")
    })
    e.target.classList.add("active-link")
}


let itemlist = []

console.log(itemlist);

function insertcart() {
    let parent = this.parentElement.parentElement


    let costum = parent.querySelector(".costum").innerText
    let cost = parent.querySelector(".cost p").innerHTML
    let img = parent.querySelector(".costum-img").src

    let productlist = { costum, cost, img }
    console.log(itemlist);
    if (itemlist.find((find) => find.img == productlist.img)) {
        alert("this product already added")
        return;
    } else {
        itemlist.push(productlist)
    }




    let newelement = createcart(costum, cost, img)
    let cartitem = document.createElement("div")
    cartitem.classList.add("carting")
    cartitem.classList.add("style")



    cartitem.innerHTML = newelement

    let cartcontent = document.querySelector(".cart-content")

    cartcontent.append(cartitem)


    loadContent()
    // count()

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

        let cartqty = product.querySelector(".cart-quantity input").value
        total += (price * cartqty)

        let p = product.querySelector(".cart-amount p").innerText = "$" + (price * cartqty)


    })
    document.querySelector(".total").innerHTML = "Total:$" + total

    let cartcount = document.querySelector(".fa-solid span")
    console.log(cartcount);
    let count = itemlist.length
    console.log(count);
    cartcount.innerHTML = count

    let cartempty = document.querySelector(".cart-empty")
    let placedetail = document.querySelector(".place-detail")

    if (count == 0) {
        cartempty.style.display = "block"
        placedetail.style.display = "none"
        cartcount.style.opacity = "0"

    }
    else {
        cartempty.style.display = "none"
        placedetail.style.display = "block"
        cartcount.style.opacity = "1"

    }
}

// 






// search 

let searchbox = document.querySelector("#search-box")

searchbox.addEventListener("keyup", (e) => {
    let inputvalue = e.target.value.toLowerCase().trim()
    console.log(inputvalue);


    let card = document.querySelectorAll(".card")
    card.forEach((item) => {
        let data = item.dataset.item

        if (data.includes(inputvalue)) {
            item.style.display = "block"
        } else {
            item.style.display = "none"

        }



    })
})

// active btn

let cardbtn = document.querySelectorAll(".card-btns button")

cardbtn.forEach((item) => {
    item.addEventListener("click", (e) => {

        active(e)

        let filter = e.target.dataset.filter
        let card = document.querySelectorAll(".card")
        card.forEach((item) => {
            let data = item.dataset.item

            if (filter == "all") {
                item.style.display = "block"
            }
            else if (filter === data) {
                item.style.display = "block"
            }
            else {
                item.style.display = "none"

            }
        })
    })
})

function active(e) {
    cardbtn.forEach((item) => {
        item.classList.remove("active")
    })
    e.target.classList.add("active")

}

