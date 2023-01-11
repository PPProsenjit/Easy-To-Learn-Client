import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";


const ref = React.createRef();
const EnrollPage = () => {
    const data = useLoaderData()
    const handleCheckout = () =>{
        toast.success('Enroll Success', {autoClose:500})
    }
    console.log(data);
    const { title , picture, price} = data
    return (
        <section className="py-20 dark:bg-gray-800 W-1/2 mx-auto dark:text-gray-100">
            <div className="container px-4  mx-auto">
               
                <div className=" ">

                    <div className=" w-1/2 mx-auto mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                        <div ref={ref} className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-400 dark:text-gray-900">
                            <div >
                                <img className="p-5 h-75 rounded-t-lg" src={picture} alt="" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold">{title}</h4>
                                <span className="text-6xl font-bold">$ {price}
                                    
                                </span>
                            </div>
                            
                            
                            <button onClick={()=>handleCheckout()} rel="noopener noreferrer"  className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-800 dark:text-violet-400">Checkout</button>
                            <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) =>

                            <button onClick={toPdf} rel="noopener noreferrer"  className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-800 dark:text-violet-400">Download PDF</button>}
                            </Pdf>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};

export default EnrollPage;