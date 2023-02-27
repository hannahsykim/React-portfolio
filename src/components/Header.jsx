import React from 'react';

function Header() {
  return (
    <header className="header">
        <div className="p-4 bg-transparent shadow sm:flex flex-col sm:items-start sm:justify-start ">
          <div className="flex flex-wrap relative isolate overflow-hidden py-24 sm:py-32">
            <h1 className='font-bold tracking-tight text-black'><a href="/">Hannah's Portfolio</a></h1>
          </div>
        </div>
      
    </header>
  );
}

export default Header;
