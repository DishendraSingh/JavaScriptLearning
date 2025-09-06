let superhero=["thor","superman"];

let jetplane={

    airindia:"boing",
    spicejet:"airbus",
    getPlaneDetails:function(){

        console.log(`AirIndia is Using ${this.airindia}`)
        console.log(`SpiceJet is using ${this.spicejet}`)
    }
}

Object.prototype.Dishendra=function()
{
    console.log(`planes are availbale at every where`)
}

jetplane.Dishendra()
superhero.Dishendra()

// we are able to create protope, and able to inject prototype in Object, ex DIhsendra object is ib object and Arrary
//superhero, jet plane , and i m able to access the Dishndra prptotypen by araay and object

Array.prototype.HeyDish=function(){
    console.log('Hey HeyDish u have the prototype in Array onlu')
}

superhero.HeyDish(); // this is the array tyoe , HeyDish method is accebile
//jetplane.HeyDish(); we have the power to only Array , that it con working woth object type,