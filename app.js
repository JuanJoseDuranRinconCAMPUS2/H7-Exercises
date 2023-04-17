// class padre{
//     #nacionalidad
//     constructor({color = "rojo"}){
//         this.color = color;
//     }
//     setNacionalidad(nacionalidad){
//         console.log("padre");
//         this.#nacionalidad = nacionalidad;
//         return this.#nacionalidad;
//     }
// }

// class hijo extends padre{
//     #nacionalidad
//     constructor({color = "dorado"}){
//         super({color});
//     }
    
// }

import "./components/myMenu.js";

import { myMenu } from "./components/myMenu.js";
    
customElements.define("my-h7", myMenu);