function sharePrice() {
  class calculatePrice extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();

      // Create a shadow root
      var shadow = this.attachShadow({ mode: "open" });

      //current share price
      var currPrice = 184419;

      //Number Of Shares
      var numShare;

      //Parent container
      var parentContainer = document.createElement("div");
      parentContainer.setAttribute("class", "parentcontainer");

      //Shareprice container
      var sharePrceTxt = document.createElement("span");
      sharePrceTxt.setAttribute("class", "shareprcetxt");
      sharePrceTxt.innerHTML =
        "Capitec Share Price <b>R" +
        currPrice +
        "</b>.<br/><br/> Input The Amount Of Money You're Willing To Spend.";

      //create Input
      var inputVal = document.createElement("input");
      inputVal.setAttribute("type", "text");
      inputVal.setAttribute("value", "0");
      inputVal.setAttribute("class", "inputval");

      //Sum of shares
      var sumShare = document.createElement("span");
      sumShare.setAttribute("class", "sumshare");
      sumShare.innerHTML =
        " You Will Get  <b>" + 0 + "</b> Shares  For That Amount Of Money ";

      //create Button
      var shareBut = document.createElement("Button");
      shareBut.setAttribute("class", "sharebut");
      shareBut.innerHTML = "Check";
      shareBut.addEventListener("click", function (e) {
        sumShare.innerHTML =
          " You Will Get  <b>" +
          inputVal.value / currPrice +
          "</b> Shares For That Amount Of Money ";
      });

      // Create some CSS to apply to the shadow dom
      var style = document.createElement("style");

      style.textContent =
        ".wrapper {" +
        "position: relative;" +
        "}" +
        "body {" +
        "margin: 0px ;" +
        "padding: 0px;" +
        "}" +
        ".info {" +
        "font-size: 0.8rem;" +
        "width: 200px;" +
        "display: inline-block;" +
        "border: 1px solid black;" +
        "padding: 10px;" +
        "background: white;" +
        "border-radius: 10px;" +
        "opacity: 1;" +
        "transition: 0.6s all;" +
        "position: absolute;" +
        "bottom: 20px;" +
        "left: 10px;" +
        "z-index: 3;" +
        "}" +
        "img {" +
        "width: 1.2rem" +
        "}" +
        ".parentcontainer {" +
        "font-size: 16px;" +
        "display: block;" +
        "background-color: #f5f5f5;" +
        "padding: 10px 10px;" +
        "border-radius: 10px;" +
        "font-family: Arial, Helvetica, sans-serif;" +
        "box-shadow: 0 2px 3px rgb(0 0 0 / 30%);" +
        "line-height: 25px;" +
        "width: 250px;" +
        "height: auto;" +
        "float: left;" +
        "clear: both;" +
        "}" +
        ".parentcontainer b{" +
        "font-size: 20px;" +
        "}" +
        ".shareprcetxt {" +
        "display: block;" +
        "padding: 5px 0px;" +
        "padding: 10px 0px;" +
        "width: 100%;" +
        "height: auto;" +
        "float: left;" +
        "clear: both;" +
        "}" +
        ".sharebut {" +
        "display: block;" +
        "padding: 5px 0px;" +
        "margin: 10px auto;" +
        "width: 50%;" +
        "height: auto;" +
        "float: none;" +
        "background-color: #e63934;" +
        "border: solid 1px #e63934;" +
        "color: #fff;" +
        "font-size: 19px;" +
        "clear: both;" +
        "}" +
        ".inputval {" +
        "display: block;" +
        "padding: 10px 5%;" +
        "width: 90%;" +
        "height: auto;" +
        "float: left;" +
        "font-size: 20px;" +
        "border: none;" +
        "clear: both;" +
        "margin-bottom: 15px;" +
        "}" +
        ".sumshare {" +
        "display: block;" +
        "padding: 5px 0px;" +
        "width: 100%;" +
        "height: auto;" +
        "float: left;" +
        "clear: both;" +
        "}" +
        ".icon:hover + .info, .icon:focus + .info {" +
        "opacity: 1;" +
        "}";

      // attach the created elements to the shadow dom
      shadow.appendChild(style);
      shadow.appendChild(parentContainer);
      parentContainer.appendChild(sharePrceTxt);
      parentContainer.appendChild(inputVal);
      parentContainer.appendChild(shareBut);
      parentContainer.appendChild(sumShare);
    }
  }

  // Define the new element
  customElements.define("calculate-share", calculatePrice);
}

sharePrice();
