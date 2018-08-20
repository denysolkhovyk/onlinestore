<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <template v-for="(step, index) in steps">
        <v-stepper-step
            :complete="e1 > index+1"
            :key="`${index+1}-step`"
            :step="index + 1"
            editable
        >
          {{ step }}
        </v-stepper-step>

        <v-divider
            v-if="index +1 !== steps.length"
            :key="index +1"
        ></v-divider>
      </template>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content
          v-for="(step, index) in steps"
          :key="`${index+1}-content`"
          :step="index+1"
      >
        <v-card
            color="grey lighten-1"
        >
          <ContractType
              v-if="step === 'Vertragsart'"
              @can-continue="proceed"
              @contract-type="contract_type"
          ></ContractType>
          <ContractPartner
              v-if="step === 'Vertragsartpartner'"
              :userDetails="userDetails"
              @user-details="user_details"
              @user-drivers="user_drivers"
              @can-continue="proceed"
          ></ContractPartner>
          <ContractCars
              v-if="step === 'Fahrzeug'"
              @car-details="car_details"
              :carDetails="carDetails"
          ></ContractCars>
          <ContractObject
              v-if="step === 'Vertragsgegenstand'"
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
          v-if="e1 !== steps.length"
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
        steps: ['Vertragsart', 'Vertragsartpartner', 'Fahrzeug', 'Vertragsgegenstand', 'Zusammenfassung'],
        canContinue: false,
        carDetails: null,
        userDetails: null,
        userDrivers: null,
        contractType: ''
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
    }
  }
</script>
