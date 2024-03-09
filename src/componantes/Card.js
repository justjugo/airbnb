import pic from '../images/Katie-Zaferes.png'
import star from '../images/star.png'
export default function Card(props)
{
    return(
        <div className="cardcontainer">
            <div className='image'>
            <img className='card-img' src={props.img}></img>
            <p>SOLD OUT</p>
            </div>
            <div className="infocard">
                <img src={star}></img>
                <p>{props.rate} (6)-USA</p>
            </div>
            <div className='cardinfo'>
                <p>Life lesson with {props.act}</p>
                <span><strong>From ${props.price}</strong> / person</span>
            </div>

            

        </div>
    )
}