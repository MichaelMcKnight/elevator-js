const btns = document.getElementById('buttons').getElementsByTagName('button');
const floors = document.getElementsByClassName('floor');
const elevatorShaft = document.getElementById('shaft');
let currentFloor;
let currentFloorNum;
currentFloorNum = 1;

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        let destination = parseInt(btns[i].innerText);
        for (let x = 0; x < floors.length; x++) {
            if (btns[i].innerText == floors[x].innerText) {
                if (currentFloorNum < destination) {
                    $('#direction').text('Going Up!');
                } else {
                    $('#direction').text('Going Down!');
                }
                currentFloor = floors[x];
                currentFloorNum = parseInt(currentFloor.innerText);
                let currentFloorBottom = $(currentFloor).position().top + $(currentFloor).outerHeight(true);
                elevatorShaft.style = 'top:'+ currentFloorBottom +'px;';
            }
        }
    });
}