import React from 'react';

const SkillsView = ({ skills, viewStyles }) => {
    return (
        <ul className="mb-0 flex flex-wrap justify-center p-0 text-xs">
            {skills.map((skill, index) => (
                <li
                    style={viewStyles}
                    key={index}
                    className="m-0.5 inline-block flex-grow border border-white/[0.18] border-b-2 border-b-primary bg-surface-card px-2.5 py-0.5 text-center text-white/65 rounded-md"
                >
                    {skill}
                </li>
            ))}
        </ul>
    );
};

export default SkillsView;
