let data;
import { getRegion } from "./controller.js";
import { model } from "./model.js";
let promise=model();
promise.then(
    result=>{
        data=result;
        document.getElementById('region').addEventListener('click', ()=>getRegion(data,document.forms.regions.elements.region.value,document.getElementById('search').value));
        document.getElementById('search').addEventListener('input', ()=>getRegion(data,document.forms.regions.elements.region.value,document.getElementById('search').value));
    },
    error=>alert(error)
)

