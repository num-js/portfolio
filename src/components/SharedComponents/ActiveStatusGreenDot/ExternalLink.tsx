type ExternalLinkProps = {
    link: string;
};

const ExternalLink = ({ link }: ExternalLinkProps) => {
    return (
        <a href={link} target="_BLANK" rel="noreferrer">
            <img alt="numan ahmed" src="../icons/external-link.svg" width="24px" />
        </a>
    );
};

export default ExternalLink;
