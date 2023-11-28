
/*!  
=========================================================
*   Mobile Brand Scripts
=========================================================
*/
let  updateBrandImageSource = () => {
      const brandImg = document.getElementById('Shopify-icon');

      if (window.matchMedia('(max-width: 767px)').matches) {
        brandImg.src = 'https://crushingit.tech/hackathon-assets/shopify-icon.svg';
      } else {
        brandImg.src = 'https://crushingit.tech/hackathon-assets/shopify-icon-desktop.svg';
      }
  }

updateBrandImageSource();

window.addEventListener('resize', updateBrandImageSource);
/*!  
=========================================================
*   Dropdown Scripts
=========================================================
*/
//Menu and buttons 
const notiprofileButton = document.getElementById('notification-menu')
const notiMenu  = document.getElementById('notification-menu-content')

const profileButton = document.getElementById('profile-menu');
const profileMenu = document.getElementById('profile-menu-content');
//  Noti Dropdown


notiprofileButton.addEventListener('click', e => {
  if(profileMenu.classList.contains('show')){
    profileMenu.classList.remove('show');
  }
  notiMenu.classList.toggle('show')
});

notiprofileButton.addEventListener('keydown', e => {
  if (e.key === 'Escape' && notiMenu.classList.contains('show')) {
    notiprofileButton.focus();
    notiprofileButton.setAttribute('aria-expanded', false);
    notiMenu.classList.remove('show');
  }
});


document.addEventListener('mouseup', e => {
  if (!notiMenu.contains(e.target) && !notiprofileButton.contains(e.target)) {
    notiMenu.classList.remove('show');
  }

})
// Profile Menu
const menuItems = profileMenu.querySelectorAll('[role="menuitem"]');
let currentIndex = 0;

profileButton.addEventListener('click', () => {
  profileMenu.classList.toggle('show');

  if(notiMenu.classList.contains('show')){
    notiMenu.classList.remove('show');
  }

  if (menuItems.length > 0) {
    menuItems[currentIndex].focus();
  }
});

profileMenu.addEventListener('keydown', e => {
  if(profileMenu.classList.contains('show')){
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentIndex = (currentIndex + 1) % menuItems.length;
      menuItems[currentIndex].focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
      menuItems[currentIndex].focus();
    } else if (e.key === 'Escape') {
      profileButton.focus();
      profileButton.setAttribute('aria-expanded', false);
      profileMenu.classList.remove('show');
    }
  }
});

document.addEventListener('mouseup', e => {
  if (!profileMenu.contains(e.target) && !profileButton.contains(e.target)) {
    profileMenu.classList.remove('show');
  }

})

/*!  
=========================================================
*   Message Scripts
=========================================================
*/
const closeIcon = document.querySelector('.close');
const messageHeader = document.querySelector('.message-header');
closeIcon.addEventListener('click', () => {
  messageHeader.remove();
});
/*!  
=========================================================
*   Content Scripts
=========================================================
*/
/* -----------------  Setup tab Scripts  ------------------- */
const arrowIcon = document.querySelector('.toggle-guide');
const guide = document.querySelector('.guide');

arrowIcon.addEventListener('click', (e) => {
  e.target.style.rotate = '180'
  guide.classList.toggle('hidden');
  if (guide.classList.contains('hidden')) {
    arrowIcon.style.transform = 'rotate(180deg)';
  } 
  else {
    arrowIcon.style.transform = 'rotate(0deg)';
  }
});
/* ------------- progress bar Scripts  --------------- */
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const progressBar = document.querySelector('progress');
const completed = document.querySelector('.count-completed');

updateProgressBar();

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateProgressBar);
});

function updateProgressBar() {
  let boxes = Array.from(checkboxes)
  const checkedCount = boxes.filter(checkbox => checkbox.checked).length;
  progressBar.value = checkedCount;
  completed.innerText = checkedCount;
}
/* -----------------  Guide tab Scripts  ------------------- */
const tabs = document.querySelectorAll('.guide li');




for (const tab of tabs) {
  const checkbox = tab.querySelector('input[type="checkbox"]');
  const tabContent = tab.querySelector('.tab-content');

  let showContent = () =>{
    if (checkbox.checked) {
      for (const otherTab of tabs) {
        if (otherTab !== tab) {
          otherTab.querySelector('.tab-content').classList.remove('active');
          otherTab.classList.remove('active-tab');
        }
      }
      tabContent.classList.add('active');  
      tab.classList.add('active-tab');    
    }
  }

  checkbox.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        checkbox.checked = !checkbox.checked
        showContent()
    }
  })

  checkbox.addEventListener('click', (event) => {
    showContent()
  });
}
/*!  
=========================================================
*   Accessibility Scripts 
=========================================================
*/

// All popup 
let popup = Array.from (document.getElementsByClassName('popup'))

popup.forEach( p=> p.addEventListener('click', e => { 
  p.setAttribute('aria-expanded', !(p.getAttribute('aria-expanded') === 'true' || false))
}))


