```js
/*
When the getName() method is called many times with the same object as an argument, it ends up being 
replaced by 'Complete name: Paulo Canuto'. This technique is called Inline Caching because 
it understands that the object used is the same and if there is a cache of it, it can bring 
optimization to the code

A very important detail to not break the cache is not to add any properties to the object after invoking
the function multiple times by passing the object as an argument.
*/


const userInfo = {
    firstName: "Paulo",
    lastName: "Canuto"
}

function getName(userInfo) {
    return `Complete name: ${userInfo.firstName} ${userInfo.lastName}`
}


getName(userInfo)

//some code

getName(userInfo)

//some code
```
