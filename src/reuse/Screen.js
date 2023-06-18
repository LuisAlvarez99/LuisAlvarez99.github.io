import './Screen.css'
import { Link } from 'react-router-dom'

export const Screen = ({path, children}) => {
    return(
        <>
            <button style={{position: 'relative', top: '10px', left: '12px'}} className='btn btn-info top-link'>
                {path !== 'home' && <Link to={'/'}>Home</Link>}
            </button>
            <div id="screen">
                {children}
            </div>
        </>
    )
}