/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day04/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


function anagram (word1 , word2){
    let str1 = word1.toLowerCase().replace(/\s+/g, '')
    let str2 = word2.toLowerCase().replace(/\s+/g, '')
    if (str1.length !== str2.length) return false
    for(let i = 0 ; i < str1.length ; i++){
        let char = str1[i]
        if(!str2.includes(char)){
            return false
        }
        str2 = str2.replace(char, '')
    }
        return str2 === ''
    }
    console.log(anagram("chien" , "niche"))