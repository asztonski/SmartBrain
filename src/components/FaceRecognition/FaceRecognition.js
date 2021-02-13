import React from 'react'
import './FaceRecognition.css';


const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div className="center ma photoBox">
            <div className="mt2 absolute">
            <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' />
            <div className='boundingBox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;