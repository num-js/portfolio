import { useMemo, type CSSProperties, type MouseEvent } from 'react';
import type { OrbitSkill, RotatingCircleData } from '../../../types/skillsData';

const iconShell =
    'flex shrink-0 items-center justify-center rounded-full border border-primary/40 bg-[rgba(12,22,38,0.92)] p-2 shadow-lg shadow-black/40 ring-1 ring-white/5 backdrop-blur-sm transition-all duration-200 hover:border-primary hover:bg-primary/10 hover:shadow-primary-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary';

function useSanitizedSkillStyle(skill: OrbitSkill) {
    return useMemo(() => {
        if (!skill?.styles || typeof skill.styles !== 'object') {
            return undefined;
        }
        const rest = { ...skill.styles } as Record<string, unknown> & { background?: unknown };
        delete rest.background;
        return Object.keys(rest).length ? (rest as CSSProperties) : undefined;
    }, [skill?.styles]);
}

type SkillIconButtonProps = {
    skill: OrbitSkill;
    showSkillPopover: (e: MouseEvent<HTMLButtonElement>, skill: OrbitSkill) => void;
    className?: string;
    style?: CSSProperties;
};

function SkillIconButton({ skill, showSkillPopover, className = '', style: sizeStyle }: SkillIconButtonProps) {
    const extraStyle = useSanitizedSkillStyle(skill);
    return (
        <button
            type="button"
            className={`${iconShell} ${className}`}
            style={{ ...extraStyle, ...sizeStyle }}
            onClick={(e) => showSkillPopover(e, skill)}
            aria-label={skill.name}
        >
            <img src={skill.pic} alt="" className="h-8 w-8 object-contain" />
        </button>
    );
}

function getOrbitRadius(n: number, stage: number, iconSize: number) {
    const half = stage / 2;
    const clearance = iconSize / 2 + 16;
    const maxR = half - clearance;
    if (n < 2) {
        return Math.max(48, Math.min(maxR, 72));
    }
    const minChord = iconSize + 12;
    const minRFromN = minChord / (2 * Math.sin(Math.PI / n));
    return Math.max(52, Math.min(maxR, Math.max(minRFromN, maxR - 6)));
}

type RotatingCircleProps = {
    data: RotatingCircleData;
    showSkillPopover: (e: MouseEvent<HTMLButtonElement>, skill: OrbitSkill) => void;
};

const RotatingCircle = ({ data, showSkillPopover }: RotatingCircleProps) => {
    const skills = data?.skills ?? [];
    const n = skills.length;

    if (n === 0) {
        return null;
    }

    const iconSm = 52;
    const iconLg = 58;
    const stageSm = 260;
    const stageLg = 304;
    const rSm = getOrbitRadius(n, stageSm, iconSm);
    const rLg = getOrbitRadius(n, stageLg, iconLg);

    const orbitArm = (rPx: number, iconSize: number) =>
        skills.map((skill, i) => {
            const angleDeg = (360 / n) * i - 90;
            return (
                <div
                    key={i}
                    className="absolute left-0 top-0 overflow-visible"
                    style={{
                        width: 0,
                        height: 0,
                        transform: `rotate(${angleDeg}deg) translateY(-${rPx}px)`,
                        transformOrigin: 'center center',
                    }}
                >
                    <div className="-translate-x-1/2 -translate-y-1/2">
                        <div className="inline-flex origin-center animate-orbit-slow-reverse group-hover/stage:[animation-play-state:paused]">
                            <SkillIconButton
                                skill={skill}
                                showSkillPopover={showSkillPopover}
                                className="pointer-events-auto"
                                style={{ width: iconSize, height: iconSize, minWidth: iconSize, minHeight: iconSize }}
                            />
                        </div>
                    </div>
                </div>
            );
        });

    return (
        <div className="flex w-full shrink-0 flex-col items-center" id={data?.id}>
            <div className="group/stage w-full max-w-[300px] px-2 lg:hidden">
                <div className="mb-5 flex w-full justify-center">
                    <span className="flex min-h-11 min-w-[8.5rem] items-center justify-center rounded-lg border border-white/20 bg-page/80 px-4 py-2 text-center text-sm font-semibold uppercase leading-normal tracking-wide text-white shadow-md backdrop-blur-sm">
                        {data.title}
                    </span>
                </div>
                <div className="relative mx-auto shrink-0" style={{ width: stageSm, height: stageSm }}>
                    <div
                        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        aria-hidden
                    >
                        <div className="relative h-0 w-0 origin-center animate-orbit-slow group-hover/stage:[animation-play-state:paused]">
                            {orbitArm(rSm, iconSm)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="group/stage relative mx-auto hidden shrink-0 lg:block" style={{ width: stageLg, height: stageLg }}>
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex w-[min(100%,11rem)] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <span className="flex items-center justify-center rounded-lg border border-white/20 bg-page/80 px-4 py-1 text-center text-xs font-semibold uppercase leading-normal tracking-wide text-white shadow-md backdrop-blur-md xl:min-h-[2rem] xl:text-sm">
                        {data.title}
                    </span>
                </div>
                <div
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    aria-hidden
                >
                    <div className="relative h-0 w-0 origin-center animate-orbit-slow group-hover/stage:[animation-play-state:paused]">
                        {orbitArm(rLg, iconLg)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RotatingCircle;
