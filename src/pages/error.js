import '../App.css';
import React from 'react';
import HomeImg from "../assets/home-img.png"
import { Link } from 'react-router-dom';

export default function Error() {


  return (
    <div className="w-full mx-auto h-full min-h-screen container">
      <div className='flex flex-col w-full h-full min-h-screen items-center justify-center'>
        <section className="home grid h-screen pt-32 pb-16">
          <div className="home__container container grid content-center gap-12 lg:max-w-5xl lg:grid-cols-2 lg:items-center">
            <div className="home__data text-white justify-self-center text-center lg:text-left">
              <p className="pb-2 font-semibold text-2xl">Error 404</p>
              <h1 className="py-4 text-5xl font-bold lg:text-6xl">Hey Buddy</h1>
              <p className="py-6 font-semibold text-2xl">
                We can't seem to find the page <br />
                you are looking for.
              </p>
              <Link
                to="/"
                className="animate-floting inline-flex items-center justify-center rounded-full bg-[#ffffff33] py-4 px-8 font-bold text-white buttonfx slideleft"
              >
                Go Home
              </Link>
            </div>

            <div className="home__img justify-self-center">
              <img
                src={HomeImg}
                className="w-64 animate-floting lg:w-[400px]"
                alt="homeImg"
              />
              <div className="home__shadow mx-auto h-8 w-36 animate-shadow rounded-[50%] bg-white/90 blur-md lg:w-64"></div>
            </div>
          </div>

          <div className="home__footer flex items-center justify-center gap-2 self-end text-lg font-semibold text-white">
            <p>+0 000 000 000</p>
            <p>|</p>
            <p>info@xcompany.com</p>
          </div>
        </section>
      </div>
    </div>
  )
}
