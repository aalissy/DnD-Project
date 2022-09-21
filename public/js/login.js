async function loginHandler(event) {
  event.preventDefault();

  // info from login
  const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      let result = await response.json();
      alert(result.message);
    }
  }
}
document.querySelector(".login-form").addEventListener("submit", loginHandler);
