var d = new Date();

    var annee = d.getFullYear();
    var mois = d.getMonth()+1;
    var jour = d.getDate();
    var heure = d.getHours();
    var minute = d.getMinutes();
    var seconde = d.getSeconds();

var moisl = ''

if(mois == 1){moisl="Janiver"}
else if (mois == 2){moisl="Jévrier"}
else if (mois == 3){moisl="Mars"}
else if (mois == 4){moisl="Avril"}
else if (mois == 5){moisl="Mai"}
else if (mois == 6){moisl="Juin"}
else if (mois == 7){moisl="Juillet"}
else if (mois == 8){moisl="Aout"}
else if (mois == 9){moisl="Septembre"}
else if (mois == 10){moisl="octobre"}
else if (mois == 11){moisl="Novembre"}
else if (mois == 12){moisl="Décembre"};





var ladate = document.getElementById('ladate');
ladate.innerHTML =  jour + " " + moisl + " " + annee;

var boxheure = document.getElementById('divp41');

var lheure = document.getElementById('lheure');
var navnav = document.getElementById('navnav');

function afficherHeure()
        {
            d=new(Date)
            heure = d.getHours();
            minute = d.getMinutes();
            if(minute==1){minute="01"}
            else if(minute==1){minute="01"}
            else if(minute==2){minute="02"}
            else if(minute==3){minute="03"}
            else if(minute==4){minute="04"}
            else if(minute==5){minute="05"}
            else if(minute==6){minute="06"}
            else if(minute==7){minute="07"}
            else if(minute==8){minute="08"}
            else if(minute==9){minute="09"}
            else if(minute==0){minute="00"};
            lheure.innerHTML = heure + ":" + minute;
            boxheure.style.display = "block";
            navnav.style.backgroundColor = "rgba(21, 20, 20, 0.903)"
        }
function enleverHeure()
        {
            boxheure.style.display = "none";
            navnav.style.backgroundColor = "rgb(128, 128, 128)"
        }
ladate.addEventListener('mouseover',afficherHeure);
ladate.addEventListener('mouseout',enleverHeure);

var lp41 = document.getElementById('lp41');
var lp42 = document.getElementById('lp42');
var lp43 = document.getElementById('lp43');
var lp44 = document.getElementById('lp44');
var lp45 = document.getElementById('lp45');
var lp47 = document.getElementById('lp47');
var lp49 = document.getElementById('lp49');


var loki = document.getElementById('loki');

function loki1in(){
                loki.style.display='block'    
                loki.innerHTML="Banque de Tunisie"};
function loki1out(){
                loki.style.display='none'};
function loki2in(){
                loki.style.display='block'    
                loki.innerHTML="GMAIL"};
function loki2out(){
                loki.style.display='none'};

function loki3in(){
                    loki.style.display='block'    
                    loki.innerHTML="YOUTUBE"};
function loki3out(){
                    loki.style.display='none'};

function loki4in(){
                    loki.style.display='block'    
                    loki.innerHTML="FaceBook"};
function loki4out(){
                    loki.style.display='none'};

function loki5in(){
                    loki.style.display='block'    
                    loki.innerHTML="Mosaique FM"};
function loki5out(){
                    loki.style.display='none'};

function loki6in(){
                loki.style.display='block'    
                loki.innerHTML="Calculatrice"};
function loki6out(){
                loki.style.display='none'};

function loki7in(){
                    loki.style.display='block'    
                    loki.innerHTML="Fond d'écran"};
function loki7out(){
                    loki.style.display='none'};

function loki8in(){
                        loki.style.display='block'    
                        loki.innerHTML="Devis"};
function loki8out(){
                        loki.style.display='none'};
    



lp41.addEventListener('mousemove',loki1in);
lp41.addEventListener('mouseout',loki1out);

lp42.addEventListener('mousemove',loki2in);
lp42.addEventListener('mouseout',loki2out);

lp43.addEventListener('mousemove',loki3in);
lp43.addEventListener('mouseout',loki3out);

lp44.addEventListener('mousemove',loki4in);
lp44.addEventListener('mouseout',loki4out);

lp45.addEventListener('mousemove',loki5in);
lp45.addEventListener('mouseout',loki5out);

lp47.addEventListener('mousemove',loki6in);
lp47.addEventListener('mouseout',loki6out);

lp48.addEventListener('mousemove',loki7in);
lp48.addEventListener('mouseout',loki7out);

lp49.addEventListener('mousemove',loki8in);
lp49.addEventListener('mouseout',loki8out);





// Code calculatrice


function formatercalc(c){return Intl.NumberFormat('fr-FR',{ maximumFractionDigits : 19 }).format(c);}



var calculatrice = document.getElementById('calc');
var lp47 = document.getElementById('lp47');
var amm2 = document.getElementById('amm2');

function ouvrircalc(){ if(calculatrice.className == 'calc1')
                         {calculatrice.className = 'calc0'}
                        else{calculatrice.className = 'calc1'
                             if(devis.className="devis1")
                                {devis.className='devis0'};
                            } 
 
                        
                    }


lp47.addEventListener('click',ouvrircalc);
amm2.addEventListener('click',ouvrircalc);




var calcC = document.getElementById('calcC');
var calc0 = document.getElementById('calc0');
var calc1 = document.getElementById('calc1');
var calc2 = document.getElementById('calc2');
var calc3 = document.getElementById('calc3');
var calc4 = document.getElementById('calc4');
var calc5 = document.getElementById('calc5');
var calc6 = document.getElementById('calc6');
var calc7 = document.getElementById('calc7');
var calc8 = document.getElementById('calc8');
var calc9 = document.getElementById('calc9');
var calc10 = document.getElementById('calc10');
var calcretour = document.getElementById('calcretour');


var calcAfficheur = document.getElementById('calcAfficheur');
var calcAfficheurr = document.getElementById('calcAfficheurr');


function remiseZero()
            {
                calcAfficheur.innerText="0"
                calcAfficheurr.innerText=""
                virgule = 0 ;
                x = 0;
                y=0;

            }
calcC.addEventListener('click',remiseZero);
calcC.addEventListener('mousedown',appuyebt);
calcC.addEventListener('mouseup',lachebt);
function appuyebt() {this.style.boxShadow = "0px 0px 0px white"}
function lachebt() {this.style.boxShadow = "1px 1px 3px rgba(128, 128, 128, 0.701)"}



