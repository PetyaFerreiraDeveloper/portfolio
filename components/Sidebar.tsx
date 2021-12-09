import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GrDocumentPdf } from 'react-icons/gr'
import { useTheme } from 'next-themes'

import Image from 'next/image';

const Sidebar = () => {

    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            {/* <img
                src="/images/petya.jpg"
                alt="user avatar"
                className="w-32 mx-auto rounded-full"

            /> */}
            <Image
                src="/images/petya.jpg"
                alt="user avatar"
                className="mx-auto rounded-full"
                width='130'
                height='170'
                layout='intrinsic'
                quality='100'
            />
            <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
                <span className="text-myColor">Petya </span>
                Ferreira
            </h3>
            <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
            <a
                href="/assets/petya-cv.pdf"
                className="flex items-center justify-center px-2 py-1 my-3 space-x-2 bg-gray-200 rounded-full dark:bg-dark-200"
                download='petya-cv.pdf'
            >
                    <GrDocumentPdf className="w-6 h-6 dark:bg-white" />
                    <span>Download Resume</span>
            </a>
            {/* // social icons */}
            <div className="flex justify-around w-9/12 m-auto my-5 text-myColor md:w-full ">
                <a href=""><AiFillGithub className="w-8 h-8 cursor-pointer" /></a>
                <a href=""><AiFillLinkedin className="w-8 h-8 cursor-pointer" /></a>
                <a href=""><AiFillYoutube className="w-8 h-8 cursor-pointer" /></a>
            </div>
            {/* // address */}
            <div
                className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
                style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
            >
                <div
                    className="flex items-center justify-center space-x-2"
                >
                    <GoLocation />
                    <span>Copenhagen, Denmark</span>
                </div>
                <p className="my-2">petianaidenova@gmail.com</p>
                <p className="my-2">0045 55 22 27 57</p>
            </div>
            {/* // email button */}
            <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-myColor to-blue-500 focus:outline-none"
                onClick={() => window.open('mailto:petianaidenova@gmail.com')}
            >
                Email me
            </button>
            <button
                onClick={changeTheme}
                className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-myColor to-blue-500">
                Toggle Theme
            </button>

        </div>
    )
}

export default Sidebar
