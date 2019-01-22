function Add(a:number , b: number,c?:number){
    if (!c)
        c =  0;
    return a + b + c;
}

function Add1(a:number , b: number,c:number = 0){
    return a + b + c;
}


alert(Add(10,20))