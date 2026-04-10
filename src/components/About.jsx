export default function About() {
    const tools = [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', },
        { name: 'Html', icon: 'https://img.freepik.com/free-psd/3d-rendered-html-file-icon_84443-57041.jpg?semt=ais_incoming&w=740&q=80'},
        { name: 'Html', icon: 'https://images.seeklogo.com/logo-png/18/1/css3-logo-png_seeklogo-186678.png'},
        { name: 'Html', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
        { name: 'Html', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-react-icon-svg-download-png-282599.png?f=webp'},
        { name: 'Html', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s'},
        { name: 'Html', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlDx-wmb9kv0mAr6Ff4eG1y9dwUCJ9sYXPQ&s'},
        { name: 'Html', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMV10fJhJDeU4BNoVx3kMXLT1LHCXT0AT9xA&s'},
        // { name: 'Html', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMV10fJhJDeU4BNoVx3kMXLT1LHCXT0AT9xA&s'},
        { name: 'mongodb', icon: './assets/mongodb.png', },
        { name: 'figma', icon: './assets/vscode.png', },
    ];

    const data = [
        {
            name: 'Languages',
            icon1: './assets/code-icon.png',
            icon2: './assets/code-icon-dark.png',
            description: 'HTML, CSS, JavaScript React Js, Node Js, express',
        },
        {
            name: 'Education',
            icon1: './assets/edu-icon.png',
            icon2: './assets/edu-icon-dark.png',
            description: 'B.Tech in Computer Science',
        },
        {
            name: 'Projects',
            icon1: './assets/project-icon.png',
            icon2: './assets/project-icon-dark.png',
            description: 'Built more than 5 projects',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            {/* <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4> */}
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    {/* About main image  */}
                    <img src='./assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="./assets/circular-text.png" alt="" className="w-full rounded-full animate-spin_slow" />
                        {/* <img src="./assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /> */}
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">I am a Full Stack Developer with hands-on experience in building dynamic and responsive web applications. I have worked with technologies like HTML, CSS, JavaScript, React, Node.js, Express, and databases such as MongoDB and SQL. I enjoy developing end-to-end solutions, from designing intuitive user interfaces to building scalable backend systems, and I am continuously improving my skills.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">{data.name}</h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">Tools i worked with</h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li key={tool.name} className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}