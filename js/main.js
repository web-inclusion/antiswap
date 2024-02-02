const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
  const buttonElems = document.querySelectorAll(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity ${time}ms ease-in-out;
  `;

  const closeModal = event => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      event.code === 'Escape'
      ) {
      
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
      }, time);

      window.removeEventListener('keydown', closeModal);
    }
  }

  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    window.addEventListener('keydown', closeModal)
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  modalElem.addEventListener('click', closeModal);
};

modalController({
  modal: '.modal',
  btnOpen: '.my-active__conclusion',
  btnClose: '.modal__close'
});




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

