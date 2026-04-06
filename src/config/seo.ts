/** Canonical site URL (no trailing slash) — update if the primary domain changes */
export const SITE_URL = 'https://numan-dev.web.app';

export const PERSON_PRIMARY_NAME = 'Md Numan Ahmed';
export const PERSON_SHORT_NAME = 'Numan Ahmed';

/** Used in titles and structured data */
export const SITE_TITLE_TEMPLATE = `${PERSON_PRIMARY_NAME} | Full Stack & Frontend Software Engineer`;

export const DEFAULT_DESCRIPTION =
    `${PERSON_PRIMARY_NAME} (${PERSON_SHORT_NAME}) is a software engineer and full stack developer from West Bengal, India. ` +
    `Portfolio showcasing work as a frontend engineer, backend developer, and MERN stack engineer — React, Node.js, TypeScript, and modern web apps.`;

export const KEYWORDS =
    [
        'Md Numan Ahmed',
        'Numan Ahmed',
        'Numan software engineer',
        'Numan engineer',
        'Numan developer',
        'Numan frontend engineer',
        'Numan full stack',
        'Numan full stack developer',
        'frontend developer India',
        'full stack developer Kolkata',
        'West Bengal software engineer',
        'MERN stack developer',
        'React developer portfolio',
        'TypeScript developer',
        'web developer portfolio',
    ].join(', ');

export type RouteSeoEntry = {
    title: string;
    description: string;
};

export const ROUTE_SEO: Record<string, RouteSeoEntry> = {
    '/': {
        title: SITE_TITLE_TEMPLATE,
        description: DEFAULT_DESCRIPTION,
    },
    '/experiences': {
        title: `Work experience | ${PERSON_PRIMARY_NAME} — Software engineer`,
        description: `${PERSON_PRIMARY_NAME} professional experience as a senior software engineer and full stack developer — companies, tech stack, and roles in frontend and backend engineering.`,
    },
    '/skills': {
        title: `Tech stack & skills | ${PERSON_PRIMARY_NAME} — Frontend & full stack`,
        description: `Technologies and tools ${PERSON_SHORT_NAME} uses as a frontend engineer and full stack developer: React, Node.js, TypeScript, databases, cloud, and more.`,
    },
    '/projects': {
        title: `Projects | ${PERSON_PRIMARY_NAME} — Web & full stack portfolio`,
        description: `Selected projects by ${PERSON_PRIMARY_NAME}: full stack and frontend applications, demos, and engineering work.`,
    },
    '/academics': {
        title: `Education & academics | ${PERSON_PRIMARY_NAME}`,
        description: `Academic background and qualifications for ${PERSON_SHORT_NAME}, software engineer and developer based in India.`,
    },
    '/contact-me': {
        title: `Contact | ${PERSON_PRIMARY_NAME}`,
        description: `Get in touch with ${PERSON_SHORT_NAME} — software engineer and full stack developer for collaboration and opportunities.`,
    },
};

export function getSeoForPath(pathname: string): RouteSeoEntry {
    return ROUTE_SEO[pathname] ?? ROUTE_SEO['/'];
}

export function absoluteUrl(pathname: string): string {
    if (!pathname || pathname === '/') {
        return `${SITE_URL}/`;
    }
    return `${SITE_URL}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
}