function ecrire0()
            {
             if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="0"}
                else{
                     if(calcAfficheur.innerText.length<21)
                     {calcAfficheur.innerText +="0";}
                    }
            }
calc0.addEventListener('click',ecrire0);
calc0.addEventListener('mousedown',appuyebt);
calc0.addEventListener('mouseup',lachebt);


function ecrire1()
            {
                if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="1"}
                else{
                    if(calcAfficheur.innerText.length<21)
                    {calcAfficheur.innerText +="1"}
                    }
x            }
calc1.addEventListener('click',ecrire1);
calc1.addEventListener('mousedown',appuyebt);
calc1.addEventListener('mouseup',lachebt);

function ecrire2()
            {
                if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="2"}
                else{
                    if(calcAfficheur.innerText.length<21)
                    {calcAfficheur.innerText +="2"}
                    }
            }
calc2.addEventListener('click',ecrire2);
calc2.addEventListener('mousedown',appuyebt);
calc2.addEventListener('mouseup',lachebt);

function ecrire3()
            {
                if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="3"}
                else{
                    if(calcAfficheur.innerText.length<21)
                    {calcAfficheur.innerText +="3"}
                    }
            }
calc3.addEventListener('click',ecrire3);
calc3.addEventListener('mousedown',appuyebt);
calc3.addEventListener('mouseup',lachebt);

function ecrire4()
            {
                if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="4"}
                else{
                    if(calcAfficheur.innerText.length<21)
                    {calcAfficheur.innerText +="4"}
                    }
            }
calc4.addEventListener('click',ecrire4);
calc4.addEventListener('mousedown',appuyebt);
calc4.addEventListener('mouseup',lachebt);

function ecrire5()
            {
                if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="5"}
                else{
                    if(calcAfficheur.innerText.length<21)
                    {calcAfficheur.innerText +="5"}
                    }
            }
calc5.addEventListener('click',ecrire5);
calc5.addEventListener('mousedown',appuyebt);
calc5.addEventListener('mouseup',lachebt);

function ecrire6()
            {
                if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="6"}
                else{
                    if(calcAfficheur.innerText.length<21){
                    calcAfficheur.innerText +="6"}}
            }
calc6.addEventListener('click',ecrire6);
calc6.addEventListener('mousedown',appuyebt);
calc6.addEventListener('mouseup',lachebt);

function ecrire7()
            {
                if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="7"}
                else{
                    if(calcAfficheur.innerText.length<21){
                    calcAfficheur.innerText +="7"}}
            }
calc7.addEventListener('click',ecrire7);
calc7.addEventListener('mousedown',appuyebt);
calc7.addEventListener('mouseup',lachebt);

function ecrire8()
            {
                if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="8"}
                else{
                    if(calcAfficheur.innerText.length<21){
                    calcAfficheur.innerText +="8"}}
            }
calc8.addEventListener('click',ecrire8);
calc8.addEventListener('mousedown',appuyebt);
calc8.addEventListener('mouseup',lachebt);

function ecrire9()
            {
                if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="9"}
                else{if(calcAfficheur.innerText.length<21){
                    calcAfficheur.innerText +="9"}}
            }
calc9.addEventListener('click',ecrire9);
calc9.addEventListener('mousedown',appuyebt);
calc9.addEventListener('mouseup',lachebt);

var virgule = 0;
function ecrire10()
            {
                  if(virgule == 0 )
                  {
                    if (calcAfficheur.innerHTML == '0')
                       {calcAfficheur.innerText = "0."
                        virgule=1;   
                       }
                        else{
                            if(calcAfficheur.innerText.length<21){
                            calcAfficheur.innerText +="."
                            virgule=1;
                            }}
                  }
                 
                  
            }
calc10.addEventListener('click',ecrire10);
calc10.addEventListener('mousedown',appuyebt);
calc10.addEventListener('mouseup',lachebt);

var x = 0;
var y = 0;
var longeurafficheurr =0;
function plus()
            {
                if (calcAfficheur.innerHTML == '0')
                    {
                        if (resultatReporte == 0){
                            
                            longeurafficheurr = calcAfficheurr.innerText.length
                            calcAfficheurr.innerHTML = calcAfficheurr.innerText.substring(0,longeurafficheurr-2) + ' <span class="boldr2">+</span>';
                            
                            calcAfficheur.innerText="0"}
                            
                        else {
                                calcAfficheurr.innerHTML = resultatReporte + ' <span class="boldr2">+</span>' ;
                                x = parseFloat(resultatReporte);
                                calcAfficheur.innerText="0";
                                resultatReporte=0;
                                virgule=0;

                             }
                    }
                else
                    {
                     if (x==0)
                        {
                            x = parseFloat(calcAfficheur.innerText); //change string en number avec virgule "."
                            calcAfficheur.innerText = "0"
                            calcAfficheurr.innerHTML=x + ' <span class="boldr2"> + </span>'
                            virgule=0
                        }
                    else
                        {
                            if (calcAfficheur.innerHTML == '0')
                               {calcAfficheur.innerText="0"}
                            else
                            {
                                egaliser();                
                            }

                        }
                    
                    }
            }
calcplus.addEventListener('click',plus);
calcplus.addEventListener('mousedown',appuyebt);
calcplus.addEventListener('mouseup',lachebt);

function fois()
            {
                if (calcAfficheur.innerHTML == '0')
                    {
                        if (resultatReporte == 0){
                            longeurafficheurr = calcAfficheurr.innerText.length
                            calcAfficheurr.innerHTML = calcAfficheurr.innerText.substring(0,longeurafficheurr-2) + ' <span class="boldr2">X</span>';
                            
                            calcAfficheur.innerText="0"}
                            
                        else {
                                calcAfficheurr.innerHTML = resultatReporte + ' <span class="boldr2"> X </span>' ;
                                x = parseFloat(resultatReporte);
                                calcAfficheur.innerText="0";
                                resultatReporte=0;
                                virgule=0;

                             }
                    }
                else
                    {
                     if (x==0)
                        {
                            x = parseFloat(calcAfficheur.innerText); //change string en number avec virgule "."
                            calcAfficheur.innerText = "0"
                            calcAfficheurr.innerHTML=x + ' <span class="boldr2"> X </span>'
                            virgule=0
                        }
                    else
                        {
                            if (calcAfficheur.innerHTML == '0'){calcAfficheur.innerText="0"}
                            else
                            {
                                egaliser();                
                            }

                        }
                    
                    }
            }
