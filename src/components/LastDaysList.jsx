export const LastDaysList = ({result, stats}) => {
    return (
        <div className="lastDaysList">
            <div className="input-wrap"><p className="input-date date-row">{stats}</p></div>
            {result}
        </div>
    )
}