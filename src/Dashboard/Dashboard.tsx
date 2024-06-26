import wretch from "wretch"

export const Dashboard = () => {
    const toggleOfficeLights = () => {
        wretch("http://localhost:8080/office")
        .get()
        .json(json => {
            console.log(json)
        })
    }
    const toggleBedroomLight = () => {
        wretch("http://localhost:8080/bedroom")
        .get()
        .json(json => {
            console.log(json)
        })
    }
    return (
        <>
        <button onClick={toggleOfficeLights}>Office Lights</button>
        <button onClick={toggleBedroomLight}>Bedroom Light</button>
        </>
    )
}