var calcfois = document.getElementById('calcx')
calcfois.addEventListener('click',fois);
calcfois.addEventListener('mousedown',appuyebt);
calcfois.addEventListener('mouseup',lachebt);

            function sur()
            {
                if (calcAfficheur.innerHTML == '0')
                    {
                        if (resultatReporte == 0){
                            longeurafficheurr = calcAfficheurr.innerText.length
                            calcAfficheurr.innerHTML = calcAfficheurr.innerText.substring(0,longeurafficheurr-2) + ' <span class="boldr2">/</span>';
                            
                            calcAfficheur.innerText="0"}
                            
                        else {
                                calcAfficheurr.innerHTML = resultatReporte + '<span class="boldr2"> / </span>' ;
                                x = parseFloat(resultatReporte);
                                calcAfficheur.innerText="0";
                                resultatReporte=0;
                                virgule=0;

                             }
                    }
                else
                    {
                     if (x==0)
                        {
                            x = parseFloat(calcAfficheur.innerText); //change string en number avec virgule "."
                            calcAfficheur.innerText = "0"
                            calcAfficheurr.innerHTML= x + ' <span class="boldr2"> / </span>'
                            virgule=0
                        }
                      else
                        {
                            if (calcAfficheur.innerHTML == '0'){calcAfficheur.innerText="0"}
                            else
                            {
                                egaliser();                
                            }
                        }
                
                    }
            }


function moins()
{
    if (calcAfficheur.innerHTML == '0')
        {
            if (resultatReporte == 0){
                longeurafficheurr = calcAfficheurr.innerText.length
                calcAfficheurr.innerHTML = calcAfficheurr.innerText.substring(0,longeurafficheurr-2) + ' <span class="boldr2">-</span>';
                calcAfficheur.innerText="0"}
                
            else {
                    calcAfficheurr.innerHTML = resultatReporte + ' <span class="boldr2"> - </span>' ;
                    x = parseFloat(resultatReporte);
                    calcAfficheur.innerText="0";
                    resultatReporte=0;
                    virgule=0;

                 }
        }
    else
        {
         if (x==0)
            {
                x = parseFloat(calcAfficheur.innerText); //change string en number avec virgule "."
                calcAfficheur.innerText = "0"
                calcAfficheurr.innerHTML= x + ' <span class="boldr2"> - </span>'
                virgule=0
            }
          else
            {
                if (calcAfficheur.innerHTML == '0'){calcAfficheur.innerText="0"}
                else
                {
                    egaliser();                
                }

            }
        
        }
}

var calcmoins = document.getElementById('calcmoins')
calcmoins.addEventListener('click',moins);
calcmoins.addEventListener('mousedown',appuyebt);
calcmoins.addEventListener('mouseup',lachebt);


var calcsur = document.getElementById('calcsur')
calcsur.addEventListener('click',sur);
calcsur.addEventListener('mousedown',appuyebt);
calcsur.addEventListener('mouseup',lachebt);


var longeurafficheur = 0

function ecrireretour()
            {
                if (calcAfficheur.innerHTML == '0')
                {calcAfficheur.innerText ="0"}
                else
                {
                    longeurafficheur = calcAfficheur.innerText.length

                    if(calcAfficheur.innerText.substring(longeurafficheur-1,longeurafficheur) != ".")
                      {
                        if(longeurafficheur>1)
                            {
                                calcAfficheur.innerHTML = calcAfficheur.innerText.substring(0,longeurafficheur-1);

                            }
                        else {calcAfficheur.innerHTML=0}
                      }

                    else{virgule = 0;
                            if(longeurafficheur>1)
                            {
                                calcAfficheur.innerHTML = calcAfficheur.innerText.substring(0,longeurafficheur-1);

                            }
                            else {calcAfficheur.innerHTML=0}                       
                        }                      
                }
            }

calcretour.addEventListener('click',ecrireretour);
calcretour.addEventListener('mousedown',appuyebt);
calcretour.addEventListener('mouseup',lachebt);


var btegale = document.getElementById("btegale");



btegale.addEventListener('mousedown',appuye);
btegale.addEventListener('mouseup',lache);
function appuye() {btegale.style.boxShadow = "0px 0px 0px white"}
function lache() {btegale.style.boxShadow = "1px 1px 5px rgba(128, 128, 128, 0.701)"}

btegale.addEventListener('click',egaliser);
var r=0;
var h=0;
var j=0;
var resultatReporte = 0;
// var longeurafficheurr = 
function multiplication(h,j){r=h*j};
function addition(h,j){r=h+j};
function division(h,j){r=h/j};

function egaliser() {
                        if(calcAfficheurr.innerText==""){calcAfficheurr.innerText=""}
                        else
                            {
                             longeurafficheurr=calcAfficheurr.innerText.length
                             if(calcAfficheurr.innerText.substring(longeurafficheurr-1,longeurafficheurr) == "+")
                               {
                                y=parseFloat(calcAfficheur.innerText)
                                addition(x*100,y*100);
                                r=r/100;
                                calcAfficheurr.innerHTML=calcAfficheurr.innerHTML + ' ' + y + ' <span class="boldr2"> = </span>' + '<span id="boldr">'+ formatercalc(r); + "</span>"; 
                                calcAfficheur.innerText="0"
                                resultatReporte = r;
                                x=0
                                y=0
                                virgule=0
                               }
                             else if(calcAfficheurr.innerText.substring(longeurafficheurr-1,longeurafficheurr) == "X")
                               {
                                y=parseFloat(calcAfficheur.innerText)
                                calcAfficheur.innerText="0"
                                calcAfficheurr.innerHTML = calcAfficheurr.innerHTML + y + ' <span class="boldr2"> = </span>' + '<span id="boldr">'+ formatercalc(((x*1000000)*(y*1000000))/1000000000000); +'</span>';                
                                resultatReporte = ((x*1000000)*(y*1000000))/1000000000000;
                                x=0
                                y=0
                                virgule=0
                               }

                             else if(calcAfficheurr.innerText.substring(longeurafficheurr-1,longeurafficheurr) == "/")
                               {
                                y=parseFloat(calcAfficheur.innerText)
                                calcAfficheur.innerText="0"
                                calcAfficheurr.innerHTML = calcAfficheurr.innerHTML + y + ' <span class="boldr2"> = </span>'+ '<span id="boldr">'+formatercalc((x*1000000000)/(y*1000000000));  +'</span>';                
                                resultatReporte = (x*1000000000)/(y*1000000000);
                                x=0
                                y=0
                                virgule=0
                               } 

                              else if(calcAfficheurr.innerText.substring(longeurafficheurr-1,longeurafficheurr) == "-")
                               {
                                y=parseFloat(calcAfficheur.innerText)
                                calcAfficheur.innerText="0"
                                calcAfficheurr.innerHTML = calcAfficheurr.innerHTML + y + ' <span class="boldr2"> = </span>'+ '<span id="boldr">'+ formatercalc(((x*1000000000)-(y*1000000000))/1000000000); +'</span>';                
                                resultatReporte = ((x*1000000000)-(y*1000000000))/1000000000;
                                x=0
                                y=0
                                virgule=0
                               }   
                               
                            }
                    }


