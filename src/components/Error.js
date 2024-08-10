import { useRouteError } from "react-router-dom"

export const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (<div className="error">
        <h1>OOPs!!! SomeThing Went wRong.....</h1>
        <h2>{err.status}:{err.statusText}</h2>
    </div>)
}