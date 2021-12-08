import { RiComputerLine } from 'react-icons/ri'
import { IService, ISkill } from './type'
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
        level: '20%',
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