document.body.addEventListener('keypress',(e)=>
    {
        if(e.key == 'Enter' && calculatrice.className == 'calc1'){egaliser();}
        else if(e.key == '0' && calculatrice.className == 'calc1'){ecrire0();}
        else if(e.key == '1' && calculatrice.className == 'calc1'){ecrire1();}
        else if(e.key == '2' && calculatrice.className == 'calc1'){ecrire2();}
        else if(e.key == '3' && calculatrice.className == 'calc1'){ecrire3();}
        else if(e.key == '4' && calculatrice.className == 'calc1'){ecrire4();}
        else if(e.key == '5' && calculatrice.className == 'calc1'){ecrire5();}
        else if(e.key == '6' && calculatrice.className == 'calc1'){ecrire6();}
        else if(e.key == '7' && calculatrice.className == 'calc1'){ecrire7();}
        else if(e.key == '8' && calculatrice.className == 'calc1'){ecrire8();}
        else if(e.key == '9' && calculatrice.className == 'calc1'){ecrire9();}
        else if(e.key == '*' && calculatrice.className == 'calc1'){fois();}
        else if(e.key == '-' && calculatrice.className == 'calc1'){moins();}
        else if(e.key == '/' && calculatrice.className == 'calc1'){sur();}
        else if(e.key == ':' && calculatrice.className == 'calc1'){sur();}
        else if(e.key == '+' && calculatrice.className == 'calc1'){plus();}
        else if(e.key == ',' && calculatrice.className == 'calc1'){ecrire10();}
        else if(e.key == '.' && calculatrice.className == 'calc1'){ecrire10();}
        else if(e.key == ';' && calculatrice.className == 'calc1'){ecrire10();}
    })

    document.body.addEventListener('keydown',(e)=>
    {
    if(e.key === 'Backspace' && calculatrice.className == 'calc1'){ecrireretour();}
    })

   

// calcAfficheur.addEventListener('change',(e)=>{alert("pppp");});

//Fin Code calculatrice







// code changement de fond d'ecran

var btchangephoto=document.getElementById('lp48');
btchangephoto.addEventListener('click',changephoto);
var a = 0;
function changephoto()
                      {
                        if (a<4){a+=1}
                        else{a=1}

                        if(a==1){photofond.className="photofadein2";}
                        else if(a==2){photofond.className="photofadein3";}
                        else if(a==3){photofond.className="photofadein4";}
                        else {photofond.className="photofadein1"}

                      };
// Fin code changement de fond d'ecran

//code Devis

                //ouverture Devis
var devis = document.getElementById('devis')

function ouvrirdevis(){ if(devis.className == 'devis1')
                         {devis.className = 'devis0'
                           
                         }
                        else{devis.className = 'devis1'
                              resultatbn();
                             if (calculatrice.className="calc1")
                                {calculatrice.className='calc0'}
                            } 
 
                        
                    }

lp49.addEventListener('click',ouvrirdevis);
var amm3 = document.getElementById('amm3');
amm3.addEventListener('click',ouvrirdevis);

                //fin ouverture Devis

var blocnotes = document.getElementById('blocnotes');
var grandblocnotes = document.getElementById('grandblocnotes');

var livres = document.getElementById('livres');
var grandlivres = document.getElementById('grandlivres');

var flyers = document.getElementById('flyers');
var grandflyers =document.getElementById('grandflyers');

var emballage = document.getElementById('emballage');
var grandemballage =document.getElementById('grandemballage');

var portedoc = document.getElementById('portedoc');
var grandportedoc =document.getElementById('grandportedoc');



var cartevisite = document.getElementById('cartevisite');
var grandcartevisite =document.getElementById('grandcartevisite');

blocnotes.addEventListener('click',ouvrirblocnotes);
function ouvrirblocnotes(){grandblocnotes.className = "grandblocnotes1";
                           blocnotes.style.color = "rgba(0, 136, 255, 0.535)";
                           blocnotes.style.borderLeft ="6px solid rgba(0, 136, 255, 0.535)";
                           grandlivres.className = "grandlivres0";
                           livres.style.color = "gray";
                           livres.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandflyers.className="grandflyers0";
                           flyers.style.color="gray";
                           flyers.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandemballage.className="grandemballage0";
                           emballage.style.color="gray";
                           emballage.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandportedoc.className="grandportedoc0";
                           portedoc.style.color="gray";
                           portedoc.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandcartevisite.className="grandcartevisite0";
                           cartevisite.style.color="gray";
                           cartevisite.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           resultatbn();
                        }


