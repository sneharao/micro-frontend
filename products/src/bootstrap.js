import faker from 'faker';

// mount function to render products, to ensure that, the container doesn't always search for dev-products,
// while it should mount the products in the div it wants to
export const mount = (el) => {
    let products = '';
    for(let i = 0; i < 5; i++) {
      products += `<div>${faker.commerce.productName()}</div>`;
    }
    
    console.log(products);
    el.innerHTML = products;
}

if(process.env.NODE_ENV === 'development') {
    //considering the container will not have a div with id dev-products
    const el = document.querySelector('#dev-products');
    if(el) {
        mount(el);
    }
}
