export default function Btn() {
    const clickHandler = () => console.log("Clicked");
    return (
        <button onClick={clickHandler}>
            Click Me
        </button>
    )
}