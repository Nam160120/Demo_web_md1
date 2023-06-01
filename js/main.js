
//For Signup and Log in
let username = window.localStorage.getItem("USERNAME_KEY")
if (username != null) {
    document.getElementById("signUp").style.display = 'none';
    document.getElementById("logIn").innerHTML = username;
    document.getElementById("logOut").style.display = "block";
    // For Modal Shopping Cart
    
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("cartButton");
    let close = document.getElementsByClassName("close")[0];
    let close_footer = document.getElementsByClassName("close-footer")[0];
    let order = document.getElementsByClassName("order")[0];
    btn.onclick = function () {
        modal.style.display = "block";
    }
    close.onclick = function () {
        modal.style.display = "none";
    }
    close_footer.onclick = function () {
        modal.style.display = "none";
    }
    order.onclick = function () {
        alert("Cảm ơn bạn đã thanh toán đơn hàng")
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    // xóa cart
    let remove_cart = document.getElementsByClassName("btn-danger");
    for (let i = 0; i < remove_cart.length; i++) {
        let button = remove_cart[i]
        button.addEventListener("click", function () {
            let button_remove = event.target
            button_remove.parentElement.parentElement.remove()
            updatecart();
        }
        )
    }

    // update cart
    function updatecart() {
        let cart_item = document.getElementsByClassName("cart-items")[0];
        let cart_rows = cart_item.getElementsByClassName("cart-row");
        let total = 0;
        for (let i = 0; i < cart_rows.length; i++) {
            let cart_row = cart_rows[i]
            let price_item = cart_row.getElementsByClassName("cart-price")[0]
            let quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
            let price = parseFloat(price_item.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
            let quantity = quantity_item.value // lấy giá trị trong thẻ input
            total = total + (price * quantity)
        }
        document.getElementsByClassName("cart-total-price")[0].innerText = total + ',000,000 VNĐ'
        // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].
    }

    // Thay đổi số lượng sản phẩm
    let quantity_input = document.getElementsByClassName("cart-quantity-input");
    for (let i = 0; i < quantity_input.length; i++) {
        let input = quantity_input[i];
        input.addEventListener("change", function (event) {
            let input = event.target
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1;
            }
            updatecart()
        })
    }

    // Thêm vào giỏ
    let add_cart = document.getElementsByClassName("white-text");
    for (let i = 0; i < add_cart.length; i++) {
        let add = add_cart[i];
        add.addEventListener("click", function (event) {
            let button = event.target;
            let product = button.parentElement.parentElement;
            let img = product.getElementsByClassName("img-prd")[0].src
            let title = product.getElementsByClassName("content-product-h3")[0].innerText
            let price = product.getElementsByClassName("price")[0].innerText
            addItemToCart(title, price, img)
            // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
            modal.style.display = "block";
            let listProduct = {
                img,title,price,
            }
            localStorage.setItem("listProduct",JSON.stringify(listProduct))
            console.log(111);
            updatecart()
        })
    }

    function addItemToCart(title, price, img) {
        // Tạo ra một thẻ div tên là cartRow
        let cartRow = document.createElement('div')
        // Thêm class cart-row vào cho thẻ div đã tạo bên trên
        cartRow.classList.add('cart-row')
        let cartItems = document.getElementsByClassName('cart-items')[0]
        let cart_title = cartItems.getElementsByClassName('cart-item-title')
        // Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông cho user.
        for (let i = 0; i < cart_title.length; i++) {
            if (cart_title[i].innerText == title) {
                alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
                return
            }
        }

        let cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa sản phẩm</button>
  </div> `

        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
            let button_remove = event.target
            button_remove.parentElement.parentElement.remove()
            updatecart()
        })
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
            let input = event.target
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1;
            }
            updatecart()
        })
    }
}


// For Log Out
function logOut() {
    window.localStorage.clear();
    window.location.reload();
}


if (username == null) {
    document.getElementById("cartButton").onclick = function () {
        alert('Bạn cần đăng nhập để thực hiện tác vụ này');
    }

    let add_cart = document.getElementsByClassName("white-text");
    for (let i = 0; i < add_cart.length; i++) {
        add_cart[i].onclick = function () {
            alert('Bạn cần đăng nhập để thực hiện tác vụ này');
        }
    }
}   
let Button1 = document.getElementById("buttonColector1");
let colector1 = document.querySelector(".colector1");
Button1.addEventListener("click", () => {
  colector1.style.display = "block";
  colector1.scrollIntoView({ behavior: "smooth" });
});

let Button2 = document.getElementById("buttonColector2");
let colector2 = document.querySelector(".colector2");
Button2.addEventListener("click", () => {
  colector2.style.display = "block";
  colector2.scrollIntoView({ behavior: "smooth" });
});
const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
})
let listProduct = JSON.parse(localStorage.getItem("listProduct"));
console.log(listProduct);
function renderListProduct() {
    console.log(111)
    let productAdd = document.getElementById("bodyProduct")
    for (i = 0; i < listProduct.length; i++) {
        let gia = VND.format(listProduct[i].price)
        let result1 =
            `<div id="product" class="product">
                <div class="col-md-3">
                <div class="card" style="width: 293px;">
                    <img src="${listProduct[i].img}" class="img-prd" alt="${listProduct[i].name}">
                    <button id="add-to-cart" class="white-text">Thêm vào giỏ hàng</button>
                    <div class="card-body">
                        <p class="content-product-h3">${listProduct[i].name}</p>
                        <p class="card-text"><small class="text-muted"></small></p>
                        <p class="price">${gia}</p>
                    </div>
                </div>
            </div>
            `
        productAdd.innerHTML += result1
    }
}
renderListProduct();