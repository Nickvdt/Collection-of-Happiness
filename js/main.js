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


class Leftpanel{
  constructor(){

  }
  render(){

  }
}
class Rightpanel{
  constructor(){

  }
  DetailCard() {
  }
  render(){
    
  }
}

class Main{
  constructor(){

  }
  render(){

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
  
  constructor() {
    this.header = new Header("body");
    this.header.render();


    this.footer = new Footer("body");
    this.footer.render();
    
  }
}

const app = new App();



