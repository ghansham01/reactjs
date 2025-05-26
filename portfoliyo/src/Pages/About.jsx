import MotionHoc from "./MotionHoc";
import { motion } from "motion/react";

const AboutComponent = () => {
  return (
    <div id="about" className="snap-normal">
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <section className="relative flex flex-col md:flex-row-reverse pt-8 p-6 sm:p-6 md:p-8 lg:p-16 items-center overflow-hidden">
          {/* Image Section */}
          <motion.div className="w-full md:w-1/2 relative overflow-hidden ">
            <div className="relative w-full h-full bg-cover bg-center">
              <img
                src="/Image/AboutME.webp"
                alt="Profile"
                className="rounded-lg w-full h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] object-cover shadow-lg shadow-blue-500/50 transition-opacity duration-500"
              />
              {/* Gradient Overlay */}
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col z-10 text-center md:text-left">
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>

            {/* Decorative Bars */}
            <div className="flex justify-center md:justify-start items-center mt-4 mb-6">
              <span className="block w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500" />
              <span className="block w-20 h-1 ml-4 bg-gradient-to-r from-blue-400 to-purple-500" />
            </div>

            <p className="text-lg sm:text-xl font-medium text-gray-300 mb-6 leading-relaxed">
              I am a MERN stack web developer with over 2 months of experience
              as a React intern at Celebel. Passionate about building intuitive
              and dynamic web applications, I leverage my expertise in
              JavaScript and ReactJS to create seamless user experiences.
            </p>

            {/* Links */}
            <ul className="flex flex-col space-y-4 mx-2">
              {/* Resume Link */}
              <li className="group relative inline-block">
                <a
                  href=""
                  className="flex items-center text-lg sm:text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors"
                >

                  Resume
                </a>
                <span className="absolute left-0 bottom-[-2px] h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 w-full transition-all duration-300" />
              </li>

              {/* LinkedIn */}
              <li className="group relative inline-block">
                <a
                  href=""
                  className="flex items-center text-lg sm:text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors"
                >

                  LinkedIn
                </a>
                <span className="absolute left-0 bottom-[-2px] h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 w-full transition-all duration-300" />
              </li>

              {/* GitHub */}
              <li className="group relative inline-block">
                <a
                  href=""
                  className="flex items-center text-lg sm:text-xl font-semibold text-gray-300 hover:text-blue-400 transition-colors"
                >

                  GitHub
                </a>
                <span className="absolute left-0 bottom-[-2px] h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 w-full transition-all duration-300" />
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

const About = MotionHoc(AboutComponent);

export default About;