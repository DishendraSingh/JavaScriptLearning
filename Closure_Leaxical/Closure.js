function Outer()
{
    let username = "Dishendra "
    function Inner(){
        let name="Dishendra singh"
        console.log(name)
        console.log(username);
    }
   // console.log(name)
    Inner()
}
Outer()
//console.log(username)

// closure is about scope of the variable which is defined in function which is not accessible out side of the funtion