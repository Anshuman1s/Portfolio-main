import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function Header() {
    return (
        <div
            className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: "url('https://dropedition.com/images/newsletter.jpg')" }}
        >
            {/* Overlay (optional for better text visibility) */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative w-11/12 max-w-3xl text-center flex flex-col items-center justify-center gap-4 text-white">
                <img src="./assets/profile-image.png" alt="" className="rounded-full w-32" />

                <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                    Hey! I&apos;m Anshuman Shukla
                    {/* <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" /> */}
                </h3>

                <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
                    Full stack developer
                </h1>

                <p className="max-w-2xl mx-auto font-Ovo">
                    I build scalable web applications using modern technologies like MERN stack, delivering clean UI and efficient backend solutions.
                </p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 cursor-pointer text-xl ">
                    <li className="transition-transform duration-500 hover:scale-110 active:scale-125"><FaGithub onClick={() => window.open("https://github.com/anshuman1s", "_blank")} /></li>
                    <li className="transition-transform duration-500 hover:scale-110 active:scale-125"><FaLinkedinIn onClick={() => window.open("https://www.linkedin.com/in/anshuman199/", "_blank")} /></li>
                    {/* <li><a target='_blank' href="https://x.com/prebuiltui">Twitter</a></li> */}
                </ul>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    {/* <a
                        href="#contact"
                        className="px-10 py-2.5 border rounded-xl bg-white text-black flex items-center gap-2 border-transparent"
                    >
                        contact me
                        <img src="./assets/arrow-icon-bold-dark.png" alt="" className="w-4" />
                    </a> */}
                    

                    <a
                        onClick={()=>window.open("https://drive.google.com/file/d/1lvY24vpkwRyEymt7p90MMs4_oQl8GO2C/view?usp=drive_link","_blank")}
                        download
                        className="px-10 py-2.5 rounded-sm border border-gray-300 hover:bg-slate-100/70 flex items-center gap-2 bg-white text-black cursor-pointer"
                    >
                        Resume
                        <img src="./assets/download-icon.png" alt="" className="w-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}