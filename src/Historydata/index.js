

const vcolor = "#0c6901"
const vcolorhigh = "#ff0000"
const vcolorLow = "#fff"
//-------------------------------------------------------------->

var currentHandler = null
function ShowlistModule (list = []) {

    let body = '<ul>'
    list.forEach((value) => {
        body += `
        <li>${value.name}
         <button onclick="changeShowModule('${value.name}')">add</button>
         <button onclick="cancel()">add2</button>
        </li>
        `
    })
    body += '<ul>'  
    document.querySelector('#bodylist').innerHTML = body
}


    function load () {
        let value = JSON.parse(localStorage.getItem('ModuleName'))
        ShowlistModule(value)
    }
    function cancel () {
        var sre = firebase.database().ref('IOT/m01/Humidity')
        sre.off()
        console.log('done')
    }

    function listenData (modulename,sensor,path) {
        var database = firebase.database().ref('IOT/'+modulename+'/'+path);

        currentHandler =  database.on('value',(valListen)=>{
            let value = valListen.val();
            console.log(value)
            showdata(value,sensor,modulename)
        })
    }
/* 
    function show (link) {
    var cs = document.getElementById('textname')
    var database1 = firebase.database().ref('IOT/'+link);
    database.on('value',(sval) => {
        let data = sval.val()
        cs.style.setProperty('--rotateafter',`rotate(${data}deg)`)
    })

    function add1 ()
    {
        var lk = 'sen1';
        show(lk);
    }
    function add2 ()
    {
        var lk = 'sen2';
        show(lk);
    }


    var currentHandler = null;

function show (link) {
    var cs = document.getElementById('showdata');
    var database = firebase.database().ref('IOT/'+link);

    // Hủy đăng ký sự kiện 'value' cũ nếu có
    if (currentHandler) {
        database.off('value', currentHandler);
    }

    // Đăng ký sự kiện 'value' mới

    currentHandler = database.on('value',(sval) => {
        let data = sval.val();
        cs.innerHTML = data;
    });
}

function add1 () {
    var lk = 'sen1';
    show(lk);
}

function add2 () {
    var lk = 'sen2';
    show(lk);
}


*/
// 
// 
// 
// 
//     
    function showdata (value,sensor) {
        var cshow = document.getElementById(sensor)
        let S = ~~ (value/10);  // chia lay phan nguyen
        if(value<101)
        {
            for(var i=0; i <= S ;i++)
            {   
                document.getElementById(sensor+"-"+i).setAttribute("class","line inval")
                for(var j = S+1; j<=10;j++)
                document.getElementById(sensor+"-"+j).setAttribute("class","line")   
            }
        cshow.style.setProperty('--rotateafter',`rotate(${-40+value*1.7}deg)`)       
        }
        else {
            for(var i=0;i<=10;i++)
            document.getElementById(sensor+"-"+i).setAttribute("class","line inval")
            cshow.style.setProperty('--rotateafter','rotate(130deg)')
        }
    }
    

    function changeShowModule (moduleName) {
        console.log(moduleName)
    let body = '<div class="bodybox">'
    body = `
    <div class="namesensordata">
        <p>${moduleName}:Humidity</p>   
        <p>${moduleName}Tempera</p>   
    </div>
    <div  id="sensor1" class="value">
        <div id="sensor1-0" class="line"><p>0</p><div class="division"></div></div>
        <div id="sensor1-1" class="line"><p>10</p><div class="division"></div></div>
        <div id="sensor1-2" class="line"><p>20</p><div class="division"></div></div>
        <div id="sensor1-3" class="line"><p>30</p><div class="division"></div></div>
        <div id="sensor1-4" class="line"><p>40</p><div class="division"></div></div>
        <div id="sensor1-5" class="line"><p>50</p><div class="division"></div></div>
        <div id="sensor1-6" class="line"><p>60</p><div class="division"></div></div>
        <div id="sensor1-7" class="line"><p>70</p><div class="division"></div></div>
        <div id="sensor1-8" class="line"><p>80</p><div class="division"></div></div>
        <div id="sensor1-9" class="line"><p>90</p><div class="division"></div></div>
        <div id="sensor1-10" class="line"><p>100</p><div class="division"></div></div>
        <div id="sensor1Etcolor" class="etvalue">
        <div class="kt"></div>
        </div>
        <span><p id="sensor1Val" class="sensor1">0</p></span>
    </div>
    <div id="sensor2" class="value">
        <div id="sensor2-0" class="line"><p>0</p><div class="division"></div></div>
        <div id="sensor2-1" class="line"><p>10</p><div class="division"></div></div>
        <div id="sensor2-2" class="line"><p>20</p><div class="division"></div></div>
        <div id="sensor2-3" class="line"><p>30</p><div class="division"></div></div>
        <div id="sensor2-4" class="line"><p>40</p><div class="division"></div></div>
        <div id="sensor2-5" class="line"><p>50</p><div class="division"></div></div>
        <div id="sensor2-6" class="line"><p>60</p><div class="division"></div></div>
        <div id="sensor2-7" class="line"><p>70</p><div class="division"></div></div>
        <div id="sensor2-8" class="line"><p>80</p><div class="division"></div></div>
        <div id="sensor2-9" class="line"><p>90</p><div class="division"></div></div>
        <div id="sensor2-10" class="line"><p>100</p><div class="division"></div></div>
        <div id="sensor2Etcolor" class="etvalue">
        <div class="kt"></div>
        </div>
        <span><p id="sensor2Val" class="sensor2">0</p></span>
    </div>
    `
    document.querySelector('#bodybox').innerHTML = body
    listenData(moduleName,'sensor1','Humidity')
}
// var params = new URLSearchParams(window.location.search);
// var value = params.get('value');
// document.getElementById('show').textContent = value;



