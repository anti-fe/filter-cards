window.onload = function() {

    const contNav = document.querySelector('.cont-nav');
    const arrBox = document.querySelectorAll('.cont-items__box');
    const numItems = document.querySelector('.num-items');


    function setNumItems() {
        //Функция которая подсчитывает отфильтрованные карточки
        let visibleItems = [];
        arrBox.forEach(item => {
            //Если у карточки нет класс 'item-hide' добавлять его в список
            if(!item.classList.contains('item-hide')){
                visibleItems.push(item);
            } 
        })
        return numItems.textContent = `Кол-во найденных совпадений: ${visibleItems.length}`
    }

    //При клике на навигацию
    contNav.addEventListener('click', (e)=> {
        //Если мы кликнули не на элемент 'li' ничего не делать
        if(e.target.tagName !==  'LI') return false;
        //Взять у 'li' на которую мы кликнули data атрибут
        let classFilter = e.target.dataset['filter'];
        
        arrBox.forEach(item => {
            //Если у карточки есть тот же класс что и у 'li' на который мы кликнули
            //И его data атрибут не 'all', добавлять к карточке класс 'item-hide'
            if((!item.classList.contains(classFilter)) && classFilter !== 'all') {
                item.classList.add('item-hide');
            } else{
                //Иначе удалять класс 'item-hide'
                item.classList.remove('item-hide');
            }
        })
        //Вызываем функцию подсчета отфильтрованных карточек
        setNumItems();
    })



}