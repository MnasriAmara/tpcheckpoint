var heart= document.getElementsByClassName("like");
console.log(heart)

for(let i=0; i<heart.length; i++){
    heart[i].addEventListener('click',function(){
        var btn=heart[i].querySelector(".fa-solid")
        btn.style.color = 'red';
        console.log(btn);
    });
}


var counter=document.getElementsByClassName("countplus");
console.log(counter);
for (let i=0; i<counter.length;i++){
    counter[i].addEventListener("click", function(){
        var quantite=counter[i].previousElementSibling;
        var nombreprod=quantite.innerHTML;
        
        nombreprod++;
        quantite.innerHTML=nombreprod;

        var totalprod=document.getElementById("tot");
        var quantiteprod=totalprod.innerHTML;
        quantiteprod++;
        totalprod.innerHTML=quantiteprod;
        
        console.log(totalprod.innerHTML);
        //console.log(quantite);

        var prixtotal=Number(document.getElementById("totalprice").querySelector("span").innerHTML);
        var div=counter[i].parentElement.parentElement.querySelector(".prix");
        var prixun=div.innerHTML;
        
        var prixprod=parseInt(prixun);
        prixtotal+=prixprod;
        document.getElementById("totalprice").querySelector("span").innerHTML=prixtotal;
        console.log(prixtotal);
    })
    
}

var countermoins=document.getElementsByClassName("countmoins");
console.log(countermoins);
for (let i=0; i<countermoins.length;i++){
    countermoins[i].addEventListener("click", function(){
        var quantitemoins=countermoins[i].nextElementSibling;
        var redprod=quantitemoins.innerHTML;
        
        if(redprod>0){
            redprod--;
        quantitemoins.innerHTML=redprod;
        console.log(redprod);

        var totalprod=document.getElementById("tot");
        var quantiteprod=totalprod.innerHTML;
        quantiteprod--;
        totalprod.innerHTML=quantiteprod;
        
        var prixtotal=Number(document.getElementById("totalprice").querySelector("span").innerHTML);
        var div=counter[i].parentElement.parentElement.querySelector(".prix");
        var prixun=div.innerHTML;

        var prixprod=parseInt(prixun);
        prixtotal-=prixprod;
        document.getElementById("totalprice").querySelector("span").innerHTML=prixtotal;
        console.log(prixtotal);

        }
        
        // console.log(totalprod.innerHTML);
        // //console.log(quantite);
                     
    })
    
}

var del =document.getElementsByClassName("fa-trash")
console.log(del);
for(let i=0; i<del.length; i++){
    del[i].addEventListener('click',function(){
        var quantt=del[i].parentElement.parentElement.parentElement.querySelector("#nbrprod");
        var quantvalue=quantt.innerHTML;
        var totalprod=document.getElementById("tot");
        var quantiteprod=totalprod.innerHTML;
        
        totalprod.innerHTML=quantiteprod;
        
        var prixtotal=Number(document.getElementById("totalprice").querySelector("span").innerHTML);
        console.log("prixtot",prixtotal)
        var div=del[i].parentElement.parentElement.parentElement.querySelector(".prix");
        var quantiteprod=totalprod.innerHTML-quantvalue;
        
        totalprod.innerHTML=quantiteprod
        
        var prixun=parseInt(div.innerHTML);
        prixtotal=prixtotal-quantvalue*prixun
        document.getElementById("totalprice").querySelector("span").innerHTML=prixtotal;
        quantt.innerHTML=0
    })
}