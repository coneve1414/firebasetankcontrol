const functions = require("firebase-functions");
const admin = require("firebase-admin");


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.fetchUidByEmail = functions.https.onCall((email) => {
  admin.auth().getUserByEmail(email).then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
  })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
});

