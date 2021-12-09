import { FunctionComponent } from "react"
import { Category } from "../type"

export const NavItem: FunctionComponent<{ 
    value: Category | 'all';
    handlerFilterCategory:Function;
    active:string
}> = ({ value, handlerFilterCategory, active}) => {

    let className = 'capitalize cursor-pointer hover:text-myColor';
    if (active === value) {
        className += ' text-myColor'
    }
    
    return (
    <li 
        className= {className} 
        onClick={() => handlerFilterCategory(value)} 
    >
        {value}
    </li>
    );
};

const ProjectsNavbar: FunctionComponent<{handlerFilterCategory:Function, active:string}> = (props) => {
    return (
        <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
            <NavItem value='all' {...props} />
            <NavItem value='react' {...props} />
            <NavItem value='javascript' {...props} />
            <NavItem value='express' {...props} />
            <NavItem value='mongo' {...props} />
            <NavItem value='nextjs' {...props} />
        </div>
    );
}

export default ProjectsNavbar
function handlerFilterCategory(value: string): void {
    throw new Error("Function not implemented.");
}

