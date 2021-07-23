var usuario=prompt("¿Cuál es tu peso?");
var planeta=parseInt(prompt("Elige un Planeta.\n1. Mercurio\n2. Venus\n3. Tierra\n4. Marte\n5. Jupiter\n6. Saturno\n7. Urano\n8. Neptuno"));
var peso=parseInt(usuario);
var gMercurio=3.7;
var gVenus=8.9;
var gTierra=9.8;
var gMarte=3.7;
var gJupiter=24.8;
var gSaturno=10.4;
var gUrano=8.9;
var gNeptuno=11.15;
var pesoFinal;
var nombre="";
if(planeta==1)
{
    pesoFinal=peso*gMercurio/gTierra;
    nombre="Mercurio";
} 
else if(planeta==2)
{
    pesoFinal=peso*gVenus/gTierra;
    nombre="Venus";
} 
else if(planeta==3)
{
    pesoFinal=peso*gTierra/gTierra;
    nombre="Tierra";
} 
else if(planeta==4)
{
    pesoFinal=peso*gMarte/gTierra;
    nombre="Marte";
} 
else if(planeta==5)
{
    pesoFinal=peso*gJupiter/gTierra;
    nombre="Jupiter";
} 
else if(planeta==6)
{
    pesoFinal=peso*gSaturno/gTierra;
    nombre="Saturno";
} 
else if(planeta==7)
{
    pesoFinal=peso*gUrano/gTierra;
    nombre="Urano";
} 
else if(planeta==8)
{
    pesoFinal=peso*gNeptuno/gTierra;
    nombre="Neptuno";
} 
else 
{
    pesoFinal=1000000;
    nombre="Krypton"
}
pesoFinal=parseInt(pesoFinal);
document.write("Tu peso en "+nombre+" es  de <strong>"+pesoFinal+" Kilogramos </strong>");