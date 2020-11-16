const MyButton  = function(props){
    return(
        <div>
            <br></br>
        {props.label}
            <button onClick={props.clickFunction}>{props.text}</button>
        </div>
    )
}

export default MyButton;