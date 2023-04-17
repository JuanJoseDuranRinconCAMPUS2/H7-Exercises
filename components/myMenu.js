export class myMenu extends HTMLElement{
    
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        
    }
    myBody = document.querySelector("#myBody");
    connectedCallback(){
        this.shadowRoot.innerHTML = /*html*/`
        <style rel="stylesheet">
        @import url("./components/myMenu.css");
        </style>
            <div class="h7">${this.texto()}</div>
            
        `;
    }
    texto(){
        return "Un h7 bien bonito"
    }
}


myBody.insertAdjacentHTML("afterBegin", `
<h1>Un h1 bien bonito</h1>
<h2>un h2 bien bonito</h2>
<h3>un h3 bien bonito</h3>
<h4>un h4 bien bonito</h4>
<h5>un h5 bien bonito</h5>
<h6>un h6 bien bonito</h6>
`)

