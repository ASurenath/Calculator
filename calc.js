function displayData(e){
    display.value+=e
}
function result(){
    try{    
        display.value=eval(display.value)
    }
    catch{
        alert('Invalid Expression')
        allClear()
    }
}
function allClear(){
    display.value=''
}
function backSpace(){
    display.value=display.value.slice(0,-1)
}