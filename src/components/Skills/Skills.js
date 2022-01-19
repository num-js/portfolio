import React from 'react';
import Tech from './Tech/Tech';

const Skills = () => {
    return (
        <>
            <section class="text-gray-600 body-font lg:mt-10">
                <div align="center">
                    <h1 class="text-2xl font-medium text-white title-font mb-2">Tech Stack</h1>
                </div>

                {/* <Tech /> */}
                <section className="tech-section">
                    <div className="w-full h-full">

                        <Tech
                            pic="../icons/skills/nextjs.png"
                            divStyles={{ width: '150px', height: '80px', padding: '0px 15px', top: '-6%', left: '50%' }}
                        />

                        <img
                            alt="numan ahmed"
                            class="object-cover object-center imgJump txtLogo"
                            src="../icons/skills/js.webp"
                            style={{ width: "100px", transform: "skewY(14deg)", filter: "drop-shadow(1rem -1rem 2px black)", position: 'relative', left: '60%' }}
                        />

                        <Tech
                            pic="../icons/skills/react.webp"
                            divStyles={{ width: '100px', height: '100px', borderRadius: '100%', background: 'linear-gradient(120deg, #1D976C, #2c3e50)', top: '-119px', left: '10%', }}
                        />

                        <Tech
                            pic="../icons/skills/nodejs-full.png"
                            divStyles={{ width: '200px', height: '120px', padding: '5px 15px', background: '#455d52', top: '-80px', left: '30%' }}
                        />

                        <Tech
                            pic="../icons/skills/redux.svg"
                            divStyles={{ width: '100px', height: '100px', borderRadius: '100%', padding: '5px 10px', top: '-50px', left: '15%', }}
                        />

                        <Tech
                            pic="../icons/skills/material-ui.png"
                            picHeight=''
                            divStyles={{ width: '100px', height: '58px', top: '-145px', left: '60%', }}
                        />

                        <Tech
                            pic="../icons/skills/github.webp"
                            divStyles={{ borderRadius: '100%', background: 'linear-gradient(120deg, white, gray)', top: '-90px', left: '50%' }}
                        />

                        <Tech
                            pic="../icons/skills/git.svg"
                            divStyles={{ width: '70px', height: '70px', top: '-220px', left: '20%' }}
                        />

                        <Tech
                            pic="../icons/skills/tailwind-css.png"
                            divStyles={{ top: '-175px', left: '35%', width: '70px', height: '70px', borderRadius: '100%', background: 'linear-gradient(120deg, #1D976C, #2c3e50)' }}
                        />

                        <img
                            alt="numan ahmed"
                            class="object-cover object-center imgJump txtLogo"
                            src="../icons/skills/vs-code.webp"
                            style={{ width: "100px", transform: "skewY(14deg)", filter: "drop-shadow(1rem -1rem 2px black)", position: 'relative', left: '50%', top: '-165px' }}
                        />

                        <Tech
                            pic="../icons/skills/rest-api.png"
                            divStyles={{ top: '-175px', left: '10%', height: '130px', background: 'linear-gradient(120deg, white, #111827)', padding: '5px' }}
                        />

                        <Tech
                            pic="../icons/skills/mongodb.png"
                            divStyles={{ top: '-205px', left: '60%', width: '114px', height: '100%', }}
                        />

                        <Tech
                            pic="../icons/skills/express-js.png"
                            divStyles={{ top: '-266px', left: '17%', height: '100%', background: '#000000' }}
                        />

                        <Tech
                            pic="../icons/skills/aws-s3.png"
                            divStyles={{ top: '-190px', left: '45%', height: '90px', width: '140px', padding: '8px 0px' }}
                        />

                        <Tech
                            pic="../icons/skills/postman.svg"
                            divStyles={{ top: '-185px', left: '20%', borderRadius: '100%', height: '90px', width: '90px' }}
                        />

                        <Tech
                            pic="../icons/skills/socket-io.svg"
                            divStyles={{ top: '-185px', left: '50%', borderRadius: '100%', height: '90px', width: '90px', background: 'white' }}
                        />
                    </div>

                </section>
            </section>
        </>
    )
}

export default Skills;