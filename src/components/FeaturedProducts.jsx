import React from 'react'
import {featuredProducts} from '../data.js'
import './FeaturedProducts.css'

export const FeaturedProducts = () => {
  return (
    <div className='feature-pruducts-container'>
        {featuredProducts.map((product)=>(
            <div key={product.id} className="featured-product">
            <h2>{product.title}</h2>
            <img src={product.thumbnail} alt={product.title} />
          </div>
       )) }
    </div>
  )
}

