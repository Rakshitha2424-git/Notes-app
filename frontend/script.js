const API = "http://localhost:5000/notes";

async function loadNotes() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("notesList");
  list.innerHTML = "";

  data.forEach((note, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${note.text} <button onclick="deleteNote(${index})">X</button>`;
    list.appendChild(li);
  });
}

async function addNote() {
  const input = document.getElementById("noteInput");

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value })
  });

  input.value = "";
  loadNotes();
}

async function deleteNote(index) {
  console.log("Deleting index:", index); // 👈 add this

  await fetch(`${API}/${index}`, { method: "DELETE" });
  loadNotes();
}

loadNotes();