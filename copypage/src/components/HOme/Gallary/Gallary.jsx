import React, { useState } from 'react';
import { Image } from './image';
import { FaEye as Eye } from 'react-icons/fa';

function Gallary() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className='py-16 px-6 lg:px-20 text-center bg-gray-900'>
      <p className='text-sm uppercase text-orange-500 font-semibold'>Our gallery</p>
      <h2 className='text-3xl font-bold mt-2 text-white'>
        Discover the best things we do
      </h2>
      <p className='text-white max-w-2xl mx-auto mt-2'>
        We exist for non-profits, social enterprises, community groups, activists, and
        individual citizens making a difference.
      </p>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-10'>
        {Image.map((item, index) => (
          <div className='relative group' key={index}>
            <div
              onClick={() => openLightbox(item)}
              className='cursor-pointer'
            >
              <img
                src={item.src}
                alt={item.alt}
                className='rounded-lg w-full h-60 object-cover transition duration-300 group-hover:opacity-80'
              />
              <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg'>
                <Eye size={20} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={(e) => {
            // Check if the click was directly on the backdrop (not on the image)
            if (e.target === e.currentTarget) {
              closeLightbox();
            }
          }}>
          <div className="relative max-w-4xl mx-auto">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-black/60 p-2 rounded-full text-white hover:bg-black"
            >
              <Eye size={20} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallary;