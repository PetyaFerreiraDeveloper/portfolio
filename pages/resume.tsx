
import Bar from "../components/Bar"
import { languages, tools } from "../data"

const resume = () => {
    return (
        <div className="px-6 py-2">
            {/* education and experience */}
            <div className="grid gap-6 md:grid-cols-2">
                <div>
                    <h4 className="my-3 text-2xl font-bold">Education</h4>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Software Engineering</h5>
                        <p className="font-semibold">Software University (2021-2023)</p>
                        <p className="my-3">I am currently pursuing a Software Engineer Degree with focus on JavaScript from Software University</p>
                    </div>
                </div>
                <div>
                    <h4 className="my-3 text-2xl font-bold">Experience</h4>
                    <div>
                        <h5 className="my-2 text-xl font-bold">Frontend Developer Intern</h5>
                        <p className="font-semibold">Sumondo (2021)</p>
                        <p className="my-3">Helped with refacturing their code base</p>
                    </div>
                </div>
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
        </div>
    )
}

export default resume


