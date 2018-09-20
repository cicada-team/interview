let allCase=`Allegoric Alaskans;Blithering Badgers;win
Devastating Donkeys;Courageous Californians;draw
Devastating Donkeys;Allegoric Alaskans;win
Courageous Californians;Blithering Badgers;loss
Blithering Badgers;Devastating Donkeys;loss
Allegoric Alaskans;Courageous Californians;win`
let caseArr=allCase.split(/\s{2,}/)

let A=0,B=0,C=0,D=0

let case1={
  sen:"Allegoric Alaskans;Blithering Badgers;win",
  A:3,
  B:0
}
let case2={
  sen:"Devastating Donkeys;Courageous Californians;draw",
  D:1,
  C:1,
}
let case3={
  sen:"Devastating Donkeys;Allegoric Alaskans;win",
  D:3,
  A:0
}
let case4={
  sen:"Courageous Californians;Blithering Badgers;loss",
  C:3,
  B:0
}
let case5={
  sen:"Blithering Badgers;Devastating Donkeys;loss",
  B:3,
  D:0
}
let case6={
  sen:"Allegoric Alaskans;Courageous Californians;win",
  A:3,
  C:0
}


let inputSen="....."

let arr=[case1,case2,case3,case4,case5,case6]
for(let case of arr){
  if(case.sen===inputSen){
    for(let key in case){
      if(key=='A'){
        A+=case.key
      }else if(key == 'B'){
        B+=case.key
      }else if(key =='C'){
        C+=case.key
      }else{
        D+=case.key
      }
    }
  }
  break;
}

let scoreArr=[A,B,C,D]

let scoreArr=scoreArr.sort(function(a,b){
  return b-a
})


最终结果
tree=[
{
  id:1,
  name:..,
  children:[
    id:..,
    name:..,
    children:[..]
  ]
}
  ,
{
  id:2,
  name:..
  children:[
    id:..,
    name:..,
    children:[..]
  ]
}
,....
]

//代码
let tree=[]
let sourceArr=[...]

sourceArr.map(node=>{
  if(typeof node.parentId=='undefined'){
    tree.push({
      id:node.id,
      name:node.name
  })
  }
  
})

sourceArr.map(node=>{

})


let tree={}
function setTree(sourceArr,tree){
  sourceArr.forEach((node,i)=>{
    if(node.parentId == undefined){
      tree.push({
        id:node.id,
        name:node.name,
        children:[]
      })
      sourceArr.splice(i,1)
    }else{
      if(findNode(tree,node.parentId)){

      }else{

      }
    }
  })
}

function findNode(tree,id){
  for(let key in tree){
    if(key==id){
      return true
    }else if(tree.key.children.length){
      findNode(tree.key.children.length,id)
    }else {
      return false
    }
  }
}







