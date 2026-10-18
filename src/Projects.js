import React, { useState, useEffect } from 'react';
import { Screen } from './reuse/Screen';
import projectsData from './data/projects';
import './Projects.css';

export const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('software');
    const [selectedProject, setSelectedProject] = useState(null);

    const categories = [
        { id: 'software', label: 'Software' },
        { id: 'ai', label: 'AI & Agents' },
        { id: '3d-printing', label: '3D Printing' },
        { id: 'music', label: 'Music' },
        { id: 'all', label: 'All' }
    ];

    const filteredProjects = activeCategory === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <Screen>
            <div className="projects-container">
                <div className="projects-header">
                    <h1 style={{ color: 'white' }}>Projects</h1>
                </div>

                <div className="filter-pills">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="timeline-spine">
                    {filteredProjects.map(project => (
                        <button
                            key={project.id}
                            type="button"
                            className={`project-card rank-${project.rank}`}
                            onClick={() => openModal(project)}
                        >
                            <div className={`rank-badge ${project.rank}`}>
                                {project.rank}
                            </div>
                            <img src={project.media} alt={project.title} className="card-image-placeholder" />
                            <div className="card-header">
                                <h2 className="card-title">{project.title}</h2>
                                <span className="card-date">{project.date}</span>
                            </div>
                            <p className="card-summary">{project.summary}</p>
                        </button>
                    ))}
                </div>

                {selectedProject && (
                    <div className="modal-backdrop" onClick={handleBackdropClick} role="presentation">
                        <div className="modal-content" role="dialog" aria-modal="true">
                            <button className="close-button" onClick={closeModal} aria-label="Close modal">&times;</button>
                            <div className="modal-body">
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <h2>{selectedProject.title}</h2>
                                    <div className={`rank-badge ${selectedProject.rank}`} style={{position: 'relative', top: 0, right: 0}}>
                                        {selectedProject.rank}
                                    </div>
                                </div>
                                <img src={selectedProject.media} alt={selectedProject.title} className="modal-media" />
                                <div className="modal-tags">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <p>{selectedProject.description}</p>
                                <div className="modal-links">
                                    {selectedProject.githubUrl && (
                                        <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="modal-link">GitHub</a>
                                    )}
                                    {selectedProject.liveDemoUrl && (
                                        <a href={selectedProject.liveDemoUrl} target="_blank" rel="noreferrer" className="modal-link">Live Demo</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Screen>
    );
};
