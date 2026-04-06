import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
    absoluteUrl,
    getSeoForPath,
    KEYWORDS,
    PERSON_PRIMARY_NAME,
    PERSON_SHORT_NAME,
    SITE_URL,
} from '../../config/seo';

const DEFAULT_OG_IMAGE = `${SITE_URL}/images/hero.png`;

const Seo = () => {
    const { pathname } = useLocation();
    const { title, description } = getSeoForPath(pathname);
    const canonical = absoluteUrl(pathname);

    return (
        <Helmet>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={KEYWORDS} />
            <meta name="author" content={PERSON_PRIMARY_NAME} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <link rel="canonical" href={canonical} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={`${PERSON_PRIMARY_NAME} — Portfolio`} />
            <meta property="og:locale" content="en_IN" />
            <meta property="og:url" content={canonical} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={DEFAULT_OG_IMAGE} />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="300" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonical} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
        </Helmet>
    );
};

export default Seo;
