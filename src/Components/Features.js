import img_1 from './images/card-area3-img1.png';
import img_2 from './images/card-area3-img2.png';
import img_3 from './images/card-area3-img3.png';
import './Features.css';
import Footer from './Footer';
export default function Features(){
    return(
      <div className='part-two'>
        <div className="card-area-three">
      <div className="container card-area-three-container">
        <div className="card-area-three-header">
          <h2>Check what your house can do for you</h2>
        </div>
        <div className="card-area-three-cards">
          <img src={img_1} alt=""/>
          <img src={img_2} alt=""/>
          <img src={img_3} alt=""/>
        </div>
      </div>
    </div>
 
</div>
    )
}