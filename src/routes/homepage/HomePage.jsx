import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function HomePage() {
  return (
    <div className='homePage'>
      <div className='textContainer'>
        <div className="wrapper">
            <h1 className='title'>
            Find Real Estate & Get Your Dream Place
            </h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate officia cum facere expedita rem beatae harum enim, reiciendis eveniet. Asperiores iusto dolorem facere, laboriosam ea saepe doloribus quidem quam voluptatibus.
            </p>
            <SearchBar />
            <div className="boxes">
                <div className="box">
                    <h2>16+</h2>
                    <h3>Years of Experience</h3>
                </div>
                <div className="box">
                    <h2>200</h2>
                    <h3>Award Gained</h3>
                </div>
                <div className="box">
                    <h2>1200+</h2>
                    <h3>Property Ready</h3>
                </div>
            </div>
        </div>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  )
}

export default HomePage