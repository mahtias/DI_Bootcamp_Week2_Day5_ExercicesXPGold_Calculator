/**
 * @author : N'ZO LAGOU PRIVAT N'GUESSAN
 * @description :  mise en place d'une calculatrice
 * @param : operator : function
 * @param : number  : function
 * @param : equal : function
 * @returns :
 * - number : cette fonction permet l'ajout de chiffres
 * - operator  : cette fonction permet l'ajout d'operateur 
 * - equal : cette fonction retourne le resultat de l'operation a realisé

 *
 * @param: reset : function qui reinitialise l'operation
 *@param: clear : 

 */

//document.getElementById("screen") est utilisé pour lire ou modifier un l'element HTML input

//la fonction number prends en parametre le nombre selectionner a l'ecran 
function number(value){
    document.getElementById("ecran").value += value;
}
//la fonction operator prends en parametre l'operateur' selectionner a l'ecran 
function operator(value){
    document.getElementById("ecran").value += value;
}
//la fonction equal prends en parametre l'ensemble des elements selectionner auquel il applique la methode eval() qui retourne le calcule 
function equal(){
    document.getElementById("ecran").value= eval(document.getElementById("ecran").value);

}
//la fonction reset reinitialise l'operation en ecrasant l'ensemble des elements selectionés par un espace vide
function reset(){
    document.getElementById("ecran").value = '';
}
