let add = document.querySelector("#click");
let list = document.querySelector("#wlist");
let done = document.querySelector("#donel");
let listId;
let edit = true;
const renderDoc = (doc) => {
  const vim = document.createElement("div");
  vim.className = "vim";
  const $span = document.createElement("span");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  const $btnDelete = document.createElement("button");
  $btnDelete.innerText = "remove list";
  const $edit = document.createElement("button");
  $edit.innerText = "edit list";
  const date = document.createElement("span");
  date.innerText = doc.data().createdAt;
  function onClick() {
    db.collection("todoList").doc(doc.id).set(
      {
        checkBox: !doc.data().checkBox,
      },
      { merge: true }
    );
  }
  checkBox.onclick = onClick;
  $btnDelete.onclick = () => {
    db.collection("todoList").doc(doc.id).delete();
  };
  $edit.onclick = () => {
    edit = false;
    document.getElementById("txt").value = doc.data().list;
    console.log(doc.id);
    listId = doc.id;
    console.log(edit);
  };
  vim.append(checkBox, $span, date, $btnDelete, $edit);
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
  let dateNow = Date();
  let plan = document.getElementById("txt").value;
  if (edit) {
    db.collection("todoList").add({
      list: plan,
      checkBox: false,
      createdAt: dateNow.replace("GMT+0800 (Ulaanbaatar Standard Time)", ""),
    });
  } else {
    db.collection("todoList")
      .doc(listId)
      .update({ list: document.getElementById("txt").value });
    edit = true;
  }
};
