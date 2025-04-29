
import React from "react";
import image1 from '../assets/Weather.png'
import image2 from '../assets/MusicWeb.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Snap Shot' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt="" />
            </a>}
            {title=='Co People' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={image2} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
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
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Weather App',
        description:'A weather website using HTML, CSS, and JavaScript provides real-time weather updates for different locations. The homepage features a clean and responsive design with a search bar where users can enter a city name to fetch weather details. Using JavaScript and a weather API, the site dynamically displays temperature, humidity, wind speed, and weather conditions with relevant icons. The CSS ensures a visually appealing layout with a structured card-based design. JavaScript handles API requests, updates the UI with fetched data, and provides error handling for invalid searches. The website is fully responsive, ensuring a seamless experience across all devices..',
        image: image1,
        git:'https://github.com/nithingooud/CoPeople',
        technologies:['Html5' ,'Css3' , 'JavaScripit']
    },
    {
        title:'OutStanding Music Website',
        description:'A simple music website template using HTML and CSS consists of a clean and structured layout with essential sections. The homepage features a header with a logo and a basic navigation bar. A hero section provides a welcoming message or an image representing the theme of the website.',
        image: image2,
        git:"https://nileshjangir.github.io/outstanding-music-quality/",
        technologies:[ 'Html5', 'Css3']
    }

]

export default Projects