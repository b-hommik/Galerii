window.onload=tagElements();
function tagElements(){

    var item = document.getElementsByClassName("btn btn-outline-secondary");
    for(var i =0; i<item.length;i++){
        item[i].addEventListener("click", generateImages); 
    }
}
/*function esimene() {
    i=1;
    while (i<5){
        source="2018/download"+i+".jpg";
        document.getElementById("img"+i).src=source; 
        i=i+1;   
    }
    console.log(source);
}
function teine() {
    i=1;
    while (i<5){
        source="2019/download"+i+".jpg";
        document.getElementById("img"+i).src=source; 
        i=i+1;   
    }
    console.log(source);
}*/
function generateImages(){
    
    //var year=document.getElementById("firstButton").innerHTML;
    i=1;
    var year = this.innerHTML;
    if(document.getElementById("img1")){
        while(i<5){
            var elem=document.getElementById("img"+i);
            elem.parentNode.removeChild(elem);
            i=i+1;
        }
    } 
    i=1; 
    while(i<5){
    var image=document.createElement("img");
    document.getElementById("col-sm-9").appendChild(image);
    image.id="img"+i;
    image.src=year+"/download"+i+".jpg";
    image.addEventListener("click", onclick);
    i=i+1;
    }
    console.log(this.innerHTML);
}
/*
function generateImages2019(){
    i=1;
    if(document.getElementById("img4")){//parem on kontrollida koige viimast elementi, mitte esimest.
        while(i<5){
            var elem=document.getElementById("img"+i);
            elem.parentNode.removeChild(elem);
            i=i+1;
        }
    } 
    i=1;
    while(i<5){
    var image=document.createElement("img");
    document.getElementById("col-sm-9").appendChild(image);
    image.id="img"+i;
    image.src="2019/download"+i+".jpg";
    i=i+1;
    }
}*/
var muudetud=false;
function onclick(){
    if(!muudetud){
        this.style.position="absolute";
        this.style.left="20%";
        this.style.top="55%";
        this.style.width="700px";
        this.style.height = "500px";
        var button = document.createElement("button");
        document.getElementById("col-sm-9").appendChild(button);
        button.id = "close";
        button.type = "button";
        button.class = "btn btn-outline-secondary";
        document.getElementById("close").innerHTML ="close";
        button.addEventListener("click", close);

        muudetud=true;
        console.log(this.style.width == "700px")
    }


}
function close(){
        this.image.style.position="static";
        this.image.style.left="0%";
        this.image.style.top="0%";
        this.image.style.width="200px";
        this.image.style.height = "200px";
        console.log(this);
        muudetud=false; 
    }
   //console.log(this);
 // }