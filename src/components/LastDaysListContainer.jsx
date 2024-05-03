import { LastDaysList } from "./LastDaysList"

export const LastDaysListContainer = ({stats, index}) => {

    const result = stats.map((item, i) => {
        return (
            <p className="s-check">
                <input type="checkbox" className="s-checkbox" disabled checked={item[index].value} key={i} />
            </p>
        )}
    )

    return (
        <LastDaysList result={result} stats={stats[0][index].date}/>
    )
}