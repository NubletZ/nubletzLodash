export function intersection(...args: any[]) {
    const interList = []
    var n = args.length;
    if(n <= 1) return args;
    //console.log(` array = ${arguments[1]}`)
    for(let i = 0; i < args[0].length; i++){
        //console.log(`start to check ${i}`)
        if(checkIntersection(args, n-1, args[0][i])) interList.push(args[0][i])
    }
    return interList
}

function checkIntersection(array:Array<any>, x:number, value:any): boolean{
    for(let j=0; j < array[x].length; j++){
        if(x==1){
            if(array[1][j]==value){
                //console.log(`PUSH ${array[1][j]} == ${value}`)
                return true;
            }
            else if(j + 1 == array[x].length){
                //console.log(`${array[1][j]} == ${value}, FALSE`)
                return false;
            }
        }
        else if(array[x][j]==value){
            //console.log(`go to next function`)
            return checkIntersection(array, x-1, value);
        }
    }
    return false;
}

export function take(array:any[], n:number=1){
    const result = []
    var x = array.length
    for(let i = 0; i < n; i++){
        if(i < x) result.push(array[i]) 
    }
    return result
}

export function takeRight(array:any[], n:number=1){
    const result = []
    var x = array.length
    var i = x - n;
    if(i < 0) i = 0;
    for(i; i < x; i++){
        if(i < x) result.push(array[i]) 
    }
    return result
}