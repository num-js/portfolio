import skillsData from '../assets/data/skillsData.json';

export type SkillsDataRoot = typeof skillsData;
export type RotatingCircleData = SkillsDataRoot['fullStack'][number] | SkillsDataRoot['others'][number];
/** JSON union omits `styles` on some rows; runtime may still attach style objects */
export type OrbitSkill = RotatingCircleData['skills'][number] & {
    styles?: Record<string, string | number>;
};

export type SkillProjectLink = {
    demo?: string;
    code?: string;
};

export type SkillProject = {
    title: string;
    description: string;
    links: SkillProjectLink;
};

/** Skill row from JSON when used in popover (may include projects) */
export type SkillDetail = OrbitSkill & {
    projects?: SkillProject[];
};
