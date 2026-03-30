import React from 'react';

const Skills = () => {
    return (
        <>
            <section className="text-gray-600 body-font lg:mt-10">
                <div align="center">
                    <h1 className="mb-2 text-2xl font-medium text-white title-font">Skills</h1>
                </div>

                {/* <div align="left">
                    <div className="mt-5">
                        <div className="-my-8 divide-y-2 ">

                            <div className="flex flex-wrap pt-10 -mx-px overflow-hidden sm:-mx-px md:-mx-px lg:-mx-px xl:-mx-px">

                                <div className="w-1/2 py-8 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', left: '0%', top: '-10%' }}>
                                        <img alt="numan ahmed" src="../icons/skills/js.webp" width="50%" />
                                    </div>
                                </div>

                                <div className="w-1/2 py-8 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative' }}>
                                        <img alt="numan ahmed" src="../icons/skills/nextjs.png" width="50%%"
                                            style={{ width: "180px", transform: "skewY(-14deg)", filter: "drop-shadow(1rem -1rem 2px black)" }}
                                            className="imgJump"
                                        />
                                    </div>
                                </div>

                                <div className="w-1/2 py-8 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', left: '0%', top: '-10%' }}>
                                        <img alt="numan ahmed" src="../icons/skills/react.webp" width="50%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', left: '0%' }}>
                                        <img alt="numan ahmed" src="../icons/skills/nodejs.png" width="50%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/expressjs.png" width="50%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative' }}>
                                        <img alt="numan ahmed" src="../icons/skills/nodejs-full.png" width="50%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative' }}>
                                        <img className="imgJump" alt="numan ahmed" src="../icons/skills/rest-api.png" width="50%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div
                                        style={{ position: 'relative' }}
                                    >
                                        <img alt="numan ahmed" src="../icons/skills/mongodb.png" width="50%"

                                        />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', left: '50%' }}>
                                        <img alt="numan ahmed" src="../icons/skills/redux.svg" width="50%" />
                                    </div>
                                </div>

                                <div className="justify-end w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', left: '40%', top: '10%' }}>
                                        <img alt="numan ahmed" src="../icons/skills/github.webp" width="40%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/material-ui.png" width="100%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/aws-s3.png" width="50%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/html.svg" width="50%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/tailwind-css.png" width="50%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/git.svg" width="50%" />
                                    </div>
                                </div>

                                <div className="w-1/2 overflow-hidden  sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/vs-code.webp" width="50%" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}
            </section>


            <section className="text-gray-400 body-font">
                <div className="container flex flex-wrap px-5 py-24 mx-auto">

                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="numan ahmed"
                                    className="object-cover object-center imgJump txtLogo"
                                    src="../icons/skills/js.webp"
                                    width="50%"
                                    style={{ width: "180px", transform: "skewY(14deg)", filter: "drop-shadow(1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="numan-ahmed" className="block object-cover object-center imgJump"
                                    src="../icons/skills/nextjs.png"
                                    width="50%"
                                    style={{ width: "180px", transform: "skewY(-14deg)", filter: "drop-shadow(1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div className="p-1 md:p-2">
                                <div className="" align="center">
                                    <img
                                        alt="numan-ahmed"
                                        className="block object-cover object-center p-auto imgJump"
                                        src="../icons/skills/rest-api.svg"
                                        width="50%"
                                        style={{ transform: "rotate(-7deg)", filter: "drop-shadow(0rem -4rem 2px black)" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="numan-ahmed"
                                    className="block object-cover object-center m-auto imgJump"
                                    src="../icons/skills/nodejs-full.png"
                                    width="50%"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="numan-ahmed"
                                    className="block object-cover object-center"
                                    src="../icons/skills/react.webp"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="numan-ahmed"
                                    className="block object-cover object-center "
                                    src="../icons/skills/nodejs.png"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="numan ahmed"
                                    className="block object-cover object-center"
                                    src="../icons/skills/expressjs.png"
                                    width="50%"
                                // style={{ width: "180px", transform: "skewY(14deg)", filter: "drop-shadow(1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="numan-ahmed" className="block object-cover object-center"
                                    src="../icons/skills/mongodb.png"
                                    width="50%"
                                // style={{ width: "180px", transform: "skewY(14deg)", filter: "drop-shadow(-1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div className="p-1 md:p-2">
                                <div align="center">
                                    <img
                                        alt="numan-ahmed"
                                        className="block object-cover object-center p-auto"
                                        src="../icons/skills/github.webp"
                                        width="60%"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="numan-ahmed"
                                    className="block object-cover object-center m-auto"
                                    src="../icons/skills/redux.svg"
                                    width="30%"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="numan-ahmed"
                                    className="block object-cover object-center"
                                    src="../icons/skills/material-ui.png"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="numan-ahmed"
                                    className="block object-cover object-center "
                                    src="../icons/skills/tailwind-css.png"
                                    width="50%"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap -m-1 md:-m-2">
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="numan ahmed"
                                    className="block object-cover object-center"
                                    src="../icons/skills/git.svg"
                                    width="50%"
                                // style={{ width: "180px", transform: "skewY(14deg)", filter: "drop-shadow(1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <img
                                    alt="numan-ahmed" className="block object-cover object-center"
                                    src="../icons/skills/vs-code.webp"
                                    width="50%"
                                // style={{ width: "180px", transform: "skewY(14deg)", filter: "drop-shadow(-1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div className="p-1 md:p-2">
                                <div align="center">
                                    {/* <img
                                        alt="numan-ahmed"
                                        className="block object-cover object-center p-auto"
                                        src="../icons/skills/aws-s3.png"
                                        width="60%"
                                    /> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="w-full p-1 md:p-2">
                                <img
                                    alt="numan-ahmed"
                                    className="block object-cover object-center m-auto"
                                    src="../icons/skills/aws-s3.png"
                                    width="50%"
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                {/* <img
                                    alt="numan-ahmed"
                                    className="block object-cover object-center"
                                    src="../icons/skills/material-ui.png"
                                /> */}
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                {/* <img
                                    alt="numan-ahmed"
                                    className="block object-cover object-center "
                                    src="../icons/skills/tailwind-css.png"
                                /> */}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Skills;