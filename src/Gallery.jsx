import React from 'react'

const Gallery = (props) => {    
  return (
    <div className='d-flex flex-wrap justify-content-between p-5 gallery'>
            {
                props.data.map((image,index)=>{
                    return (
                        <div key={image.id} className='m-2'>
                            <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}height='200' width='300' alt="" />
                        </div>
                    )
                })
            }
    </div>
  )
}

export default Gallery