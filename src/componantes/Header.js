import logo from '../images/logo.png';

export default function Header()
{
    return(
        <nav className='headercontainer'>
            <img src={logo}></img>
            <h3>airbnb</h3>
        </nav>
    )
}