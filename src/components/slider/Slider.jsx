import { useState } from 'react'
import './slider.scss'

function Slider({ images }) {
  const [imgIndex, setImgIndex] = useState(null)

  const changeSlide = (direction) => {
    if (direction === 'left') {
      if (imgIndex === 0) {
        setImgIndex(images.length - 1)
      } else {
        setImgIndex(imgIndex - 1)
      }
    } else {
        if (imgIndex === images.length - 1) {
            setImgIndex(0)
        } else {
            setImgIndex(imgIndex + 1)
        }
    }
  }

  return (
    <div className='slider'>
      {/* fullSlider */}
      {imgIndex !== null && (
        <div className='fullSlider'>
          <div className='arrow'>
            <img src='/arrow.png' alt='' onClick={() => changeSlide('left')} />
          </div>
          <div className='imgContainer'>
            <img src={images[imgIndex]} alt='' />
          </div>
          <div className='arrow'>
            <img
              src='/arrow.png'
              alt=''
              className='right'
              onClick={() => changeSlide('right')}
            />
          </div>
          <div className='close' onClick={() => setImgIndex(null)}>
            X
          </div>
        </div>
      )}

      {/* slider */}
      <div className='bigImage'>
        <img src={images[0]} alt='' onClick={() => setImgIndex(0)} />
      </div>
      <div className='smallImage'>
        {images.slice(1).map((img, i) => (
          <img src={img} alt='' key={i} onClick={() => setImgIndex(i + 1)} />
        ))}
      </div>
    </div>
  )
}

export default Slider
