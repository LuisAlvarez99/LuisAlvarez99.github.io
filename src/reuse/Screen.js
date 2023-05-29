import './Screen.css'
import { Link } from 'react-router-dom'


export const Screen = ({path, children}) => {
    return(
            <div id="screen">
                {/* {!path && <Link className='top-link' to={'/'}>Home</Link>} */}
                {children}
            </div>
    )
}