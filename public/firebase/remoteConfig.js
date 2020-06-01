
function getRemoteConfig() {

  const remoteConfig = firebase.remoteConfig();
  remoteConfig.settings = {
    minimumFetchIntervalMillis: 3600000,
  };

  remoteConfig.defaultConfig = ({
      'loginEnabled': false,
    });

  firebase.remoteConfig().ensureInitialized()
  .then(() => {
    console.log('Firebase Remote Config is initialized');
    showWelcomeMessage();
  })
  .catch((err) => {
    console.error('Firebase Remote Config failed to initialize', err);
  });

  var loginEnabled = remoteConfig.getValue("loginEnabled");
  window.alert("LOGIN ENABLED:");
  window.alert(loginEnabled);
  if (loginEnabled == false) {
      disableLogin();
      window.alert("LOGIN DISABLED");
  } else {
      window.alert("LOGIN ENABLED");
  }

  function disableLogin() {
      if (loginDisabled == false) {
        document.getElementById('quickstart-verify-email').disabled = true;
      } else {
        document.getElementById('quickstart-verify-email').disabled = false;
      }
    }
  }

