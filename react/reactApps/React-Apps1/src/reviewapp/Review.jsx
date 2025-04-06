import { useState } from 'react'
import './Review.css'
import reviews from './Date'
const Review = () => {
    let nextBtn = '>'
    let PreBtn = '<'
    let img = 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg'

    let[review, setReviews] = useState(reviews)
    let[index, setIndex] = useState(0)
    const {id, name, job, image, text} = review[index]
    const handleNext = () => {
        index >= review.length-1 ? (setIndex(0)) : (setIndex(index+1))
    }
    const handleprv = () => {
        index <= 0 ? (index = review.length-1) && setIndex(index) : (setIndex(index-1))
    }
    return(
        <>
            <div className='container'>
                {/* <button className="next-btn">{simple}</button> */}
                <div>
                    <h1>Reviews</h1>
                    <div className='underline'></div>
                </div>
                <div className='boxContainer'>
                    <div className="profile">
                        <img className='person-img' src={image} alt={name} width='150px'/>
                    </div>
                    <div className="name">
                        <p className='n'>{name}</p>
                        <p style={{textAlign: 'center', color:'dodgerblue', fontSize: '15px'}}>{job.toUpperCase()}</p>
                    </div>
                    <div className="info">
                        <p style={{fontSize: '15px', color: 'gray'}}>{text}</p>
                    </div>
                    <div className="buttons">
                        <button className='next-btn' onClick={handleprv}>{PreBtn}</button>
                        <button className='next-btn' onClick={handleNext}>{nextBtn}</button>
                    </div>
                    <div className="surpriseBtn">
                        <button>Surprise Me</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review;