livres.addEventListener('click',ouvrirlivre);
function ouvrirlivre(){grandblocnotes.className = "grandblocnotes0";
                           blocnotes.style.color = "gray";
                           blocnotes.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandlivres.className = "grandlivres1";
                           livres.style.color = "rgba(0, 136, 255, 0.535)";
                           livres.style.borderLeft ="6px solid rgba(0, 136, 255, 0.535)";
                           grandflyers.className="grandflyers0";
                           flyers.style.color="gray";
                           flyers.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandemballage.className="grandemballage0";
                           emballage.style.color="gray";
                           emballage.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandportedoc.className="grandportedoc0";
                           portedoc.style.color="gray";
                           portedoc.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandcartevisite.className="grandcartevisite0";
                           cartevisite.style.color="gray";
                           cartevisite.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";}
flyers.addEventListener('click',ouvrirflyers);
function ouvrirflyers(){   grandblocnotes.className = "grandblocnotes0";
                           blocnotes.style.color = "gray";
                           blocnotes.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandlivres.className = "grandlivres0";
                           livres.style.color = "gray";
                           livres.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandflyers.className="grandflyers1";
                           flyers.style.color="rgba(0, 136, 255, 0.535)";
                           flyers.style.borderLeft ="6px solid rgba(0, 136, 255, 0.535)";
                           grandemballage.className="grandemballage0";
                           emballage.style.color="gray";
                           emballage.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandportedoc.className="grandportedoc0";
                           portedoc.style.color="gray";
                           portedoc.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandcartevisite.className="grandcartevisite0";
                           cartevisite.style.color="gray";
                           cartevisite.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";}


emballage.addEventListener('click',ouvriremballage);
function ouvriremballage(){grandblocnotes.className = "grandblocnotes0";
                           blocnotes.style.color = "gray";
                           blocnotes.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandlivres.className = "grandlivres0";
                           livres.style.color = "gray";
                           livres.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandflyers.className="grandflyers0";
                           flyers.style.color="gray";
                           flyers.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandemballage.className="grandemballage1";
                           emballage.style.color="rgba(0, 136, 255, 0.535)";
                           emballage.style.borderLeft ="6px solid rgba(0, 136, 255, 0.535)";
                           grandportedoc.className="grandportedoc0";
                           portedoc.style.color="gray";
                           portedoc.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandcartevisite.className="grandcartevisite0";
                           cartevisite.style.color="gray";
                           cartevisite.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";}           

portedoc.addEventListener('click',ouvrirportedoc);
function ouvrirportedoc(){grandblocnotes.className = "grandblocnotes0";
                           blocnotes.style.color = "gray";
                           blocnotes.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandlivres.className = "grandlivres0";
                           livres.style.color = "gray";
                           livres.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandflyers.className="grandflyers0";
                           flyers.style.color="gray";
                           flyers.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandemballage.className="grandemballage0";
                           emballage.style.color="gray";
                           emballage.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandportedoc.className="grandportedoc1";
                           portedoc.style.color="rgba(0, 136, 255, 0.535)";
                           portedoc.style.borderLeft ="6px solid rgba(0, 136, 255, 0.535)";
                           grandcartevisite.className="grandcartevisite0";
                           cartevisite.style.color="gray";
                           cartevisite.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";}    

cartevisite.addEventListener('click',ouvrircartedvisite);
function ouvrircartedvisite(){grandblocnotes.className = "grandblocnotes0";
                           blocnotes.style.color = "gray";
                           blocnotes.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandlivres.className = "grandlivres0";
                           livres.style.color = "gray";
                           livres.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandflyers.className="grandflyers0";
                           flyers.style.color="gray";
                           flyers.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandemballage.className="grandemballage0";
                           emballage.style.color="gray";
                           emballage.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandportedoc.className="grandportedoc0";
                           portedoc.style.color="gray";
                           portedoc.style.borderLeft ="6px solid rgba(255, 255, 255, 0)";
                           grandcartevisite.className="grandcartevisite1";
                           cartevisite.style.color="rgba(0, 136, 255, 0.535)";
                           cartevisite.style.borderLeft ="6px solid rgba(0, 136, 255, 0.535)";}  
            
            
            
            
            
            //  bloc Notes
          
          
function formaterbn(v){return Intl.NumberFormat('fr-FR',{ maximumFractionDigits : 2 }).format(v);}
          


var formatbn = "";
var formatcouvbn = "";
var feuillea0 = document.getElementById('feuillea0');
var feuillea3 = document.getElementById('feuillea3');
var feuillea4 = document.getElementById('feuillea4');


var qbnF = document.getElementById("qbnF");
var coutunitaireP = document.getElementById("coutunitaireP");
var couttotalP = document.getElementById("couttotalP");
var coutimpint = document.getElementById("coutimpint");
var coutimpintunitaire = document.getElementById("coutimpintunitaire");

var coutimpcouvunitaire=document.getElementById("coutimpcouvunitaire");
var coutimpcouv=document.getElementById("coutimpcouv");

var pellcouvunitaire=document.getElementById('pellcouvunitaire');
var pellcouv=document.getElementById('pellcouv');

var reliureunitaire = document.getElementById('reliureunitaire');
var reliure = document.getElementById('reliure');

var prixunitaire=document.getElementById('prixunitaire');
var prixtotal=document.getElementById('prixtotal');
function formater(g){return Intl.NumberFormat('fr-FR',{style:"currency",currency : 'TND'}).format(g);}

var formatphotobn = document.getElementById('f4');
var impressioncouvphotobn = document.getElementById('f5');
var impressionintphotobn = document.getElementById('f6');


function resultatbn(){
        const checkBox = document.getElementById('A5').checked;

        var qnb1 = document.getElementById('qnb1').value;
        var qnb2 = document.getElementById('qnb2').value;
        var qbn0 = 0;
        var volbn0 = 0;
        var rtblocnotes = 0;

        var prixpapierint = 0;
        var prixpapiercouv = 0;
        var prixpapiertotal = 0;
        var prixpapierunitaire = 0;

        var prixt=0;
        var prixu = 0;

       

        qbn0 = qnb1;
        volbn0 = qnb2;
        rtblocnotes = qbn0 * volbn0;
        if (qbn0 != ""){qbnF.innerHTML="Quantité :<Br> <span class='rtbnb3'>" + Intl.NumberFormat().format(qnb1)+"<span/>" } else {qbnF.innerHTML="Quantité : 0"};

        if (checkBox === true) {formatbn= "A5"
        formatphotobn.className = "formatphotobn0";            }
                            else{formatbn = "A4"
                            formatphotobn.className = "formatphotobn1";}  
        
        var xxreliure = 0;

        const checkBox2 = document.getElementById('dos').checked;  
        if (checkBox2 === true) 
        {
            if (formatbn == "A5")
            {
            formatcouvbn= "A4+"
            xxreliure = qbn0 * 0.25
            }
            else{formatcouvbn = "A3+"
                xxreliure = qbn0 * 0.35
                }
        }

        const spirale = document.getElementById('spirale').checked;

        if (spirale === true)
        {
            if (formatbn == "A5") {xxreliure = qbn0 * 0.45}
            else {xxreliure = qbn0 * 0.55}

        }

        const spiralehaut = document.getElementById('spiralehaut').checked;
        if (spiralehaut === true)
        {
            if (formatbn == "A5") {xxreliure = qbn0 * 0.35}
            else {xxreliure = qbn0 * 0.45}
        
        }








        var xxint = 0; //prix passage int
        var impressionint = document.getElementById('impressionint').value;

        var priximpint = 0;
        var priximpintunitaire = 0;
        
        

        if(impressionint === '1'){xxint = 0.04};
        if(impressionint === '2'){xxint = 0.07};
        if(impressionint === '3'){xxint = 0.17};
        if(impressionint === '4'){xxint = 0.3};
        if(rtblocnotes != 0){
        if(impressionint === '5'){xxint = (32/rtblocnotes)+0.01};
                            }
        if(rtblocnotes != 0){
            if(impressionint === '6'){xxint = (32/rtblocnotes)+0.02};
                            }       
        if(rtblocnotes != 0){
            if(impressionint === '7'){xxint = (140/rtblocnotes)+0.04};
                            }    
        if(rtblocnotes != 0){
            if(impressionint === '8'){xxint = (140/rtblocnotes)+0.08};
                            }                       
        
        var xxcouv = 0; //prix passage Couv
        var impressioncouv = document.getElementById('impressioncouv').value;
        
        var priximpcouv = 0;
        var priximpcouvunitaire = 0;
        
        
        if (impressioncouv === '1'){xxcouv=0.8};
        if (impressioncouv === '2'){xxcouv=1.4};
        if(qbn0 != 0){
            if (impressioncouv === '3'){xxcouv=(140/qbn0)+0.04};
                            } 
        if(qbn0 != 0){
            if (impressioncouv === '4'){xxcouv=(140/qbn0)+0.08};
                            } 


         
        const checkboxsans = document.getElementById("sans").checked;
        const checkboxpelr = document.getElementById('pelliculagerecto').checked;
        const checkboxpelrv = document.getElementById('pelliculagerv').checked;
        const checkboxcontre = document.getElementById('contrecolle').checked;
        var xxpel = 0;
        var finitioncouv = 0;
        
        if (checkboxsans === true){xxpel = 0};
        if (checkboxpelr === true){xxpel = 0.144};
        if (checkboxpelrv === true){xxpel = 0.288};
        if (checkboxcontre === true){xxpel = 6};


        rtbn.innerHTML = "Nombre total de feuilles interieur : <span class='rtbnb'>"+ formaterbn(rtblocnotes) + " feuilles "+formatbn +" "+ "</span></p>";
        if (formatbn === "A5")
        {
        feuillea0.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(rtblocnotes/16) + " feuilles </span> /" + formaterbn(rtblocnotes/16/500) + " Rames </p>";
        feuillea3.innerHTML = "Feuilles A3 / SRA3 : <span class='rtbnb2'>" + formaterbn(rtblocnotes/4) + " feuilles </span> /" + formaterbn(rtblocnotes/4/500) + " Rames </p>";
        feuillea4.innerHTML = "Feuilles A4 / SRA4 : <span class='rtbnb2'>" + formaterbn(rtblocnotes/2) + " feuilles </span> /" + formaterbn(rtblocnotes/2/500) + " Rames </p>";
        prixpapierint = (rtblocnotes/16/500) * 220
        priximpint = (rtblocnotes/2)* xxint
        
        }  
        else
        {
        feuillea0.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(rtblocnotes/8) + " feuilles </span> /" + formaterbn(rtblocnotes/8/500) + " Rames </p>";
        feuillea3.innerHTML = "Feuilles A3 / SRA3 : <span class='rtbnb2'>" + formaterbn(rtblocnotes/2) + " feuilles </span> /" + formaterbn(rtblocnotes/2/500) + " Rames </p>";
        feuillea4.innerHTML = "Feuilles A4 / SRA4 : <span class='rtbnb2'>" + formaterbn(rtblocnotes) + " feuilles </span> /" + formaterbn(rtblocnotes/500) + " Rames </p>";
        prixpapierint = (rtblocnotes/8/500) * 220
        priximpint = (rtblocnotes)* xxint
        }      

        rtbn2.innerHTML = "Nombre total des feuilles de Couverture : <span class='rtbnb'>"+ formaterbn(qnb1*2) + " feuilles "+formatbn +" "+ "</span></p>";

        if (formatbn === "A5"){
            feuillea02.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(qnb1*2/16) + " feuilles </span> /" + formaterbn(qnb1*2/16/500)+ " Rames"+ "</p>";
            feuillea32.innerHTML = "Feuilles A3 / SRA3 : <span class='rtbnb2'>" + formaterbn(qnb1*2/4) + " feuilles </span> /" + formaterbn(qnb1*2/4/500) + " Rames"+ "</p>";
            prixpapiercouv = (qnb1*2/16/500) * 880
            priximpcouv = (qnb1*2/4)*xxcouv
            finitioncouv = (qnb1*2/4)*xxpel
            }  
            else
            {
            feuillea02.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(qnb1*2/8)+ " feuilles </span> /" + formaterbn(qnb1*2/8/500) + " Rames"+ "</p>";
            feuillea32.innerHTML = "Feuilles A3 / SRA3 : <span class='rtbnb2'>" + formaterbn(qnb1*2/2)+ " feuilles </span> /" + formaterbn(qnb1*2/2/500)+ " Rames"+ "</p>";
            prixpapiercouv = (qnb1*2/8/500) * 880
            priximpcouv = (qnb1*2/2)*xxcouv
            finitioncouv = (qnb1*2/2)*xxpel
            }      
           
           
        if (checkBox2 === true) { 

            rtbn2.innerHTML = "Nombre total des feuilles de Couverture : <span class='rtbnb'>"+ formaterbn(qnb1) + " feuilles </span>"+formatcouvbn + "</p>";

                    if (formatbn === "A5"){
                        feuillea02.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(qnb1/8) + " feuilles </span> /" + formaterbn(qnb1/8/500) + " Rames"+ "</p>";
                        feuillea32.innerHTML = "Feuilles SRA3 : <span class='rtbnb2'>" + formaterbn(qnb1/2) + " feuilles </span> /" + formaterbn(qnb1/2/500) + " Rames </p>";
                        prixpapiercouv = (qnb1/8/500)* 880  
                        priximpcouv = (qnb1/2)*xxcouv     
                        finitioncouv = (qnb1/2)*xxpel        
                                          }  
                    else
                    {
                        feuillea02.innerHTML = "Feuilles 89 x 64cm : <span class='rtbnb2'>" + formaterbn(qnb1/4) + " feuilles </span> /" + formaterbn(qnb1/4/500) + " Rames </p>";
                        feuillea32.innerHTML = "Feuilles SRA3 : <span class='rtbnb2'>" + formaterbn(qnb1) + " feuilles </span> /" + formaterbn(qnb1/500) + " Rames </p>";
                        prixpapiercouv = (qnb1/4/500)* 880
                        priximpcouv = (qnb1)*xxcouv  
                        finitioncouv = (qnb1)*xxpel    
                    }      

                                    }
            prixpapiertotal = prixpapierint+prixpapiercouv
            prixpapierunitaire = prixpapiertotal/qnb1
          
            priximpintunitaire = priximpint/qbn0

            priximpcouvunitaire = priximpcouv/qbn0
            
            prixt=prixpapiertotal+priximpint+priximpcouv+finitioncouv+xxreliure




            if(qbn0 != 0)
            {
            couttotalP.innerHTML = "Coût Papier Total (HT) :  <span class='rtbnb2'>" + formater(prixpapiertotal.toFixed(3))+"</span></p>";
            coutunitaireP.innerHTML = "Coût papier Unitaire (HT) : <span class='rtbnblue'>" + formater(prixpapierunitaire.toFixed(3))+"</span></p>";
            coutimpint.innerHTML = "Coût Total d'impression Intérieur (HT) : <span class='rtbnb2'>" + formater(priximpint.toFixed(3))+"</span></p>";
            coutimpintunitaire.innerHTML = "Coût d'impression Intérieur unitaire (HT) : <span class='rtbnblue'>" + formater(priximpintunitaire.toFixed(3))+"</span></p>";
            coutimpcouvunitaire.innerHTML="Coût Impression Couverture unitaire (HT) : <span class='rtbnblue'>" + formater(priximpcouvunitaire.toFixed(3))+"</span></p>";
            coutimpcouv.innerHTML = "Coût Total d'impression Couverture (HT) : <span class='rtbnb2'>" + formater(priximpcouv.toFixed(3))+"</span></p>";
            pellcouvunitaire.innerHTML = "Coût unitaire Finition Couv (HT) : <span class='rtbnblue'>" +formater((finitioncouv/qbn0).toFixed(3))+"</span></p>";
            pellcouv.innerHTML = "Coût Total Finition Couv (HT) : <span class='rtbnb2'>" + formater(finitioncouv.toFixed(3))+"</span></p>";
            reliureunitaire.innerHTML = "Coût unitaire de la Reliure (HT) : <span class='rtbnblue'>" + formater((xxreliure/qbn0).toFixed(3))+"</span></p>";
            reliure.innerHTML = "Coût Total de la Reliure (HT) : <span class='rtbnb2'>" + formater(xxreliure.toFixed(3))+"</span></p>";
            prixtotal.innerHTML = "Prix Total HT :<Br> <span class='rtbnb3'>" + formater((prixt.toFixed(3)))+"</span></p>";
            prixunitaire.innerHTML ="Prix Unitaire HT :<Br> <span class='rtbnb3'>" + formater((prixt/qbn0).toFixed(3).toLocaleUpperCase())+"</span></p>";
            }
                         else
                         {
                         couttotalP.innerHTML = "Coût Papier Total (HT) : 0,000 TND"
                         coutunitaireP.innerHTML = "Coût papier Unitaire (HT) : 0,000 TND"
                         coutimpintunitaire.innerHTML = "Coût Impression intérieur unitaire (HT) : 0,000 TND"
                         coutimpint.innerHTML = "Coût Impression intérieur Total (HT) : 0,000 TND"
                         coutimpcouvunitaire.innerHTML="Coût Impression Couverture unitaire (HT) : 0,000 TND"
                         coutimpcouv.innerHTML = "Coût Total d'impression Couverture (HT) : 0,000 TND"
                         pellcouvunitaire.innerHTML = "Coût unitaire Finition Couv (HT) : 0,000 TND"
                         pellcouv.innerHTML = "Coût Total Finition Couv (HT) : 0,000 TND"
                         reliureunitaire.innerHTML = "Coût unitaire de la Reliure (HT) : 0,000 TND"
                         reliure.innerHTML = "Coût Total de la Reliure (HT) : 0,000 TND"
                         prixtotal.innerHTML = "Prix Total HT : 0,000 TND"
                         prixunitaire.innerHTML ="Prix Unitaire HT : 0,000 TND"

                        }
                      
        if(spirale === true)
        {    
            if(impressioncouv == "1"){impressioncouvphotobn.className="impressionphotobn0"};
            if(impressioncouv == "2"){impressioncouvphotobn.className="impressionphotobn1"};
            if(impressioncouv == "3"){impressioncouvphotobn.className="impressionphotobn2"};
            if(impressioncouv == "4"){impressioncouvphotobn.className="impressionphotobn3"};

            if(impressionint == "1"){impressionintphotobn.className="impressionintphtobn0"};
            if(impressionint == "2"){impressionintphotobn.className="impressionintphtobn1"};
            if(impressionint == "3"){impressionintphotobn.className="impressionintphtobn2"};
            if(impressionint == "4"){impressionintphotobn.className="impressionintphtobn3"};
            if(impressionint == "5"){impressionintphotobn.className="impressionintphtobn4"};
            if(impressionint == "6"){impressionintphotobn.className="impressionintphtobn5"};
            if(impressionint == "7"){impressionintphotobn.className="impressionintphtobn6"};
            if(impressionint == "8"){impressionintphotobn.className="impressionintphtobn7"};

        }

        if(spiralehaut === true)
        {    
            if(impressioncouv == "1"){impressioncouvphotobn.className="impressionphotobn4"};
            if(impressioncouv == "2"){impressioncouvphotobn.className="impressionphotobn5"};
            if(impressioncouv == "3"){impressioncouvphotobn.className="impressionphotobn6"};
            if(impressioncouv == "4"){impressioncouvphotobn.className="impressionphotobn7"};

            if(impressionint == "1"){impressionintphotobn.className="impressionintphtobn8"};
            if(impressionint == "2"){impressionintphotobn.className="impressionintphtobn9"};
            if(impressionint == "3"){impressionintphotobn.className="impressionintphtobn10"};
            if(impressionint == "4"){impressionintphotobn.className="impressionintphtobn11"};
            if(impressionint == "5"){impressionintphotobn.className="impressionintphtobn12"};
            if(impressionint == "6"){impressionintphotobn.className="impressionintphtobn13"};
            if(impressionint == "7"){impressionintphotobn.className="impressionintphtobn14"};
            if(impressionint == "8"){impressionintphotobn.className="impressionintphtobn15"};
        }
        
        if(checkBox2 === true)
        {    
            if(impressioncouv == "1"){impressioncouvphotobn.className="impressionphotobn8"};
            if(impressioncouv == "2"){impressioncouvphotobn.className="impressionphotobn9"};
            if(impressioncouv == "3"){impressioncouvphotobn.className="impressionphotobn10"};
            if(impressioncouv == "4"){impressioncouvphotobn.className="impressionphotobn11"};

            if(impressionint == "1"){impressionintphotobn.className="impressionintphtobn16"};
            if(impressionint == "2"){impressionintphotobn.className="impressionintphtobn17"};
            if(impressionint == "3"){impressionintphotobn.className="impressionintphtobn18"};
            if(impressionint == "4"){impressionintphotobn.className="impressionintphtobn19"};
            if(impressionint == "5"){impressionintphotobn.className="impressionintphtobn20"};
            if(impressionint == "6"){impressionintphotobn.className="impressionintphtobn21"};
            if(impressionint == "7"){impressionintphotobn.className="impressionintphtobn22"};
            if(impressionint == "8"){impressionintphotobn.className="impressionintphtobn23"};
        }





        }


              
        //contre de la saisie du champ qnb1 et qnb2 pour empecher les signes + - , . 
                let hj0 = document.getElementById('qnb1');
                var hj0val = 0;
                var controleQ = 0;
                
                hj0.addEventListener('keydown',(e)=>    //Saisie quantité bloc note
                {
                if(e.key == '-' || e.key == '+' || e.key == '.' || e.key == ','){hj0val=hj0.value;}            
                });
                hj0.addEventListener('keyup',(e)=>
                {
                if(e.key == '-' || e.key == '+' || e.key == '.' || e.key == ','){hj0.value=hj0val;}           
                });

                hj0.addEventListener('keyup',(e)=>
                {
                    controleQ=hj0.value;
                    if(controleQ > 100000) {hj0.value='100000';}     
                    if(controleQ == "") {hj0.value='1';}  
                    if(controleQ == 0) {hj0.value='1';}
                    controleQ=0;        
                });

           
                let hj = document.getElementById('qnb2');
                var hjval = 0;
                
                hj.addEventListener('keydown',(e)=> //Saisie volume bloc note
                {
                if(e.key == '-' || e.key == '+' || e.key == '.' || e.key == ','){hjval=hj.value;}            
                });
                hj.addEventListener('keyup',(e)=>
                {
                if(e.key == '-' || e.key == '+' || e.key == '.' || e.key == ','){hj.value=hjval;}              
                });
               
                hj.addEventListener('keyup',(e)=>
                {
                    controleQ=hj.value;
                    if(controleQ > 250) {hj.value='250';}     
                    if(controleQ == "") {hj.value='1';}  
                    if(controleQ == 0) {hj.value='1';}
                    controleQ=0;        
                });


        //Fin contre de la saisie du champ qnb2 pour empecher les signes + - , .        

var qnb1change = document.getElementById('qnb1');
    qnb1change.addEventListener("keyup",resultatbn);
    qnb1change.addEventListener("change",resultatbn);
var qnb2change = document.getElementById('qnb2');
    qnb2change.addEventListener("keyup",resultatbn);
    qnb2change.addEventListener("change",resultatbn);
var checkA5 = document.getElementById("A5");
    checkA5.addEventListener("change",resultatbn);      
var checkA4 = document.getElementById("A4");
    checkA4.addEventListener("change",resultatbn);

var checkspirale = document.getElementById("spirale");
    checkspirale.addEventListener("change",resultatbn);
var checkspiralehaut = document.getElementById("spiralehaut");
    checkspiralehaut.addEventListener("change",resultatbn);
var checkdos = document.getElementById("dos");
    checkdos.addEventListener("change",resultatbn);
var impintchange = document.getElementById('impressionint');

var impressioncouvchange = document.getElementById('impressioncouv');

impintchange.addEventListener('change',resultatbn);
impintchange.addEventListener('keyup',resultatbn);

impressioncouvchange.addEventListener('change',resultatbn);
impressioncouvchange.addEventListener('keyup',resultatbn);


var checkboxsanschange = document.getElementById("sans");
var checkboxpelrchange = document.getElementById('pelliculagerecto');
var checkboxpelrvchange = document.getElementById('pelliculagerv');
var checkboxcontrechange = document.getElementById('contrecolle');

checkboxsanschange.addEventListener('change',resultatbn);
checkboxsanschange.addEventListener('keyup',resultatbn);

checkboxpelrchange.addEventListener('change',resultatbn);
checkboxpelrchange.addEventListener('keyup',resultatbn);

checkboxpelrvchange.addEventListener('change',resultatbn);
checkboxpelrvchange.addEventListener('keyup',resultatbn);

checkboxcontrechange.addEventListener('change',resultatbn);
checkboxcontrechange.addEventListener('keyup',resultatbn);




            // fin bloc Notes



//Fin code Devis
