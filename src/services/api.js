import MockProducts from './../mocks/products.json'

export const getProducts = () => new Promise((res, rej) =>{
    res([...MockProducts.products])
})