import React from "react"
import './MenuContent.css';
//import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import Items from '../../Homepage/Components/Item/Item.js'
import ShopBody from '../../Homepage/Components/ShopBody/ShopBody.js'



class MenuContent extends React.Component{
    
    render(){
        return(
         <div class="menu-container">
             <Menu_DoAn />
             <Menu_ThucUong />
             <Menu_Combo />
         </div>   
        )
    }
}
function Menu_DoAn(props){
    return(
        <div>
            <h1 class = "menu-title">Đồ Ăn</h1>
            <ul class="menu-food__list">
              {/* <Items hinh="/Images/bundau.jpg"name= " Bún đậu" gia = "10.000.000"/>
              <Items hinh="/Images/ochut.jpg" name = "Ốc hút" gia = "169.000"/>
              <Items hinh="/Images/nemchuaran.jpg" name = "Nem chua rán" gia = "100.000"/>
              <Items hinh="/Images/trasua.jpeg" name = "Trà sữa" gia = "1.000.000"/>
              <Items hinh="/Images/nuocep.jpg" name = "Nước ép" gia = "100.000"/>
              <Items hinh="/Images/matcha.jpg" name = "Trà sữa matcha" gia = "100.000"/>
               */}
               <ShopBody></ShopBody>
            </ul>
        </div>
    )
}
function Menu_ThucUong(props){
    return(
        <div>
            <h1 class = "menu-title">Thức uống</h1>
            <ul class="menu-food__list">
              {/* <Items hinh="/Images/bundau.jpg"name= " Bún đậu" gia = "10.000.000"/>
              <Items hinh="/Images/ochut.jpg" name = "Ốc hút" gia = "169.000"/>
              <Items hinh="/Images/nemchuaran.jpg" name = "Nem chua rán" gia = "100.000"/>
              <Items hinh="/Images/trasua.jpeg" name = "Trà sữa" gia = "1.000.000"/>
              <Items hinh="/Images/nuocep.jpg" name = "Nước ép" gia = "100.000"/> */}
              <ShopBody></ShopBody>
            </ul>
        </div>
    )
}
function Menu_Combo(props){
    return(
        <div>
            <h1 class = "menu-title">Combo</h1>
            <ul class="menu-food__list">
              {/* <Items hinh="/Images/bundau.jpg"name= " Bún đậu" gia = "10.000.000"/>
              <Items hinh="/Images/ochut.jpg" name = "Ốc hút" gia = "169.000"/>
              <Items hinh="/Images/nemchuaran.jpg" name = "Nem chua rán" gia = "100.000"/>
               */}
               <ShopBody></ShopBody>
            </ul>
        </div>
    )
}


export default MenuContent;

