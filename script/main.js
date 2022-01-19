import { Controller } from "./controller.js";
import { ModelRequestOnServer } from "./model.js";
import { Render } from "./viem.js";
import { Observer} from "./observer.js";

function init() {
    let data;
    let modelRequestOnServer = new ModelRequestOnServer('https://restcountries.com/v3.1/all/');
    let promise = modelRequestOnServer.request();
    let render = new Render;
    let observer= new Observer;
    promise.then(
        result => {
            data = result;
            let controller = new Controller(data);
            //document.getElementById('output').innerHTML = render.createBlock(controller.searchRegionAndName('All', ''));
            render.createBlockNew(controller.searchRegionAndName('All', ''),document.getElementById('output'),()=>render.addCountryInfo(controller.getCountriInfo(observer.changes(event.target.textContent)),document.getElementById('countryInfo')));
            // document.getElementById('region').addEventListener('click', ()=>document.getElementById('output').innerHTML = render.createBlock(controller.searchRegionAndName(document.forms.regions.elements.region.value, document.getElementById('search').value)));
            // document.getElementById('search').addEventListener('input', () =>document.getElementById('output').innerHTML = render.createBlock(controller.searchRegionAndName(document.forms.regions.elements.region.value, document.getElementById('search').value)));
            document.getElementById('region').addEventListener('click', ()=>render.createBlockNew(controller.searchRegionAndName(document.forms.regions.elements.region.value, document.getElementById('search').value),document.getElementById('output'),()=>render.addCountryInfo(controller.getCountriInfo(observer.changes(event.target.textContent)),document.getElementById('countryInfo'))));
            document.getElementById('search').addEventListener('input', ()=>render.createBlockNew(controller.searchRegionAndName(document.forms.regions.elements.region.value, document.getElementById('search').value),document.getElementById('output'),()=>render.addCountryInfo(controller.getCountriInfo(observer.changes(event.target.textContent)),document.getElementById('countryInfo'))));
        },
        error => alert(error)
    );
};


init();