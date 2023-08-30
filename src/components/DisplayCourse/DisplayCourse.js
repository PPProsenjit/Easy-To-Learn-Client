import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../singleCard/SingleCard';

const DisplayCourse = () => {
    const courses = useLoaderData();
     return (
        <div className='m-5'>
            <div className=' grid gap-3 lg:grid-cols-3 md:grid-cols-2'>
                {
                    courses.map(course => <SingleCard
                        key={course._id}
                        course={course}
                    ></SingleCard>).slice(0,3)
                }
            </div>
        </div>
    );
};

export default DisplayCourse;