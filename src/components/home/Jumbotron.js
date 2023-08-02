import { useState, useEffect } from 'react'

import { getCarouselImages } from '../../utils/graphql'

const Jumbotron = () => {
  const [imgIdx, setImgIdx] = useState(0)
  const imageSrc = [
    "https://yourknowledge.online/wp-content/uploads/2023/08/封面大圖.jpg",
    "https://yourknowledge.online/wp-content/uploads/2023/01/carousel_1.png",
    "https://yourknowledge.online/wp-content/uploads/2023/01/carousel_2.png",
  ]
  const nextImg = () => setImgIdx(imageSrc.length !== 0 ? (imgIdx + 1) % imageSrc.length : 0)
  useEffect(() => {
    const timer = setInterval(nextImg, 5000)
    return () => clearInterval(timer)
  })

  return (
    <div className="relative">
      {imageSrc.length !== 0 && <div className='flex gap-2 absolute bottom-8 w-full justify-center z-10'>
        {imageSrc.map((_, idx) =>
          idx === imgIdx ? <circle /> : <circle-outline onClick={() => setImgIdx(idx)} />
        )}
      </div>}
      <img
        src={imageSrc.length !== 0 && imageSrc[imgIdx]}
        className="lg:h-full w-full object-contain object-center"
      />
    </div>
  )
}

export default Jumbotron