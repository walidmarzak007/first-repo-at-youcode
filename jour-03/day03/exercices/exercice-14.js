/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CALCULATRICE MODULAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction calculatrice(a, b, signe). 
 * Utilisez un switch sur signe pour appeler l'une des 4 opérations de base (+, -, *, /) 
 * que vous aurez écrites en tant que fonctions distinctes.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day03/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


const add = (a , b) => a + b
const subtract = (a , b) => a - b
const multiply = (a , b) => a * b
const divide = (a , b) => b !== 0 ? a / b: error


function calculatrice (a, b, signe){
    switch(signe){
case '+' :
    return add (a , b)
    
case '-' :
    return subtract (a , b)
    
case '*' :
    return multiply (a , b)
    
case '/' :
    return divide (a , b)
    default:
        return (huhh)
    }
    }
    console.log(calculatrice (2, 3,'/'))

