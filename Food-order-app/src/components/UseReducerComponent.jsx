import { useReducer, useState } from "react"

const ACTIONS = {
    ADD_ITEM: "add-item",
    REMOVE_ITEM: "remove-item",
    UPDATE_ITEM: "update-item"
}

function reducer(state, action){

    if(action.type === ACTIONS.ADD_ITEM){
        return state = [...state, action.value]
    }
    if(action.type === ACTIONS.REMOVE_ITEM){

        return state.filter((item, index) => index !== action.payload.index && item)

    }
    if(action.type === ACTIONS.UPDATE_ITEM){
        return state.map((item, index) => index === action.payload.index? action.payload.value: item)
    }

    return state
   
}

export default function UseReducerComponent(){

    const [inputValue, setInputValue] = useState("")
    const [state, dispatch] = useReducer(reducer, [])

    function onChange(event){
        setInputValue(event.target.value)
    }

    function handleAddItem(){
        dispatch({ type: ACTIONS.ADD_ITEM, value: inputValue })
    }

    function handleRemoveItem(index){
        dispatch({ type: ACTIONS.REMOVE_ITEM, payload: {index: index} })
    }

    function handleUpdateItem(index){
        dispatch({ type: ACTIONS.UPDATE_ITEM, payload: {index: index, value: inputValue} })
    }

    const listElements = state.map((item, index) => 
    <li>
        {item}
        <button onClick={() => handleRemoveItem(index)}>Remove Item</button>
        <button onClick={() => handleUpdateItem(index)}>Update Item</button>
    </li>)


    return(

        <>
            <label>
                To do:
                <input type="text" id="todo" name="todo" onChange={onChange} value={inputValue} />
            </label>
            <button onClick={handleAddItem}>Add Item</button>
            <ul>
                {listElements}
            </ul>
        </>
        
        
    )
}