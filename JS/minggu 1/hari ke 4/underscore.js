const _ = require("underscore")
            let goal  = [
            {
                "nama" : "jule",
                "nim" : "00000",
                "umur" : 20,
                "id":"1"
            },
            {
                "nama" : "jol",
                "nim" : "11111",
                "umur" : 19,
                "id":"2"
            },
            {
                "nama" : "jul",
                "nim" : "22222",
                "umur" : 21,
                "id":"3"
            },
        ]
        console.log(_.first(goal));


//memakai function _.first() , jadi data yang keluar adalah data yg paling awal 
