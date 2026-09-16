/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day06/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function findthebestcandidat(candidats){
    let thebest = candidats[0];
    for(let candidat of candidats){
        if (candidat.score > thebest.score){
            thebest = candidat;
        }
    }
    return candidats.filter(candidat => candidat.score >= 10)
 }
     let candidatslist =[ {nom:"Walid", score: 10}, {nom:"omar" , score: 4} , {nom :"ali" , score: 7}]
console.log(findthebestcandidat(candidatslist))
