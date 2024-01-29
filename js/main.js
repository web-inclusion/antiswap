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

const deleteBtn = document.getElementById("header__notification");
const popup = document.getElementById("modal-notification");
const noBtn = document.getElementById("modal-notification__icon-close");
const overlay = document.getElementById("overlay");

deleteBtn.addEventListener("click", () => {
  popup.style.display = "block";
  overlay.classList.add("show");
});
noBtn.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.classList.remove("show");
});
overlay.addEventListener("click", () => {
  popup.style.display = "none";
  overlay.classList.remove("show");
});
// yesBtn.addEventListener("click", () => {
//   popup.style.display = "none";
//   overlay.classList.add("show");
// });
// buyBtn.addEventListener("click", () => {
//   success.style.display = "none";
//   overlay.classList.remove("show");
// });