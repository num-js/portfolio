import React from 'react';

const SkillDiv = ({ skill }) => {
    return (
        <span className="inline-flex items-center justify-center px-2 py-1 mr-1 text-xs font-bold leading-none text-indigo-100 bg-pink-700 rounded whitespace-nowrap">
            {skill}
        </span>
    );
}

export default SkillDiv;
