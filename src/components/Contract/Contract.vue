<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <template v-for="n in steps">
        <v-stepper-step
            :complete="e1 > n"
            :key="`${n}-step`"
            :step="n"
            editable
        >
          Step {{ n }}
        </v-stepper-step>

        <v-divider
            v-if="n !== steps"
            :key="n"
        ></v-divider>
      </template>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content
          v-for="n in steps"
          :key="`${n}-content`"
          :step="n"
      >
        <v-card
            color="grey lighten-1"
        >
          <ContractType
              v-if="n === 1"
              @can-continue="proceed"
              @contract-type="contract_type"
          ></ContractType>
          <ContractPartner
              v-if="n === 2"
              :users="users"
              :userDetails="userDetails"
              @user-details="user_details"
              @user-drivers="user_drivers"
              @can-continue="proceed"
          ></ContractPartner>
          <ContractCars
              v-if="n === 3"
              @car-details="car_details"
              :carDetails="carDetails"
          ></ContractCars>
          <ContractObject
              v-if="n === 4"
              @car-details="car_details"
              :carDetails="carDetails"
          ></ContractObject>

        </v-card>
      </v-stepper-content>
      <div class="ma-3 overflow-hidden">
        <div class="left">
          <v-btn v-if="e1 !== 1"
          @click="backStep"
          >Back
          </v-btn>
        </div>
        <div class="right">
          <v-btn
          color="primary"
          @click="nextStep"
          v-if="e1 !== 4"
          :disabled="!canContinue"
          >
            Next
          </v-btn>
        </div>
      </div>

    </v-stepper-items>
  </v-stepper>
</template>

<script>
  /* eslint-disable */
  import ContractCars from './ContractCars'
  import ContractObject from './ContractObject'
  import ContractPartner from './ContractPartner'
  import ContractType from './ContractType'

  export default {
    components: {
      ContractCars,
      ContractObject,
      ContractPartner,
      ContractType
    },
    data () {
      return {
        e1: 1,
        steps: 4,
        canContinue: false,
        carDetails: null,
        userDetails: null,
        userDrivers: null,
        contractType: '',
        users: [
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

      }
    },
    watch: {
      e1 () {
        console.log(this.e1, this.contractType, this.userDetails)
        if (this.e1 === 1 && !this.contractType) {
          console.log('step1 = false')
          this.canContinue = false
        } else if (this.e1 === 2 && !this.userDetails) {
          console.log('step2 = false')
          this.canContinue = false
        } else {
          console.log('stepElse = true')
          this.canContinue = true
        }
      }
    },
    methods: {
      nextStep () {
        this.e1 = this.e1 + 1
      },
      backStep () {
        this.e1 = this.e1 - 1
      },
      proceed (payload) {
        this.canContinue = payload.value
      },
      user_details (payload) {
        this.userDetails = payload
      },
      user_drivers (payload) {
        this.userDrivers = payload
      },
      car_details (payload) {
        this.carDetails = payload
      },
      contract_type (payload) {
        this.contractType = payload
      }
    },
    created () {
      console.log(this.users)
    }
  }
</script>
