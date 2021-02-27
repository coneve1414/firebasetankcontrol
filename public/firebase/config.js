var config = {
    apiKey: "**********",
    authDomain: "**********",
    databaseURL: "**********",
    projectId: "tankstatuscontrol-ce",
    storageBucket: "**********",
    messagingSenderId: "**********",
    appId: "**********",
    measurementId: "*********"

  };
  firebase.initializeApp(config);
  firebase.analytics();
  var database = firebase.database();
  var analytics = firebase.analytics();
  const remoteConfig = firebase.remoteConfig();
  // var functions = firebase.functions();

 // var storage = firebase.storage();
