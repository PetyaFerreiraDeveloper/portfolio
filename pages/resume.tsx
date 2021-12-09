
import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from 'framer-motion';
import { fadeInUp, routeAnimation } from '../animations'
import React from "react";
import Head from "next/head";

const resume = () => {

    return (
        <motion.div
            className="px-6 py-2"
            variants={routeAnimation}
            initial='initial'
            animate='animate'
            exit='exit'

        >
            <Head>
                <title>Web Developer | Resume</title>
            </Head>
            {/* education and experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                    variants={fadeInUp}
                    initial='initial'
                    animate='animate'
                >
                    <h4 className="my-3 text-2xl font-bold">Education</h4>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Software Engineering</h5>
                        <p className="font-semibold">Software University (2021-2023)</p>
                        <p className="my-3">I am currently pursuing a Software Engineer Degree with focus on JavaScript from Software University</p>
                    </div>
                </motion.div>
                <motion.div
                    variants={fadeInUp}
                    initial='initial'
                    animate='animate'
                >
                    <h4 className="my-3 text-2xl font-bold">Experience</h4>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Frontend Developer Intern</h5>
                        <p className="font-semibold">Sumondo (2021)</p>
                        <p className="my-3">Helped with refacturing their code base</p>
                    </div>
                </motion.div>
            </div>

            {/* languages and tools */}

            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h5 className="my-3 text-2xl font-bold">Languages and Frameworks</h5>
                    <div className="my-2">
                        {
                            languages.map(Language => (
                                <Bar data={Language} key={Language.name} />
                            ))
                        }
                    </div>
                </div>
                <div>
                    <h5 className="my-3 text-2xl font-bold">Tools and Softwares</h5>
                    <div className="my-2">
                        {
                            tools.map(tool => (
                                <Bar data={tool} key={tool.name} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume


