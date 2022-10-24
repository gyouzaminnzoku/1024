//const tbox=document.getElementById("tbox");
const add=document.getElementById("add");
const b1=document.getElementById("b1");
//const idd=document.getElementById("id");
//element.insertAdjacentHTML('beforebegin','<a-text value="cocoa" look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;"></a-text>')

const element = document.querySelector('#wrap');

b1.addEventListener("click",()=>{
    //add.innerHTML='<a-text value="cocoa" look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;"></a-text>'
    console.log("ok");
    idd.setAttribute("value","bbb");
    //idd.insertAdjacentHTML('beforebegin', '<a-text id="id" value="aaa." look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;"></a-text>');
})

function ano(){
  let nihon=document.getElementById("nihon");
  let tbox=document.getElementById("tbox");
  var text=tbox.value;
  nihon.setAttribute("data-text","");
  aframeMutlByte();
  /*const tbox=document.getElementById("tbox");
  var text=tbox.value;
  const idd=document.getElementById("id");
  idd.setAttribute("value",text);
  //idd.value='bbb';
  //idd.insertAdjacentHTML('beforebegin', '<a-text id="id" value="aaa." look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;"></a-text>');
  //idd.setAttribute("value","bbb");
  //let createElement = document.createElement('a-text value="cocoa" look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;');
  //element.insertAdjacentHTML('beforebegin','<a-text value="cocoa" look-at="[gps-camera]" scale="50 50 50" gps-entity-place="latitude: 36.14440307353002 ; longitude: 139.38239471376482;"></a-text>')
*/
}
function run(){
  console.log("ready");
  let nihon=document.getElementById("nihon");
  let tbox=document.getElementById("tbox");
  var text=tbox.value;
  nihon.setAttribute("data-text",text);
  aframeMutlByte();
}
/*function run(){
  console.log("ready");
  //let nihon=document.getElementById("nihon");
  let tbox=document.getElementById("tbox");
  var text=tbox.value;
  //nihon.remove();
  let createElement = document.createElement('a-entity')
  createElement.setAttribute("id","nihon");
        createElement.setAttribute("mb-text");
        createElement.setAttribute("position","0.5 2 -1");
        createElement.setAttribute("data-text","bbbb");
  //let nihon=document.getElementById("nihon");
  //nihon.setAttribute("data-text",text);
  aframeMutlByte();
}*/
idd.appendChild(new_element);
