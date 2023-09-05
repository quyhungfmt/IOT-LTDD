// ----------------------------------------------------------------------------->
var add = document.getElementById('add');
var input = document.querySelector('.inputModule')
var openmenu = document.getElementById("boxmenu");
var listMd = document.querySelector('.bodyvalue')

// ----------------------------------------------------------------------------->
document.getElementById('menu').addEventListener('click', () => {
  openmenu.classList.toggle("openmenu");
}) 

// ----------------------------LAY DU LIEU TU LOCALSTORAGE----------------------->
function getLocalModuleName () {
  return localStorage.getItem('ModuleName') ? JSON.parse(localStorage.getItem('ModuleName')) : [] // JSON.parse conve String to Array 
 }

// ---------------------KIEM TRA MODULE DA TON TAI HAY CHUA ?-------------------->

function kt () {
  let namevalue = getLocalModuleName();
  const isvalue = namevalue.some((nameS) => {
    return nameS.name === input.value
  })
  return isvalue
}
// -----------------------------THEM MODULE VA LUU VAO LOCALSTORAGE--------------->

function addModule () {
  let ModuleArray = getLocalModuleName()
  ModuleArray.push({name: input.value})
  localStorage.setItem('ModuleName', JSON.stringify(ModuleArray)) // JSON.stringify conver Array to String
  UpdateListModule(ModuleArray)
  location.reload();
  input.value = ''
}

// ------------------------------------THEM MODULE KHI ENTER(SUBMIT)-------------->
add.addEventListener('submit',(e) => {
  if(!input.value){
    e.preventDefault();
    alert('vui long nhap value');
    return false
  }
  e.preventDefault()
  if(kt())
  {
    alert("Module đã tồn tại")
    return false
  }
  else {
    e.preventDefault();
    addModule()
  }
})


// ---------XOA MOT OBJECT TRONG MANG OBJECT CÓ OBJ.ID == INDEX---------------------->
//------------DUNG DE XOA TEN MODULE--------------------------------------------->
function deleteModule (name) {
  let modulearray = JSON.parse(localStorage.getItem('ModuleName'))
  console.log(modulearray)
  modulearray = modulearray.filter((value) => {
    return value.name !== name
  })
  localStorage.setItem('ModuleName',JSON.stringify(modulearray))
  UpdateListModule(modulearray)
  location.reload()
}

// ----------HIEN THI TUNG PHAN TU CUA LISTMODULE TRUYEN VAO RA GIAO DIEN ----------------->
function UpdateListModule (listModule = []) {
  let body = '<ul>'
  listModule.forEach((value) => {
    let address = value.name;
    listenData("L"+address,"tL"+address,value.name+"/DataLED","LED");
    listenData("M"+address,"tM"+address,value.name+"/DataDC","Máy Bơm");
    listenDataSensor(address,'Humidity');
    listenDataSensor(address,'Temperature');
    body += `
    <div class="bodyvalue">
    <ul>
        <li>
            <header>
                <p id="ModuleName${value.name}" >ModuleName: ${value.name}</p>
                <button onclick = "deleteModule('${address}')">XÓA</button>
            </header>
        <li></ul>
            <!--value controler -->
    <div class="valueControlAndShow">
        <div class="controler">
                <ul>
                <li 
                class="title" id="tL${address}">LED:
                </li>
                <li>
                    <div id="L${address}" class="switch-body" onclick= 'switchClick("L${address}","${address}","DataLED")'>
                    <div class="switch-value" >   
                    </div>
                    </div>
                </li>
                <li 
                class="title" id="tM${address}">Máy Bơm:
                </li>
                <li>
                <div id="M${address}" class="switch-body" onclick= 'switchClick("M${address}","${address}","DataDC")'>
                    <div class="switch-value" >
                    </div>
                    </div>
                </li>
            </ul>
        </div>
        <!-- value show -->
        <div class="showvalue">
            <div class="namesensordata">
                <p>${value.name}:Humidity</p>   
                <p>${value.name}:Tempera</p>   
            </div>
            <div  id="${value.name}Humidity" class="value">
                <div id="${value.name}Humidity-0" class="line"><p>0</p><div class="division"></div></div>
                <div id="${value.name}Humidity-1" class="line"><p>10</p><div class="division"></div></div>
                <div id="${value.name}Humidity-2" class="line"><p>20</p><div class="division"></div></div>
                <div id="${value.name}Humidity-3" class="line"><p>30</p><div class="division"></div></div>
                <div id="${value.name}Humidity-4" class="line"><p>40</p><div class="division"></div></div>
                <div id="${value.name}Humidity-5" class="line"><p>50</p><div class="division"></div></div>
                <div id="${value.name}Humidity-6" class="line"><p>60</p><div class="division"></div></div>
                <div id="${value.name}Humidity-7" class="line"><p>70</p><div class="division"></div></div>
                <div id="${value.name}Humidity-8" class="line"><p>80</p><div class="division"></div></div>
                <div id="${value.name}Humidity-9" class="line"><p>90</p><div class="division"></div></div>
                <div id="${value.name}Humidity-10" class="line"><p>100</p><div class="division"></div></div>
                <div id="sensor1Etcolor" class="etvalue">
                <div class="kt"></div>
                </div>
                <span><p id="${value.name}Humiditytext" class="sensor1">0</p></span>
            </div>
            <div id="${value.name}Temperature" class="value">
                <div id="${value.name}Temperature-0" class="line"><p>0</p><div class="division"></div></div>
                <div id="${value.name}Temperature-1" class="line"><p>10</p><div class="division"></div></div>
                <div id="${value.name}Temperature-2" class="line"><p>20</p><div class="division"></div></div>
                <div id="${value.name}Temperature-3" class="line"><p>30</p><div class="division"></div></div>
                <div id="${value.name}Temperature-4" class="line"><p>40</p><div class="division"></div></div>
                <div id="${value.name}Temperature-5" class="line"><p>50</p><div class="division"></div></div>
                <div id="${value.name}Temperature-6" class="line"><p>60</p><div class="division"></div></div>
                <div id="${value.name}Temperature-7" class="line"><p>70</p><div class="division"></div></div>
                <div id="${value.name}Temperature-8" class="line"><p>80</p><div class="division"></div></div>
                <div id="${value.name}Temperature-9" class="line"><p>90</p><div class="division"></div></div>
                <div id="${value.name}Temperature-10" class="line"><p>100</p><div class="division"></div></div>
                <div id="sensor2Etcolor" class="etvalue">
                <div class="kt"></div>
                </div>
                <span><p id="${value.name}Temperaturetext" class="sensor2">0</p></span>
            </div>
            </div>
            </div>    
            </div>    

    `
  })
  body += '<ul>'
  document.querySelector('#listbody').innerHTML=body

}
function updata () {
  let dataLocal = getLocalModuleName();
  UpdateListModule(dataLocal);
}
function switchClick(namesw,name,message) {
  let isclass = document.getElementById(namesw).classList.contains("on")
  if(isclass) 
  {
    document.getElementById(namesw).setAttribute("class", "switch-body")
    updateData("IOT/"+name,message,"0")
  }
  else
  {
    document.getElementById(namesw).setAttribute("class", "switch-body on")
    updateData("IOT/"+name,message,"1")
  }
}
function showdata (value,sensorName,moduleName) {
  var cshow = document.getElementById(moduleName+sensorName)
  let S = ~~ (value/10);  // chia lay phan nguyen
  var valueshow = document.getElementById(moduleName+sensorName+"text")
  if(value<101)
  {
      for(var i=0; i <= S ;i++)
      {   
          document.getElementById(moduleName+sensorName+"-"+i).setAttribute("class","line inval")
          for(var j = S+1; j<=10;j++)
          document.getElementById(moduleName+sensorName+"-"+j).setAttribute("class","line")   
      }
  valueshow.innerHTML = value
  cshow.style.setProperty('--rotateafter',`rotate(${-40+value*1.7}deg)`)       
  }
  else {
      for(var i=0;i<=10;i++)
      document.getElementById(moduleName+sensorName+"-"+i).setAttribute("class","line inval")
      cshow.style.setProperty('--rotateafter','rotate(130deg)')
      valueshow.innerHTML ="1xx"
      valueshow.style.color = "red"
  }
}
