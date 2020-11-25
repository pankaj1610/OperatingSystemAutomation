var robot = require('robotjs')

setTimeout(startOpenBoard, 2000)
function startOpenBoard(){
    robot.moveMouseSmooth(53, 751)
    robot.mouseClick()
    robot.typeString("openboard")
    robot.keyTap("enter")
    robot.moveMouseSmooth(500, 500)
    setTimeout(writeHi, 2000)
}

function writeHi(){
    setTimeout(function(){
        robot.moveMouseSmooth(400, 250)
        robot.mouseToggle("down", "left")
        robot.dragMouse(400, 450)
        robot.mouseToggle("up", "left")
    
        robot.moveMouseSmooth(400, 350)
        robot.mouseToggle("down", "left")
        robot.dragMouse(600, 350)
        robot.mouseToggle("up", "left")
    
        robot.moveMouseSmooth(600, 250)
        robot.mouseToggle("down", "left")
        robot.dragMouse(600, 450)
        robot.mouseToggle("up", "left")
    
        robot.moveMouseSmooth(700, 250)
        robot.mouseToggle("down", "left")
        robot.dragMouse(900, 250)
        robot.mouseToggle("up", "left")
    
        robot.moveMouseSmooth(800, 250)
        robot.mouseToggle("down", "left")
        robot.dragMouse(800, 450)
        robot.mouseToggle("up", "left")
    
        robot.moveMouseSmooth(700, 450)
        robot.mouseToggle("down", "left")
        robot.dragMouse(900, 450)
        robot.mouseToggle("up", "left")
    
        robot.moveMouseSmooth(1248, 22)
        robot.mouseClick()
        robot.moveMouseSmooth(500, 500)
    }, 5000) 
     setTimeout(openTelegram, 5000)
    

}

function openTelegram(){
    robot.moveMouseSmooth(53, 751)
    robot.mouseClick()
    robot.typeString("telegram")
    robot.keyTap("enter")
    robot.moveMouseSmooth(500, 500)
    setTimeout(searchInTelegram, 4000)
}

function searchInTelegram(){
     robot.moveMouseSmooth(488, 73)
     robot.mouseClick()
     robot.typeString("pepcoding")
     robot.keyTap("enter")
     robot.typeString("Hello World")
     robot.keyTap("enter")
     robot.moveMouseSmooth(500, 500)
     setTimeout(openBrave, 4000)
}

function openBrave(){
    robot.moveMouseSmooth(53, 751)
    robot.mouseClick()
    robot.typeString("brave")
    robot.keyTap("enter")
    robot.moveMouseSmooth(500, 500)
    setTimeout(openTabs, 5000)
}

function openTabs(){
    robot.typeString("youtube.com")
    robot.keyTap("enter")
    robot.keyToggle("control", "down")
    robot.keyTap("t")
    robot.keyToggle("control", "up")
    robot.typeString("pepcoding.com")
    robot.keyTap("enter")
    robot.moveMouseSmooth(500, 500)
    setTimeout(openNotepad, 5000)
    
}

function openNotepad(){
    robot.moveMouseSmooth(53, 751)
    robot.mouseClick()
    robot.typeString("notepad")
    robot.keyTap("enter")
    robot.moveMouseSmooth(500, 500)
    setTimeout(writeOnNotepad, 3000)
}

function writeOnNotepad(){
    robot.typeString("System is ready to use.")

}