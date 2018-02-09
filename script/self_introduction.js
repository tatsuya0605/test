document.addEventListener('DOMContentLoaded', function(){
  let getRadioValue = function(name){
    let elems = document.getElementsByName(name);
    let result = document.getElementById('result');
    console.log(elems[3]);

    if (elems[3].checked){
      let namae = document.getElementById('name');
      result.textContent = `こんにちは${namae.value}さん！　${elems[3].value}なんですね（笑）`
    }else{
      let namae = document.getElementById('name');
      result.textContent = `こんにちは${namae.value}さん！　サバを読まない方がいいですよ`
    }
  };
  document.getElementById('btn').addEventListener('click', function(){
    getRadioValue('number');
  }, false);
}, false);
