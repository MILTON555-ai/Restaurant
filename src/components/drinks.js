import React, { useEffect, useState } from 'react'
import '../css/drinks.css'


const Drinks = () => {
    let [drinks, setDrinks] = useState([]);
    let handleDelete = (id) => {
        setDrinks(drinks.filter(x => x.id !== id))
    }

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch(" http://localhost:1000/drinks")
            let resData = await response.json();
            setDrinks(resData)
        }
        fetchData()
    }, [])
    return (
        <div>
            <div className='restaurant'>

                <div class="grid-container">


                    {
                        drinks.map((x) => {
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

export default Drinks;

