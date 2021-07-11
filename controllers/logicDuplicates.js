

// get all duplicates by district 
module.exports.filterDuplicates = (rows, category) =>{
    let duplicatesMap = new Map();
  //  if (category === "distrito") {
    items = rows.slice(2, ).map(row =>{
        const farmerName = row[0].toUpperCase().trim();
        if (duplicatesMap.has(farmerName) && duplicatesMap.get(farmerName).district === row[3]) {
            duplicatesMap.get(farmerName).counter += 1;
        }
        else if (duplicatesMap.has(farmerName) && duplicatesMap.get(farmerName).district !== row[3]){
            const district = duplicatesMap.get(farmerName).district;

            for (let [key, value] of duplicatesMap.entries()) {
                if (key === farmerName && value.district === row[3]) {
                    value.counter += 1;
                 //   console.log(`row: ${row[3]} and counter: ${duplicatesMap.get(farmerName).counter}`)
                }
            }
           
            // duplicatesMap.get(farmerName).counter += 1;
        }
        else {
            duplicatesMap.set(farmerName, {counter: 1, district: row[3].trim(), province: row[4]});
        }
        return row[3];
    });
  //  }
    /** 
    else if (category === "provincia") {
        items = rows.slice(2, ).map(row =>{
            const farmerName = row[0].toUpperCase();
            if (duplicatesMap.has(farmerName) && duplicatesMap.get(farmerName).district == row[3]) {
                duplicatesMap.get(farmerName).counter += 1;
            }
            else {
                duplicatesMap.set(farmerName, {counter: 1, district: row[3], province: row[4]});
            }
            return row[3];
        });
    }
    */
    return byDistrict(duplicatesMap);
}


// filterByDistrict
const byDistrict = (duplicatesMap) =>{
    const byDistrictMap = new Map();
    for (let [key, value] of duplicatesMap) {
        if (byDistrictMap.has(value.district)){
            byDistrictMap.get(value.district).push({
                name: key,
                ...value
            });
        }
        else {
            const farmer = {
                name: key,
                ...value,
            }
            byDistrictMap.set(value.district, new Array(farmer));
        }   
    }

    const filteredByDistrict = []
    Array.from(byDistrictMap).forEach((district)=>{
        const filtered = district[1].filter((farmer) => farmer.counter >= 2);
        filteredByDistrict.push({
            district : district[0],
            farmers: filtered.sort((farmer1, farmer2) => (farmer2.counter > farmer1.counter) ? 1 : ((farmer1.counter > farmer2.counter) ? -1 : 0)),
        })
    })
    return filteredByDistrict;
}

