

try {
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
      document.body.classList.remove('body-overflor');
    }
  
    const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      window.addEventListener('keydown', closeModal);
      document.body.classList.add('body-overflor');
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

  modalController({
    modal: '.modal',
    btnOpen: '.my-vector__conclusion',
    btnClose: '.modal__close-vect'
  });
} catch (error) {
  
}

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
    overlay.classList.add("show-");
  });
  deleteBtn.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.classList.add("show");
  });
}
if (document.getElementById("modal-notification")) {
  const popup = document.getElementById("modal-notification");
  const overlay = document.getElementById("overlay");
  const noBtn = document.getElementById("modal-notification__icon-close");
  noBtn.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.classList.remove("show");
  });
}
if (document.getElementById("modal-notification__icon-close")) {
  const noBtn = document.getElementById("modal-notification__icon-close");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("modal-notification");
  noBtn.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.classList.remove("show");
  });
  overlay.addEventListener("click", () => {
    popup.style.display = "none";
    overlay.classList.remove("show");
  });
}




try {
  document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
    const mainButton = dropDownWrapper.querySelector('.dropdown__button');
    const spanTextBut = dropDownWrapper.querySelector('.dropdown__currency-text');
    const spanText = dropDownWrapper.querySelector('.dropdown__item-text');
    const currenImg = dropDownWrapper.querySelector('.dropdown__currency-img');
    const typeImg = dropDownWrapper.querySelector('.dropdown__item-img');
    const currType = dropDownWrapper.querySelector('.dropdown__currency-type');
  
  
    // Клик по кнопке. Открыть/Закрыть select
    dropDownBtn.addEventListener('click', function (e) {
      dropDownList.classList.toggle('dropdown__list--visible');
          this.classList.add('dropdown__button--active');
          this.classList.add('dropdown__button--noradius');
    });
    
    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    dropDownListItems.forEach(function (listItem) {
      listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        spanTextBut.innerText = this.querySelector('.dropdown__item-text').innerText;
        currType.innerText = this.querySelector('.dropdown__item-type').innerText;
        currenImg.src = this.querySelector('.dropdown__item-img').src;
        dropDownBtn.focus();
        dropDownInput.value = this.dataset.value;
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownBtn.classList.remove('dropdown__button--noradius');
        ('.dropdown__currency-type')
      });
    });
    // Клик снаружи дропдауна. Закрыть дропдаун
    document.addEventListener('click', function (e) {
      if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownBtn.classList.remove('dropdown__button--noradius');
      }
    });
  
    // Нажатие на Tab или Escape. Закрыть дропдаун
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
        dropDownBtn.classList.remove('dropdown__button--noradius');
      }
    });

  
    const condropbutt = dropDownWrapper.querySelector('.dropdown__button');
    condropbutt.addEventListener('click', function (event) {
      event.preventDefault()
    });
    // condropbutt.forEach(function (buttdown) {
    //   buttdown.addEventListener('click', function (event) {
    //     event.preventDefault()
    //   });
    // });

  });
  
} catch (error) {
  
}


try {
  // Полифилл для метода forEach для NodeList
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

    const formbutt = document.querySelector('.form-three__butt');
    formbutt.addEventListener('click', function (event) {
      event.preventDefault()
    });
} catch (error) {
  
}
