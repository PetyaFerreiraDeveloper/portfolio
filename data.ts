import { RiComputerLine } from 'react-icons/ri'
import { IProject, IService, ISkill } from './type'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'


export const services: IService[] = [
    {
        title: 'Frontend developer',
        about: 'I can build beautiful and scalable applications using <b> JavaScript </b>, <b> CSS </b> and <b> HTML </b>',
        Icon: RiComputerLine,
    },
    {
        title: 'Backend developer',
        about: 'Handle database, server, api using <b> Express </b>',
        Icon: FaServer,
    },
    {
        title: 'API Development',
        about: 'I can develop robust REST API using <b> Node API </b>',
        Icon: AiOutlineApi,
    },
    {
        title: 'Competitve Coder',
        about: 'A daily problem solver',
        Icon: MdDeveloperMode,
    },
    {
        title: 'UI/UX designer',
        about: 'Stunning user interface designer using <b> Figma </b>',
        Icon: AiOutlineAntDesign,
    },
]

export const languages: ISkill[] = [
    {
        name: 'Python',
        level: '30%',
        Icon: BsCircleFill
    },
    {
        name: 'JavaScript',
        level: '70%',
        Icon: BsCircleFill
    },
    {
        name: 'React',
        level: '30%',
        Icon: BsCircleFill
    },
    {
        name: 'NextJs',
        level: '30%',
        Icon: BsCircleFill
    },
    {
        name: 'Tailwind',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'HTML',
        level: '80%',
        Icon: BsCircleFill
    },
    {
        name: 'CSS',
        level: '70%',
        Icon: BsCircleFill
    },
]

export const tools: ISkill[] = [
    {
        name: 'Figma',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'Photoshop',
        level: '40%',
        Icon: BsCircleFill
    },
    {
        name: 'Premier Pro',
        level: '50%',
        Icon: BsCircleFill
    },
    {
        name: 'VsCode',
        level: '70%',
        Icon: BsCircleFill
    },

]


export const projects: IProject[] = [
    {
        id: 1,
        name: 'Barista Cup',
        description: 'This app was build for a coding challenge',
        image_path: '/images/barista.png',
        deployed_url: 'https://petyaferreiradeveloper.github.io/brown-rabbit-github/',
        github_url: 'https://github.com/PetyaFerreiraDeveloper/brown-rabbit-github',
        category: ['javascript'],
        key_techs: ['javascript', 'css', 'html'],
    },
    {
        id: 2,
        name: 'Hosting Site',
        description: 'This app is a hosting site',
        image_path: '/images/hosting.png',
        deployed_url: 'https://petyaferreiradeveloper.github.io/brown-rabbit-github/',
        github_url: 'https://github.com/PetyaFerreiraDeveloper/brown-rabbit-github',
        category: ['javascript'],
        key_techs: ['javascript', 'css', 'html'],
    },
    {
        id: 3,
        name: 'To-do List',
        description: 'This app is an interactive to do list',
        image_path: '/images/to-do-list.png',
        deployed_url: 'https://petyaferreiradeveloper.github.io/brown-rabbit-github/',
        github_url: 'https://github.com/PetyaFerreiraDeveloper/brown-rabbit-github',
        category: ['javascript'],
        key_techs: ['javascript', 'css', 'html'],
    },
    {
        id: 4,
        name: 'Portfolio',
        description: 'This is my portfolio page',
        image_path: '/images/portfolio.png',
        deployed_url: 'https://petyaferreiradeveloper.github.io/brown-rabbit-github/',
        github_url: 'https://github.com/PetyaFerreiraDeveloper/brown-rabbit-github',
        category: ['nextjs'],
        key_techs: ['nextjs', 'typescript', 'tailwind'],
    },


]