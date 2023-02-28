import React from 'react';
import teamprofileIMG from '../assets/Team-Profile.png';
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
        <div className="container mx-auto">
            <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-white">
                <img
                    src={movieIMG}
                    alt="image"
                    className="w-full"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                    <a
                        href="/"
                        className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        50+ Best creative website themes & templates
                    </a>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                    </p>
                    <a
                    href="/"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                    >
                    View Details
                    </a>
                </div>
                </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-white">
                <img
                    src={schedulerIMG}
                    alt="image"
                    className="w-full"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                    <a
                        href="/"
                        className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        The ultimate UX and UI guide to card design
                    </a>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                    </p>
                    <a
                    href="/"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                    >
                    View Details
                    </a>
                </div>
                </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-white">
                <img
                    src={weatherIMG}
                    alt="image"
                    className="w-full"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                    <a
                        href="/"
                        className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Creative Card Component designs graphic elements
                    </a>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                    </p>
                    <a
                    href="/"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                    >
                    View Details
                    </a>
                </div>
                </div>
            </div>
            <div className="w-full px-4 md:w-1/2 xl:w-1/3">
                <div className="mb-10 overflow-hidden rounded-lg bg-white">
                <img
                    src={teamprofileIMG}
                    alt="image"
                    className="w-full"
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>
                    <a
                        href="/"
                        className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                    >
                        Creative Card Component designs graphic elements
                    </a>
                    </h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                    Lorem consectetur adipiscing elit.
                    </p>
                    <a
                    href="/"
                    className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                    >
                    View Details
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </div>
    );
}

export default Portfolio;


