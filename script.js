function initModal() {
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
    
    if(botaoAbrir && botaoFechar && containerModal) {
      
      function toggleModal(event) {
        event.preventDefault();
        containerModal.classList.toggle('ativo');
      }
      function cliqueForaModal(event) {
        if(event.target === this) {
          toggleModal(event);
        }
      }
    
      botaoAbrir.addEventListener('click', toggleModal);
      botaoFechar.addEventListener('click', toggleModal);
      containerModal.addEventListener('click', cliqueForaModal);
    }
  }
  initModal();


  function initTooltip() {
    const tooltips = document.querySelectorAll('[data-tooltip]');
  
    tooltips.forEach((item) => {
      item.addEventListener('mouseover', onMouseOver);
    })
  
    function onMouseOver(event) {
      const tooltipBox = criarTooltipBox(this);
  
      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener('mousemove', onMouseMove);
  
      onMouseLeave.tooltipBox = tooltipBox;
      onMouseLeave.element = this;
      this.addEventListener('mouseleave', onMouseLeave);
    }
  
    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleave', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
      }
    }
  
    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
      }
    }
  
    function criarTooltipBox(element) {
      const tooltipBox = document.createElement('div');
      const text = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = text;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }
  }
  initTooltip();
  
  
  function initDropdownMenu() {
    const dropdownMenus = document.querySelectorAll('[data-dropdown]');
    dropdownMenus.forEach(menu => {
      ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
      });
    });
  
    function handleClick(event) {
      event.preventDefault();
      this.classList.add('active');
    };
  }
  
  initDropdownMenu();