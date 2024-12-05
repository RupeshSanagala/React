import React from 'react'
import buddha from '../assets/images/Buddha.jfif';
import charminar from '../assets/images/Charminar.jfif';
import commonData from '../shared/constant/ConstantData';
const MyImagesComp=() => {
  return (
    <div>
        <h2>This is MyImagesComp</h2>
        <img src={buddha} alt='buddha' height="200px" width="200px"/>
        <img src={charminar} alt='charminar' height="200px" width="200px"/>
        <hr />
        <img src={commonData.Tirupati} alt='Tirupati' height="200px" width="200px"/>
        <img src={commonData.iphone} alt='Tirupati' height="200px" width="200px"/>
        <img src={commonData.pixel} alt='Tirupati' height="200px" width="200px"/>
        <img src={commonData.redmi} alt='Tirupati' height="200px" width="200px"/>
        <img src={commonData.samsung} alt='Tirupati' height="200px" width="200px"/>
        <img src={commonData.GOAP} alt='Tirupati' height="200px" width="200px"/>
    </div>
  )
}

export default MyImagesComp