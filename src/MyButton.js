const MyButton  = function(props){
    return(
        <div>
        {props.label}
        <button>{props.text}</button>
        </div>
    )
}

export default MyButton;