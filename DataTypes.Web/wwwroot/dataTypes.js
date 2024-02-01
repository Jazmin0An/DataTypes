//función agregada de manera explicita
function onButtonClick(evt) {
    
    var b = evt.currentTarget
    //var buttonName = b.getAttribute("name")
    var classes = b.classList
    var isGreen = false 

    for (var i = 0; i < classes.length; i++) {
        var c = classes[i]

        if (c == "greenButton") {
            isGreen = true
            break;
        }
    }
    if (isGreen) {
        b.className = "btn redButton"
    } else {
        b.className = "btn greenButton"
    }
    var t = document.getElementById("sampleTable")
    var currentHtml = t.innerHTML
    t.innerHTML += "<tr><td>" + b.getAttribute("name") + "</td><td>" + moment(new Date()).format("DD-MM-YYYY HH:mm:ss") + "</tr></td>" 

    //alert("click on: " + buttonName)
    
  
}

//Ejemplo de obtención de datos por TAG
//var button = document.getElementsByTagName("button")[0]
//button.addEventListener("click", onButtonClick)

//Ejemplo de obtención de datos por ID
//var button = document.getElementById("button1")

//Ejemplo de obtención de datos por NAME
/*var button = document.getElementsByName("testButton")[0]*/

//Ejemplo de obtención de datos por CLASS
var buttons = document.getElementsByTagName("button")

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onButtonClick)
}
//debugger

(function () {

    document.getElementById("button1").addEventListener("click", function () {
        const toast = iqwerty.toast.toast('Hola mundo :)');
        //toast.hide();
    })

    var bv = new Bideo();
    bv.init({
        // Video element
        videoEl: document.querySelector('#background_video'),

        // Container element
        container: document.querySelector('body'),

        // Resize
        resize: true,

        // autoplay: false,


        // Array of objects containing the src and type
        // of different video formats to add
        src: [
            {
                src: '/lib/bideo/night.mp4',
                type: 'video/mp4'
            }
        ],

        // What to do once video loads (initial frame)
        onLoad: function () {
            document.querySelector('#video_cover').style.display = 'none';
        }
    });
}());

