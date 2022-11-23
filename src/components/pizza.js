import React, { useEffect, useState } from 'react'
import '../css/pizza.css'



const Pizza = () => {
    let [pizza, setPizza] = useState([]);
    let handleDelete = (id) => {
        setPizza(pizza.filter(x => x.id !== id))
    }

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch("http://localhost:1000/pizza")
            let resData = await response.json();
            setPizza(resData)
        }
        fetchData()
    }, [])
    return (
        <div>
            <div className='restaurant'>

                <div class="grid-container">


                    {
                        pizza.map((x) => {
                            return <div className='grid-item'>
                                <img src={x.img} alt="" height={100} width={200} style={{ 'borderRadius': '10px' }} />
                                <p>{x.item}</p>

                                <p>{x.serves}</p>
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

export default Pizza;

