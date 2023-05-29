import { Link } from "react-router-dom"
import { Screen } from "./reuse/Screen"

export const Landing = (props) => {

    // Note: only landing should have grow and shrink animations

    return(
        <Link to={'/home'}>
            <Screen path={props.path}>
                <h1 style={{color: 'white'}}>Hi. I'm Luis Alvarez... Nice to meet you...</h1>
            </Screen>
        </Link>
    )
}