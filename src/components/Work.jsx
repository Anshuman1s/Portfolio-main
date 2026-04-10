export default function Work() {
    const work = [
        {
            name: 'PLPG',
            icon: './assets/work-1.png',
            description: 'MERN Stack Project',
            link: 'https://github.com/Anshuman1s/Personalized-Learning-Path-Generator',
        },
        {
            name: 'Text-To-Image',
            icon: './assets/work-2.png',
            description: 'MERN Stack PRoject',
            link: 'https://github.com/Anshuman1s/promptthreed',
        },
        {
            name: 'Blog-Post',
            icon: './assets/work-3.png',
            description: 'MERN Stack Project',
            link: 'https://github.com/Anshuman1s/lifeinloop',
        },
        {
            name: 'OmniFood',
            icon: './assets/work-4.png',
            description: 'HTML | CSS | JS Project',
            link: 'https://anshuman1s.github.io/OmniFood-/',
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Projects</h4>
            <h2 className="text-center text-5xl font-Ovo">Projects i built</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my web development project! Explore a collection of projects showcasing my expertise in full-stack development.</p>

            <div  className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((work) => (
                    <div onClick={() => window.open(work.link, "_blank")} key={work.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${work.icon})` }}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{work.name}</h2>
                                <p className="text-sm text-gray-700">{work.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-blue-300 transition">
                                <img  src="./assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a onClick={()=>window.open("https://github.com/anshuman1s","_blank")} className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-sm py-2 px-8 mx-auto my-20 duration-300 dark:text-white cursor-pointer">
                More
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>

        </div>
    )
}