import '../App.css';
import React from 'react';



import Avatar1 from "./111_files/ab-img.png";
import Avatar2 from "./111_files/ab-img2.png";
import AbIcon1 from "./111_files/ab-icon-image.png";
import AbIcon2 from "./111_files/ab-icon-image2.png";


export default function About() {


    return (
        <>
            <div className="w-full mx-auto h-full min-h-screen max-w-[1200px]">
                <div className='flex flex-col w-full h-full min-h-screen items-center justify-center px-5'>
                    <div className='gap-10 flex w-full -mt-48'>
                        <div className='w-1/2 text-start'>
                            <div className='w-full text-start flex ga-8 mb-10'>
                                <div className='text-xl text-white font-bold'>
                                    THE STORY
                                </div>
                                <img src="./111_files/title_shapes.svg" alt='' />
                            </div>
                        </div>
                        <div className='w-1/2 justify-end'>
                            <div className='flex ga-8 mb-10'>
                                <div className='text-xl text-white font-bold'>
                                    MEET THE ARTISTS
                                </div>
                                <img src="./111_files/title_shapes.svg" alt='' />
                            </div>
                        </div>
                    </div>

                    <div className='gap-10 justify-center text-start flex'>
                        <div className='w-1/2 justify-start'>
                            <div className='text-white font-bold text-5xl mb-10'>
                                ABOUT US
                            </div>
                            <div className='text-lg text-white mb-6'>
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.
                            </div>

                            <div className='text-lg text-white'>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original a latin professor.
                            </div>
                        </div>
                        <div className='w-1/2 justify-end gap-10 flex text-start'>
                            <div className='bg-[#ffffff0d] p-5'>
                                <img src={Avatar1} alt='Avatar1' />
                                <div className='items-center text-white'>
                                    <div className='flex gap-2 text-3xl font-blod items-center'>
                                        Berneice Tran
                                        <img src={AbIcon1} alt='AbIcon1' />
                                    </div>
                                    <div className='text-black/10'>
                                        Artist
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#ffffff0d] p-5'>
                                <img src={Avatar2} alt='Avatar2' />
                                <div className='items-center text-white'>
                                    <div className='flex gap-2 text-3xl font-blod items-center'>
                                        Leana Rosa
                                        <img src={AbIcon2} alt='AbIcon2' />
                                    </div>
                                    <div className='text-black/10'>
                                        Co-Artist
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
