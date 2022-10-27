import React from 'react';

import { useState, Fragment } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";



const Blog = () => {


    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const customAnimation = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };


    return (

        <div className='w-1/2 mx-auto py-20 text-justify'>
            <Fragment >

                <Accordion open={open === 1} animate={customAnimation}>
                    <AccordionHeader onClick={() => handleOpen(1)} className='text-blue-900 '>
                        What is CORS?
                    </AccordionHeader>
                    <AccordionBody className='text-black font-medium text-base'>
                        A cors is a cross-origin resource sharing. It is a way to allow resources to be shared across domains that would not otherwise be able to share data.
                        <br />
                        <br />
                        CORS are used by browsers, servers and web services to communicate with each other. A browser will send the request for cross-domain access and the server will grant or deny it based on its own configuration.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 2} animate={customAnimation}>
                    <AccordionHeader onClick={() => handleOpen(2)} className='text-blue-900'>
                        Why Firebase is Used?
                    </AccordionHeader>
                    <AccordionBody className='text-black font-medium text-base'>
                        Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.
                        <br />
                        <br />
                        <strong className='font-extrabold'>Top functionalities are: </strong>{" "}
                        <br />
                        <strong className='font-extrabold'>Firebase Database: </strong>{" "}
                        used to store users data like chat messages, users details and other metadata
                        <br />
                        <strong className='font-extrabold'>Firebase Cloud Storage: </strong>{" "}
                        used to store user-generated content like the profile picture, multimedia messages, etc.
                        <br />
                        <strong className='font-extrabold'>Firebase Cloud Messaging: </strong>{" "}
                        used to send notification
                        <br />
                        <strong className='font-extrabold'>Firebase Remote Config: </strong>{" "}
                        used to perform A/B testing on the go.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 3} animate={customAnimation}>
                    <AccordionHeader onClick={() => handleOpen(3)} className='text-blue-900'>
                        How does the private route work?
                    </AccordionHeader>
                    <AccordionBody className='text-black font-medium text-base'>
                        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 4} animate={customAnimation}>
                    <AccordionHeader onClick={() => handleOpen(4)} className='text-blue-900'>
                        What is Node? How does Node work?
                    </AccordionHeader>
                    <AccordionBody className='text-black font-medium text-base'>
                        JavaScript is one of the most popular programming languages in the world. It powers millions of websites today, and it has attracted droves of developers and designers to build features for the web. If you’re new to programming, JavaScript is easily one of the best programming languages to get under your belt.
                        <br />
                        <br />
                        Node.js uses the “Single Threaded Event Loop” architecture to handle multiple clients at the same time. To understand how this is different from other runtimes, we need to understand how multi-threaded concurrent clients are handled in languages like Java.
                        <br />
                        <br />
                        In a multi-threaded request-response model, multiple clients send a request, and the server processes each one before sending the response back. However, multiple threads are used to process concurrent calls. These threads are defined in a thread pool, and each time a request comes in, an individual thread is assigned to handle it.
                    </AccordionBody>
                </Accordion>

            </Fragment>
        </div>

    );
};

export default Blog;
