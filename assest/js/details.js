const getDetailsProductApi=async ()=>{
    const params=new URLSearchParams(window.location.search);
    const id=params.get('id');
    const {data} = await axios.get(`https://dummyjson.com/products/${id}`);
    return data;
}
const displayProduct=async()=>{
    const data=await getDetailsProductApi();
    const result = `
     <div class="Product">
    <img src="${data.thumbnail}">
      <div class="products-color">

    </div>
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    <span>$${data.price}</span>
     <div class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
              
                    </div>

        `;
  document.querySelector(".se3-products .continer .Products").innerHTML = result;
  const imges=data.images.map((img)=>{
    return `<img src='${img}'>`;
  }).join(' ');
document.querySelector(
  ".se3-products .continer .Products .Product .products-color"
).innerHTML=imges;
const review = data.reviews.map((rev)=>{
  return `
   <div class="testimonial">
    <div class="info-testimonial">
                        <div class="name-info">
                            <h3>${rev.reviewerName}</h3>
                            <span>${rev.reviewerEmail}</span>
                            <span>${rev.rating}</span>
                             
                        </div>
                    </div>
                    <p>${rev.comment}</p>
                    <span>${rev.date}</span>
                    </div>
  `;
}).join('');
document.querySelector(" .testimonials .continer .row ").innerHTML = review;
}
displayProduct();