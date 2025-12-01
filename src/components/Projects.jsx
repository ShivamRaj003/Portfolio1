import { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null); // 'featured' | 'group' | null

    const featuredProjects = [
        {
            title: 'Spark Tech Solutions',
            description: 'A live website promoting IT and marketing related services, engineered with React.js for dynamic interactivity and Tailwind CSS for a modern, responsive design.',
            features: [
                'Built responsive front-end interfaces ensuring a seamless user experience'
            ],
            technologies: ['React.js', 'Tailwind CSS']
        },
        {
            title: 'Background Changer',
            description: 'A dynamic background color changer application built with React, demonstrating state management and event handling.',
            features: [
                'Instant background color updates',
                'User-friendly interface'
            ],
            technologies: ['React.js', 'Tailwind CSS']
        },
        {
            title: 'Fitness Trainer Website',
            description: 'A high-energy website template for fitness professionals, featuring workout programs, success stories, and booking capabilities.',
            features: [
                'Responsive modern design',
                'Service showcase sections'
            ],
            technologies: ['React.js', 'Tailwind CSS']
        },
        {
            title: 'Photography Portfolio',
            description: 'A minimalist, gallery-focused portfolio designed to showcase photography work with elegance and style.',
            features: [
                'Masonry image grid',
                'Immersive viewing experience'
            ],
            technologies: ['React.js', 'Tailwind CSS']
        },
        {
            title: 'Restaurant Website',
            description: 'An appetizing website template for restaurants, featuring digital menus, location info, and reservation calls-to-action.',
            features: [
                'Interactive menu display',
                'Mobile-first responsive layout'
            ],
            technologies: ['React.js', 'Tailwind CSS']
        },
        {
            title: 'Landing Page Templates',
            description: 'A versatile collection of high-converting landing page sections designed for SaaS and marketing campaigns.',
            features: [
                'Modular component design',
                'Conversion-optimized layout'
            ],
            technologies: ['React.js', 'Tailwind CSS']
        },
        {
            title: 'Games (StonePapersScissor, TicTacToe)',
            description: 'Built interactive web games with responsive design.',
            features: [
                'Implemented game logic ensuring smooth gameplay'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript']
        }
    ];

    const groupProjects = [
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
        }
    ];

    const ProjectCard = ({ project }) => (
        <div
            className="card group cursor-pointer hover:border-blue-500/50 transition-all"
            onClick={() => setSelectedProject(project)}
        >
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-400 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                </h3>
                <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, techIdx) => (
                    <span
                        key={techIdx}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-md text-xs text-blue-300"
                    >
                        {tech}
                    </span>
                ))}
                {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-xs text-slate-400">
                        +{project.technologies.length - 4}
                    </span>
                )}
            </div>
        </div>
    );

    const CategoryCard = ({ title, description, onClick, icon }) => (
        <div
            onClick={onClick}
            className="card group cursor-pointer hover:border-blue-500/50 transition-all flex flex-col items-center justify-center py-16 text-center"
        >
            <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-3xl font-bold text-blue-400 mb-2 group-hover:text-cyan-400 transition-colors">
                {title}
            </h3>
            <p className="text-slate-400 text-lg">
                {description}
            </p>
        </div>
    );

    return (
        <section id="projects" className="section-container bg-slate-900/50 min-h-[50vh]">
            <h2 className="section-title">Projects</h2>

            {!activeCategory ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <CategoryCard
                        title="Featured Projects"
                        description="5+ Projects. Click to Explore the projects"
                        icon="⭐"
                        onClick={() => setActiveCategory('featured')}
                    />
                    <CategoryCard
                        title="Group Projects"
                        description={`${groupProjects.length} Projects`}
                        icon="👥"
                        onClick={() => setActiveCategory('group')}
                    />
                </div>
            ) : (
                <div className="max-w-6xl mx-auto">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className="mb-8 flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition-colors font-semibold"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Categories
                    </button>

                    <h3 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-4">
                        {activeCategory === 'featured' ? 'Featured Projects' : 'Group Projects'}
                    </h3>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {activeCategory === 'featured'
                            ? featuredProjects.map((project, idx) => (
                                <ProjectCard key={idx} project={project} />
                            ))
                            : groupProjects.map((project, idx) => (
                                <ProjectCard key={idx} project={project} />
                            ))
                        }
                    </div>
                </div>
            )}

            {/* Project Details Modal */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full p-6 relative shadow-2xl animate-in zoom-in-95 duration-200"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h3 className="text-3xl font-bold text-blue-400 mb-4 pr-8">
                            {selectedProject.title}
                        </h3>

                        <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                            {selectedProject.description}
                        </p>

                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="text-blue-400">✨</span> Key Features
                            </h4>
                            <ul className="space-y-2 bg-slate-800/50 p-4 rounded-lg">
                                {selectedProject.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-slate-300">
                                        <span className="text-blue-400 mt-1">▹</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                <span className="text-blue-400">🛠️</span> Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
