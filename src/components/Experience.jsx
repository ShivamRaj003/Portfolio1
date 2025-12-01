const Experience = () => {
    const experiences = [
        {
            title: 'Web Developer Intern',
            company: 'Urgent It Solution',
            location: 'Remote',
            period: 'Feb 2025 – ongoing',
            achievements: [
                'Worked on existing web application for Spark Tech Solutions, a live website promoting IT and marketing related services.',
                'Built responsive front-end interfaces, ensuring a seamless user experience and reliable site performance.'
            ]
        },
        {
            title: 'Web Dev Intern',
            company: 'CodSoft',
            location: 'Remote',
            period: 'June 2024 – July 2024',
            achievements: [
                'Developed responsive landing pages, tribute pages, and interactive calculator applications',
                'Designed ensuring clean UI design and smooth user experience'
            ]
        }
    ];

    return (
        <section id="experience" className="section-container">
            <h2 className="section-title">Work Experience</h2>

            <div className="max-w-4xl mx-auto space-y-6">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="card">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-blue-400">
                                    {exp.title}
                                </h3>
                                <p className="text-lg text-cyan-400 font-semibold">
                                    {exp.company}
                                </p>
                            </div>
                            <div className="text-slate-400 text-sm sm:text-right mt-2 sm:mt-0">
                                <p>{exp.period}</p>
                                <p>{exp.location}</p>
                            </div>
                        </div>

                        <ul className="space-y-3">
                            {exp.achievements.map((achievement, achIdx) => (
                                <li
                                    key={achIdx}
                                    className="flex items-start gap-3 text-slate-300"
                                >
                                    <span className="text-blue-400 mt-1">▹</span>
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
