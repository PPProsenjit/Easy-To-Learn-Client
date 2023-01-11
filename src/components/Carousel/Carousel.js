import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
    return (
        <div className="carousel slid relative w-full mt-8 ">  
        <div id="slide" className="carousel-item active w-full float-left ">
                <div className="card lg:card-side shadow-xl ">
                    <div className="card-body bg-sky-100 w-5/6 text-center">
                        <h2 className="font-bold text-5xl mb-6 text-gray-700" >Learn Web development and get a job</h2>
                        <p className='text-gray-700'>Let's Go and start your favorite courser and catch your We are always with you.Our All courses are design only for you and it Give you more fan in joyful learning.</p>
                        <div className="card-actions mt-6">
                            <Link to='/courses'  className="btn btn-primary">Explore More</Link>
                        </div>
                    </div>
                    <figure><img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=8https://cdn.pixabay.com/photo/2018/03/08/05/07/training-3207841_960_720.jpg" className='w-full ' alt="" /></figure>
                </div>
          </div>

        </div>
    );
};

export default Carousel;