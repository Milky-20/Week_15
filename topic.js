function selectBackground(){
    // Находим нужный селектор и подтягиваем его (выбираем)
    let select = document.getElementById('selector');
    // определяем цвет
    let color = (select.selectedIndex != 0) ? select.options[select.selectedIndex].value : 'transparent';
    // подтягиваем результат
    document.getElementById('PreviewResults').style.backgroundColor = color;
}