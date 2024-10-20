export default function Header(props) {
    console.log(props);
    return(
        <div>
            <h1>Header with name: {props.name} {props.color}</h1>
        <br />
        <br />
        </div>
    )
}