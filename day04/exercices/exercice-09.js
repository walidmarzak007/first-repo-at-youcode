/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CENSURE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Remplacez le mot "idiot" par "*" dans la phrase : "Ne sois pas idiot, réfléchis avant de parler".
.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day04/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

const sent1 =  "Ne sois pas idiot, réfléchis avant de parler"
const sent2 = sent1.replace("idiot" , "*")
console.log(sent2)