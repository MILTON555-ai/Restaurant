import React, { useEffect, useState } from 'react'
import '../css/sides.css'



const Sides = () => {
    let [sides, setSides] = useState([]);
    let handleDelete = (id) => {
        setSides(sides.filter(x => x.id !== id))
    }

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("  http://localhost:1000/sides")
            let resData = await response.json();
            setSides(resData)
        }
        fetchData()
    }, [])
    return (
        <div>
            <div className='restaurant'>

                <div class="grid-container">


                    {
                        sides.map((x) => {
                            return <div className='grid-item'>
                                <img src={x.img} alt="" height={100} width={200} style={{ 'borderRadius': '10px' }} />
                                <p>{x.item}</p>
                                <p>{x.mrp}</p>
                                <button className='btn-delete-res' onClick={() => { handleDelete(x.id) }}>Delete</button>
                            </div>
                        })
                    }
                </div>


            </div>
        </div>
    )
}

export default Sides;

