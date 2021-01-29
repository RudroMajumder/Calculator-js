function display(value) {
    document.getElementById('display').value += value;
}
function result() {
    let value = document.getElementById('display').value;
    let result = eval(value);
    document.getElementById('display').value = result;
}
function remove() {
   var value =  document.getElementById("value-c").value ;
   if( value === "C"){
    document.getElementById('display').value = "";
   }
}