import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
import * as admin from "firebase-admin";
import {
  createStudentNamesDoc,
  addVolunteer,
  updateStudentNamesDoc,
  deleteStudentNamesDoc,
  updateVolunteer,
  deleteVolunteer,
  addAvailableVolunteer,
  createTestStudentNamesDoc,
  updateTestStudentNamesDoc,
  deleteTestStudentNamesDoc,
} from "./functions";
import { checkEventType } from "./helperFunctions";

admin.initializeApp();

import { app } from "./api";
export const api = functions.https.onRequest(app);

/* export const onStudentCreate = functions.firestore
  .document("students/{userID}")
  .onCreate(async (snapshot, context) => {
    await addVolunteer(snapshot, context);
    await createStudentNamesDoc(snapshot, context);
  }); */

export const onStudentUpdate = functions.firestore
  .document("students/{userID}")
  .onWrite(async (snapshot, context) => {
    const eventType = checkEventType(snapshot);
    switch (eventType) {
      case "create":
        //await addVolunteer(snapshot, context);
        await createStudentNamesDoc(snapshot, context);
        break;
      case "update":
        await updateStudentNamesDoc(snapshot, context);
        //await updateVolunteer(snapshot, context);
        break;
      case "delete":
        await deleteStudentNamesDoc(snapshot, context);
        await deleteVolunteer(snapshot, context);
        break;
      default:
        return null;
    }
  });

export const onTestStudentUpdate = functions.firestore
  .document("testStudents/{userID}")
  .onWrite(async (snapshot, context) => {
    const eventType = checkEventType(snapshot);
    switch (eventType) {
      case "create":
        //await addVolunteer(snapshot, context);
        await createTestStudentNamesDoc(snapshot, context);
        break;
      case "update":
        //await updateVolunteer(snapshot, context);
        await updateTestStudentNamesDoc(snapshot, context);
        break;
      case "delete":
        await deleteTestStudentNamesDoc(snapshot, context);
        //await deleteVolunteer(snapshot, context);
        break;
      default:
        return null;
    }
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
