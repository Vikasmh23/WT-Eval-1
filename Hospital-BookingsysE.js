let doctors = 
[
  {
    name: "Dr. Arunkumar",
    department: "Dermatology",
    available: "9-12PM"
  },
  {
    name: "Dr. Uday",
    department: "Pathology",
    available: "10-1PM"
  },
  {
    name: "Dr. Akshay",
    department: "General Medicine",
    available: "1-6PM"
  }
];

function displayDoctors() 
{
  let output = "";

  doctors.forEach(function(doctor, index) 
  {
    output +=
      "<div>" +
      "<h3>" + doctor.name + "</h3>" +
      "<p>Department: " + doctor.department + "</p>" +
      "<p>Available Time: " +
      (doctor.available ? doctor.available : "Not Available") +
      "</p>";

    output += "<hr></div>";
  });

  document.getElementById("doctorList").innerHTML = output;
}

function bookAppointment(index) 
{
  index = document.getElementById("doctorName").selectedIndex;
  let appointmentDate = document.getElementById("availableDate").value;
  let today = new Date().toISOString().split("T")[0];

  if (appointmentDate < today)
  {
    alert("Appointment date cannot be past date");
    return;
  }

  document.getElementById("bookingDetails").innerHTML =
    "Doctor Name: " + doctors[index].name + "<br>" +
    "Date: " + appointmentDate + "<br>" +
    "Time: " + doctors[index].available;

  alert(
    "Appointment booked with " +
    doctors[index].name
  );
}

displayDoctors();