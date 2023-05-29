import { Link } from 'react-router-dom'

export const Bubble = ({item , id}) => {
    return(
        <div style={{color: '#2c2a4a'}} id={id}>
            <Link to={`/${item}`}>
                <h4>{item}</h4>
            </Link>
        </div>
    )
}