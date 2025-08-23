const array =[{book:"java",price:200,publish : 1992},
                {book:"python",price:300,publish : 1995},
                {book:"javascript",price:400,publish : 1998},
                {book:"html",price:500,publish : 2000},

                {book:"css",price:600,publish : 2005},
                {book:"react",price:700,publish : 2010},
                {book:"angular",price:800,publish : 2015},  ]
const result = array.filter((value)=>{
    return value.price > 400
})
const result1 = array.filter((value)=>{
    return value.publish > 2000
})
console.log(result1);
console.log(result);
