import { Link, useLoaderData } from "react-router-dom"
import { Main } from './Main';

export const MainContainer = () => {

    const data = useLoaderData()

    const groupsList = data.map((group, i) => {
        return (<div><Link key={group.id} to={`/group/${group.id}`}>{group.title} ({group.group_name})</Link></div>)
    })

    return (
        <Main groupsList={groupsList} />
    )
}   