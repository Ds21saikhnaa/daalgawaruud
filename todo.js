let add = document.querySelector("#click");
let list = document.querySelector("#wlist");
let done = document.querySelector("#donel");
const renderDoc = (doc) => {
  const vim = document.createElement("div");
  const $span = document.createElement("span");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  const $btnDelete = document.createElement("button");
  $btnDelete.innerText = "remove list";
  const $edit = document.createElement("button");
  $edit.innerText = "edit list";
  function onClick() {
    db.collection("todoList").doc(doc.id).set(
      {
        checkBox: true,
      },
      { merge: true }
    );
  }
  checkBox.onclick = onClick;
  $btnDelete.onclick = () => {
    db.collection("todoList").doc(doc.id).delete();
  };
  $edit.onclick = () => {
      console.log('hhe');
      document.getElementById("txt").value = doc.data().list;
    db.collection("todoList").doc(doc.id).update({isDone: true});
  }
  vim.append(checkBox, $span,$btnDelete, $edit);
  $span.innerText = doc.data().list;

  if (doc.data().checkBox === false) {
    list.append(vim);
  } else {
    done.append(vim);
  }
};
db.collection("todoList").onSnapshot((col) => {
  document.querySelector(".wlist").innerHTML = "";
  document.querySelector("#donel").innerHTML = "";
  for (const doc of col.docs) {
    renderDoc(doc);
  }
});
const buttonClick = () => {
  let plan = document.getElementById("txt").value;
  db.collection("todoList").add({
    list: plan,
    checkBox: false,
  });
};
