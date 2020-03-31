import {ViewModel} from "../src/view-model.js";

let instance;

beforeEach(() => {
    instance = new ViewModel();
});

afterEach(() => {
    instance.dispose();
});

test("my-class - constructed", () => {
    expect(instance).not.toBeNull();
});