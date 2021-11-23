const accModel = require("../app/models/Account");
const userModel = require("../app/models/User");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const bcrypt = require("bcrypt");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:2000/login/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      accModel.findOne({username : profile._json.sub})
      .exec()
      .then((data) => {
          if(data == null){
            const newacc = new accModel({username: profile._json.sub})
            .save()
            .then(()=>{
              const newuser = new userModel({
                username: profile._json.sub,
                name:profile._json.name,
                role:'user'
              })
              return done(null,profile); 
            })
            .catch((err)=>{
              return done(null,err);
            })
          }
          else{
            return done(null,profile);
          }
      })
      .catch((err)=>{
          return done(null,err)
      })                                        
      
    }
  )
);

//Local
passport.use(
  new LocalStrategy(
    {
      // usernameField: "username",
      // passwordField: "password",
      passReqToCallback: true,
    },
    async (req, username, password, done) => {
      if (username == "" || password == "") {
        req.flash("error", "Tài khoản hoăc mật khẩu đang trống !");
        return done(null, false);
      } else {
        accModel
          .findOne({
            username: username,
          })
          .exec()
          .then((data) => {
            if (data == null) {
              req.flash("error", "Tài khoản không hợp lệ !");
              return done(null, false);
            } else if (bcrypt.compareSync(password, data.password)) {
              userModel
                .findOne({ username: username })
                .exec()
                .then((user) => {
                  return done(null, user);
                });
            } else {
              req.flash("error", "Mật khẩu không hợp lệ !");
              return done(null, false);
            }
          })
          .catch(function (err) {
            return done(null, err);
          });
      }
    }
  )
);
//End Local

//Facebook
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));
//End Facebook
