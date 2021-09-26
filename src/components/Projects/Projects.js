import React from 'react';
import SingleProject from './SingleProject';
import projectsData from '../../assets/data/projectsData.json';

const Projects = () => {
    return (
        <>
            <section class="text-gray-600 body-font lg:mt-10">
                <div align="center">
                    <h1 class="text-2xl font-medium text-white title-font mb-2">Projects</h1>
                </div>


                {
                    projectsData.map(projectData => (
                        <SingleProject projectData={projectData} />
                    ))
                }

            </section>
        </>
    );
}

export default Projects;