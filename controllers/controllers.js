const readXlsxFile = require('read-excel-file/node');
const path = require('path');
const fs = require('fs');
const { filterDuplicates } = require('./logicDuplicates');
const { filterUnreliable } = require('./logicUnreliable');

// home
module.exports.home = (req, res)=>{
    res.render('index');
}

// get all records with biaised data
module.exports.getAll = (req, res)=>{
    res.render('index');
}

// get all unreliable names by district
module.exports.getUnreliableNames = (rows, res)=>{
    readXlsxFile('./data/cpy2.xlsx').then((rows)=>{
        const farmersData = filterUnreliable(rows);
        res.render('unreliableNames',  { farmersData })
    })  
}

// get all repeated names by district
module.exports.getRepeatedNames = (req, res)=>{
    readXlsxFile('./data/test.xlsx').then((rows)=>{
        const farmersData = filterDuplicates(rows, 'distrito');
        res.render('repeatedNames',  { farmersData })
    })  
}

module.exports.getRepeatedCD = (req, res) => {
    readXlsxFile('./data/cpy3.xlsx').then((rows)=>{
        const farmersData = filterDuplicates(rows, 'distrito');
        res.render('repeatedNames',  { farmersData })
    })  
}
module.exports.getRepeatedNpl = (req, res) => {
    readXlsxFile('./data/cpy2.xlsx').then((rows)=>{
        const farmersData = filterDuplicates(rows, 'distrito');
        res.render('repeatedNames',  { farmersData })
    })  
}
module.exports.getRepeatedZbz = (req, res) => {
    readXlsxFile('./data/cpy1.xlsx').then((rows)=>{
        const farmersData = filterDuplicates(rows, 'distrito');
        res.render('repeatedNames',  { farmersData })
    })  
}

module.exports.getUnreliableCD = (req, res) => {
    readXlsxFile('./data/cpy3.xlsx').then((rows)=>{
        const farmersData = filterUnreliable(rows, 'distrito');
        res.render('unreliableNames',  { farmersData })
    })  
}

module.exports.getUnreliableNpl = (req, res) => {
    readXlsxFile('./data/cpy2.xlsx').then((rows)=>{
        const farmersData = filterUnreliable(rows, 'distrito');
        res.render('unreliableNames',  { farmersData })
    })  
}

module.exports.getUnreliableZbz = (req, res) => {
    readXlsxFile('./data/cpy1.xlsx').then((rows)=>{
        const farmersData = filterUnreliable(rows, 'distrito');
        res.render('unreliableNames',  { farmersData })
    })  
}

// post filter parameters
module.exports.postForFiltering = (req, res) =>{
    if (req.body.parameter1 === "cabo-delgado" && req.body.parameter2 === "nomes-repetidos"){
        res.redirect('/cd-repetidos');
    }
    else if (req.body.parameter1 === "cabo-delgado" && req.body.parameter2 === "nomes-duvidosos"){
        res.redirect('/cd-duvidosos');
    }
    else if (req.body.parameter1 === "nampula" && req.body.parameter2 === "nomes-repetidos") {
        res.redirect('/npl-repetidos');
    }
    else if (req.body.parameter1 === "nampula" && req.body.parameter2 === "nomes-duvidosos") {
        res.redirect('/npl-duvidosos');
    }
    else if (req.body.parameter1 === "zambezia" && req.body.parameter2 === "nomes-repetidos") {
        res.redirect('/zbz-repetidos');
    }
    else if (req.body.parameter1 === "zambezia" && req.body.parameter2 === "nomes-duvidosos") {
        res.redirect('/zbz-duvidosos');
    }
    else {
        res.redirect('/alert');
    }    
}

// post filter parameters
module.exports.getAlert = (req, res) =>{
    res.render('alert');   
}
