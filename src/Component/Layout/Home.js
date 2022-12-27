import React,{useContext} from 'react'
import { ProductContext } from '../../Hook/Context/Productcontext'
import Singleproduct from '../Product/Singleproduct'
import Filter from '../Product/Filter'
import './Homestyle.css'

export default function Home() {
  const {randomData}  = useContext(ProductContext)
  //console.log(randomData)
  return (
    <div className='home'>
      <Filter/>
      <section className='product-container'>
        {randomData.map(prod=>{
         return <Singleproduct key={prod.userId} id={prod.key} item={prod.name} image={prod.show} price={prod.price} delivery={prod.fastDelivery}/>
        })}
      </section>
    </div>
  )
}
