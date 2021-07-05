const readXlsxFile = require('read-excel-file/node');

// home
module.exports.home = (req, res)=>{
    res.send("Hello, welcome!");
}

// get all records with biaised data
module.exports.getAll = (req, res)=>{
    readXlsxFile('./files/data.xlsx').then((rows)=>{
        // implement the algorithm

        res.send(rows[5]);
    })
    
}

// get records by province
module.exports.getByProvince = (req, res)=>{
    const province = req.params.province;
    console.log('provincia:', province);
    readXlsxFile('./files/data.xlsx').then((rows) =>{
        console.log(rows[4][0]);
        res.send(`${rows[4].length}`);
    })
}

// get records by district
module.exports.getByDistrict = (req, res)=>{
    const district = req.params.district;
    console.log('distrito:', district);
    readXlsxFile('./files/data.xlsx').then((rows) =>{
        console.log(rows[4][0]);
        res.send(`${rows[4].length}`);
    })
}

