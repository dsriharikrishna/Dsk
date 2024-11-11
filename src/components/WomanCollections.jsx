import React from 'react'

const WomanCollections = ({ ladiesFashion }) => {
    const { title, image1, image2, image3, image4, image5 } = ladiesFashion;

    return (
        <div className='collectionSection'>
            <h2>{title}</h2>
            <div className="menImages">
                <img src={image1} alt="Collection Image 1" />
                <img src={image2} alt="Collection Image 2" />
                <img src={image3} alt="Collection Image 3" />
                <img src={image4} alt="Collection Image 4" />
                <img src={image5} alt="Collection Image 5" />
            </div>
        </div>
    )
}

export default WomanCollections;
