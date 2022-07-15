export const Photo = (props) => {
    return (
        <>
            <img src={props.url}></img>
            <p>{props.legend}</p>
            </>                                     //<> fragment vai ser usado raramente
    )
}