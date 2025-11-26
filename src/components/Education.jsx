const Education = () => {
    return (
        <section id="education" className="section-container">
            <h2 className="section-title">Education</h2>

            <div className="max-w-4xl mx-auto">
                <div className="card">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-blue-400 mb-2">
                                Tula's Institute
                            </h3>
                            <p className="text-lg text-cyan-400 font-semibold mb-2">
                                B.Tech in Computer Science and Engineering
                            </p>
                            <p className="text-slate-400">
                                Dehradun, India
                            </p>
                        </div>
                        <div className="text-slate-400 text-sm sm:text-right mt-4 sm:mt-0">
                            <p className="font-semibold">Oct 2022 – May 2026</p>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-slate-700">
                        <p className="text-slate-300 leading-relaxed">
                            Pursuing a comprehensive education in computer science with focus on software development,
                            data structures, algorithms, and modern web technologies. Actively involved in practical
                            projects and internships to apply theoretical knowledge to real-world applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
