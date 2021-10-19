function Name(props) {
    console.log(props)
    return (
        <div>
            <h2> Player: {props.whichName} </h2> 
            <h3> Stats: </h3>
        </div>
           
    );
}

export default Name;