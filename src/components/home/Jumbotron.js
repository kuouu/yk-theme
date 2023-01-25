import { useState, useEffect } from 'react'

const Jumbotron = () => {
  const [imgIdx, setImgIdx] = useState(0)
  const imageSrc = [
    'https://yourknowledge.online/wp-content/uploads/2023/01/carousel_1.png',
    'https://yourknowledge.online/wp-content/uploads/2023/01/carousel_2.png',
    'https://yourknowledge.online/wp-content/uploads/2023/01/carousel_3.png'
  ]
  const nextImg = () => setImgIdx((imgIdx + 1) % imageSrc.length)
  useEffect(() => {
    const timer = setInterval(nextImg, 5000)
    return () => clearInterval(timer)
  })

  return (
    <div className="lg:h-screen relative">
      <div className='flex gap-2 absolute bottom-8 w-full justify-center z-10'>
        {imageSrc.map((_, idx) =>
          idx === imgIdx ? <circle /> : <circle-outline onClick={() => setImgIdx(idx)} />
        )}
      </div>
      <img
        src={imageSrc[imgIdx]}
        className="lg:h-full w-full opacity-50 object-cover object-center"
      />
    </div>
  )
}

export default Jumbotron