

const Card = ({
    items
}) => {
    return(
        <div>
            {items.map(({label, url, img, icon}, index) => {
                return(
                    <span id={`${index}-${label}`}>{label}</span>
                )
            })}
        </div>
    )
}

export default Card