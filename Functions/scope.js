{
let a=200
const b=100
var c=300
}
   // console.log(a)
    //console.log(b)
  //  console.log(c)

    function f() {
        let a=100
        const b=200
        console.log(a+b);
        function g() {
            let c=300
            const d=400
            console.log(a+b);
            console.log(c+d);
        }
        //console.log(d); // d is not defined here it is defined in g()
        g();
    }
    f();


    const x = function(num) {
        let a = 10;
        const b = 20;
       // var c = 30;
        console.log(a + b +num);
    }
    x(5);