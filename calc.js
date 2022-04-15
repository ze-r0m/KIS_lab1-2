let xx = document.querySelector(".jacheyka_xx");
let x = document.querySelector(".jacheyka_x");
let c = document.querySelector(".jacheyka_c");
let x1 = 0, x2 = 0, d = 0;
function result(){
    d = x.value**2 - 4 * xx.value * c.value;
    if (xx.value == 0) {
        alert("Error");
        return;
    }
    if (d > 0){
        x1 = (- x.value - Math.sqrt(d)/(2 * xx.value));
        x2 = (- x.value + Math.sqrt(d)/(2 * xx.value));
        alert("x1 = "+ x1 +"\nx2 = "+ x2);
    }
    else if(d = 0){
        x1 = -x.value / (2 * xx.value);
        alert("x1 = "+ x1);
    }
    else{
        alert("Корней нет")
    }
}