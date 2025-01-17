import Hero from '@/components/hero'
import Promo from '@/components/promo'
import Services from '@/components/services'
import Image from 'next/image'
import Category from '@/components/catogories'
import NewArrivals from '@/components/newArrivals'
import BestSell from '@/components/bestSell'

export default function Home() {
  return (
    <div className=''>

      <Hero />
      <Category />
      <NewArrivals />
      <BestSell/>
      <Promo />
      <Services />

    </div>
  )
}
