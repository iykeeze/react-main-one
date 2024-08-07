import './App.css'
import Name  from './components/Name'
import Price  from './components/Price'
import  Description  from './components/Description'
import  Image  from './components/Image'
import { product } from './product.js'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from "react";


function App() {
  const [userName, setUserName] = useState("");
//  const [count, setCount] = useState(0);
// const [products, setProducts] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);
// const [user, setUser] = useState({
//   email: "", password: "",
// })
// const [search, setSearch] = useState("");


// const updateCount = () => {
//   setCount((preValue) => preValue + 1);
// }


  return (
   <div>
    {/* <h1>{count}</h1>
    <button onClick={updateCount}>Count Number</button> */}
    <input type="text" placeholder='Enter your name' onChange={(e) => setUserName(e.target.value)} />
    <Card style={{ width: '18rem' }}>
  <Image Image= {product.product_Image} />
  <Card.Body>
    <Name Name= {product.product_name} />
    <Price Price= {product.product_price} />
   <Description Description={product.product_description} />

    <Button variant="primary">Add To Cart</Button>
  </Card.Body>
</Card>
<p>Hello {userName === "" ? "there!" : userName}</p>
{
  userName !== "" && <img src="https://www.europarl.europa.eu/resources/library/images/20230607PHT95601/20230607PHT95601_original.jpg" alt="images" 
  style={{width: "250px"}}/>
}
   </div>
  )
}

export default App
