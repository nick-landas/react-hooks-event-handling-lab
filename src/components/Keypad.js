// Code Keypad Component Here

const changeHandler = () => {
    console.log("Entering password...")
}
function Keypad (){
    return (
        <div>
            <label>Password:
                <input type="password" onChange={changeHandler} /> 
            </label>  
        </div>
    )
}

export default Keypad;