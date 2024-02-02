const showTab = (elTabBtn) => {
  const elTab = elTabBtn.closest('.tab');
  if (elTabBtn.classList.contains('tab-btn-active')) {
    return;
  }
  const targetId = elTabBtn.dataset.targetId;
  const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
  if (elTabPane) {
    const elTabBtnActive = elTab.querySelector('.tab-btn-active');
    elTabBtnActive.classList.remove('tab-btn-active');
    const elTabPaneShow = elTab.querySelector('.tab-pane-show');
    elTabPaneShow.classList.remove('tab-pane-show');
    elTabBtn.classList.add('tab-btn-active');
    elTabPane.classList.add('tab-pane-show');
  }
}

document.addEventListener('click', (e) => {
  if (e.target && !e.target.closest('.tab-btn')) {
    return;
  }
  const elTabBtn = e.target.closest('.tab-btn');
  showTab(elTabBtn);
});




if (document.getElementById("callback-button")) {
  const callbut = document.getElementById("callback-button");
  const bodycls = document.getElementById("body");
  const modalwin = document.getElementById("modalwin");
  callbut.addEventListener("click", () => {
    modalwin.classList.add('modal_active');
    bodycls.classList.add('hidden');
  });
  if(bodycls) {
    console.log("Есть");
  }
}

if (document.getElementById("modal__close")) {
  const modactiv = document.getElementById("modal__close");
  const overlay = document.getElementById("overlay");
  const bodycls = document.getElementById("body");
  modactiv.addEventListener("click", () => {
    //modactiv.classList.remove('modal_active');
    overlay.classList.remove("show-overlay");
    bodycls.classList.remove('hidden');
  });
}

if (document.getElementById("modalwin")) {
  const overlay = document.getElementById("overlay");
  const modalwin = document.getElementById("modalwin");
  const bodycls = document.getElementById("body");
  modalwin.addEventListener("click", () => {
    //modalwin.classList.remove('modal_active');
    overlay.classList.remove("show-overlay");
    bodycls.classList.remove('hidden');
  });
}

if (document.getElementById("header__notification")){
  const deleteBtn = document.getElementById("header__notification");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("modal-notification");
  deleteBtn.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.classList.add("show-overlay");
  });
  deleteBtn.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.classList.add("show-overlay");
  });
}
if (document.getElementById("modal-notification")) {
  const popup = document.getElementById("modal-notification");
  const overlay = document.getElementById("overlay");
  const noBtn = document.getElementById("modal-notification__icon-close");
  noBtn.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.classList.remove("show-overlay");
  });
}
if (document.getElementById("modal-notification__icon-close")) {
  const noBtn = document.getElementById("modal-notification__icon-close");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("modal-notification");
  noBtn.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.classList.remove("show-overlay");
  });
  overlay.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.classList.remove("show-overlay");
  });
}





// yesBtn.addEventListener("click", () => {
//   popup.style.display = "none";
//   overlay.classList.add("show");
// });
// buyBtn.addEventListener("click", () => {
//   success.style.display = "none";
//   overlay.classList.remove("show");
// });