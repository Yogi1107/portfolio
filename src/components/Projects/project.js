import React, { useState } from 'react';
import './project.css';
import img from '../../assets/PSC.png';
import img_ from '../../assets/RS.png';
import img__ from '../../assets/DAA.png';
import img___ from '../../assets/CCP.png';

const projects = [
    {
        name: 'Personalised Study Coach',
        img: img,
        description: 'AI-powered personalized study assistant: upload notes, get summaries, practice questions, contextual Q&A, and automated study schedules with progress tracking.',
        techStack: 'Python(Flask), Bootstrap, Local LLM (ollama), PostgreSQL',
        github: 'https://github.com/Yogi1107/Personalized-Study-Coach',
        deployed_link: 'https://personalized-study-coach.onrender.com/'
    },
    {
        name: 'AI Resume Screener',
        img: img_,
        description: 'An end-to-end AI-powered Resume Screening System that evaluates a candidate resume against a given job description using a Large Language Model (LLM).',
        techStack: 'Local LLM (ollama), Streamlit',
        github: 'https://github.com/Yogi1107/AI_Resume_Screener'
    },
    {
        name: 'Disability Assistant Application',
        img: img__,
        description: 'The Disability Assistant Application is a comprehensive tool designed to assist individuals with disabilities. It integrates various features such as voice assistance, AI learning support, sign detection for speech impairment, and customizable user profiles.',
        techStack: 'Python (Flask), HTML, CSS, JS, Mediapipe',
        github: 'https://github.com/Yogi1107/Disability-Assistant-Application'
    },
    {
        name: 'Customer Churn Prediction',
        img: img___,
        description: 'Built a balanced Logistic Regression pipeline with feature scaling to predict churn-prone users, achieving Recall: 0.79 and ROC-AUC: 0.84, enabling targeted retention strategies wit the integrated Streamlit dashboard for real-time visualization and decision-making insights.',
        techStack: 'Python (Flask), HTML, CSS, JS, Mediapipe',
        github: 'https://github.com/Yogi1107/Disability-Assistant-Application',
        deployed_link: 'https://customer-churn-analysis-sgel5lcxrzygrvsjf637co.streamlit.app/'
    },
];

export default function Project() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id='project'>
            <h2 className='projectTitle'>Projects</h2>
            <span className='projectDesc'>Here are some projects I’ve built using Python, databases, and web technologies to solve real-world problems.</span>
            <div className='projectImgs'>
                {projects.map((proj, index) => (
                    <div 
                        key={index} 
                        className='projectImgWrapper'
                        onClick={() => openModal(proj)}
                    >
                        <img src={proj.img} alt={proj.name} className='projectImg'/>
                        <div className='projectOverlay'>{proj.name}</div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className='modalBackground' onClick={closeModal}>
                    <div className='modalContent' onClick={e => e.stopPropagation()}>
                        <button className='modalClose' onClick={closeModal}>&times;</button>
                        <h2>{selectedProject.name}</h2>
                        <p><strong>Description:</strong> {selectedProject.description}</p>
                        <p><strong>Tech Stack:</strong> {selectedProject.techStack}</p>
                        <p>
                            <strong>GitHub:</strong> 
                            <a href={selectedProject.github} target='_blank' rel='noopener noreferrer'>
                                {selectedProject.github}
                            </a>
                        </p>
                        <p>
                            <strong>Deployed Link:</strong> 
                            <a href={selectedProject.deployed_link} target='_blank' rel='noopener noreferrer'>
                                {selectedProject.deployed_link}
                            </a>
                        </p>
                    </div>
                </div>
            )}
        </section>
    )
}
