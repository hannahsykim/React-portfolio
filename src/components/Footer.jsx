import React from 'react';


function Footer() {
  return (
    <div className="footer">
    <footer className="bg-neutral-200 text-center text-black dark:bg-slate-600">
      
      <div className="flex flex-wrap flex-col justify-center items-center py-4 ">
      <p className="font-bold text-xl ">I'm also online.</p>
      <div className="flex flex-row">
      <a href="https://www.instagram.com/_sunlight_8/" className="fa fa-instagram p-3"></a>
      <a href="https://github.com/hannahsykim" className="fa fa-github p-3"></a>
      <a href="https://www.linkedin.com/in/kimhannah1/" className="fa fa-linkedin p-3"></a>
      </div>
      </div>
    
  </footer>
    </div>
  );
}

export default Footer;
