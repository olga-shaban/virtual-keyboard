let sectionDisplay = document.createElement('section');
document.body.append(sectionDisplay);
sectionDisplay.innerHTML = `<h1 class="visually-hidden">Виртуальная клавиатура</h1>
<div class="computer">
  <div class="display-wrapper">
    <textarea class="display" id="output"></textarea>
  </div>
  <button class="button language language-en">EN</button>  
</div>`;

let sectionKeyboard = document.createElement('section');
document.body.append(sectionKeyboard);
sectionKeyboard.innerHTML = `<div class="keyboard" id="keyboard-container"></div>`;


const keyboardContainer = document.getElementById('keyboard-container');




const keys = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Enter'],
  ['Shift','z', 'x', 'c', 'v', 'b', 'n', 'm', '.' , ',' , '▲',],
  ['Ctrl','Alt', ' ', '◄' , '▼','►',]   
];

const keysUp = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['CapsLock','A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Enter'],
  ['Shift','Z', 'X', 'C', 'V', 'B', 'N', 'M', '<' , '>' , '▲',],
  ['Ctrl','Alt', ' ', '◄' , '▼','►',]   
];

const keysRu = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0','Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з'],
  ['CapsLock','a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Enter'],
  ['Shift','z', 'x', 'c', 'v', 'b', 'n', 'm', '.' , ',' , '▲',],
  ['Ctrl','Alt', ' ', '◄' , '▼','►',]   
];

let languageRuEnabled = false; // индикатор включения языка клавиатуры
let languageButton = document.querySelector('.language');

languageButton.addEventListener('click', () => {
  languageRuEnabled = !languageRuEnabled; 
    //keyboardContainer.innerHTML = '';
      if (languageRuEnabled) {
        languageButton.textContent = "RU";
      } else {
        languageButton.textContent = "EN";
      }     
  
  console.log("njnk");
});



let capsLockEnabled = false; // индикатор включения регистра клавиатуры

const createKeyElement = (key) => {
  const keyElement = document.createElement('div');
  keyElement.classList.add('button');
  keyElement.innerHTML = key;

  if (key === 'Backspace') {
      keyElement.addEventListener('click', () => {
      const outputElement = document.getElementById('output');
      outputElement.value = outputElement.value.slice(0, -1); // Remove last character
    });
  } 

  else if (key === 'Enter') {
    keyElement.classList.add('enter');
    keyElement.addEventListener('click', () => {
      const outputElement = document.getElementById('output');
      outputElement.value += "\n"; // переход на новую строку
    });
  } 

  else if (key === 'Tab') {
      keyElement.addEventListener('click', () => {
      const outputElement = document.getElementById('output');
      outputElement.value += ` `;
      outputElement.value += ` `; // клавиша Tab
    });
  } 

  else if (key === 'CapsLock') {
      keyElement.addEventListener('click', () => {
      capsLockEnabled = !capsLockEnabled;// изменяем индикатор регистра
      keyboardContainer.innerHTML = '';
      if (capsLockEnabled) {
        createKeyboardUp();        
      } else {
        createKeyboard();        
      }
      const outputElement = document.getElementById('output');
      outputElement.value += ``;
       // клавиша capsLoock
    });
  } 

  else if (key === 'Shift'|| key === 'Ctrl'|| key === 'Alt' ) {
      keyElement.addEventListener('click', () => {
      const outputElement = document.getElementById('output');
      outputElement.value += ``;// клавиша shift       
    });
  } 

  else if (key === ' ') {
    keyElement.classList.add('space');
    keyElement.addEventListener('click', () => {
      const outputElement = document.getElementById('output');
      outputElement.value += ` `;// клавиша пробел       
    });
  } 

  else {
      keyElement.addEventListener('click', () => {
      const outputElement = document.getElementById('output');
      outputElement.value += key;
    });
  }
  
  return keyElement;
};

const createKeyboard = () => {
  keys.forEach(row => {
    const rowElement = document.createElement('div');
    //rowElement.classList.add('row');
    rowElement.classList.add('keyboard-line');
    
    row.forEach(key => {
      const keyElement = createKeyElement(key);
      rowElement.appendChild(keyElement);
    });
    keyboardContainer.appendChild(rowElement);
  });
};

createKeyboard();

const createKeyboardUp = () => {
  keysUp.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('keyboard-line');
    
    row.forEach(key => {
      const keyElement = createKeyElement(key);
      rowElement.appendChild(keyElement);
    });
    keyboardContainer.appendChild(rowElement);
  });
};

// обработчики событий для нажатия  клавиши CapsLock на всем документе

document.addEventListener('keydown', function(event) {
  if (event.getModifierState('CapsLock')) {
    capsLockEnabled = !capsLockEnabled; 
    keyboardContainer.innerHTML = '';
      if (capsLockEnabled) {
        createKeyboardUp();
      } else {
        createKeyboard();
      }     
  }
});






