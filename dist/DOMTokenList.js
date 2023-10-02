/*! @maps4html/web-map-custom-element 01-10-2023 */

export default class DOMTokenList{#element;#valueSet;#attribute;#domain;constructor(t,e,i,s){var o=document.createElement("div");this.domtokenlist=o.classList,this.#valueSet=!1,this.domtokenlist.value=t??"",this.#element=e,this.#attribute=i,this.#domain=s}get valueSet(){return this.#valueSet}get length(){return this.domtokenlist.length}get value(){return this.domtokenlist.value}set value(t){null===t?this.domtokenlist.value="":(this.domtokenlist.value=t.toLowerCase(),this.#valueSet=!0,this.#element.setAttribute(this.#attribute,this.domtokenlist.value),this.#valueSet=!1)}item(t){return this.domtokenlist.item(t)}contains(t){return this.domtokenlist.contains(t)}add(t){this.domtokenlist.add(t),this.#element.setAttribute(this.#attribute,this.domtokenlist.value)}remove(t){this.domtokenlist.remove(t),this.#element.setAttribute(this.#attribute,this.domtokenlist.value)}replace(t,e){this.domtokenlist.replace(t,e),this.#element.setAttribute(this.#attribute,this.domtokenlist.value)}supports(t){return!!this.#domain.includes(t)}toggle(t,e){this.domtokenlist.toggle(t,e),this.#element.setAttribute(this.#attribute,this.domtokenlist.value)}entries(){return this.domtokenlist.entries()}forEach(t,e){this.domtokenlist.forEach(t,e)}keys(){return this.domtokenlist.keys()}values(){return this.domtokenlist.values()}}
//# sourceMappingURL=DOMTokenList.js.map