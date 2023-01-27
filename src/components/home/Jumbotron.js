import { useState, useEffect } from 'react'

import { getCarouselImages } from '../../utils/graphql'

const Jumbotron = () => {
  const [imgIdx, setImgIdx] = useState(0)
  const [imageSrc, setImageSrc] = useState([])
  const nextImg = () => setImgIdx(imageSrc.length !== 0 ? (imgIdx + 1) % imageSrc.length : 0)
  useEffect(() => {
    const timer = setInterval(nextImg, 5000)
    return () => clearInterval(timer)
  })
  useEffect(() => {
    getCarouselImages(setImageSrc)
  }, [])

  return (
    <div className="relative">
      {imageSrc.length !== 0 && <div className='flex gap-2 absolute bottom-8 w-full justify-center z-10'>
        {imageSrc.map((_, idx) =>
          idx === imgIdx ? <circle /> : <circle-outline onClick={() => setImgIdx(idx)} />
        )}
      </div>}
      <img
        src={imageSrc.length !== 0 && imageSrc[imgIdx]}
        className="lg:h-full w-full opacity-50 object-contain object-center"
      />
    </div>
  )
}

export default Jumbotron