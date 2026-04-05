import React, { useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './profileText.scss';

const socialLinks = [
    { icon: <GitHubIcon />, link: "https://github.com/mdnmnahmed", label: "GitHub" },
    { icon: <EmailIcon />, link: "mailto:mdnmnahmed@gmail.com", label: "Email" },
    { icon: <LinkedInIcon />, link: "https://www.linkedin.com/in/numan-dev/", label: "LinkedIn" },
    { icon: <PhoneIcon />, link: "tel:9647664654", label: "Phone" },
    { icon: <WhatsAppIcon />, link: "https://wa.me/qr/3PE2YWW6M7F5L1", label: "WhatsApp" },
];

const ProfileText = () => {

    useEffect(() => {
        let prosTimer = null;
        var TxtType = function (el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function () {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

            var that = this;
            var delta = 180 - Math.random() * 80;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            prosTimer = setTimeout(function () {
                that.tick();
            }, delta);
        };

        var elements = document.getElementsByClassName('typewrite');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

        return () => clearTimeout(prosTimer);
    }, []);

    return (
        <div className="hero-text-space">
            <div className="hero-greeting">Hey I'm</div>

            <div className="hero-name">
                <span className="hero-name-line">MD. Numan</span>
                <span className="hero-name-line">Ahmed</span>
            </div>

            <div className="hero-role">
                <span className="role-bracket">&lt;&nbsp;</span>
                <span
                    className="typewrite"
                    data-period="2000"
                    data-type='["Frontend Developer", "Full Stack Developer", "Backend Developer"]'
                >
                    <span className="wrap"></span>
                </span>
                <span className="role-bracket">&nbsp;/&gt;</span>
            </div>

            <p className="hero-bio">
                I write <span className="bio-highlight">Code</span>, that lives on the{' '}
                <span className="bio-highlight">Web</span>. Building digital experiences
                with focus on modern UI and performance.
            </p>

            <div className="hero-social">
                {socialLinks.map(({ icon, link, label }, index) => (
                    <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="social-btn"
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProfileText;
