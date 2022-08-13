import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Card from './Card';
import CardItem from './CardItem';
import { useState } from 'react';


function App() {
  const[products,setproducts]=useState([
     {
        id:1,
        title:"iPhone",
        price: 90000,
        Rating:"5.0",
        imageUrl:"iphone 12.jpg",
      },
      {
        id:2,
        title:"iMac",
        price: 40000,
        Rating:"3.0",
        imageUrl:"macbook1.jpg",
      },
      {
        id:3,
        title:"iPad",
        price: 60000,
        Rating:"3.0",
        imageUrl:"ipad.jpg",
      },
      {
        id:4,
        title:"iWatch",
        price: 30000,
        Rating:"4.0",
        imageUrl:"iwatch.jpg",
      },
      {
        id:5,
        title:"iCover",
        price: 20000,
        Rating:"2.0",
        imageUrl:"applecover.jpg",
      }
  ])
  
  const [cart,setcart] =useState([]);
  const [total,setTotal]=useState(0);
  let addToCart=(list)=>{
   setcart([...cart,list])
   setTotal(total+list.price);
  } 
  
  
  let removeFromCart=(ele)=>{
     let index=cart.findIndex((obj)=> obj.id==ele.id);
     cart.splice(index,1);
     setcart([...cart]);
     setTotal(total-ele.price);
  }
 return (
    <div class="container">
     <div class="row">
        <div class="col-lg-8">
            <div class="row">
               {
                products.map((list)=>{
                  return <Card list={list} ele={cart}  handletoCart={addToCart}></Card>
                })
               }
          </div>
      </div>
    
        <div class="col-lg-4">
            <div class="row col-lg-12">
                {/* <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem> */}
                <ol class="list-group list-group-numbered">
                {
                  cart.map((ele)=>{
                    return <CardItem ele={ele} removeFromCart={removeFromCart}></CardItem>
                  })
                }
                </ol>
            </div>
            <h1>
              {/* Total-{total} */}
              {
                cart.length==0?"No items in cart":`Total-${total}`
              }
            </h1>
        </div>
    </div> 
</div>

);
}
export default App;

