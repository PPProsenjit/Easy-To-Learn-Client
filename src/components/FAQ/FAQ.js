import React from 'react';

const FAQ = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Most asking Question....</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg" open="">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Are Easy To Learn courses Online or Offline?
                        </summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Dev Skill is a 100% e-Learning platform and we only provide online courses. We do not provide offline / onsite courses and we do not have any plan in near future to provide such course.. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Do you provide video recording of live classes?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes, we provide recording with some conditions. A student needs to regularly attend classes and exams. In case of any emergency problem, student needs to inform course instructor immediately and give proper explanation for his/her absence. If someone is absent without contacting course teacher, then video will not be provided. Also students needs to follow terms & conditions of using the video recording for personal use only. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Do you provide certificates after completing a course?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Previously we have provided printed certificates to passing students only. But going forward, we will provide digital certificate to passing students. We do not provide certificate for only attending course. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Do you provide job placement upon passing course?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes, we provide help in job placement in selected courses. But it is not guaranteed. If any company contact with us for recruiting our students, we refer our passing students. In future we have plan to extend this more. </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;