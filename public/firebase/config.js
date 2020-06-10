var config = {
    apiKey: "AIzaSyBopsZUr4sbj8_hPupcE50tm_REwrj_ivs",
    authDomain: "tankstatuscontrol-ce.firebaseapp.com",
    databaseURL: "https://tankstatuscontrol-ce.firebaseio.com",
    projectId: "tankstatuscontrol-ce",
    storageBucket: "tankstatuscontrol-ce.appspot.com",
    messagingSenderId: "399552103120",
    appId: "1:399552103120:web:1f9d2740e78799845314d5",
    measurementId: "G-YG3TNZKEXX"

  };
  firebase.initializeApp(config);
  firebase.analytics();
  var database = firebase.database();
  var analytics = firebase.analytics();