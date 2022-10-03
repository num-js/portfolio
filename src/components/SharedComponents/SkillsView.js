import React from 'react';
import './skillsView.scss';

const SkillsView = ({ skills }) => {
    return (
        <ul className="skills-view">
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    );
}

export default SkillsView;