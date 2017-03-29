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
        user: 'millsportfolio7@gmail.com',
        pass: 'givemejob'
    }
});


router.get("/", function(req, res) {
   res.render("home", req);
});



// router.get("/resume", function(req, res) {
//    res.redirect('/images/giphy.Mills_Hogan_Resume.pdf')
// }


//Nodemailer function for feedback page
router.post("/sendEmail", function(req, res) {
      let mailOptions = {
        from: '"Mills Message" <test@gmail.com>', 
        to: 'mills.c.hogan@gmail.com', 
        subject: 'Mills Hogan Send', // Subject line
        text: req.body.email + " comment: " + req.body.message,
        html: 'From: ' + req.body.email  + '</br><p>' + req.body.message + '</p>'
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    
})



//Keep this at the end of the router section.
//If nothing is found this is sent.
router.get('*', function(req, res) {
    res.status(404).send('404 Page Goes Here');
});

// Export routes for server.js to use.
module.exports = router;
