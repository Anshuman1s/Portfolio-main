import { useEffect, useState } from 'react'

export default function Contact() {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState("idle"); // idle | loading | success

    const onSubmit = async (event) => {
        event.preventDefault();

        // ✅ SAFE CAPTCHA CHECK
        const captchaElement = event.target.querySelector('textarea[name=h-captcha-response]');
        if (captchaElement && !captchaElement.value) {
            setResult("Please fill out captcha field");
            return;
        }

        setStatus("loading");
        setResult("Sending....");

        const formData = new FormData(event.target);

        // 🔑 Your access key
        formData.append("access_key", "368b86bf-3a64-41c1-a0a3-7fdea681b3a5");

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setStatus("success");
            setResult("Message sent successfully ✅");
            event.target.reset();

            // 🔄 Reset button after 3 sec
            setTimeout(() => setStatus("idle"), 3000);
        } else {
            console.log("Error", res);
            setStatus("idle");
            setResult(res.message);
        }
    };

    function CaptchaLoader() {
        const captchadiv = document.querySelectorAll('[data-captcha="true"]');
        if (captchadiv.length) {
            let lang = null;
            let onload = null;
            let render = null;

            captchadiv.forEach(function (item) {
                const sitekey = item.dataset.sitekey;
                lang = item.dataset.lang;
                onload = item.dataset.onload;
                render = item.dataset.render;

                if (!sitekey) {
                    item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
                }
            });

            let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
            if (lang) scriptSrc += `&hl=${lang}`;
            if (onload) scriptSrc += `&onload=${onload}`;
            if (render) scriptSrc += `&render=${render}`;

            var script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.defer = true;
            script.src = scriptSrc;
            document.body.appendChild(script);
        }
    }

    useEffect(() => {
        CaptchaLoader();
    }, []);

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">

            <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                I&apos;d love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">

                <input type="hidden" name="to_email" value="me.anshumanshukla@gmail.com" />
                <input type="hidden" name="subject" value="Anshuman Shukla - New form Submission" />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Enter your name"
                        className="flex-1 px-3 py-2 border rounded-md"
                        required name="name" />

                    <input type="email" placeholder="Enter your email"
                        className="flex-1 px-3 py-2 border rounded-md"
                        required name="email" />
                </div>

                <textarea rows="6" placeholder="Enter your message"
                    className="w-full px-4 py-2 border rounded-md mb-6"
                    required name="message"></textarea>

                {/* 🔥 Animated Button */}
                <button
                    type='submit'
                    disabled={status === "loading"}
                    className={`py-2 px-8 w-max flex items-center justify-center gap-2 rounded-sm mx-auto duration-500
                    ${status === "success" ? "bg-green-500 text-white" : "bg-black/80 text-white"}`}
                >

                    {/* 🔄 Loading Spinner */}
                    {status === "loading" && (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    )}

                    {/* ✅ Success */}
                    {status === "success" && (
                        <>
                             Sent Successfully
                        </>
                    )}

                    {/* 🟢 Default */}
                    {status === "idle" && (
                        <>
                            Submit now
                            <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                        </>
                    )}
                </button>

                {/* Result text */}
                
            </form>
        </div>
    )
}