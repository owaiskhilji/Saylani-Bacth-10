function ac(){
    document.getElementById("inp").value = ''
}
function abc(e){
    document.getElementById("inp").value += e
}
function eq(){
    var a = document.getElementById('inp')
    a.value =eval(a.value )
}
function del(){
    var b = document.getElementById("inp")
    b.value=b.value.slice(0,-1)
}
function per(){
    var c = document.getElementById('inp')
c.value = c.value =+'%'

}