const betriebList = ["Swisscom", "ZKB",
    "UBS", "Migros", "UPC", "Coop"];

let clientList =
    [
        {
            "clientid": 101,
            "firstname": "Hans",
            "lastname": "Muster",
            "voll": false,
            "company": betriebList[3],
            "betrieb": {
                "firma": "Visana",
                "number": "006783",
                "art": "Halb Privat"
            }
            ,"letzt": {
                "last1": "21.01.2021",
                "last2": "13.11.2020",
                "last3": "08.08.2021"
            },"all": {
                "mail": "hans.muster@gmail.com",
                "nummer": "07915736467",
                "alter": "40"
            }
        },{
            "clientid": 102,
            "firstname": "Robin",
            "lastname": "Müller",
            "voll": true,
            "company": betriebList[0],
            "betrieb": {
                "firma": "Visana",
                "number": "256793076",
                "art": "Privat Versichert"
            },"letzt": {
                "last1": "21.12.2020",
                "last2": "18.08.2020",
                "last3": "04.04.2020"
            },"all": {
                "mail": "robin.mueller@icloud.com",
                "nummer": "0791567803",
                "alter": "21"
            }
        },{
            "clientid": 103,
            "firstname": "Simao",
            "lastname": "Duarte",
            "voll": true,
            "company": betriebList[4],
            "betrieb": {
                "firma": "Helvetia",
                "number": "45679345",
                "art": "Allgemein"
            },"letzt": {
                "last1": "11.02.2021",
                "last2": "19.06.2020",
                "last3": "03.02.2020"
            },"all": {
                "mail": "simao.duarte@gmx.de",
                "nummer": "0761567407",
                "alter": "19"
            }
        }
    ];
