import {ResourcesManager} from "../resources-manager.js";

/**
 * Handles the interaction between data and the UI (i.e. view)
 */
export class ViewModel{
    constructor() {
        let _fetchButtonHandler = document.getElementById("fetchText");
        let _InitiateFetch = this.initiateFetch.bind(this);
        _fetchButtonHandler.addEventListener("click", _InitiateFetch);
    }

    dispose(){
        _fetchButtonHandler.removeEventListener("click", _InitiateFetch);
    }

    /**
     * Responsible for kicking off fetching the required data
     */
    initiateFetch(){
        console.log("Fetching Data");
        let resourceManager = new ResourcesManager();

        let results = resourceManager.fetchResource(['./documents/1_p.md', './documents/2_p.md', './documents/3_p.md']);

        results.then(fetchedData => resourceManager.constructTemplateLiteral(fetchedData))
            .then(outputText => this.writeToDOM(outputText))
    }

    /**
    * Responsible for taking the formatted output, and writing it to the DOM via a document fragment
     * @param {string} outputText - formatted template literal ready to be inserted into the DOM
     */
    async writeToDOM(outputText){
        let articleFragment = document.createDocumentFragment();
        let article = document.createElement("article");
        article.innerText = outputText;
        articleFragment.appendChild(article);
        document.getElementById("outputSections").appendChild(articleFragment);
        console.log("Writing Complete");
    }
}
