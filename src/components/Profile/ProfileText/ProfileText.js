import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import socialMediaIconURL from '../../../assets/data/socialMediaData';
import './profileText.scss';

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
            var delta = 200 - Math.random() * 100;

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
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);

        return () => clearTimeout(prosTimer);
    }, []);

    return (
        <div className="textSpace">
            <div className="text-div">
                <p className="mainText txt-gradient txt-gradient-1">Hey I'm </p>
                <p className="mainText main txt-gradient txt-gradient-2">MD. Numan Ahmed</p>
                <div className="font-serif typing-txt-div" style={{ margin: '10px auto' }}>
                    <span style={{ color: 'chartreuse', fontWeight: 'bolder' }} href="" className="typewrite" data-period="2000"
                        data-type='[ "Full Stack", "Front-End", "Back-End" ]'>
                        <span className="wrap"></span>
                    </span>
                    <span className="txtShadow" style={{ color: '#fffb00' }}> Developer</span>
                </div>
            </div>
            <div className="skill-badges">
                {
                    socialMediaIconURL.map(({ icon, link }, index) => (
                        <Link key={index} to={{ pathname: link }} target="_blank">
                            <div
                                className="social-links"
                                style={{ backgroundImage: `url(${icon})` }}
                            />
                        </Link>
                    ))
                }
            </div>
            <div className="font-serif quote-txt">
                <h3>I write <span style={{ color: 'chartreuse' }}>Code</span>, that lives on the <span style={{ color: '#fffb00' }}>Web</span>.</h3>
            </div>
        </div>
    )
}

export default ProfileText;