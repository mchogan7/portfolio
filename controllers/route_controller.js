//
//////////////////////////////////////////////////////////////////////////////
//DEPENDENCIES
//////////////////////////////////////////////////////////////////////////////
//

var express = require("express");
var path = require('path');
var app = express();
var router = express.Router();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: false
}));


var nodemailer = require('nodemailer');

//node mailer config
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'serverappbeta@gmail.com',
        pass: 'websterdog'
    }
});

//
//////////////////////////////////////////////////////////////////////////////
//SITE NAVIGATION
//////////////////////////////////////////////////////////////////////////////
//

router.get("/", function(req, res) {
   res.render("home", req);
});


//Nodemailer function for feedback page
router.post("/sendFeedback", function(req, res) {
      let mailOptions = {
        from: '"Server App Beta" <serverappbeta@gmail.com>', 
        to: 'serverappbeta@gmail.com', 
        subject: 'Server App Beta - Feedback', // Subject line
        text: req.body.user_email + " comment: " + req.body.comment,
        html: 'From: ' + req.body.user_email  + '</br><p>' + req.body.comment + '</p>'
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    var dataObject = {
        message: "Feedback sent successfully"
    };
    res.render("dashboard", dataObject);
})



//Keep this at the end of the router section.
//If nothing is found this is sent.
router.get('*', function(req, res) {
    res.status(404).send('404 Page Goes Here');
});

// Export routes for server.js to use.
module.exports = router;

//
//////////////////////////////////////////////////////////////////////////////
//HELPER FUNCTIONS
//////////////////////////////////////////////////////////////////////////////
//

//function for limiting access to logged in user only.
//Sends them back to the login page if not.
function loggedIn(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

//This is used to create a temporary password.
function tempPWgenerator() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

//Converts a number 0-1440 to a xx:xx:xx time.  Returns the time as a string.  Only works if num is divisible by 15.
function convertToTime(num) {
    var string = "";

    if (num / 60 >= 23) {string+="23";}
    else if (num / 60 >= 22) {string+="22";}
    else if (num / 60 >= 21) {string+="21";}
    else if (num / 60 >= 20) {string+="20";}
    else if (num / 60 >= 19) {string+="19";}
    else if (num / 60 >= 18) {string+="18";}
    else if (num / 60 >= 17) {string+="17";}
    else if (num / 60 >= 16) {string+="16";}
    else if (num / 60 >= 15) {string+="15";}
    else if (num / 60 >= 14) {string+="14";}
    else if (num / 60 >= 13) {string+="13";}
    else if (num / 60 >= 12) {string+="12";}
    else if (num / 60 >= 11) {string+="11";}
    else if (num / 60 >= 10) {string+="10";}
    else if (num / 60 >= 9) {string+="09";}
    else if (num / 60 >= 8) {string+="08";}
    else if (num / 60 >= 7) {string+="07";}
    else if (num / 60 >= 6) {string+="06";}
    else if (num / 60 >= 5) {string+="05";}
    else if (num / 60 >= 4) {string+="04";}
    else if (num / 60 >= 3) {string+="03";}
    else if (num / 60 >= 2) {string+="02";}
    else if (num / 60 >= 1) {string+="01";}
    else if (num / 60 >= 0) {string+="00";}

    if (num % 60 === 0) {
        string += ":00:00";
    }
    else if (num % 60 === 15) {
        string += ":15:00";
    }
    else if (num % 60 === 30) {
        string += ":30:00";
    }
    else if (num % 60 === 45) {
        string += ":45:00";
    }

    return string;
}

// SEQUELIZE CRUD METHODS, FOR REFERENCE

//  CREATE!
//   db.Blah.create({
//   email: "HELLYEAH@myspace.com",
//   password: "superduperinsecurepassword123",
//   age: 55,
//   name: "Betty"
// }).then(function(dbUser) {
//   console.log(dbUser);
// });

//  FIND ONE!
// db.Blah.findOne({ where: {id: 1} }).then(function(dbUser) {
//     console.log(dbUser);
//   });

//  FIND ALL!
// db.Blah.findAll().then(function(dbUser) {
//   console.log(dbUser);
// });

//  UPDATE ONE!
// var newTom = {
//   age: 25,
//   email: "mark@facebook.com"
// };
// db.Blah.update(newTom, {
//   where: {
//     id: 1
//   }
// }).then(function(dbUser) {
//   console.log(dbUser);
// });

// DELETE ONE!
// db.Blah.destroy({
//   where: {id: 1}
// }).then(function(dbUser) {
//   console.log(dbUser);
// });