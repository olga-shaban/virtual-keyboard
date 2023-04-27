let sectionDisplay = document.createElement('section');
document.body.append(sectionDisplay);
sectionDisplay.innerHTML = `<h1 class="visually-hidden">Виртуальная клавиатура</h1>
<div class="computer">
  <div class="display-wrapper">
    <div class="display"></div>
  </div>  
</div>`;

let sectionKeyboard = document.createElement('section');
document.body.append(sectionKeyboard);
sectionKeyboard.innerHTML = `  <div class="keyboard">
<div class="keyboard-line">
  <button class="button key" type="button" id="index_0">ё</button>
  <button class="button key" type="button" id="index_1">1</button>
  <button class="button key" type="button" id="index_2">2</button>
  <button class="button key" type="button" id="index_3">3</button>
  <button class="button key" type="button" id="index_4">4</button>
  <button class="button key" type="button" id="index_5">5</button>
  <button class="button key" type="button" id="index_6">6</button>
  <button class="button key" type="button" id="index_7">7</button>
  <button class="button key" type="button" id="index_8">8</button>
  <button class="button key" type="button" id="index_9">9</button>
  <button class="button key" type="button" id="index_10">0</button>
  <button class="button key" type="button" id="index_11">-</button>
  <button class="button key" type="button" id="index_11">=</button>
  <button class="button clear" type="button">Backspace</button>
</div>

</div>
<div class="keyboard-line">
<button class="button key tab" type="button" id="index_12"> &#160;</button>
  <button class="button key" type="button" id="index_0">й</button>
  <button class="button key" type="button" id="index_1">ц</button>
  <button class="button key" type="button" id="index_2">у</button>
  <button class="button key" type="button" id="index_3">к</button>
  <button class="button key" type="button" id="index_4">е</button>
  <button class="button key" type="button" id="index_5">н</button>
  <button class="button key" type="button" id="index_6">г</button>
  <button class="button key" type="button" id="index_7">ш</button>
  <button class="button key" type="button" id="index_8">щ</button>
  <button class="button key" type="button" id="index_9">з</button>
  <button class="button key" type="button" id="index_10">х</button>
  <button class="button key" type="button" id="index_11">ъ</button>
</div>
<div class="keyboard-line">
<button class="button " type="button" id="index_12">CapsLock</button>
  <button class="button key" type="button" id="index_12">ф</button>
  <button class="button key" type="button" id="index_13">ы</button>
  <button class="button key" type="button" id="index_14">в</button>
  <button class="button key" type="button" id="index_15">а</button>
  <button class="button key" type="button" id="index_16">п</button>
  <button class="button key" type="button" id="index_17">р</button>
  <button class="button key" type="button" id="index_18">о</button>
  <button class="button key" type="button" id="index_19">л</button>
  <button class="button key" type="button" id="index_20">д</button>
  <button class="button key" type="button" id="index_21">ж</button>
  <button class="button key" type="button" id="index_22">э</button>
  <button class="button key" type="button" id="index_23">ё</button>
  <button class="button enter" type="button" id="index_12">Enter</button>
</div>
<div class="keyboard-line">
<button class="button " type="button" id="index_12">Shift</button>
  <button class="button key" type="button" id="index_24">я</button>
  <button class="button key" type="button" id="index_25">ч</button>
  <button class="button key" type="button" id="index_26">с</button>
  <button class="button key" type="button" id="index_27">м</button>
  <button class="button key" type="button" id="index_28">и</button>
  <button class="button key" type="button" id="index_29">т</button>
  <button class="button key" type="button" id="index_30">ь</button>
  <button class="button key" type="button" id="index_31">б</button>
  <button class="button key" type="button" id="index_32">ю</button>
  <button class="button key" type="button" id="index_32">.</button>
  <button class="button key" type="button" id="index_32">▲</button>
</div>
<div class="keyboard-line">
<button class="button " type="button" id="index_12">Ctrl</button>
<button class="button " type="button" id="index_12">Alt</button>
  <button class="button key space" type="button" id="index_33"> </button>
  <button class="button key" type="button" id="index_32">◄</button>
  <button class="button key" type="button" id="index_32">▼</button>
  <button class="button key" type="button" id="index_32">►</button>
</div>
</div>`;


let key = document.querySelectorAll('.key');
let display = document.querySelector('.display');
let clear = document.querySelector('.clear');
let enter = document.querySelector('.enter');


for(let k of key){
k.onclick = function(){ 
    display.textContent += k.textContent;
  }
}  

/*подумать как удалить последний элемент */
clear.onclick = function(evt){
  evt.preventDefault();  
display.textContent = '';
}




/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться, для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/