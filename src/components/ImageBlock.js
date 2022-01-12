import React from 'react'
import { useState } from 'react';
import './ImageBlock.css'
const ImageBlock = (props) => {
    const [isbigImage, setBigImage] = useState(false);

    function toggleSize(e) {
        setBigImage(!isbigImage);
    }
    return (
            <img
                className={isbigImage ? 'bigImage' : null}
                onClick={(e)=>toggleSize(e)}
                src={props.url} alt="" />
    )
}

export default ImageBlock
