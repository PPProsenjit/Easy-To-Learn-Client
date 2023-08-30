import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import SideNav from '../SideNav/SideNav';

const Category = () => {
    const categoryCourse = useLoaderData();
    return (
        <div className='mt-5'>
            <div className='md:hidden'>
                <SideNav></SideNav>
            </div>
            <div className='flex'>
                <div className='w-3/12 hidden md:block'>
                    <SideNav></SideNav>
                </div >
                <div className='w-9/12 grid gap-3 lg:grid-cols-3 md:grid-cols-2'>
                    {
                        categoryCourse.map(course => <CourseCard
                            key={course._id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;