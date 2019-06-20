const airports = [{
  Name: 'Port Bouet Airport',
  City: 'Abidjan',
  Country: 'Cote d\'Ivoire',
  'IATA 3': 'ABJ',
  Latitute: '5.261390209',
  Longitude: '-3.926290035'
},
{
  Name: 'Brussels Airport',
  City: 'Brussels',
  Country: 'Belgium',
  'IATA 3': 'BRU',
  Latitute: '50.90140152',
  Longitude: '4.48443985'
},
{
  Name: 'Ouagadougou Airport',
  City: 'Ouagadougou',
  Country: 'Burkina Faso',
  'IATA 3': 'OUA',
  Latitute: '12.35319996',
  Longitude: '-1.512420058'
},
{
  Name: 'Addis Ababa Bole International Airport',
  City: 'Addis Ababa',
  Country: 'Ethiopia',
  'IATA 3': 'ADD',
  Latitute: '8.977890015',
  Longitude: '38.79930115'
},
{
  Name: 'King Abdulaziz International Airport',
  City: 'Jeddah',
  Country: 'Saudi Arabia',
  'IATA 3': 'JED',
  Latitute: '21.6796',
  Longitude: '39.156502'
},
{
  Name: 'Amsterdam Airport Schiphol',
  City: 'Amsterdam',
  Country: 'Netherlands',
  'IATA 3': 'AMS',
  Latitute: '52.30860138',
  Longitude: '4.76388979'
},
{
  Name: 'Copenhagen Kastrup Airport',
  City: 'Copenhagen',
  Country: 'Denmark',
  'IATA 3': 'CPH',
  Latitute: '55.61790085',
  Longitude: '12.65600014'
},
{
  Name: 'V.C. Bird International Airport',
  City: 'Antigua',
  Country: 'Antigua and Barbuda',
  'IATA 3': 'ANU',
  Latitute: '17.1367',
  Longitude: '-61.792702'
},
{
  Name: 'Lester B. Pearson International Airport',
  City: 'Toronto',
  Country: 'Canada',
  'IATA 3': 'YYZ',
  Latitute: '43.67720032',
  Longitude: '-79.63059998'
},
{
  Name: 'Hartsfield Jackson Atlanta International Airport',
  City: 'Atlanta',
  Country: 'United States',
  'IATA 3': 'ATL',
  Latitute: '33.63669968',
  Longitude: '-84.42810059'
},
{
  Name: 'Denver International Airport',
  City: 'Denver',
  Country: 'United States',
  'IATA 3': 'DEN',
  Latitute: '39.86169815',
  Longitude: '-104.6729965'
},
{
  Name: 'Suvarnabhumi Airport',
  City: 'Bangkok',
  Country: 'Thailand',
  'IATA 3': 'BKK',
  Latitute: '13.68109989',
  Longitude: '100.7470016'
},
{
  Name: 'Nanning Wuxu Airport',
  City: 'Nanning',
  Country: 'China',
  'IATA 3': 'NNG',
  Latitute: '22.60829926',
  Longitude: '108.1719971'
},
{
  Name: 'Jieyang Chaoshan International Airport',
  City: 'Shantou',
  Country: 'China',
  'IATA 3': 'SWA',
  Latitute: '23.552',
  Longitude: '116.5033'
},
{
  Name: 'Wuhan Tianhe International Airport',
  City: 'Wuhan',
  Country: 'China',
  'IATA 3': 'WUH',
  Latitute: '30.78380013',
  Longitude: '114.2080002'
},
{
  Name: 'Xiamen Gaoqi International Airport',
  City: 'Xiamen',
  Country: 'China',
  'IATA 3': 'XMN',
  Latitute: '24.54400063',
  Longitude: '118.1279984'
},
{
  Name: 'Brisbane International Airport',
  City: 'Brisbane',
  Country: 'Australia',
  'IATA 3': 'BNE',
  Latitute: '-27.38419914',
  Longitude: '153.1170044'
},
{
  Name: 'Guangzhou Baiyun International Airport',
  City: 'Guangzhou',
  Country: 'China',
  'IATA 3': 'CAN',
  Latitute: '23.39240074',
  Longitude: '113.2990036'
},
{
  Name: 'Kunming Changshui International Airport',
  City: 'Kunming',
  Country: 'China',
  'IATA 3': 'KMG',
  Latitute: '25.1019444',
  Longitude: '102.9291667'
},
{
  Name: 'Xingyi Airport',
  City: 'Xingyi',
  Country: 'China',
  'IATA 3': 'ACX',
  Latitute: '25.08638889',
  Longitude: '104.9594444'
},
{
  Name: 'Auckland International Airport',
  City: 'Auckland',
  Country: 'New Zealand',
  'IATA 3': 'AKL',
  Latitute: '-37.0080986',
  Longitude: '174.7920074'
},
{
  Name: 'Çanakkale Airport',
  City: 'Canakkale',
  Country: 'Turkey',
  'IATA 3': 'CKZ',
  Latitute: '40.13769913',
  Longitude: '26.42679977'
},
{
  Name: 'Esenboğa International Airport',
  City: 'Ankara',
  Country: 'Turkey',
  'IATA 3': 'ESB',
  Latitute: '40.12810135',
  Longitude: '32.99509811'
},
{
  Name: 'Bandaranaike International Colombo Airport',
  City: 'Colombo',
  Country: 'Sri Lanka',
  'IATA 3': 'CMB',
  Latitute: '7.180759907',
  Longitude: '79.88410187'
},
{
  Name: 'Malé International Airport',
  City: 'Male',
  Country: 'Maldives',
  'IATA 3': 'MLE',
  Latitute: '4.191830158',
  Longitude: '73.52909851'
},
{
  Name: 'Mohammed V International Airport',
  City: 'Casablanca',
  Country: 'Morocco',
  'IATA 3': 'CMN',
  Latitute: '33.36750031',
  Longitude: '-7.589970112'
},
{
  Name: 'Atatürk International Airport',
  City: 'Istanbul',
  Country: 'Turkey',
  'IATA 3': 'IST',
  Latitute: '40.97689819',
  Longitude: '28.81459999'
},
{
  Name: 'Mihail Kogălniceanu International Airport',
  City: 'Constanta',
  Country: 'Romania',
  'IATA 3': 'CND',
  Latitute: '44.36220169',
  Longitude: '28.48830032'
},
{
  Name: 'Jesús Terán Paredo International Airport',
  City: 'Aguascalientes',
  Country: 'Mexico',
  'IATA 3': 'AGU',
  Latitute: '21.705601',
  Longitude: '-102.318001'
},
{
  Name: 'George Bush Intercontinental Houston Airport',
  City: 'Houston',
  Country: 'United States',
  'IATA 3': 'IAH',
  Latitute: '29.9843998',
  Longitude: '-95.34140015'
},
{
  Name: 'Alliance Municipal Airport',
  City: 'Alliance',
  Country: 'United States',
  'IATA 3': 'AIA',
  Latitute: '42.05319977',
  Longitude: '-102.8040009'
},
{
  Name: 'Chadron Municipal Airport',
  City: 'Chadron',
  Country: 'United States',
  'IATA 3': 'CDR',
  Latitute: '42.83760071',
  Longitude: '-103.0950012'
},
{
  Name: 'Los Angeles International Airport',
  City: 'Los Angeles',
  Country: 'United States',
  'IATA 3': 'LAX',
  Latitute: '33.94250107',
  Longitude: '-118.4079971'
},
{
  Name: 'San Francisco International Airport',
  City: 'San Francisco',
  Country: 'United States',
  'IATA 3': 'SFO',
  Latitute: '37.61899948',
  Longitude: '-122.375'
},
{
  Name: 'Almaty Airport',
  City: 'Alma-ata',
  Country: 'Kazakhstan',
  'IATA 3': 'ALA',
  Latitute: '43.35210037',
  Longitude: '77.04049683'
},
{
  Name: 'Astana International Airport',
  City: 'Tselinograd',
  Country: 'Kazakhstan',
  'IATA 3': 'TSE',
  Latitute: '51.02220154',
  Longitude: '71.46690369'
},
{
  Name: 'Nashville International Airport',
  City: 'Nashville',
  Country: 'United States',
  'IATA 3': 'BNA',
  Latitute: '36.12450027',
  Longitude: '-86.67819977'
},
{
  Name: 'Detroit Metropolitan Wayne County Airport',
  City: 'Detroit',
  Country: 'United States',
  'IATA 3': 'DTW',
  Latitute: '42.21239853',
  Longitude: '-83.35340118'
},
{
  Name: 'Northwest Florida Beaches International Airport',
  City: 'Panama City',
  Country: 'United States',
  'IATA 3': 'ECP',
  Latitute: '30.357106',
  Longitude: '-85.795414'
},
{
  Name: 'Newark Liberty International Airport',
  City: 'Newark',
  Country: 'United States',
  'IATA 3': 'EWR',
  Latitute: '40.69250107',
  Longitude: '-74.16870117'
},
{
  Name: 'Fort Lauderdale Hollywood International Airport',
  City: 'Fort Lauderdale',
  Country: 'United States',
  'IATA 3': 'FLL',
  Latitute: '26.07259941',
  Longitude: '-80.15270233'
},
{
  Name: 'Greenville Spartanburg International Airport',
  City: 'Greenville',
  Country: 'United States',
  'IATA 3': 'GSP',
  Latitute: '34.89569855',
  Longitude: '-82.21890259'
},
{
  Name: 'Montreal / Pierre Elliott Trudeau International Airport',
  City: 'Montreal',
  Country: 'Canada',
  'IATA 3': 'YUL',
  Latitute: '45.47060013',
  Longitude: '-73.74079895'
},
{
  Name: 'Cancún International Airport',
  City: 'Cancun',
  Country: 'Mexico',
  'IATA 3': 'CUN',
  Latitute: '21.03650093',
  Longitude: '-86.87709808'
},
{
  Name: 'Dallas Fort Worth International Airport',
  City: 'Dallas-Fort Worth',
  Country: 'United States',
  'IATA 3': 'DFW',
  Latitute: '32.89680099',
  Longitude: '-97.03800201'
},
{
  Name: 'John F Kennedy International Airport',
  City: 'New York',
  Country: 'United States',
  'IATA 3': 'JFK',
  Latitute: '40.63980103',
  Longitude: '-73.77890015'
}]

