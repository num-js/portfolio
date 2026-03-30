import React from 'react';
import './skillsView.scss';

const SkillsView = ({ skills, viewStyles }) => {
    return (
        <ul className="skills-view">
            {skills.map((skill, index) => (
                <li style={viewStyles} key={index}>{skill}</li>
            ))}
        </ul>
    );
}

export default SkillsView;