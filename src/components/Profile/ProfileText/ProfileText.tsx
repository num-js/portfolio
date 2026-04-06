import { useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const socialLinks = [
    { icon: <GitHubIcon />, link: 'https://github.com/mdnmnahmed', label: 'GitHub' },
    { icon: <EmailIcon />, link: 'mailto:mdnmnahmed@gmail.com', label: 'Email' },
    { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/numan-dev/', label: 'LinkedIn' },
    { icon: <PhoneIcon />, link: 'tel:9647664654', label: 'Phone' },
    { icon: <WhatsAppIcon />, link: 'https://wa.me/qr/3PE2YWW6M7F5L1', label: 'WhatsApp' },
];

const ProfileText = () => {
    useEffect(() => {
        let prosTimer: ReturnType<typeof setTimeout> | undefined;

        class TxtType {
            el: HTMLElement;
            toRotate: string[];
            loopNum = 0;
            period: number;
            txt = '';
            isDeleting = false;

            constructor(el: HTMLElement, toRotate: string[], period: string | null) {
                this.el = el;
                this.toRotate = toRotate;
                this.period = parseInt(period ?? '', 10) || 2000;
                this.tick();
            }

            tick() {
                const i = this.loopNum % this.toRotate.length;
                const fullTxt = this.toRotate[i];

                if (this.isDeleting) {
                    this.txt = fullTxt.substring(0, this.txt.length - 1);
                } else {
                    this.txt = fullTxt.substring(0, this.txt.length + 1);
                }

                this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

                let delta = 180 - Math.random() * 80;

                if (this.isDeleting) {
                    delta /= 2;
                }

                if (!this.isDeleting && this.txt === fullTxt) {
                    delta = this.period;
                    this.isDeleting = true;
                } else if (this.isDeleting && this.txt === '') {
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                }

                prosTimer = setTimeout(() => {
                    this.tick();
                }, delta);
            }
        }

        const elements = document.getElementsByClassName('typewrite');
        for (let i = 0; i < elements.length; i++) {
            const el = elements[i] as HTMLElement;
            const toRotate = el.getAttribute('data-type');
            const period = el.getAttribute('data-period');
            if (toRotate) {
                new TxtType(el, JSON.parse(toRotate) as string[], period);
            }
        }

        return () => clearTimeout(prosTimer);
    }, []);

    return (
        <div className="z-[2] flex max-w-[480px] flex-col items-start max-md:max-w-full max-md:items-center max-md:px-5 max-md:text-center">
            <div className="mb-2 text-[1.4rem] font-normal tracking-wide text-primary max-md:text-[1.1rem] text-left w-full">
                Hey I'm
            </div>

            <div className="mb-4 flex flex-col items-start max-md:items-center">
                <h1 className="m-0 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-[3.8rem] font-extrabold leading-[1.05] tracking-tight text-transparent drop-shadow-[0_0_18px_rgba(0,212,200,0.35)] max-lg:text-5xl max-md:text-[2.4rem] max-[480px]:text-[2rem]">
                    MD. Numan Ahmed
                </h1>
            </div>

            <div className="mb-5 flex items-center font-mono text-xl font-medium text-white max-md:flex-wrap max-md:justify-center max-md:text-base">
                <span className="font-bold text-primary">&lt;&nbsp;</span>
                <span
                    className="typewrite"
                    data-period="2000"
                    data-type='["Frontend Developer", "Full Stack Developer", "Backend Developer"]'
                >
                    <span className="wrap"></span>
                </span>
                <span className="font-bold text-primary">&nbsp;/&gt;</span>
            </div>

            <p className="mb-7 max-w-[400px] text-[0.95rem] font-normal leading-relaxed text-white/65 max-md:mb-5 max-md:max-w-[320px] max-md:text-[0.9rem]">
                I&apos;m <strong className="font-semibold text-white/85">Md Numan Ahmed</strong>, a software engineer and
                full stack developer from India. I write <span className="font-semibold text-primary">code</span> for
                the <span className="font-semibold text-primary">web</span> — frontend engineering, backends, and
                polished UI with strong performance.
            </p>

            <div className="flex flex-wrap gap-3 max-md:justify-center">
                {socialLinks.map(({ icon, link, label }, index) => (
                    <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary/35 bg-primary/10 text-white/75 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/[0.18] hover:text-primary hover:shadow-primary-glow max-md:h-10 max-md:w-10 [&_svg]:text-[1.25rem] max-md:[&_svg]:text-[1.1rem]"
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProfileText;
