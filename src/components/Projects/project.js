import React, { useState } from 'react';
import './project.css';
import img from '../../assets/PSC.png';
import img_ from '../../assets/RS.png';
import img__ from '../../assets/DAA.png';
import img___ from '../../assets/CCP.png';
import SplitText from '../../components/animations/SplitText';

const projects = [
    {
        name: 'Personalized Study Coach',
        img: img,
        description:
            'Built a RAG-based AI study assistant where students upload notes and get contextual Q&A, auto-generated summaries, practice questions, and personalized study schedules with progress tracking — reducing manual study planning effort significantly.',
        techStack: ['Python', 'Flask', 'Bootstrap', 'Ollama (LLM)', 'PostgreSQL'],
        github: 'https://github.com/Yogi1107/Personalized-Study-Coach',
        deployed_link: 'https://personalized-study-coach.onrender.com/'
    },
    {
        name: 'AI Resume Screener',
        img: img_,
        description:
            'Built an end-to-end resume screening pipeline that uses an LLM to match candidate resumes against job descriptions, producing structured scores for skill match, experience fit, and hire recommendation — automating a time-intensive HR task.',
        techStack: ['Python', 'Ollama (LLM)', 'Streamlit'],
        github: 'https://github.com/Yogi1107/AI_Resume_Screener'
    },
    {
        name: 'Disability Assistant Application',
        img: img__,
        description:
            'Built a comprehensive accessibility tool with real-time sign language detection (MediaPipe), AI-powered learning support, voice assistance, and customizable user profiles — designed to make technology more inclusive.',
        techStack: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'MediaPipe'],
        github: 'https://github.com/Yogi1107/Disability-Assistant-Application'
    },
    {
        name: 'Customer Churn Prediction',
        img: img___,
        description:
            'Engineered a Logistic Regression pipeline with SMOTE balancing and feature scaling, achieving Recall of 0.79 and ROC-AUC of 0.84. Integrated a Streamlit dashboard for real-time churn prediction and business insights.',
        techStack: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'Matplotlib'],
        github: 'https://github.com/Yogi1107/Customer-Churn-Prediction',
        deployed_link: 'https://customer-churn-analysis-sgel5lcxrzygrvsjf637co.streamlit.app/'
    }
];

export default function Project() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <section id='project'>
            <div className='projectTitle'>
                <SplitText
                    text="Projects"
                    delay={50}
                    duration={1}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                />
            </div>
            <span className='projectDesc'>
                AI-integrated, full-stack Python applications built to solve real-world problems — from intelligent study tools to ML-powered dashboards.
            </span>
            <div className='projectImgs'>
                {projects.map((proj, index) => (
                    <div
                        key={index}
                        className='projectImgWrapper'
                        onClick={() => openModal(proj)}
                    >
                        <img src={proj.img} alt={proj.name} className='projectImg' />
                        <div className='projectOverlay'>{proj.name}</div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className='modalBackground' onClick={closeModal}>
                    <div className='modalContent' onClick={e => e.stopPropagation()}>
                        <button className='modalClose' onClick={closeModal}>&times;</button>
                        <h2>{selectedProject.name}</h2>
                        <p>{selectedProject.description}</p>

                        <div className='techStackRow'>
                            {selectedProject.techStack.map((tech, i) => (
                                <span key={i} className='techBadge'>{tech}</span>
                            ))}
                        </div>

                        <div className='modalLinks'>
                            <a
                                href={selectedProject.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='modalLinkBtn'
                            >
                                GitHub →
                            </a>
                            {selectedProject.deployed_link ? (
                                <a
                                    href={selectedProject.deployed_link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='modalLinkBtn modalLinkBtnAlt'
                                >
                                    Live Demo →
                                </a>
                            ) : (
                                <span className='modalNoLink'></span>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}