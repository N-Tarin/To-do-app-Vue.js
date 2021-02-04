'use strict';

// reload 
const reload = document.querySelector('.reload');
reload.addEventListener(('click'), () => {
  document.location.reload();
});

// addList
const addButton = document.getElementById('button');
addButton.addEventListener(('click'), () => {

  // if text is empty
  const title = document.getElementById('title');
  if (title.value == '') {
    alert('write something！');
  } else {

    const lists = document.getElementById('lists');//ulタグ取得
    const title = document.getElementById('title');//inputタグ取得
    const newLi = document.createElement('li');//liタグつくる
    
    lists.appendChild(newLi);//ulタグにliタグ追加
    newLi.innerHTML = title.value;//liタグ内容追加
    newLi.className = "list__item";//クラス名つける

    // チェックマーク
    const checkBtn = document.createElement('button');//チェックボタンつくる
    checkBtn.className = 'checkIcon far fa-circle';
    newLi.prepend(checkBtn);//liタグにチェックボタン追加

    newLi.addEventListener(('click'), () => {
      const li = newLi.closest('li');
      checkBtn.classList.toggle('checkIcon__active');
      li.classList.toggle('finished');
    });    


    // 削除ボタン
    const deleteBtn = document.createElement('button');//削除ボタンつくる
    deleteBtn.className = 'deleteIcon';
    newLi.appendChild(deleteBtn);//liタグにチェックボタン追加
    
    deleteBtn.addEventListener(('click'), () => {
      const deleteLi = deleteBtn.closest('li');
      deleteLi.remove();
    });
  }
});

