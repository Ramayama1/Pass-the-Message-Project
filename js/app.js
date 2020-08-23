document
  .querySelector("#message-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let message = document.querySelector("#message").value;
    if (message) {
      document.querySelector(".message-content").innerHTML = message;
      document.querySelector("#message").value = null;
    } else {
      document.querySelector(".feedback").classList.add("show");
      setTimeout(function () {
        document.querySelector(".feedback").classList.remove("show");
      }, 1000);
    }
  });
