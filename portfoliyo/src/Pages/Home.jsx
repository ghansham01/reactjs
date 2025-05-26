import { div } from "motion/react-client";
import MotionHoc from "./MotionHoc";
import { TypeAnimation } from 'react-type-animation';

function HomeComponent() {
  return (
    <div className="min-h-screen grid grid-cols-2 gap-6 px-8 py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Left Column - Image */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/50">
            <img 
              src="/path-to-your-image.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="flex flex-col justify-center">
        {/* name section */}
        <div className="mb-4">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Your Name
          </h1>
        </div>

        {/* type section */}
        <div className="mb-8 h-8">
          <TypeAnimation
            sequence={[
              'Web Developer',
              1000,
              'Frontend Developer',
              1000,
              'Backend Developer',
              1000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl md:text-3xl font-normal bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            repeat={Infinity}
          />
        </div>

        {/* about section */}
        <div className="max-w-xl">
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            A passionate developer focused on creating beautiful and functional web experiences.
            Specializing in modern web technologies and clean code practices.
          </p>
          
          {/* Social Links */}
          <div className="mt-8 flex gap-6">
            
          </div>
        </div>
      </div>
    </div>
  );
}

const Home = MotionHoc(HomeComponent);

export default Home;
