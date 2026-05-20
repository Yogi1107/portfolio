import React from 'react';
import python from '../../assets/python.png';
import postgres from '../../assets/postgresql.png';
import react from '../../assets/react.png';
import mongodb from '../../assets/mongo.png';
import javascript from '../../assets/javascript.png';
import fastapi from '../../assets/fastapi.png';
import flask from '../../assets/flask.png';
import scikit_learn from '../../assets/scikit-learn.png';
import express from '../../assets/express.png';
import node from '../../assets/nodejs.png';
import streamlit from '../../assets/streamlit.png';
import git from '../../assets/git.png';

/* Add these assets */
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import bootstrap from '../../assets/bootstrap.png';
import sql from '../../assets/sql.png';
import github from '../../assets/github.png';
import jupyter from '../../assets/jupyter.png';
import colab from '../../assets/colab.png';
import docker from '../../assets/docker.png';
import pandas from '../../assets/pandas.png';
import numpy from '../../assets/numpy.png';
import matplotlib from '../../assets/matplotlib.png';

import './skills.css';
import SplitText from '../../components/animations/SplitText';

const skillGroups = [
    {
        category: 'Languages',
        skills: [
            {
                img: python,
                alt: 'Python',
                name: 'Python',
                desc: 'Primary programming language for backend development, automation, AI/ML applications, and data analysis.'
            },
            {
                img: sql,
                alt: 'SQL',
                name: 'SQL',
                desc: 'Write optimized queries, manage relational databases, and perform structured data operations.'
            },
            {
                img: javascript,
                alt: 'JavaScript',
                name: 'JavaScript',
                desc: 'Build interactive frontend applications and handle dynamic client-side functionality.'
            },
        ]
    },

    {
        category: 'Frontend',
        skills: [
            {
                img: react,
                alt: 'React',
                name: 'React',
                desc: 'Develop modern component-based user interfaces with hooks and reusable architecture.'
            },
            {
                img: bootstrap,
                alt: 'Bootstrap',
                name: 'Bootstrap',
                desc: 'Create responsive and mobile-first layouts quickly using Bootstrap UI components.'
            },
            {
                img: html,
                alt: 'HTML5',
                name: 'HTML5',
                desc: 'Structure semantic and accessible web pages using modern HTML standards.'
            },
            {
                img: css,
                alt: 'CSS3',
                name: 'CSS3',
                desc: 'Design responsive and visually appealing interfaces with modern CSS styling techniques.'
            },
        ]
    },

    {
        category: 'Backend',
        skills: [
            {
                img: flask,
                alt: 'Flask',
                name: 'Flask',
                desc: 'Build lightweight REST APIs and backend services with rapid development workflows.'
            },
            {
                img: node,
                alt: 'Node.js',
                name: 'Node.js',
                desc: 'Develop scalable server-side applications using event-driven architecture.'
            },
            {
                img: express,
                alt: 'Express.js',
                name: 'Express.js',
                desc: 'Create RESTful APIs and backend services with middleware-based Express architecture.'
            },
            {
                img: fastapi,
                alt: 'FastAPI',
                name: 'FastAPI',
                desc: 'Develop high-performance asynchronous APIs with automatic validation and documentation.'
            },
        ]
    },

    {
        category: 'Databases',
        skills: [
            {
                img: postgres,
                alt: 'PostgreSQL',
                name: 'PostgreSQL',
                desc: 'Design relational schemas, optimize queries, and manage structured production databases.'
            },
            {
                img: mongodb,
                alt: 'MongoDB Atlas',
                name: 'MongoDB Atlas',
                desc: 'Build scalable cloud-hosted NoSQL database solutions with flexible document schemas.'
            },
        ]
    },

    {
        category: 'Developer Tools',
        skills: [
            {
                img: git,
                alt: 'Git',
                name: 'Git',
                desc: 'Manage version control, branching workflows, and collaborative development.'
            },
            {
                img: github,
                alt: 'GitHub',
                name: 'GitHub',
                desc: 'Host repositories, manage collaboration, and maintain project workflows.'
            },
            {
                img: jupyter,
                alt: 'Jupyter',
                name: 'Jupyter',
                desc: 'Perform interactive coding, experimentation, and data analysis in notebook environments.'
            },
            {
                img: colab,
                alt: 'Google Colab',
                name: 'Google Colab',
                desc: 'Run cloud-based Python notebooks for machine learning and data science workflows.'
            },
            {
                img: docker,
                alt: 'Docker',
                name: 'Docker',
                desc: 'Containerize applications and maintain consistent deployment environments.'
            },
        ]
    },

    {
        category: 'ML / Data',
        skills: [
            {
                img: scikit_learn,
                alt: 'Scikit-learn',
                name: 'Scikit-learn',
                desc: 'Build and evaluate machine learning models including classification and regression.'
            },
            {
                img: pandas,
                alt: 'Pandas',
                name: 'Pandas',
                desc: 'Handle data cleaning, preprocessing, transformation, and analysis efficiently.'
            },
            {
                img: numpy,
                alt: 'NumPy',
                name: 'NumPy',
                desc: 'Perform fast numerical computations and array-based operations for data science workflows.'
            },
            {
                img: matplotlib,
                alt: 'Matplotlib',
                name: 'Matplotlib',
                desc: 'Create visualizations, plots, and graphical insights for exploratory data analysis.'
            },
            {
                img: streamlit,
                alt: 'Streamlit',
                name: 'Streamlit',
                desc: 'Build and deploy interactive ML dashboards and AI-powered web applications quickly.'
            },
        ]
    },
];

// Fallback icon rendered when no image asset is available
function SkillIcon({ name }) {
    return (
        <div className='skillIconFallback' aria-label={name}>
            {name.slice(0, 2).toUpperCase()}
        </div>
    );
}

export default function Skills() {
    return (
        <section id='skills'>
            <div className='skillTitle'>
                <SplitText
                    text="Skills"
                    delay={50}
                    duration={1}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                />
            </div>

            <span className='skillDesc'>
                I build full-stack applications, REST APIs, and AI-powered solutions using modern web technologies,
                databases, and machine learning tools.
            </span>

            {skillGroups.map((group) => (
                <div key={group.category} className='skillGroup'>
                    <h3 className='skillGroupLabel'>{group.category}</h3>

                    <div className='skillsBars'>
                        {group.skills.map((skill) => (
                            <div key={skill.name} className='skillBar'>
                                {skill.img ? (
                                    <img
                                        src={skill.img}
                                        alt={skill.alt}
                                        className='skillBarImg'
                                    />
                                ) : (
                                    <SkillIcon name={skill.name} />
                                )}

                                <div className='skillBarText'>
                                    <h2>{skill.name}</h2>
                                    <p>{skill.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}