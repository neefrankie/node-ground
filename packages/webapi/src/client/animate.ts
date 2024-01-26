function animateEvent() {
  const element = document.getElementById("watchme");

  element.addEventListener("animationstart", listener, false);
  element.addEventListener("animationend", listener, false);
  element.addEventListener("animationiteration", listener, false);

  element.className = "slidein"
}

function listener(event: AnimationEvent) {
  const li = document.createElement("li");
  switch (event.type) {
    case "animationstart":
      li.textContent = `Started: elapsed time is ${event.elapsedTime}`;
      break;

    case "animationend":
      li.textContent = `Ended: elapsed time is ${event.elapsedTime}`;
      break;

    case "animationiteration":
      li.textContent = `New loop started at time ${event.elapsedTime}`;
      break;
  }

  document.getElementById("output").appendChild(li);
}

animateEvent();
