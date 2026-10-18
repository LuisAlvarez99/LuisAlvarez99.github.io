const projects = [
    {
        id: '1',
        title: 'Project 1',
        date: '2023-01',
        category: 'software',
        rank: 'champion',
        summary: 'A summary for project 1',
        description: 'A longer description for project 1',
        tags: ['React', 'JavaScript'],
        liveDemoUrl: 'https://example.com',
        githubUrl: 'https://github.com/example/project1',
        media: 'https://via.placeholder.com/400x300'
    },
    {
        id: '2',
        title: 'Project 2',
        date: '2023-05',
        category: 'ai',
        rank: 'diamond',
        summary: 'A summary for project 2',
        description: 'A longer description for project 2',
        tags: ['Python', 'TensorFlow'],
        liveDemoUrl: 'https://example.com',
        githubUrl: 'https://github.com/example/project2',
        media: 'https://via.placeholder.com/400x300'
    },
    {
        id: '3',
        title: 'Project 3',
        date: '2022-11',
        category: '3d-printing',
        rank: 'gold',
        summary: 'A summary for project 3',
        description: 'A longer description for project 3',
        tags: ['SolidWorks', 'PLA'],
        liveDemoUrl: 'https://example.com',
        githubUrl: 'https://github.com/example/project3',
        media: 'https://via.placeholder.com/400x300'
    },
    {
        id: '4',
        title: 'Project 4',
        date: '2024-02',
        category: 'music',
        rank: 'silver',
        summary: 'A summary for project 4',
        description: 'A longer description for project 4',
        tags: ['Ableton', 'Synth'],
        liveDemoUrl: 'https://example.com',
        githubUrl: 'https://github.com/example/project4',
        media: 'https://via.placeholder.com/400x300'
    },
    {
        id: '5',
        title: 'Project 5',
        date: '2021-08',
        category: 'software',
        rank: 'bronze',
        summary: 'A summary for project 5',
        description: 'A longer description for project 5',
        tags: ['HTML', 'CSS'],
        liveDemoUrl: 'https://example.com',
        githubUrl: 'https://github.com/example/project5',
        media: 'https://via.placeholder.com/400x300'
    }
];

const sortedProjects = [...projects].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
export default sortedProjects;
