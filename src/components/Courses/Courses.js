import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import SingleCard from '../singleCard/SingleCard';

const Courses = () => {
    const allCourse = useLoaderData();
    return (
        <div className='mt-6'>
            <div className='md:hidden'>
                <SideNav></SideNav>
            </div >
            <div className='flex'>
                <div className='w-3/12 hidden md:block'>
                    <SideNav></SideNav>
                </div >
                <div className='w-9/12 grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:ml-16'>
                    {
                        allCourse.map(course => <SingleCard
                            key={course._id}
                            course={course}
                        ></SingleCard>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Courses;