const About = () => {
    return (
        <section id="about" className="section-container">
            <h2 className="section-title">About Me</h2>

            <div className="max-w-4xl mx-auto">
                <div className="card">
                    <div className="space-y-6 text-slate-300 leading-relaxed">
                        <p className="text-lg">
                            I'm an aspiring <span className="text-blue-400 font-semibold">Full-Stack Developer</span> specializing
                            in building scalable and high-performance web applications. Currently pursuing my
                            <span className="text-cyan-400 font-semibold"> B.Tech in Computer Science and Engineering</span> at
                            Tula's Institute (Oct 2022 – May 2026).
                        </p>

                        <p className="text-lg">
                            With hands-on experience across the full development lifecycle, I'm proficient in modern technologies
                            including <span className="text-blue-400 font-semibold">React.js, Node.js & Express.js</span>.
                            I'm passionate about clean code, performance optimization, and delivering seamless user experiences.
                        </p>

                        <p className="text-lg">
                            From designing responsive frontends to managing backend APIs and real-time databases, I bring a
                            comprehensive skill set to every project. I'm always eager to learn new technologies and take on
                            challenging problems.
                        </p>

                        <div className="pt-6 border-t border-slate-700">
                            <h3 className="text-xl font-semibold text-blue-400 mb-4">Soft Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Communication', 'Leadership', 'Public Speaking', 'Content Writing'].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
