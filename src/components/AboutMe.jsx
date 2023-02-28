import React from 'react';
import imgUrl from '../assets/myphoto.jpg'

function AboutMe() {
  return (
  <div className="aboutme">
    <section className="pt-28 pb-20">
      <div className="container mx-auto">
        <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:pb-[50px]">
                  About Me
              </h1>
          </div>
        
        <div className="flex flex-wrap -space-x-3 overflow-hidden content-center justify-evenly mb-4">
          <img
            className="inline-block h-40 w-40 rounded-full ring-2 ring-white"
            src= {imgUrl}
            alt="myphoto"
          />
          </div>
        
            <h2 className="text-2xl text-center font-bold mb-4">Hi, my name is Hannah Kim.</h2>
            
              <p className="text-body-color mb-9 mx-28 text-base leading-relaxed">
                I'm a web developer specializing in HTML, CSS, Javascript, MySQL, and React. 
                As a former UX and motion graphic designer, I have a strong understanding of user experience and how to capture user's attention. 
                In my past experience, I have collaborated with a team of developers as well as strategists to create a interactive engagement unit for various brands' ad campaigns.
                I've also managed a team of designers and have worked in the tech industry for over 6 years. Now, as a passionate student, I'm currently looking for new opportunities to grow in the tech industry as a developer. 
              </p>
        

        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View My Resume
          </button>
        </div>
      </div>
    </section>
  </div>
  );

}

export default AboutMe;


