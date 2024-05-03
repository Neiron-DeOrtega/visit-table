import { useLoaderData } from "react-router-dom"
import '../index.css';
import { Group } from "./Group";
import { LastDaysListContainer } from "./LastDaysListContainer";
import { useState } from "react";


export const GroupContainer = () => {

    // const [dateState, setDateState] = useState(currentDate)

    const data = useLoaderData()
    const pathname = window.location.pathname.replace("/group/", "")

    const filterArray = data.filter((student) => {
        return toString(student.group_id) === toString(pathname)
    })

    const saveResult = filterArray.map((student, s) => {
        return {id: s, name: student.name, value: false}
    })

    const addAttend = (student, e) => {
        let foundId = saveResult.findIndex((element) => element.name == student.name)
        saveResult[foundId].value = e.target.checked
    }

    const studentsList = filterArray.map((student, s) => {
        return (
            <div className="s-row" key={s}>
                <span className="s-name">{student.name}</span>
                <div>
                    <input type="checkbox" id={s} name="isAttend" className="s-checkbox" 
                            onChange={(e) => addAttend(student, e)}/>
                </div>
                
            </div>
        )
    })

    const datesArray = filterArray.map((student) => {
        return student.stats
    })

    const lastDaysArray = datesArray[0].map((item, i) => {
        return <LastDaysListContainer stats={datesArray} index={i} key={i}/>
    })

    return (
        <Group saveResult={saveResult} studentsList={studentsList} lastDaysArray={lastDaysArray}/>
    )
}