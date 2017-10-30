var input=[
    {id: 1},
    {id: 2, before: 1},
    {id: 3, after: 1},
    {id: 5, first: true},
    {id: 6, last: true},
    {id: 7, after: 8},
    {id: 8},
    {id: 9},
]
var pre=input.filter(item=>Object.values(item).length==1).map(item=>item.id)
input.map(item=>{
    if(item.before){
        let index=pre.indexOf(item.before)
        pre.splice(index,0,item.id)
    }else if(item.after){
        let index=pre.indexOf(item.after)
        pre.splice(index+1,0,item.id)
    }else if(item.first){
        pre.unshift(item.id)
    }else if(item.last){
        pre.push(item.id)
    }
})
let res=[]
pre.forEach(item=>{
    res.push(input.find(ele=>ele.id==item))
})
console.log(res)