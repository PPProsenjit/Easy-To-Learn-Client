import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://easy-to-learn-server.vercel.app/course-category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div >
            <h3 className='text-3xl text-amber-50'>All Catagories</h3>
            <div>
                {
                    categories.map(category =>
                        <p key={category.id}>
                            <Link to={`/category/${category.id}`} className='btn btn-group bg-blue-400 text-white mb-2 w-10/12 '>{category.name}</Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default SideNav;