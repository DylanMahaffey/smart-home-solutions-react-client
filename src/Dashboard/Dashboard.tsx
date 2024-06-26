import wretch from "wretch"

export const Dashboard = () => {
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    const toggleOfficeLights = () => {
        wretch(serverUrl+"/office")
        .get()
        .json(json => {
            console.log(json)
        })
    }
    const toggleBedroomLight = () => {
        wretch(serverUrl+"/bedroom")
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