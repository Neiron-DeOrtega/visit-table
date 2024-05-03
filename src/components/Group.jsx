import '../index.css';
import { GroupsAdd } from './GroupsAdd';


export const Group = ({studentsList, lastDaysArray, saveResult}) => {
    return (
        <div className="group-wrapper">
            <GroupsAdd saveResult={saveResult} studentsList={studentsList}/>
            <div className="lastOverflow">
                {lastDaysArray}
            </div>
            
        </div>
    )
}