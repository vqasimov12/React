import React from 'react'

const ProductCard = (product) => {
  return (
    <div>
    <img src={product.galery[0]} className='size-[250px] object-scale-down' alt="" />
    <h3 className='text-lg mt-5'>{product.title}</h3>
    <p className='text-red-500'>
      {product.currency}
      {product.price}
    </p>
  </div>
  )
}

export default ProductCard