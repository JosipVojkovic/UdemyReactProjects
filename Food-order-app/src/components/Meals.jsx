import { useContext } from "react"
import CartContext from "./store/CartContext"

export default function Meals({ item }){

    const cartCtx = useContext(CartContext)

    function handleAddMealToCart() {
        cartCtx.addItem(item)
    }

    return(
        <div className="meal-item">
                <article>
                    <img src={`http://localhost:3000/${item.image}`} />
                    <h3>{item.name}</h3>
                    <div className="meal-item-description">
                        <p className="meal-item-price">${item.price}</p>
                        <p>{item.description}</p>
                    </div>
                    <div className="meal-item-actions">
                        <button onClick={handleAddMealToCart} className="meal-item-actions" id={item.id}>Add to cart</button>
                    </div>
                </article>
            </div>
    )
}