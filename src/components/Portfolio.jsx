import React from 'react';
import techBlogIMG from '../assets/image.png';
import weatherIMG from '../assets/Weather-Dashboard.png';
import schedulerIMG from '../assets/Workday-Scheduler.png';
import movieIMG from '../assets/Movie-Review-Site.png';

function Portfolio() {
    return (
    <div className="portfolio">
    <section className="bg-[#F3F4F6] pt-10 pb-10 lg:pt-[120px] lg:pb-20 space-y-14">
        <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:pb-[50px]">
                Portfolio
            </h1>
        </div>
            <div className="-mx-4 flex flex-wrap container mx-auto">

            <div className="w-50 px-4 md:w-1/2 xl:w-1/2">
                <div className="mb-10 overflow-hidden shadow rounded-lg bg-white">
                <img
                    src={ movieIMG }
                    alt="image"
                    className="w-full h-[200px] object-cover"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 object-cover">
                    <h3>
                    <a
                        href="/"
                        className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Movie Review Journal
                    </a>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    This is a movie review site where users can track and review movies that they have watched. With a server-side API, users can also look up any movie title or keyword to find their specific movie. They can also write and save their reviews, as well as collect and view all their past movie reviews in one page.
                    
                    </p>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    
                    Made with Bootstrap, jQuery, Movie Database API, HTML, CSS, JavaScript
                    </p>
                    <a
                    href="https://github.com/hannahsykim/MovieReviewSite"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded border border-[#E5E7EB] py-2 px-7 m-1 text-base font-medium transition hover:text-slate-400"
                    >
                    View Code
                    </a>
                    
                    <a
                    href="https://hannahsykim.github.io/MovieReviewSite/"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded border border-[#E5E7EB] py-2 px-7 m-1 text-base font-medium transition hover:text-slate-400"
                    >
                    View Live
                    </a>
                </div>
                </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/2">
                <div className="mb-10 overflow-hidden shadow rounded-lg bg-white">
                <img
                    src={schedulerIMG}
                    alt="image"
                    className="w-full h-[200px] object-cover"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 object-cover">
                    <h3>
                    <a
                        href="/"
                        className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Work Day Scheduler
                    </a>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    The work day scheduler is built for everyone's every day work schedule. Whenever you need a daily planner to create a schedule, you can do so here by creating a new event on the calendar. This scheduler will automatically save your events for you future use.
                    
                    </p>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    
                    Made with HTML, CSS, JavaScript, and jQuery.
                    </p>
                    <a
                    href="https://github.com/hannahsykim/super-scheduler"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded border border-[#E5E7EB] py-2 px-7 m-1 text-base font-medium transition hover:text-slate-400"
                    >
                    View Code
                    </a>
                    <a
                    href="https://hannahsykim.github.io/super-scheduler/"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded border border-[#E5E7EB] py-2 px-7 m-1 text-base font-medium transition hover:text-slate-400"
                    >
                    View Live
                    </a>
                </div>
                </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/2">
                <div className="mb-10 overflow-hidden shadow rounded-lg bg-white">
                <img
                    src={weatherIMG}
                    alt="image"
                    className="w-full h-[200px] object-cover"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 object-cover">
                    <h3>
                    <a
                        href="/"
                        className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Weather App
                    </a>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    Allow users to look up current weather and 5 days forecast for a specific city.

                    </p>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    Made with: jQuery, Bootstrap, OpenWeather API
                    </p>
                    <a
                    href="https://github.com/hannahsykim/weather-app"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded border border-[#E5E7EB] py-2 px-7 m-1 text-base font-medium transition hover:text-slate-400"
                    >
                    View Code
                    </a>
                    <a
                    href="https://hannahsykim.github.io/weather-app/"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded border border-[#E5E7EB] py-2 px-7 m-1 text-base font-medium transition hover:text-slate-400"
                    >
                    View Live
                    </a>
                </div>
                </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/2">
                <div className="mb-10 overflow-hidden shadow rounded-lg bg-white">
                <img
                    src={techBlogIMG}
                    alt="image"
                    className="w-full h-[200px] object-cover"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 object-cover">
                    <h3>
                    <a
                        href="/"
                        className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Tech Blog
                    </a>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.

                    </p>
                    <p className="text-body-color mb-7 text-base leading-relaxed">

                    Made with: Nodejs, Handlebars, Sequelize, Express, and MySQL
                    </p>
                    <a
                    href="https://github.com/hannahsykim/mytech-blog"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded border border-[#E5E7EB] py-2 px-7 m-1 text-base font-medium transition hover:text-slate-400"
                    >
                    View Code
                    </a>
                    <a
                    href="https://hannahs-tech-blog.herokuapp.com/"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded border border-[#E5E7EB] py-2 px-7 m-1 text-base font-medium transition hover:text-slate-400"
                    >
                    View Live
                    </a>
                </div>
                </div>
            </div>
            </div>
        
    </section>
    </div>
    );
}

export default Portfolio;


