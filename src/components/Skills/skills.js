import React from 'react';
import python from '../../assets/python.png';
import postgres from '../../assets/postgresql.png';
import react from '../../assets/react.png';
import javascript from '../../assets/javascript.png';
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
                desc: 'Primary language for backend APIs, data pipelines, automation, and AI-integrated applications.'
            },
            {
                img: null,
                alt: 'Flask',
                name: 'Flask',
                desc: 'Build lightweight RESTful APIs and full-stack web applications with Flask.'
            },
        ]
    },
    {
        category: 'AI / ML',
        skills: [
            {
                img: null,
                alt: 'LLM Integration',
                name: 'LLM Integration',
                desc: 'Integrate large language models (Ollama) via prompt engineering and RAG pipelines to build AI-powered features.'
            },
            {
                img: null,
                alt: 'Scikit-Learn',
                name: 'Scikit-Learn',
                desc: 'Build and evaluate ML pipelines — classification, regression, feature engineering, and model tuning.'
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
                desc: 'Build interactive, component-driven UIs with React and modern hooks.'
            },
            {
                img: javascript,
                alt: 'JavaScript',
                name: 'JavaScript',
                desc: 'Add dynamic behavior, event handling, and client-side logic to web applications.'
            },
        ]
    },
    {
        category: 'Data & Databases',
        skills: [
            {
                img: postgres,
                alt: 'PostgreSQL',
                name: 'PostgreSQL',
                desc: 'Design and manage relational databases — schema design, queries, and application integration.'
            },
            {
                img: null,
                alt: 'Pandas & Matplotlib',
                name: 'Pandas / Matplotlib',
                desc: 'Data wrangling, analysis, and visualization for ML projects and dashboards.'
            },
        ]
    },
    {
        category: 'Tools',
        skills: [
            {
                img: null,
                alt: 'Streamlit',
                name: 'Streamlit',
                desc: 'Rapidly build and deploy interactive ML dashboards and data apps.'
            },
            {
                img: null,
                alt: 'Git',
                name: 'Git & GitHub',
                desc: 'Version control, branching, and collaborative development on all projects.'
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