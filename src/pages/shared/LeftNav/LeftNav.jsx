import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BellowPart from './BellowPart/BellowPart';

const LeftNav = () => {
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://the-news-dragon-server-rabiulislam13579.vercel.app/categories')
        .then(res=>res.json()
        .then(data=>setCategories(data)))
    },[])
    return (
        <div>
            <h3>All Category </h3>
            <div className='ms-5' >
                {
                    categories.map(category=> <h5
                    key={category.id} className='mt-4'>
                    <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>

                    </h5>)
                }
                
            </div>
            <BellowPart></BellowPart>
        </div>
    );
};

export default LeftNav;
