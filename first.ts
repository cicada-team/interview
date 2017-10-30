var input = "Allegoric Alaskans;Blithering Badgers;win"//输入
var inputArr = input.split(";")
var res = {}
res[inputArr[0]] = res[inputArr[0]] || {MP:0,W:0,D:0,L:0,P:0}
let f=res[inputArr[0]]
res[inputArr[1]] = res[inputArr[1]] || {MP:0,W:0,D:0,L:0,P:0}
let s=res[inputArr[1]] 
if (inputArr[3] == "win") {
    f.MP = (f.MP || 0) + 1
    f.W = (f.W || 0) + 1
    f.P = (f.P || 0) + 3
    s.MP=(s.MP||0)+1
    s.L=(s.L||0)+1
} else if (inputArr[3] == 'draw') {
    f.MP = (f.MP || 0) + 1
    f.D= (f.D || 0) + 1
    f.P = (f.P || 0) + 1
    s.MP=(s.MP||0)+1
    s.D=(s.D||0)+1
    s.P = (s.P || 0) + 1    
}else{
    f.MP = (f.MP || 0) + 1
    f.L= (f.L || 0) + 1
    s.MP=(s.MP||0)+1
    s.W=(s.W||0)+1
    s.P = (s.P || 0) + 3 
}
console.log(res)