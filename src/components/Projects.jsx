import React from "react";
import image1 from '../assets/Weather.png';
import image2 from '../assets/MusicWeb.png';
import Footer from './Footer';

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-48 object-cover" src={image} alt={title} />
            </a>
            <div className="p-4">
                <h5 className="text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                    {title}
                </h5>
                <p className="text-gray-300 mt-2 min-h-[120px] line-clamp-4">
                    {description}
                </p>
            </div>
            <div className='m-4 flex justify-between'>
                <div className='flex flex-wrap gap-2'>
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className='text-sm text-blue-500'>
                            #{tag}
                        </p>
                    ))}
                </div>
                <a
                    href={git}
                    className="text-red-300 border border-gray-200 rounded-lg shadow px-3 py-1 hover:text-green-500 duration-300"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export const project = [
    {
        title: 'Weather App',
        description: 'A weather website using HTML, CSS, and JavaScript provides real-time weather updates for different locations. The homepage features a clean and responsive design with a search bar where users can enter a city name to fetch weather details.',
        image: image1,
        git: '',
        technologies: ['Html5', 'Css3', 'JavaScript']
    },
    {
        title: 'OutStanding Music Website',
        description: 'A simple music website template using HTML and CSS consists of a clean and structured layout with essential sections. The homepage features a header with a logo and a basic navigation bar. A hero section provides a welcoming message or an image representing the theme.',
        image: image2,
        git: "https://nileshjangir.github.io/outstanding-music-quality/",
        technologies: ['Html5', 'Css3']
    }
];

export default Projects;
