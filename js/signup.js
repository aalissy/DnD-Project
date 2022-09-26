// Create sign up form handler
async function signupHandler(event) {
  event.preventDefault();

  // info from sign up
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      alert("Account created!");
      document.location.replace("/homepage");
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupHandler);
