document.addEventListener('DOMContentLoaded', function () {
  const heart = document.getElementById('heart');

  heart.addEventListener('click', function () {
      showGreetingCardPrompt();
  });

  function showGreetingCardPrompt() {
      const recipient = prompt("Enter the name of your Love:");
      if (recipient) {
          const message = `Dear ${recipient}, I Love you baccha 🌹💖`;
          displayGreetingCard(message);
      } else {
          const defaultMessage = "Nhi aa raha setting ka name yaad , Hogi tabhi to ayega";
          displayGreetingCard(defaultMessage);
      }
  }

  function displayGreetingCard(message) {
      const greetingCard = document.createElement('div');
      greetingCard.classList.add('greeting-card');
      greetingCard.innerHTML = `<p>${message}</p>`;
      document.body.appendChild(greetingCard);

      setTimeout(() => {
          greetingCard.remove();
      }, 5000);
  }
});
