import { useState, useEffect } from 'react'

import carousel1 from '../../assets/carousel/carousel_1.png'
import carousel2 from '../../assets/carousel/carousel_2.png'
import carousel3 from '../../assets/carousel/carousel_3.png'

const Jumbotron = () => {
  const [imgIdx, setImgIdx] = useState(0)
  const imageSrc = [carousel1, carousel2, carousel3]
  const nextImg = () => setImgIdx((imgIdx + 1) % imageSrc.length)
  useEffect(() => {
    const timer = setInterval(nextImg, 5000)
    return () => clearInterval(timer)
  })

  return (
    <div className="h-screen relative">
      <div className='flex gap-2 absolute bottom-8 w-full justify-center z-10'>
        {imageSrc.map((_, idx) =>
          idx === imgIdx ? <circle /> : <circle-outline onClick={() => setImgIdx(idx)} />
        )}
      </div>
      <img
        src={imageSrc[imgIdx]}
        className="h-full w-full opacity-50 object-cover object-center"
      />
    </div>
  )
}

export default Jumbotron