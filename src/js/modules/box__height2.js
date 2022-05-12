var boxes = document.querySelectorAll('.height-auto');
var height = 0;
//Определяем максимальную высоту блока
for( var i = 0; i < boxes.length; i++ ){
    var current_height = boxes[i].offsetHeight;
    if(current_height > height) {
        height = current_height;
    }        
}
//Задаем максимальную высоту блока всем элементам
for( var i = 0; i < boxes.length; i++ ){
    boxes[i].style.height = height + 'px';       
}
