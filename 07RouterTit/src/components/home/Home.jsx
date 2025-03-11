import React from 'react'
import { Link,  } from 'react-router';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img className="w-96" src="https://img.freepik.com/free-vector/character-playing-mobile-games-middle-night_23-2148527463.jpg?ga=GA1.1.211036186.1740672126&semt=ais_hybrid" alt="image1" />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <img className="sm:w-96 w-48" src="https://img.freepik.com/free-vector/man-playing-online-games-concept_52683-37362.jpg?t=st=1741689434~exp=1741693034~hmac=479b9168a139159477f842615f9f31a5b69a7f234c6f1fc70bd8ec91a1012f9a&w=900" alt="image2" />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
    </div>
  );
}
