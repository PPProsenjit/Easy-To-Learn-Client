import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import SingleCard from '../singleCard/SingleCard';

const Courses = () => {
    const allCourse = useLoaderData();
    return ( 
        <div className='mt-6'>
            <h2 className=' text-4xl text-white'>All Course:{allCourse.length}</h2>
        <div className='flex'>
            <div className= 'w-3/12 hidden lg:block'>
                <SideNav></SideNav>
            </div >
            <div className='w-9/12 grid gap-3 lg:grid-cols-2 md:grid-cols-1'>
            {
                allCourse.map(course => <SingleCard
                    key={course._id}
                    course= {course}
                ></SingleCard>)
            }
            
            </div>
        </div>
        </div>
    );
};

export default Courses;