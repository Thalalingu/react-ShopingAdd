import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState({item:"",price:""});
  const [list,setList] = useState([])
  const [store,setStore] = useState([])
const {item,price} = data
  function handler(e){
setData({...data,[e.target.name] : e.target.value})
  }
  function dataSubmit(e){
e.preventDefault()
console.log(data)
setList([...list,data])
  }
 function myFun2(it){
const newdata = [...store,it]
setStore(newdata)
 }
 function myFun3(ind){
const newEle = [...store]
newEle.splice(ind,1)
setStore(newEle)
 }
  return (
    <div>
      <p>hiiiujjji</p>
      {
        store.map((it,ind) => <><li>{it.item}{it.price}</li>
        <li><button onClick={()=> myFun3(ind)}>delete</button></li></>)
      }
      {
        list.map((it) => <><li>{it.item}{it.price}</li>
        <li><button onClick={()=> myFun2(it)}>add</button></li></>)
      }
      <form onSubmit={dataSubmit}>
        <input type="text" value={item} name="item" onChange={handler}/>
        <input type="number" value={price} name="price" onChange={handler}/>
        <input type="submit"/>
        </form>
     
    </div>
  );
}
