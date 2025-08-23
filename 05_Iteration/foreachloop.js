const array=["java","ruby","CPP","swift","python"]

// array.forEach(function(element,index,array){
//     console.log(element,index,array)
// })

array.forEach(function(val){
  //  console.log(val)
})
array.forEach((val)=>{
   // console.log(val)
})

function print(val){
  //  console.log(val)
}   

array.forEach(print)    



const languages=[

    {
        "name":"java","year":1995
    },

    {
        "name":"python","year":1991
    },  
{"name":"CPP","year":1985},
{"name":"ruby","year":1995},
{"name":"swift","year":2014}
]
languages.forEach((lang)=>{
    console.log(lang.name, lang.year)
})
