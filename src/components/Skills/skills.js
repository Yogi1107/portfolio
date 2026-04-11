import React from 'react';
import python from '../../assets/python.png';
import postgres from '../../assets/postgresql.png';
import react from '../../assets/react.png';
import mongodb from '../../assets/mongo.png'
import javascript from '../../assets/javascript.png';
import fastapi from '../../assets/fastapi.png'
import flask from '../../assets/flask.png'
import scikit_learn from '../../assets/scikit-learn.png'
import express from '../../assets/express.png'
import node from '../../assets/nodejs.png'
import llm from '../../assets/LLM.jfif'
import streamlit from '../../assets/streamlit.png'
import git from '../../assets/git.png'
import './skills.css';
import SplitText from '../../components/animations/SplitText';

const skillGroups = [
    {
        category: 'Backend',
        skills: [
            {
                img: python,
                alt: 'Python',
                name: 'Python',
                desc: 'Core backend language used to build scalable APIs, automation pipelines, and AI-powered applications.'
            },
            {
                img: flask,
                alt: 'Flask',
                name: 'Flask',
                desc: 'Develop lightweight REST APIs and backend services with clean architecture and rapid prototyping.'
            },
            {
                img: fastapi,
                alt: 'FastAPI',
                name: 'FastAPI',
                desc: 'Build high-performance async APIs with FastAPI, leveraging type hints, validation, and automatic API documentation.'
            },
            {
                img: express,
                alt: 'Express.js',
                name: 'Express.js',
                desc: 'Design RESTful APIs and backend services using middleware-based architecture in Express.js.'
            },
            {
                img: node,
                alt: 'Node.js',
                name: 'Node.js',
                desc: 'Develop scalable server-side applications with event-driven, non-blocking architecture using Node.js.'
            }
        ]
    },
    {
        category: 'AI / ML',
        skills: [
            {
                img: llm,
                alt: 'LLM Integration',
                name: 'LLM Integration',
                desc: 'Build AI-powered applications using LLMs (Ollama), implementing RAG pipelines, prompt engineering, and context-aware responses.'
            },
            {
                img: scikit_learn,
                alt: 'Scikit-Learn',
                name: 'Scikit-Learn',
                desc: 'Develop and optimize machine learning models including classification, regression, and end-to-end ML pipelines.'
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
                desc: 'Build dynamic, component-driven user interfaces using React with hooks and modern state management.'
            },
            {
                img: javascript,
                alt: 'JavaScript',
                name: 'JavaScript',
                desc: 'Implement client-side logic, asynchronous operations, and interactive UI behavior.'
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
                desc: 'Design relational schemas, optimize queries, and integrate databases into production-grade applications.'
            },
            {
                img: mongodb,
                alt: 'MongoDB',
                name: 'MongoDB',
                desc: 'Design flexible NoSQL schemas, manage document-based data, and build scalable data layers using MongoDB.'
            },
        ]
    },
    {
        category: 'Tools & Deployment',
        skills: [
            {
                img: streamlit,
                alt: 'Streamlit',
                name: 'Streamlit',
                desc: 'Rapidly build and deploy interactive dashboards and AI-driven web applications.'
            },
            {
                img: git,
                alt: 'Git',
                name: 'Git & GitHub',
                desc: 'Manage version control, branching strategies, and collaborative development workflows.'
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
                I build AI-integrated, full-stack Python applications — from LLM pipelines and ML models to REST APIs and React frontends.
                Here's the stack I work with consistently.
            </span>

            {skillGroups.map((group) => (
                <div key={group.category} className='skillGroup'>
                    <h3 className='skillGroupLabel'>{group.category}</h3>
                    <div className='skillsBars'>
                        {group.skills.map((skill) => (
                            <div key={skill.name} className='skillBar'>
                                {skill.img
                                    ? <img src={skill.img} alt={skill.alt} className='skillBarImg' />
                                    : <SkillIcon name={skill.name} />
                                }
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