export function startWs() {
  const socket = new WebSocket(
    "wss://localhost:3000"
  );

  console.log(socket.readyState);

  socket.onopen = (event) => {
    socket.send("Here's some text that the server is urgetly awaiting!");
  }

  socket.onmessage = (event) => {
    console.log(event.data);
  }

  socket.addEventListener("open", (event) => {
    socket.send("Hello Server!");
  });

  socket.addEventListener("message", (event) => {
    console.log("Mesage from server ", event.data);
  });
}
