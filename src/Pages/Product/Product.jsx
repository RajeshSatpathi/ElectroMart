import React, { useState } from 'react'
import HomeProduct from '../../Component/Home/HomeProduct'
import Categories from '../../Component/Home/Categories'

function Product() {
   const [categoryName,setcategoryName] = useState("")
  //  console.log(categoryName)
  return (
    <div>
      <Categories setcategoryName={setcategoryName} />
      <HomeProduct categoryName={categoryName}/>
    </div>
  )
}

export default Product