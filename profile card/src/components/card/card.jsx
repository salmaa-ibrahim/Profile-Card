import './card.css'
import PersonalImage from '../../assets/images/image-victor.jpg'
function Card(){
    return(
        <div id="card">
            <div id="image">
                <img src= {PersonalImage} alt="" />
            </div>

            <div id="about">
                <label>Victor Crest <span> 26</span></label>
                <p>Londone</p>
            </div>

            <div id="line"></div>

            <div id="interactions">
                <div className='interactions'>
                    <p>80K</p>
                    <label>Followers</label>
                </div>

                <div className='interactions'>
                    <p>803K</p>
                    <label>Likes</label>
                </div>

                <div className='interactions'>
                    <p>1.4K</p>
                    <label>Photos</label>
                </div>
            </div>
        </div>
    )
}

export default Card