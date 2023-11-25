const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const twilio = require("twilio");

const SignupModel = require("./SignupModel");

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors());

// Use async/await for database connection
async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://svivekkumar012:22i22e11@cluster0.qb3xcka.mongodb.net/BloodLink?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

connectToDatabase();

app.post("/signup", async (req, res) => {
  try {
    // Create a new instance of the SignupModel using the data from the request body
    const newSignup = new SignupModel({
      donorname: req.body.donorname,
      donorage: req.body.donorage,
      donoraddress: req.body.donoraddress,
      donorPhone: req.body.donorPhone,
      bloodgroup: req.body.bloodgroup,
      detectlocation: {
        latitude: req.body.detectlocation.latitude,
        longitude: req.body.detectlocation.longitude,
      },
    });

    // Save the newSignup to the database
    const savedSignup = await newSignup.save();

    // Send a response to the client
    res.json({ message: "Registered successfully", data: savedSignup });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Function to calculate the distance
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

// Function to filter donors within a certain radius
function filterDonorsByDistance(patientLat, patientLon, donors, radius) {
  return donors.filter((donor) => {
    const distance = calculateDistance(
      patientLat,
      patientLon,
      donor.detectlocation.latitude,
      donor.detectlocation.longitude
    );
    return distance <= radius;
  });
}

//request data
app.post("/send-request", async (req, res) => {
  console.log("Received a request:", req.body);
  try {
    // Fetch all donors from the signups collection
    const allDonors = await SignupModel.find({}, "donorPhone detectlocation");

    // Set the initial radius
    let radius = 5;

    // Flag to check if any donors are found within the radius
    let donorsFound = false;

    // Keep increasing the radius until donors are found or the maximum radius is reached
    while (!donorsFound && radius <= 30) {
      // Filter donors within the current radius
      const nearbyDonors = filterDonorsByDistance(
        req.body.currentLocation.latitude,
        req.body.currentLocation.longitude,
        allDonors,
        radius
      );

      // If there are donors within the radius, send requests
      if (nearbyDonors.length >= 0) {
        donorsFound = true;

        // Use Twilio to send an SMS to each phone number
        const twilioClient = twilio(
          "AC3c1f1c48b18efd75db7a217913b1da21",
          "c08a1bae7a399c2eb58951c5a4cdaeb1"
        );

        const requestMessage = `Patient Name: ${req.body.patientName}, Age: ${req.body.patientAge}, Blood Group: ${req.body.bloodGroup} , Phone: ${req.body.patientPhone}`;
        console.log(requestMessage);

        // Send SMS to each phone number of nearby donors
        for (const donor of nearbyDonors) {
          await twilioClient.messages.create({
            body: requestMessage,
            to: `+91${donor.donorPhone}`, // Make sure to format the phone number correctly
            from: "+14154296930",
          });
        }

        res.json({ message: "Request sent successfully" });
      } else {
        // Double the radius for the next iteration
        radius *= 2;
      }
    }

    // If no donors are found within 30 km, respond accordingly
    if (!donorsFound) {
      res.json({ message: "No donors found within 30 km" });
    }
  } catch (error) {
    console.error("Error sending request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
