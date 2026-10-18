const createProject = (id, date, category, rank, tags) => ({
    id,
    title: `Project ${id}`,
    date,
    category,
    rank,
    summary: `A summary for project ${id}`,
    description: `A longer description for project ${id}`,
    tags,
    liveDemoUrl: 'https://example.com',
    githubUrl: `https://github.com/example/project${id}`,
    media: 'https://via.placeholder.com/400x300'
});

const projects = [
    createProject('1', '2023-01', 'software', 'champion', ['React', 'JavaScript']),
    createProject('2', '2023-05', 'ai', 'diamond', ['Python', 'TensorFlow']),
    createProject('3', '2022-11', '3d-printing', 'gold', ['SolidWorks', 'PLA']),
    createProject('4', '2024-02', 'music', 'silver', ['Ableton', 'Synth']),
    createProject('5', '2021-08', 'software', 'bronze', ['HTML', 'CSS'])
];

const sortedProjects = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export default sortedProjects;
