const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;


module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true }, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim(),
    firstName: req.body.name.split(' ')[0].trim(),
    lastName: req.body.name.split(' ')[1].trim(),
    categories: [req.body.category.trim() ]
  };

  const newUser = new User(userData);
  newUser.save((err) => {
    if(err) { return done(err); }

    return(done(null));
  });
});
