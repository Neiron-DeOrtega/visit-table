import { useState } from 'react';
import '../index.css';


export const GroupsAdd = ({studentsList, saveResult}) => {

    const handleClickSave = () => {
        console.log(saveResult)
    }

    return (
        <div className="groups">
            <p className="input-wrap"><input type="date" name="date" className="input-date"/></p>
            <div>
                {studentsList}
                <button className="s-row s-btn s-find">Найти</button>
                <button className="s-row s-btn" onClick={handleClickSave}>Сохранить</button>
            </div>
        </div>
    )
}