import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const data = [
  {
    id: "01",
    title: "Over 20M+ people around the world is having good life because of Findo",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    highlight: "*50 country served world wide",
  },
  {
    id: "02",
    title: "We are supporting the poor and homeless people by providing food",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    highlight: "*Food served world wide",
  },
  {
    id: "03",
    title: "First time a non-profitable organization is fighting against the poverty",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    highlight: "*Finance collecting & donating",
  },
  {
    id: "04",
    title: "Over 1200+ volunteers working for Findo around the world",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    highlight: "*Volunteer in every Country",
  },
  {
    id: "05",
    title: "Hands move to support in Yemen combat covid-19 by donating face masks",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    highlight: "*Lockdown covid-19 helping",
  },
  {
    id: "06",
    title: "This project seeks to build houses to reduce their suffering and allow them to live",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots.",
    highlight: "*150 house project",
  },
]

const Main = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='bg-gradient-to-b from-gray-900 to-gray-800 w-full min-h-screen'>
      <div className='py-20 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className='text-orange-500 text-xl mb-4 block font-semibold tracking-wider'>
            Fulfill our dream
          </span>
          <h1 className='text-white text-5xl font-bold mb-4 leading-tight'>
            Mission to make a smile
          </h1>
          <p className='text-gray-300 max-w-3xl px-4 mx-auto mb-16 text-lg'>
            We exist for non-profits, social enterprises, community groups, activists,
            politicians and individual citizens that are making.
          </p>
        </motion.div>

        <div className='max-w-7xl mx-auto px-4'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl 
                  border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.2)] 
                  hover:shadow-[0_0_30px_rgba(255,165,0,0.1)] 
                  transition-all duration-500 
                  hover:scale-[1.02] 
                  hover:border-orange-500/20 
                  group'
              >
                <h3 className='text-xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300'>
                  <Link to={`/donation/${item.id}`}>{item.title}</Link>
                </h3>
                <p className='text-gray-400 mb-6 line-clamp-3'>{item.description}</p>
                <div className='flex items-center justify-between mt-auto'>
                  <p className='text-orange-500 font-semibold text-sm'>{item.highlight}</p>
                  <span className='inline-flex items-center justify-center w-10 h-10 
                    bg-gradient-to-br from-orange-500 to-orange-600 
                    text-white rounded-full text-sm font-bold 
                    group-hover:from-orange-600 group-hover:to-orange-700 
                    transition-all duration-300 shadow-lg'>
                    {item.id}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;