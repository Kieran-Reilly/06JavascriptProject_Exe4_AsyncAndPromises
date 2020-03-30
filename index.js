import {ResourcesManager} from "./resources-manager.js";

//Will need to fetch the data - async
//combine them to a template literal
//Write the results to the DOM - async

export class Main{
    constructor() {
        let fetchButton = document.getElementById("fetchText");
        fetchButton.addEventListener("click", this.initiateFetch);
    }

    deconstructor(){
        let fetchButton = document.getElementById("fetchText");
        fetchButton.removeEventListener("click", this.initiateFetch);
    }

    /**
     * Responsible for kicking off fetching the required data
     */
    initiateFetch(){
        console.log("Fetching Data");
        let resourceManager = new ResourcesManager();
        let file1 = './documents/1_p.md';
        let file2 = './documents/2_p.md';
        let file3 = './documents/3_p.md';

        let result1 = resourceManager.fetchResource(file1);
        let result2 = resourceManager.fetchResource(file2);
        let result3 = resourceManager.fetchResource(file3);

        Promise.all([result1, result2, result3])
            .then(results => {return results})
            .then(data => {
                let output = resourceManager.constructTemplateLiteral(data);
                return output;
            })
            .then(output => {
                console.log(output);
                document.getElementById("resultsParagraph").innerText = output;
            });
    }
}

new Main();
