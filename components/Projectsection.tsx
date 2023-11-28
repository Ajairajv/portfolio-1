import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"



const projects = [

    {
        name: "Linked-in Clone",
        description:
          "Developed a LinkedIn website clone using React-Redux and Firebase. The project features robust authentication, enabling users to sign in and out securely for an authentic networking experience.",
        image: "/p1.png",
        github: "https://github.com/Ajairajv/linked-in-clone",
      },
      {
        name: "Cropance-22",
        description: "Designed and developed a highly efficient Flutter mobile application employing Convolutional Neural Networks and transfer learning to effectively identify diseases in cotton leaves and plants. The application, trained on a real-time dataset, delivers precise agricultural diagnostics through an intuitive and user-friendly interface.",
        image: "/p2.png",
        github: "https://github.com/Ajairajv/Cropance-22",
        
      },
    {
      name: "Sentimental_Analysis",
      description:
        "This project utilized the Multinomial Naive Bayes algorithm for sentiment analysis on movie reviews. I conducted thorough data preprocessing, implemented text vectorization techniques, and achieved competitive model accuracy with Kaggle's 'IMDb Dataset of 50K Movie Reviews.' The detailed Jupyter Notebook outlines the project's methodology and outcomes, reflecting my successful completion of the task.",
      image: "/p3.png",
      github: "https://github.com/Ajairajv/Sentimental_Analysis",
    },
    
  ]

const Projectsection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-cyan-600 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.github}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-8">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default Projectsection
