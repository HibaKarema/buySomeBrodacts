
var allProducts = document.querySelectorAll(".products .div0")

var div4 = document.querySelector(".div4")

var div1 = document.querySelector("#div1")

var btn1 = document.querySelector("#btn1")

var div2 = document.querySelector("#div2")

var totalprice=0


 allProducts.forEach(function (item){

      item.onclick = function () {

        totalprice += +(item.getAttribute("price"))
        
        div1.innerHTML += item.textContent + " <br>"

        if (div1.innerHTML != "" ){
            div4.style.display = "block"

          }

      }
 })


 btn1.onclick = function () {
    div2.innerHTML=(totalprice)+"$"
 }

 btn2.onclick = function () {
    window.alert("Your order has been confirmed")
 }

  
  
  





