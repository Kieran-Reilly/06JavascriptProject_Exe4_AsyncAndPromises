import {Main} from "./index.js";

export class ResourcesManager{

    /**
     * Responsible for the fetching of data and hands it back to the caller
     * @param {sting} fileName - A string referencing the file nme holding the data to be retrieved
     * @returns {Promise<string>} fetchedData - a promise is returned containing the requested data
     */
    async fetchResource(fileName){
        let fetchedData = await fetch(fileName)
            .then((result) => result.text())
            .then((data) => {
                return data
            });
        return fetchedData;
    }

    /**
     * Responsible for taking in data and constructing a template literal
     * @param {array} data - ana array of retrieved string values
     * @returns {string} outputText - a complete formatted string literal is returned
     */
    constructTemplateLiteral(data){
        console.log("Data retrieved");
        let outputText = ``;
        for (let i = 0; i < data.length; i++) {
            outputText = `${outputText}\n${data[i]}`;
        }
        return outputText;
    }

}

