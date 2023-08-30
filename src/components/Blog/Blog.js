import React from 'react';

const Blog = () => {
    return (
        <div  className='m-10'>
            <div className="border m-3 dark:bg-gray-900 dark:text-gray-100 mb-3 ">
                <article>
                    <h2 className="text-3xl font-bold underline">what is cors?</h2>
                    <p className="mt-4 dark:text-gray-400">Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.CORS stands for Cross-Origin Resource Sharing.

                        Normally, requesting resources across domains is a security risk. If a random site could pull data into JavaScript from another, the random site could "steal" information that way. If the target site were, say, your bank's website, perhaps just visiting such a site could get sensitive information leaked.

                        For this reason, modern browsers will ask the target site for CORS HTTP headers that list the requesting site as allowed to request resources cross-origin from it. If the target site doesn't return such headers, then the request is denied at the browser level. This lets "good" requests through that the target site allows, but leaves "bad" requests that aren't whitelisted, blocked.

                        If sites don't have any sensitive data, they can return a wildcard origin "*" to indicate that any origin may request data. For example, a public API for a service with no login system might be perfectly OK for anyone to pull from, anywhere, and so wildcard CORS headers would be appropriate for it.</p>

                </article>

            </div>
            <div className="border m-3 dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-3xl font-bold underline">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p className="mt-4 dark:text-gray-400">Firebase is Google’s mobile application development platform. It has a lot of different products that cover much of what’s needed to build a mobile app. It would take a lot of time to describe the complete set of situations where Firebase can be helpful, so I suggest you start reading the web site to discover what all it can do.The bottom line is that there are a lot of things that you probably don’t want to manage yourself, such as building and maintaining a scalable database and file store, (serverless) backend code, notifications, analytics, and more. Don’t build all this yourself, just use Firebase.</p>
                    <p className="mt-1 dark:text-gray-400">Other i use to implement authentication.MongoDB stores data in JSON-like documents that can vary in structure, offering a dynamic, flexible schema. MongoDB was also designed for high availability and scalability, with built-in replication and auto-sharding.
                        MongoDB is a tool in the Databases category of a tech stack.
                        MongoDB is an open source tool with 22.7K GitHub stars and 5.4K GitHub forks. Here’s a link to MongoDB's open source repository on Github.
                    </p>

                </article>

            </div>
            <div className=" border m-3 dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-3xl font-bold underline">How does the private route work?</h2>
                    <p className=" dark:text-gray-400">PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.</p>

                </article>

            </div>
            <div className="border m-3 dark:bg-gray-900 dark:text-gray-100">
                <article>
                    <h2 className="text-3xl font-bold underline">What is Node? How does Node work?</h2>
                    <p className="mt-4 dark:text-gray-400">Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    <img  src="https://media.geeksforgeeks.org/wp-content/uploads/20210916203407/WorkingofNodejs1.png" alt=""/>
                </article>

            </div>
        </div>
    );
};

export default Blog;