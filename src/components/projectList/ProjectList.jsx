import './projectList.scss'

export default function ProjectList({title,id, active,setselected}) {
    return (
        <li className={active ? 'projectList active' : 'projectList'} 
        onClick={()=>setselected(id)}>
            {title}
        </li>
    )
}
