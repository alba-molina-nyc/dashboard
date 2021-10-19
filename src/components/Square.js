function Square(props) {
    console.log(props)
    return (
<div> 
<h2> Name: {props.whichSquare} </h2> 
            <h3> Stats: </h3>
</div>
   );
}

export default Square;