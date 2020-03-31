import {ViewModel} from "./src/index.js";

/**
 * Handles data management
 */
export class ResourcesManager{

    /**
     * Responsible for the fetching of data and hands it back to the caller
     * @param {array} fileArray - an array containing the file paths to be fetched and extracted
     * @returns {Promise<[]>} fetchedDataArray - an array containing the strings of data from the fetched files
     */
    async fetchResource(fileArray){

        let fetchedDataArray = [];
        for (let i = 0; i < fileArray.length; i++) {
            await fetch(fileArray[i])
                .then(result => result.text())
                .then(data => {
                    fetchedDataArray.push(data);
                });
        }
        console.log("Data retrieved:", fetchedDataArray);
        return fetchedDataArray;
    }

    /**
     * Responsible for taking in data and constructing a template literal
     * @param {array} data - a string array that makes up the contents of the template literal
     * @returns {string} outputText - the constructed template literal ready to be inserted into the DOM
     */
    constructTemplateLiteral(data){
        let outputText = ``;
        for (let i = 0; i < data.length; i++) {
            outputText = `${outputText}\n${data[i]}`;
        }
        console.log("Template Literal constructed:", outputText);
        return outputText;
    }
}

