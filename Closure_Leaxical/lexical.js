function makeFunction()
{
    let name= "dishendra singh"
    function Inner()
    {
        console.log(name)
    }
    return Inner();
}

console.log(makeFunction())
//console.log(name)