import { useState, useEffect } from 'react'

const Jumbotron = () => {
  const [imgIdx, setImgIdx] = useState(0)
  const imageSrc = [
    'https://picsum.photos/1920/1080',
    'https://picsum.photos/1920/1080',
    'https://picsum.photos/1920/1080',
  ]
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
        className="h-full w-full opacity-50"
      />
    </div>
  )
}

export default Jumbotron