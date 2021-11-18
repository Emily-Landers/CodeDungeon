function change() {
    let hotbod = document.getElementById("hotbod");
    let btn = document.getElementById("startButton");
  
    if (btn.value == "Enter the Dungeon") {
      canMove = true;
      btn.value = "Exit the Dungeon";
    } else {
      stop();
    }
  }
  
  function stop() {
    let hotbod = document.getElementById("hotbod");
    let btn = document.getElementById("startButton");
    if (btn.value == "Exit the Dungeon") {
      btn.value = "Enter the Dungeon";
      hotbod.style.overflow = "auto";
    } else btn.value == "Enter the Dungeon";
  
    hotbod.style.overflow = "hidden";
    canMove = false;
  }