const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['JavaScript', 'Java'],
            icon: '💻'
        },
        {
            title: 'Frameworks & Libraries',
            skills: ['HTML', 'CSS', 'Tailwind CSS', 'React.js', 'Node.js'],
            icon: '⚛️'
        },
        {
            title: 'Databases',
            skills: ['MongoDB'],
            icon: '🗄️'
        },
        {
            title: 'Tools & Platforms',
            skills: ['GitHub', 'VS Code'],
            icon: '🛠️'
        }
    ];

    return (
        <section id="skills" className="section-container bg-slate-900/50">
            <h2 className="section-title">Skills & Technologies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {skillCategories.map((category, idx) => (
                    <div
                        key={idx}
                        className="card group"
                    >
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            {category.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-blue-400 mb-4">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIdx) => (
                                <span
                                    key={skillIdx}
                                    className="skill-tag"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
