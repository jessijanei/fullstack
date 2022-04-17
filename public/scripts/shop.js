// var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// var alertTrigger = document.getElementById('liveAlertBtn')

// function alert(message, type) {
//   var wrapper = document.createElement('div')
//   wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

//   alertPlaceholder.append(wrapper)
// }

// if (alertTrigger) {
//   alertTrigger.addEventListener('click', function () {
//     alert('Item has been added to cart', 'success')
//   })
// }


//select elements
const productsE1 = document.querySelector(".products");



//render products

function renderProducts() {

  product.forEach((product) => {
    product.innerHTML += `<div class="item">
    <div class="card h-100">
    <img src="/images/green_spa.jpeg" class="card-img-top" alt="..."></img>
    <div class="card-body">
        <div class="desc">
        <h5 class="card-title">${product.name}</h5>
          <h2><small>$</small>${product.price}</h2>
          <p class="card-text">
          ${product.description}</p>
        </div>
        <div class="add-to-wishlist">
          <img src="..." alt="add to wish list">
        </div>
        <div class="add-to-cart">
        <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>`
  })
}

renderProducts();