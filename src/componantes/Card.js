import pic from '../images/Katie-Zaferes.png'
import star from '../images/star.png'
export default function Card({img,rate,act,price})
{
    return(
        <div className="cardcontainer">
            <div className='image'>
            <img className='card-img' src={img}></img>
            <p>SOLD OUT</p>
            </div>
            <div className="infocard">
                <img src={star}></img>
                <p>{rate} (6)-USA</p>
            </div>
            <div className='cardinfo'>
                <p>Life lesson with {act}</p>
                <span><strong>From ${price}</strong> / person</span>
            </div>

            

        </div>
    )
}