// function listenData(name,path1,id1,ishigh1,path2,id2,ishigh2) {
//     var cShow1 = document.getElementById('sensor1').id = name+'1'
//     var cShow2 = document.getElementById('sensor2').id = name+'2'
//     var Etcolor1 = document.getElementById("sensor1Etcolor").id = name+"Et"
//     var Etcolor2 = document.getElementById("sensor1Etcolor").name+"Et"
//     var textval1 = document.getElementById("sensor1textval").id = name+'textval1'
//     var textval2 = document.getElementById("sensor1textval").id = name+'textval2'
//     var textvalstyle1 = document.getElementById("sensor1Val").id = name+'St1'
//     var textvalstyle2 = document.getElementById("sensor1Val").id = name+'St2'
    
//     var dataRealtime1 = firebase.database().ref("IOT/"+path1);
//     dataRealtime1.on(('value'), (value) => {
//         let data1 = value.val()

        
//         ShowdataSensor(data1,id1,ishigh1,cShow1,Etcolor1,textval1,textvalstyle1)
//     })
//     var dataRealtime2 = firebase.database().ref("IOT/"+path2);
//     dataRealtime2.on('value', (value)=> {
//         let data2 = value.val();
//         ShowdataSensor(data2,id2,ishigh2,cShow2,Etcolor2,textval2,textvalstyle2)
//     })
// }


//-------------------------------------------------------------------------------->
// function ShowdataSensor(value,id,ishigh,cid1,cid2,cid3,cid4) {
//     // var cShow = document.getElementById(id)
//     // var Etcolor = document.getElementById(id+"Etcolor")
//     // var textval = document.querySelector("."+id)
//     // var textvalstyle = document.getElementById(id+"Val")
//     // vColor(value,id,ishigh)
//     if(value<100)
//     {
//         cid1.style.setProperty('--rotateafter',`rotate(${-45+value*1.8}deg)`)
//         // vColor(value,id,ishigh)
//         cid3.innerHTML = value
//         cid4.style.color="blue";
//         cid2.style.setProperty("--borderEtvalue",`#fff #fff #246BCE #246BCE`)
//     }
//     else
//     {
//         cid1.style.setProperty('--rotateafter','rotate(134deg)')
//         // vColor(value,id,ishigh)
//         cid3.innerHTML = ">100!!";
//         cid4.style.color="#ff0000";
//         cid2.style.setProperty("--borderEtvalue",`#fff #fff red red`)
//     }
// }
























































//-------------------------------------------------------------->

// function vColor (value,id,ishigh) {
//     var cShow = document.getElementById(id)
//     let valdk = value/10;
//     if(id=='sensor1')
//     for(var i=0; i<11 ;i++)
//         {
//             if(valdk<ishigh)
//             {   
//                 // if(i<valdk)
//                 // {
//                 //     x[i].style.color=vcolor 
//                 //     cShow.style.setProperty('--afterboxcolor',`white white #00a516 #00a516`)
//                 // }
//                 // else
//                 // for(var j = valdk+1;j<11;j++)
//                 // {
//                 //     x[j].style.color=vcolorLow 
//                 //     cShow.style.setProperty('--afterboxcolor',`white white #00a516 #00a516`)
//                 // }
                
//             }
//         else
//             {   
//                 // for(var j = 0;j<ishigh ; j++)
//                 // x[j].style.color=vcolor
//                 // i = ishigh
//                 // x[i].style.color=vcolorhigh
//                 // cShow.style.setProperty('--afterboxcolor',`white white #ff1111 #ff1111`)
//             }
//         }
//     else
//     for(var i=11; i <=(value/10 +11) ;i++)
//     {
//         if((value/10)<(ishigh))
//         {
//             x[i].style.color=vcolor 
//             cShow.style.setProperty('--afterboxcolor',`white white #00a516 #00a516`)
//         }
//         else
//         {
//             x[i].style.color=vcolorhigh
//             cShow.style.setProperty('--afterboxcolor',`white white #ff1111 #ff1111`)
//         }
//     }
// }


/**/ 
// realtime path1,,,ishigh2


