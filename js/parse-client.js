function initParse() {
  Parse.initialize("test01"); // Set the APP ID
  Parse.serverURL = 'http://localhost:1337/parse'
}

function createObject() {
  console.log('in create ...')


  var GameScore = Parse.Object.extend("GameScore");
  var gameScore = new GameScore();

  gameScore.set("score", 1337);
  gameScore.set("playerName", "Sean Plott");
  gameScore.set("cheatMode", false);

  gameScore.save(null, {
    success: function(gameScore) {
      // Execute any logic that should take place after the object is saved.
      console.log('New object created with objectId: ' + gameScore.id);
    },
    error: function(gameScore, error) {
      // Execute any logic that should take place if the save fails.
      // error is a Parse.Error with an error code and message.
      alert('Failed to create new object, with error code: ' + error.message);
    }
  });
  console.log('create done ...')
}

function retrieveObject() {
  var GameScore = Parse.Object.extend("GameScore");
  var query = new Parse.Query(GameScore);
  query.get("bw29JuWeHL", {
    success: function(gameScore) {
      // The object was retrieved successfully.
      console.log('playerName of gameScore is: ', gameScore.attributes.playerName)
    },
    error: function(object, error) {
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
      console.log('error in retrieve: ', object, error)
    }
  });
}

function updateObject() {
  var GameScore = Parse.Object.extend("GameScore");
  var query = new Parse.Query(GameScore);
  query.get("bw29JuWeHL", {
    success: function(gameScore) {
      // The object was retrieved successfully.
      console.log('Before update, playerName of gameScore is: ', gameScore.attributes.playerName)
      gameScore.set("playerName", 'Tom Cat');
      gameScore.save();
      console.log('After update, playerName of gameScore is: ', gameScore.attributes.playerName)

    },
    error: function(object, error) {
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
      console.log('error in retrieve: ', object, error)
    }
  });
}


function deleteObject() {
  var GameScore = Parse.Object.extend("GameScore");
  var query = new Parse.Query(GameScore);
  query.get("bw29JuWeHL", {
    success: function(gameScore) {
      // The object was retrieved successfully.
      gameScore.destroy({
        success: function(myObject) {
          // The object was deleted from the Parse Cloud.
          console.log('successfully deleted. ')
        },
        error: function(myObject, error) {
          // The delete failed.
          // error is a Parse.Error with an error code and message.
        }
      });

    },
    error: function(object, error) {
      // The object was not retrieved successfully.
      // error is a Parse.Error with an error code and message.
      console.log('error in retrieve: ', object, error)
    }
  });
}


function signUp(username, password) {
  Parse.User.signUp(username, password, {
    ACL: new Parse.ACL()
  }, {
    success: function(user) {
      console.log('Signup successfully: ', user)

      new ManageTodosView();
      self.undelegateEvents();
      delete self;
    },
    error: function(user, error) {
      console.log('Signup failed: ', user, error)
    }
  });
}

function login(username, password) {

  Parse.User.logIn(username, password, {
    success: function(user) {
      console.log('login successfully: ', user)

      new ManageTodosView();
      self.undelegateEvents();
      delete self;
    },
    error: function(user, error) {
      console.log('login failed: ', user, error)

    }
  });

}