import { useState } from 'react';
import '../index.css';


export const GroupsAdd = ({studentsList, saveResult}) => {

    const [dateState, setDateState] = useState(new Date().toISOString().substr(0, 10))
    let URL = 'https://my-json-server.typicode.com/kosipov/1425-iro-placeholder-api/disciplines'

    const handleClickSave = async () => {
        const result = {
            date: dateState,
            attendList: saveResult
        }
        await fetch(URL, {
            method: 'post',
            body: result
        })
        .then(response => response.json())
        .then(fetchData => console.log(fetchData))
        .catch(err => console.error(err))
    }

    return (
        <div className="groups">
            <p className="input-wrap"><input type="date" name="date" className="input-date" value={dateState} onChange={(e) => setDateState(e.target.value)}/></p>
            <div>
                {studentsList}
                <button className="s-row s-btn s-find">Найти</button>
                <button className="s-row s-btn" onClick={handleClickSave}>Сохранить</button>
            </div>
        </div>
    )
}