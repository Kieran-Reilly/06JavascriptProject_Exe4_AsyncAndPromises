# 06 Javascript Project - Exercise 4

## Async/Await & Promises

## Introduction

Within this project I implemented asynchronous functions making use of Async/Await and Promises.
 
## Brief

Download three text files, combine their content and console log out the result. Need to ensure:
1. Async download the three text files using Fetch API.
2. Once all the files are downloaded combine them into a template literal
3. Write the result to the DOM so that the browser will render the downloaded content.

Exercising separation of concerns and have async functions that:
1. download the files and construct the result text
2. write the result text to the document

The three files should be downloaded at the same time.
The result should only be constructed once all the files have been downloaded.

## Further Implementation
I further made use of Document Fragments as well as using `<article>` & `<section>` tags