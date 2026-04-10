export default function Footer() {
    return (
        <div className="mt-5">
            <div className="text-center">
                
                    {/* <img src="/assets/logo.png" alt="" className="" />
                    <img src="/assets/logo_dark.png" alt="" className="" /> */}
                    <h2 className="w-50 text-3xl mx-auto mb-2 dark:hidden">Anshuman Shukla</h2>
                    <h2 className="w-36 mx-auto text-3xl  mb-2 hidden dark:block">Anshuman Shukla</h2>
                


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:anshumanshukla211@gmail.com">anshumanshukla211@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href="#">anshumanshukla</a>. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://github.com/anshuman1s">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/anshuman199/">LinkedIn</a></li>
                    {/* <li><a target='_blank' href="https://x.com/prebuiltui">Twitter</a></li> */}
                </ul>
            </div>
        </div>
    )
}