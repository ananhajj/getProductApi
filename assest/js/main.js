
const getProductApi = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    return data.products;
}


const displayProduct = async () => {
    const products = await getProductApi();
    const result = products.map(
      (ele) =>
        `
    <div class="Product">
    <img src="${ele.thumbnail}">
    <h3>${ele.title}</h3>
    <p>${ele.description}</p>
    <span>$${ele.price}</span>
     <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
    
                    </div>
                    <div class="details">
                      <a href='details.html?id=${ele.id}'>Details</a>
                      </div>
                      <button class="btn">
                        Add To Cart
                    </button>
                    </div>

    `
    );
    document.querySelector(".se3-products .continer .Products").innerHTML = result;



}
displayProduct();
