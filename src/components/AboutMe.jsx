import React from 'react';

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
            className="inline-block h-50 w-50 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          </div>
        
            <h2 className="text-2xl text-center font-bold mb-4">Hi, my name is Hannah Kim.</h2>
            
              <p className="text-body-color mb-9 mx-28 text-base leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
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
