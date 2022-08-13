import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
function CardItem({ele,removeFromCart}){
    return <li class="list-group-item d-flex justify-content-between align-items-start">
      <div class="ms-2 me-auto">
        <div class="fw-bold">{ele.title}</div>
       {ele.price}
      </div>
      <button onClick={()=>{removeFromCart(ele)}} class="badge bg-primary rounded-pill"><FontAwesomeIcon icon={faTimes} /></button>
    </li>
}
export default CardItem;