let routes = JSON.parse(`[
    {
        "Airline Id": "AC",
        "Origin": "ABJ",
        "Destination": "BRU"
      },
      {
        "Airline Id": "AC",
        "Origin": "ABJ",
        "Destination": "OUA"
      },
      {
        "Airline Id": "AC",
        "Origin": "ADD",
        "Destination": "JED"
      },
      {
        "Airline Id": "AC",
        "Origin": "BRU",
        "Destination": "BKU"
      },
      {
        "Airline Id": "AC",
        "Origin": "ANU",
        "Destination": "YYZ"
      },
      {
        "Airline Id": "AC",
        "Origin": "ATL",
        "Destination": "DEN"
      },
      {
        "Airline Id": "CZ",
        "Origin": "BKK",
        "Destination": "NNG"
      },
      {
        "Airline Id": "CZ",
        "Origin": "BKK",
        "Destination": "SWA"
      },
      {
        "Airline Id": "CZ",
        "Origin": "BKK",
        "Destination": "WUH"
      },
      {
        "Airline Id": "CZ",
        "Origin": "BRU",
        "Destination": "XMN"
      },
      {
        "Airline Id": "CZ",
        "Origin": "BNE",
        "Destination": "CAN"
      },
      {
        "Airline Id": "CZ",
        "Origin": "BSD",
        "Destination": "KMG"
      },
      {
        "Airline Id": "CZ",
        "Origin": "CAN",
        "Destination": "ACX"
      },
      {
        "Airline Id": "CZ",
        "Origin": "CAN",
        "Destination": "AKL"
      },
      {
        "Airline Id": "TK",
        "Origin": "CKZ",
        "Destination": "ESB"
      },
      {
        "Airline Id": "TK",
        "Origin": "CMB",
        "Destination": "MLE"
      },
      {
        "Airline Id": "TK",
        "Origin": "CMN",
        "Destination": "IST"
      },
      {
        "Airline Id": "TK",
        "Origin": "CND",
        "Destination": "IST"
      },
      {
        "Airline Id": "UA",
        "Origin": "AGU",
        "Destination": "IAH"
      },
      {
        "Airline Id": "UA",
        "Origin": "AIA",
        "Destination": "CDR"
      },
      {
        "Airline Id": "UA",
        "Origin": "AKL",
        "Destination": "LAX"
      },
      {
        "Airline Id": "UA",
        "Origin": "AKL",
        "Destination": "SFO"
      },
      {
        "Airline Id": "UA",
        "Origin": "ALA",
        "Destination": "TSE"
      },

      {
        "Airline Id": "WN",
        "Origin": "OUA",
        "Destination": "DTW"
      },
      {
        "Airline Id": "WN",
        "Origin": "BNA",
        "Destination": "ECP"
      },
      {
        "Airline Id": "WN",
        "Origin": "BNA",
        "Destination": "EWR"
      },
      {
        "Airline Id": "WN",
        "Origin": "BNA",
        "Destination": "FLL"
      },
      {
        "Airline Id": "WN",
        "Origin": "BNA",
        "Destination": "GSP"
      },
    {
      "Airline Id": "WS",
      "Origin": "YUL",
      "Destination": "CUN"
    },
    {
      "Airline Id": "WS",
      "Origin": "BRU",
      "Destination": "DFW"
    },
    {
      "Airline Id": "WS",
      "Origin": "YUL",
      "Destination": "FLL"
    },
    {
      "Airline Id": "WS",
      "Origin": "YUL",
      "Destination": "JFK"
    }
    
]`)



const airlines = {
  CA : {
    Name: 'Air China',
    '2 Digit Code': 'CA',
    '3 Digit Code': 'CCA',
    Country: 'China'
  },
  CZ: {
    Name: 'China Southern Airlines',
    '2 Digit Code': 'CZ',
    '3 Digit Code': 'CSN',
    Country: 'China'
  },
  WN : {
    Name: 'Southwest Airlines',
    '2 Digit Code': 'WN',
    '3 Digit Code': 'SWA',
    Country: 'United States'
  },
  TK : {
    Name: 'Turkish Airlines',
    '2 Digit Code': 'TK',
    '3 Digit Code': 'THY',
    Country: 'Turkey'
  },
  UA : {
    Name: 'United Airlines',
    '2 Digit Code': 'UA',
    '3 Digit Code': 'UAL',
    Country: 'United States'
  },
  WS : {
    Name: 'WestJet',
    '2 Digit Code': 'WS',
    '3 Digit Code': 'WJA',
    Country: 'Canada'
  }
}

module.exports = { airports, routes, airlines }