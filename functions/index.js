/**
 *                ________
 *          _,.-Y  |  |  Y-._
 *      .-~"   ||  |  |  |   "-.
 *      I" ""=="|" !""! "|"[]""|     _____
 *      L__  [] |..------|:   _[----I" .-{"-.
 *     I___|  ..| l______|l_ [__L]_[I_/r(=}=-P
 *    [L______L_[________]______j~  '-=c_]/=-^
 *     \_I_j.--.\==I|I==_/.--L_]
 *       [_((==)[`-----"](==)j
 *          I--I"~~"""~~"I--I
 *          |[]|         |[]|
 *          l__j         l__j
 *          |!!|         |!!|
 *          |..|         |..|
 *          ([])         ([])
 *          ]--[         ]--[
 *          [_L]         [_L]  -Row  (the Ascii-Wizard of Gardena)
 *         /|..|\       /|..|\
 *        `=}--{='     `=}--{='
 *       .-^--r-^-.   .-^--r-^-.
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Gol de Saprissa , Alexa! que Medford me mande un sinpe de $50 ..
 *
 * 
 *@author Rolando<rgarro@gmail.com>
 */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//const {onRequest} = require("firebase-functions/v2/https");
//const logger = require("firebase-functions/logger");

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

 exports.helloWorld = onRequest((request, response) => {
   logger.info("Hello logs!", {structuredData: true});
   response.send("Gol de Saprissa , Alexa! que Medford me mande un sinpe de $50 ..");
 });
