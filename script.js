let toggleMenuStatus = false;
let getMenu = document.querySelector(".toggle-menu");
let getMenuUl = document.querySelector(".toggle-menu ul");
let getMenuLi = document.querySelectorAll(".toggle-menu li");

let toggleMenu = function () {
  let menuBtn = document.querySelector(".color-toggle-btn");

  if (toggleMenuStatus === false) {
    getMenu.style.width = "200px";
    getMenuUl.style.visibility = "visible";

    let arrayLength = getMenuLi.length;
    for (let i = 0; i < arrayLength; i++) {
      getMenuLi[i].style.opacity = "1";
    }
    toggleMenuStatus = true;
    //   } else if (toggleMenuStatus === true) {
    //     getMenu.style.width = "60px";

    //     let arrayLength = getMenuLi.length;
    //     for (let i = 0; i < arrayLength; i++) {
    //       getMenuLi[i].style.opacity = "0";
    //     }

    //     getMenuUl.style.visibility = "hidden";

    //     toggleMenuStatus = false;

    let changeBackgroundDefault = function () {
      const changeColorGrey = document.getElementById("home-btn");
      changeColorGrey.addEventListener("click", function () {
        document.body.style.backgroundColor = "lightslategray";
        document.title = "Colour Toggle";
        getMenuUl.style.visibility = "hidden";
        toggleMenuStatus = false;
      });
    };
    changeBackgroundDefault();

    let changeBackgroundGreen = function () {
      const changeColorGreen = document.getElementById("green-btn");
      changeColorGreen.addEventListener("click", function () {
        document.body.style.backgroundColor = "greenyellow";
        document.title = "Your colour is green.";
        getMenuUl.style.visibility = "hidden";
        toggleMenuStatus = false;
      });
    };
    changeBackgroundGreen();

    let changeBackgroundBlue = function () {
      const changeColorBlue = document.getElementById("blue-btn");
      changeColorBlue.addEventListener("click", function () {
        document.body.style.backgroundColor = "lightskyblue";
        document.title = "Your colour is blue.";
        getMenuUl.style.visibility = "hidden";
        toggleMenuStatus = false;
      });
    };
    changeBackgroundBlue();

    let changeBackgroundBeige = function () {
      const changeColorBeige = document.getElementById("beige-btn");
      changeColorBeige.addEventListener("click", function () {
        document.body.style.backgroundColor = "beige";
        document.title = "Your colour is beige.";
        getMenuUl.style.visibility = "hidden";
        toggleMenuStatus = false;
      });
    };
    changeBackgroundBeige();

    let changeBackgroundCoral = function () {
      const changeColorCoral = document.getElementById("coral-btn");
      changeColorCoral.addEventListener("click", function () {
        document.body.style.backgroundColor = "coral";
        document.title = "Your colour is coral.";
        getMenuUl.style.visibility = "hidden";
        toggleMenuStatus = false;
      });
    };
    changeBackgroundCoral();
  }
};

// let mouseOut = function () {
//   if (toggleMenuStatus === true) {
//     getMenu.style.width = "60px";
//     let arrayLength = getMenuLi.length;
//     for (let i = 0; i < arrayLength; i++) {
//       getMenuLi[i].style.opacity = "0";
//     }

//     getMenuUl.style.visibility = "hidden";

//     toggleMenuStatus = false;
//   }
// };
