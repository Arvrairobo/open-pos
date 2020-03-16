const serviceAccount = require("./serviceAccountKey.json");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://open-fintech.firebaseio.com",
});
const db = admin.firestore();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { syncArchive } = require("./methods/sync-archive");
const { getTransactions } = require("./methods/get-transactions");
const { migrateDatabase } = require("./methods/migrate-database");

const largeRuntimeConfig = {
  timeoutSeconds: 540,
  memory: "1GB",
};

exports.createUserArchive = functions.firestore.document("users/{id}").onCreate(async (snap, context) => {
  const newUser = snap.data();
  console.log(`create new user of id: ${context.params.id} in archive`);
  db.collection("users-archive")
    .doc(context.params.id)
    .set(newUser);
});

exports.syncTransactionsAndCalculateBusinessPerforamnce = functions
  .runWith(largeRuntimeConfig)
  .pubsub.schedule("every day 03:00")
  .timeZone("Asia/Hong_Kong")
  .onRun(async context => {
    await syncArchive(db, { syncTransactions: true, calculateBusinessPerformance: true });
  });

exports.syncUserCount = functions
  .runWith(largeRuntimeConfig)
  .pubsub.schedule("every day 03:30")
  .timeZone("Asia/Hong_Kong")
  .onRun(async context => {
    await syncArchive(db, { syncUserCount: true });
  });

// exports.syncArchiveCallable = functions.runWith(largeRuntimeConfig).https.onRequest(async (req, res) => {
//   await syncArchive(db, { calculateBusinessPerformance: false });
//   res.status(200).send(`request received with limit: 100`);
// });

// https functions
const dataApp = express();
dataApp.use(cors({ origin: true }));
dataApp.get("/versionNumber", (req, res) => {
  const versionNumber = "0.0.9";
  res.status(200).json({ versionNumber });
});

dataApp.get("/transactions", async (req, res) => {
  const { id, start, end } = req.query;
  try {
    const transactions = await getTransactions(db, id, start, end);
    res.status(200).json({ size: transactions.length, transactions });
  } catch (error) {
    console.log(error);
    res.status(500).send("internal server error");
  }
});

exports.data = functions.https.onRequest(dataApp);

const migrateApp = express();
migrateApp.use(cors({ origin: true }));
migrateApp.get("/", async (req, res) => {
  const { id, forceMigrate } = req.query;
  const successText = "migration completed";
  const errorText = "internal server error";
  try {
    const payload = jwt.verify(req.headers.authorization, "secret");
    if (payload !== "open-fintech" || !id) throw new Error();
    await migrateDatabase(admin, db, id, { removeOldData: false, forceMigrate: forceMigrate === "true" });
    res.status(200).send(successText);
  } catch (error) {
    console.log(error);
    return res.status(500).send(errorText);
  }
});

exports.migrateDatabase = functions.https.onRequest(migrateApp);

