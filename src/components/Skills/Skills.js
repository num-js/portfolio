import React from 'react';

const Skills = () => {
    return (
        <>
            <section class="text-gray-600 body-font lg:mt-10">
                <div align="center">
                    <h1 class="text-2xl font-medium text-white title-font mb-2">Skills</h1>
                </div>

                {/* <div align="left">
                    <div class="mt-5">
                        <div class="-my-8 divide-y-2 ">

                            <div class="flex flex-wrap -mx-px overflow-hidden sm:-mx-px md:-mx-px lg:-mx-px xl:-mx-px pt-10">

                                <div class=" py-8 w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', left: '0%', top: '-10%' }}>
                                        <img alt="numan ahmed" src="../icons/skills/js.webp" width="50%" />
                                    </div>
                                </div>

                                <div class="py-8 w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative' }}>
                                        <img alt="numan ahmed" src="../icons/skills/nextjs.png" width="50%%"
                                            style={{ width: "180px", transform: "skewY(-14deg)", filter: "drop-shadow(1rem -1rem 2px black)" }}
                                            className="imgJump"
                                        />
                                    </div>
                                </div>

                                <div class=" py-8 w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', left: '0%', top: '-10%' }}>
                                        <img alt="numan ahmed" src="../icons/skills/react.webp" width="50%" />
                                    </div>
                                </div>

                                <div class="w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', left: '0%' }}>
                                        <img alt="numan ahmed" src="../icons/skills/nodejs.png" width="50%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/expressjs.png" width="50%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative' }}>
                                        <img alt="numan ahmed" src="../icons/skills/nodejs-full.png" width="50%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative' }}>
                                        <img class="imgJump" alt="numan ahmed" src="../icons/skills/rest-api.png" width="50%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div
                                        style={{ position: 'relative' }}
                                    >
                                        <img alt="numan ahmed" src="../icons/skills/mongodb.png" width="50%"

                                        />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', left: '50%' }}>
                                        <img alt="numan ahmed" src="../icons/skills/redux.svg" width="50%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4 justify-end">
                                    <div style={{ position: 'relative', left: '40%', top: '10%' }}>
                                        <img alt="numan ahmed" src="../icons/skills/github.webp" width="40%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/material-ui.png" width="100%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/aws-s3.png" width="50%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/html.svg" width="50%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/tailwind-css.png" width="50%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/git.svg" width="50%" />
                                    </div>
                                </div>

                                <div class=" w-1/2 overflow-hidden sm:my-px sm:px-px sm:w-1/3 md:my-px md:px-px md:w-1/3 lg:my-px lg:px-px lg:w-1/4 xl:my-px xl:px-px xl:w-1/4">
                                    <div style={{ position: 'relative', }}>
                                        <img alt="numan ahmed" src="../icons/skills/vs-code.webp" width="50%" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}
            </section>


            <section class="text-gray-400 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">

                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img
                                    alt="numan ahmed"
                                    class="object-cover object-center imgJump txtLogo"
                                    src="../icons/skills/js.webp"
                                    width="50%"
                                    style={{ width: "180px", transform: "skewY(14deg)", filter: "drop-shadow(1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img
                                    alt="numan-ahmed" class="object-cover object-center block imgJump"
                                    src="../icons/skills/nextjs.png"
                                    width="50%"
                                    style={{ width: "180px", transform: "skewY(-14deg)", filter: "drop-shadow(1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div class="md:p-2 p-1">
                                <div className="" align="center">
                                    <img
                                        alt="numan-ahmed"
                                        class="object-cover object-center block p-auto imgJump"
                                        src="../icons/skills/rest-api.svg"
                                        width="50%"
                                        style={{ transform: "rotate(-7deg)", filter: "drop-shadow(0rem -4rem 2px black)" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img
                                    alt="numan-ahmed"
                                    class="object-cover object-center block m-auto imgJump"
                                    src="../icons/skills/nodejs-full.png"
                                    width="50%"
                                />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img
                                    alt="numan-ahmed"
                                    class="object-cover object-center block"
                                    src="../icons/skills/react.webp"
                                />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img
                                    alt="numan-ahmed"
                                    class=" object-cover object-center block"
                                    src="../icons/skills/nodejs.png"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img
                                    alt="numan ahmed"
                                    class="object-cover object-center block"
                                    src="../icons/skills/expressjs.png"
                                    width="50%"
                                // style={{ width: "180px", transform: "skewY(14deg)", filter: "drop-shadow(1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img
                                    alt="numan-ahmed" class="object-cover object-center block"
                                    src="../icons/skills/mongodb.png"
                                    width="50%"
                                // style={{ width: "180px", transform: "skewY(14deg)", filter: "drop-shadow(-1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div class="md:p-2 p-1">
                                <div align="center">
                                    <img
                                        alt="numan-ahmed"
                                        class="object-cover object-center block p-auto"
                                        src="../icons/skills/github.webp"
                                        width="60%"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img
                                    alt="numan-ahmed"
                                    class="object-cover object-center block m-auto"
                                    src="../icons/skills/redux.svg"
                                    width="30%"
                                />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img
                                    alt="numan-ahmed"
                                    class="object-cover object-center block"
                                    src="../icons/skills/material-ui.png"
                                />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img
                                    alt="numan-ahmed"
                                    class=" object-cover object-center block"
                                    src="../icons/skills/tailwind-css.png"
                                    width="50%"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2">
                                <img
                                    alt="numan ahmed"
                                    class="object-cover object-center block"
                                    src="../icons/skills/git.svg"
                                    width="50%"
                                // style={{ width: "180px", transform: "skewY(14deg)", filter: "drop-shadow(1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img
                                    alt="numan-ahmed" class="object-cover object-center block"
                                    src="../icons/skills/vs-code.webp"
                                    width="50%"
                                // style={{ width: "180px", transform: "skewY(14deg)", filter: "drop-shadow(-1rem -1rem 2px black)" }}
                                />
                            </div>
                            <div class="md:p-2 p-1">
                                <div align="center">
                                    {/* <img
                                        alt="numan-ahmed"
                                        class="object-cover object-center block p-auto"
                                        src="../icons/skills/aws-s3.png"
                                        width="60%"
                                    /> */}
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-full">
                                <img
                                    alt="numan-ahmed"
                                    class="object-cover object-center block m-auto"
                                    src="../icons/skills/aws-s3.png"
                                    width="50%"
                                />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                {/* <img
                                    alt="numan-ahmed"
                                    class="object-cover object-center block"
                                    src="../icons/skills/material-ui.png"
                                /> */}
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                {/* <img
                                    alt="numan-ahmed"
                                    class=" object-cover object-center block"
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