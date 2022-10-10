const Navigation = ({
    items
}) => {
    return(
        <ul>
            {items.map(({label, url, img, icon}, index) => {
                return(
                    <li id={`${index}-${label}`}>{label}</li>
                )
            })}
        </ul>
    )
}

export default Navigation;