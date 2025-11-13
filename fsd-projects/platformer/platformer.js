$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   // toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform (200,610,200,29, "yellow");
  createPlatform (350,550,200,20, "pink");
  createPlatform (650,490,200,29,"orange");
  createPlatform (950,440,200,20, "purple");
  createPlatform (1190,390,200,29, "black"); 



    // TODO 3 - Create Collectables
  createCollectable ("steve",750,250);
  createCollectable ("grace",900,500);
  createCollectable ("max",2000,700);


    
    // TODO 4 - Create Cannons
  createCannon ("top",1000,600);
  createCannon ("right",2000,250);
  createCannon ("bottom",1000,800);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
