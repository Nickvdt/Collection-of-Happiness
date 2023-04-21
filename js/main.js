class GetData {
  url = "";
  data = null;

  constructor(newURL) {
    this.url = newURL;
  }

  async getData() {
    
    await fetch(this.url)
      .then(function (response) {
        return response.json();
      }).then((data) => {
        this.data = data;
      });
    return this.data;

    
  }

}

class Header {
  placeToRenderHeader;
  headerElement;
  figureElement;
  pElement;
  iElement;
  constructor(placeToRenderHeader) {

    this.placeToRenderHeader = document.getElementsByTagName(placeToRenderHeader)[0];
    this.headerElement = document.createElement("header");
    this.headerElement.classList = "header";

    this.figureElement = document.createElement("figure");
    this.figureElement.classList = "header__logo";


    this.iElement = document.createElement("i");
    this.iElement.classList = "fa-solid fa-microphone-lines";

    this.pElement = document.createElement("p");
    this.pElement.classList = "header__tekst";
    this.pElement.innerText = "Collection of Happiness";

  }
  render() {
    this.placeToRenderHeader.appendChild(this.headerElement);
    this.headerElement.appendChild(this.figureElement);
    this.figureElement.appendChild(this.iElement);
    this.figureElement.appendChild(this.pElement);

  }
}


class LeftPanel {
  mainElement;
  leftPanelElement;
  leftUlElement;

  constructor(mainElement) {
    this.mainElement = mainElement;

    this.leftPanelElement = document.createElement("section");
    this.leftPanelElement.classList = "collection__section  collection__section--left";

    this.leftUlElement = document.createElement("ul");
    this.leftUlElement.classList = "leftul";

    for (let i = 0; i < 4; i++) {
      const leftLiElement = document.createElement("li");
      leftLiElement.classList = "leftul__li";

      const dateElement = document.createElement("p");
      dateElement.classList = "leftul__li--datum";
      dateElement.innerText = "Datum";

      const titleElement = document.createElement("p");
      titleElement.classList = "leftul__li--titel";
      titleElement.innerText = "Titel";

      const imageElement = document.createElement("img");
      imageElement.classList = "leftul__li--img";
      imageElement.setAttribute("src", "img/IMG_0547_270_270_s_c1.webp");

      leftLiElement.appendChild(dateElement);
      leftLiElement.appendChild(titleElement);
      leftLiElement.appendChild(imageElement);

      this.leftUlElement.appendChild(leftLiElement);
    }
  }

  render() {
    this.mainElement.appendChild(this.leftPanelElement);
    this.leftPanelElement.appendChild(this.leftUlElement);
  }
}


class RightPanel{
  mainElement;
  rightPanelElement;
  rightUlElement;
  rightLiElement;
  dateElement;
  titleElement;
  imageElement;
  textElement;
  figureElement;
  downloadElement;
  sourceElement;
  

  constructor(mainElement){
    this.mainElement = mainElement;

    this.rightPanelElement = document.createElement("section");
    this.rightPanelElement.classList = "collection__section collection__section--right";

    this.rightUlElement = document.createElement("ul");
    this.rightUlElement.classList = "rightul";

    this.rightLiElement  = document.createElement("li");
    this.rightLiElement.classList = "rightul__li";

    this.rightLi2Element  = document.createElement("li");
    this.rightLi2Element.classList = "rightul__li";

    this.rightLi3Element = document.createElement("li");
    this.rightLi3Element.classList = "rightul__li";

    this.dateElement = document.createElement("p");
    this.dateElement.classList = "rightul__li--datum";
    this.dateElement.innerText = "Datum";

    this.titleElement = document.createElement("p");
    this.titleElement.classList = "rightul__li--titel";
    this.titleElement.innerText = "Titel";

    this.imageElement = document.createElement("img");
    this.imageElement.classList = "rightul__li--img";
    this.imageElement.setAttribute("src", "img/IMG_0547_270_270_s_c1.webp");

    this.textElement = document.createElement("p");
    this.textElement.classList = "rightul__li--tekst";
    this.textElement.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quia impedit, facilis magnam ratione in voluptas nam fuga nemo non natus, illum aperiam, quidem dolores minus consequatur aut perferendis blanditiis?"

    this.figureElement = document.createElement("figure");
    this.figureElement.classList = "rightul__li--figure";

    this.downloadElement = document.createElement("button");
    this.downloadElement.classList = "rightul__li--downloadButton";
    this.downloadElement.innerText = "Audio";

    this.sourceElement = document.createElement("a");
    this.sourceElement.classList = "rightul__li--source";
    this.sourceElement.innerText = "Source >"


  }
  DetailCard(data) {
  }
  render(){
    this.mainElement.appendChild(this.rightPanelElement);
    this.rightPanelElement.appendChild(this.rightUlElement);
    this.rightUlElement.appendChild(this.rightLiElement);
    this.rightLiElement.appendChild(this.dateElement);
    this.rightLiElement.appendChild(this.titleElement);
    this.rightLiElement.appendChild(this.imageElement);

    this.rightUlElement.appendChild(this.rightLi2Element);
    this.rightLi2Element.appendChild(this.textElement);

    this.rightUlElement.appendChild(this.rightLi3Element);
    this.rightLi3Element.appendChild(this.figureElement);

    this.figureElement.appendChild(this.downloadElement);
    this.figureElement.appendChild(this.sourceElement);
  }
}

class Main{
  placeToRenderMain;
  mainElement;
  leftPanel;
  rightPanel;
  constructor(placeToRenderMain){
    this.placeToRenderMain = document.getElementsByTagName(placeToRenderMain)[0];

    this.mainElement = document.createElement("main");
    this.mainElement.classList = "collection";
    this.leftPanel = new LeftPanel(this.mainElement);
    this.rightPanel = new RightPanel(this.mainElement);
    

  }
  render(){
    this.placeToRenderMain.appendChild(this.mainElement);
    this.leftPanel.render();
    this.rightPanel.render();
    
  }
}


class Footer {
  placeToRenderFooter;
  footerElement;
  footerH4Element;

  constructor(placeToRenderFooter) {
    this.placeToRenderFooter = document.getElementsByTagName(placeToRenderFooter)[0];
    this.footerElement = document.createElement("footer");
    this.footerElement.classList = "footer";
    this.footerH4Element = document.createElement("h4");
    this.footerH4Element.classList = "footer__h4";
    this.footerH4Element.innerText = "Gemaakt door Nick van der Tol SD2D Mediacollege";
  }

  render() {
    this.placeToRenderFooter.appendChild(this.footerElement);
    this.footerElement.appendChild(this.footerH4Element);
  }
}


class App {
  header;
  footer;
  main;
  getdata;
  
  constructor() {
    this.header = new Header("body");
    this.header.render();

    this.main = new Main("body")
    this.main.render();
    this.footer = new Footer("body");
    this.footer.render();

    this.getData = new GetData("./data/data.json");
    this.getData
    .getData().then((data) => {

    });


    
  }
}

const app = new App();



