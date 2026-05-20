import React, { useState } from 'react';
import './project.css';
import PSC from '../../assets/PSC.png';
import RS from '../../assets/RS.png';
import quiz from '../../assets/quiz_app.png';
import CCP from '../../assets/CCP.png';
import SC from '../../assets/SkillConnect.jfif';
import SplitText from '../../components/animations/SplitText';

const projects = [
    {
        name: 'Personalized Study Coach',
        img: PSC,
        description:
            'Built a RAG-based AI study assistant where students upload notes and get contextual Q&A, auto-generated summaries, practice questions, and personalized study schedules with progress tracking — reducing manual study planning effort significantly.',
        techStack: ['Python', 'Flask', 'Bootstrap', 'Ollama (LLM)', 'PostgreSQL'],
        github: 'https://github.com/Yogi1107/Personalized-Study-Coach',
        liveDemo: 'https://personalized-study-coach.onrender.com/'
    },
    {
        name: 'AI Resume Screener',
        img: RS,
        description:
            'Built an end-to-end resume screening pipeline that uses an LLM to match candidate resumes against job descriptions, producing structured scores for skill match, experience fit, and hire recommendation — automating a time-intensive HR task.',
        techStack: ['Python', 'Ollama (LLM)', 'Streamlit'],
        github: 'https://github.com/Yogi1107/AI_Resume_Screener',
        liveDemo: 'https://llm-resume-screener.streamlit.app/'
    },
    {
        name: 'Quiz Application for Visually Impaired Students',
        img: quiz,
        description:
            'Built a comprehensive accessibility tool with real-time sign language detection (MediaPipe), AI-powered learning support, voice assistance, and customizable user profiles — designed to make technology more inclusive.',
        techStack: ['Python', 'Flask', 'JavaScript', 'HTML', 'CSS', 'MediaPipe'],
        github: 'https://github.com/Yogi1107/Quiz-Application-for-Disable-Students',
    },
    {
        name: 'Customer Churn Prediction',
        img: CCP,
        description:
            'Engineered a Logistic Regression pipeline with SMOTE balancing and feature scaling, achieving Recall of 0.79 and ROC-AUC of 0.84. Integrated a Streamlit dashboard for real-time churn prediction and business insights.',
        techStack: ['Python', 'Scikit-Learn', 'Streamlit', 'Pandas', 'Matplotlib'],
        github: 'https://github.com/Yogi1107/Customer-Churn-Prediction',
        liveDemo: 'https://customer-churn-analysis-sgel5lcxrzygrvsjf637co.streamlit.app/'
    },
    {
        name: 'SkillConnect',
        img: SC,
        description:
            'The home for hackathons. Discover events, analyse your GitHub skills, and build winning teams with complementary developers.',
        techStack: ['MongoDB', 'Express', 'Node', 'React'],
        github: 'https://github.com/Yogi1107/SkillConnect',
        liveDemo: 'https://skill-connect-peach.vercel.app/'
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

                            {selectedProject.liveDemo && (
                                <a
                                    href={selectedProject.liveDemo}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='modalLinkBtn'
                                >
                                    Live Demo →
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}