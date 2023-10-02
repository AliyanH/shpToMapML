/*! @maps4html/web-map-custom-element 01-10-2023 */

class ZoomInput{constructor(t,s,a,e,i,o){this.name=t,this.min=s,this.max=a,this.value=e,this.step=i,this.layer=o}validateInput(){return!!this.name}getValue(){return this.layer._map.options.mapEl.zoom}}export{ZoomInput};
//# sourceMappingURL=zoomInput.js.map