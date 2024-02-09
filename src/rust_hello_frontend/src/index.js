import { rust_hello_backend } from "../../declarations/rust_hello_backend";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await rust_hello_backend.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
function submitDonation() {
  // Retrieve values from the form
  const selectedSchool = document.getElementById('schools').value;
  const selectedStudent = document.getElementById('students').value;
  const totalAmount = document.getElementById('totalAmount').value;
  const curriculumAmount = document.getElementById('curriculum').value;

  // Send these values to your backend for processing
  console.log({
      selectedSchool,
      selectedStudent,
      totalAmount,
      curriculumAmount,
      // Add similar fields for other categories
  });

  // Add logic to handle the donation, e.g., display confirmation message
  alert('Donation Successful!');
}
