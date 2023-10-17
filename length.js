function convert(){ 
    let celciusval=(document.getElementById("input").value);
    let fareheitval= (celciusval*9)/5+32;
    let convert=document.getElementById("result");
convert.innerHTML= fareheitval.toFixed(0)+"fareheit";
}