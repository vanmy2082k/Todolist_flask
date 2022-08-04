const updateNote = (noteId) => {
    console.log(noteId)
    fetch("/update-note", {
        method: "POST",
        body: JSON.stringify({note_id: noteId}),
    }).then( (response) => {
    window.location.href = "/";
    })
}

const deleteNote = (noteId) => {
    console.log(noteId)
    fetch("/delete-note", {
        method: "POST",
        body: JSON.stringify({note_id: noteId}),
    }).then( (response) => {
    window.location.href = "/";
    })
}