const Projects = () => {
    const projects = [
        {
            title: 'EduAssist',
            description: 'Built a full-stack web application for personalized math assignments and enhancing student engagement.',
            features: [
                'Integrated analytics dashboards for teachers to track performance and deliver actionable insights'
            ],
            technologies: ['React.js', 'TailwindCSS', 'JavaScript', 'Node.js', 'Firebase']
        },
        {
            title: 'College CRM',
            description: 'Developed a full-stack College CRM system to manage student, teacher, and course data efficiently.',
            features: [
                'Integrated MongoDB for secure, real-time data management and role-based dashboards'
            ],
            technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB']
        },
        {
            title: 'Games (StonePapersScissor, TicTacToe)',
            description: 'Built interactive web games with responsive design.',
            features: [
                'Implemented game logic ensuring smooth gameplay'
            ],
            technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB']
        }
    ];

    return (
        <section id="projects" className="section-container bg-slate-900/50">
            <h2 className="section-title">Featured Projects</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="card group"
                    >
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                            <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </div>
                        </div>

                        <p className="text-slate-300 mb-4 leading-relaxed">
                            {project.description}
                        </p>

                        <ul className="space-y-2 mb-6">
                            {project.features.map((feature, featureIdx) => (
                                <li
                                    key={featureIdx}
                                    className="flex items-start gap-2 text-slate-400 text-sm"
                                >
                                    <span className="text-blue-400 mt-1">▹</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                            {project.technologies.map((tech, techIdx) => (
                                <span
                                    key={techIdx}
                                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs text-blue-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
