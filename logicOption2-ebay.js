// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAuWCzRT6X7IkzTWc9zCRWBvyWeftnHY7c",
    authDomain: "new-proj-97181.firebaseapp.com",
    databaseURL: "https://new-proj-97181.firebaseio.com",
    projectId: "new-proj-97181",
    storageBucket: "",
    messagingSenderId: "524999959395",
    appId: "1:524999959395:web:224d51eb73301b82"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()
// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// Assign the reference to the database to a variable named 'database'
// var database = ...


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function (snapshot) {

    if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {
        
            highBidder= snapshot.val().highBidder
            highPrice= Number(snapshot.val().highPrice)
        
        console.log(highBidder, highPrice)
        $('#highest-bidder').text(highBidder);
        $('#highest-price').text(highPrice)
    } else if (!database.ref(highBidder).exists && !database.ref(highBidder).exists) {
        database.ref().set({
            highBidder,
            highPrice
        })
        console.log(highBidder, highPrice)
        $('#highest-bidder').text(highBidder);
        $('#highest-price').text(highPrice)
    }
})

    // If Firebase has a highPrice and highBidder stored (first case)


    // Set the variables for highBidder/highPrice equal to the stored values in firebase.


    // Change the HTML to reflect the stored values

    // Print the data to the console.


    // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.




    // Change the HTML to reflect the initial values


    // Print the data to the console.




    // --------------------------------------------------------------

    // Whenever a user clicks the submit-bid button
    $('#submit-bid').on('click', function () {
        event.preventDefault()
        var newbidder = $('#bidder-name').val()
        var newPrice = $('#bidder-price').val()
        console.log(newPrice, newbidder)
        if (newPrice > highPrice) {
            alert("you are the highest bidder")
            database.ref().set({
                highBidder: newbidder, 
                highPrice: newPrice
            })
            
            $('#highest-bidder').text(highBidder);
        $('#highest-price').text(highPrice)
        } else {
            alert("there is already a higher bid")
        }
    })
    // prevent form from submitting with event.preventDefault() or returning false

// Get the input values


// Log the Bidder and Price (Even if not the highest)


// If Then statements to compare against previous high bidder


// Alert that they are High Bidder


// Save the new price in Firebase


// Log the new High Price


// Store the new high price and bidder name as a local variable (could have also used the firebase variable)


// Change the HTML to reflect the new high price and bidder

// Else tell user their bid was too low via alert