/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day06/exercices/exercice-08.js
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
    return thebest.nom
 }
     let candidatslist =[ {nom:"Walid", score: 1}, {nom:"omar" , score: 0} , {nom :"ali" , score: 0}]

 console.log(findthebestcandidat(candidatslist))