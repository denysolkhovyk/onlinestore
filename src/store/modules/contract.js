
export default {
  state: {
    cars: [
      {
        'name': 'Porsche',
        'model': '911',
        'klasse': 'Sportwagen',
        'body_style': 'Cabriolet',
        'dealer_info': {
          'dealer_name': 'Karl Fiat',
          'dealer_street': 'Autoweg 19',
          'dealer_plz': '12345',
          'dealer_city': 'München'
        },
        'location_info': {
          'location_name': 'Harry Potter',
          'location_street': 'Bonnerstrasse 246',
          'location_plz': '50968',
          'location_city': 'Köln'
        }
      },
      {
        'name': 'Nissan',
        'model': 'GT-R',
        'klasse': 'Sportwagen',
        'body_style': 'Coupe',
        'dealer_info': {
          'dealer_name': 'Karl Fiat',
          'dealer_street': 'Autoweg 19',
          'dealer_plz': '12345',
          'dealer_city': 'München'
        },
        'location_info': {
          'location_name': 'Harry Potter',
          'location_street': 'Bonnerstrasse 246',
          'location_plz': '50968',
          'location_city': 'Köln'
        }
      },
      {
        'name': 'BMW',
        'model': 'M3',
        'klasse': 'Mittelklasse',
        'body_style': 'Limousine',
        'dealer_info': {
          'dealer_name': 'Karl Fiat',
          'dealer_street': 'Autoweg 19',
          'dealer_plz': '12345',
          'dealer_city': 'München'
        },
        'location_info': {
          'location_name': 'Harry Potter',
          'location_street': 'Bonnerstrasse 246',
          'location_plz': '50968',
          'location_city': 'Köln'
        }
      },
      {
        'name': 'Audi',
        'model': 'S5',
        'klasse': 'Mittelklasse',
        'body_style': 'Kombilimousine',
        'dealer_info': {
          'dealer_name': 'Karl Fiat',
          'dealer_street': 'Autoweg 19',
          'dealer_plz': '12345',
          'dealer_city': 'München'
        },
        'location_info': {
          'location_name': 'Harry Potter',
          'location_street': 'Bonnerstrasse 246',
          'location_plz': '50968',
          'location_city': 'Köln'
        }
      },
      {
        'name': 'Audi',
        'model': 'TT',
        'klasse': 'Sportwagen',
        'body_style': 'Roadster',
        'dealer_info': {
          'dealer_name': 'Karl Fiat',
          'dealer_street': 'Autoweg 19',
          'dealer_plz': '12345',
          'dealer_city': 'München'
        },
        'location_info': {
          'location_name': 'Harry Potter',
          'location_street': 'Bonnerstrasse 246',
          'location_plz': '50968',
          'location_city': 'Köln'
        }
      }
    ],
    contractPartner: [
      {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Denys_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Denys_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Denys_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 1,
        'name': 'Denys',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 1',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Lahcen_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Lahcen_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Lahcen_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 2,
        'name': 'Lahcen',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 2',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Sebastian_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Sebastian_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Sebastian_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 3,
        'name': 'Sebastian',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 3',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Colin_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Colin_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Colin_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 4,
        'name': 'Colin',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 4',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Thorsten_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Thorsten_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Thorsten_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 5,
        'name': 'Thorsten',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 5',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Artur_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Artur_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Artur_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 6,
        'name': 'Artur',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 6',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Ute_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Ute_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Ute_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 7,
        'name': 'Ute',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 7',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Tobi_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Tobi_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Tobi_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 8,
        'name': 'Tobi',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 8',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Colin_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Colin_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Colin_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 9,
        'name': 'Colin',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 9',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Colin_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Colin_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Colin_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 10,
        'name': 'Colin',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 10',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Colin_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Colin_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Colin_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 11,
        'name': 'Colin',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 11',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Colin_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Colin_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Colin_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 12,
        'name': 'Colin',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 12',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Colin_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Colin_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Colin_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 13,
        'name': 'Colin',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 13',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Colin_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Colin_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Colin_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 14,
        'name': 'Colin',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 14',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Colin_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Colin_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Colin_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 15,
        'name': 'Colin',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 15',
        'telefonnummer': '+491741234567'
      }, {
        'adressAdditional': 'Gebäude 1A',
        'bank': 'Commerzbank',
        'drivers': [{
          'driver_id': 1,
          'driver_name': 'driver_Colin_1'
        }, {
          'driver_id': 2,
          'driver_name': 'driver_Colin_2'
        }, {
          'driver_id': 3,
          'driver_name': 'driver_Colin_3'
        }],
        'email': 'test@test.com',
        'iban': 'DE123456789',
        'id': 16,
        'name': 'Colin',
        'plz': '50968',
        'sity': 'Köln',
        'street': 'Muster 16',
        'telefonnummer': '+491741234567'
      }
    ]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    cars (state) {
      return state.cars
    },
    contractPartner (state) {
      return state.contractPartner
    },
    contractPartnerById (state) {
      return partnerById => {
        return state.contractPartner.find(partner => partner.id === partnerById)
      }
    }
  }
}
