<template>
  <v-stepper v-if="stepper" v-model="e1">
    <v-stepper-header>
      <template v-for="(step, index) in steps">
        <v-stepper-step
            :complete="e1 > index+1"
            :key="`${index+1}-step`"
            :step="index + 1"
            :editable="e1 > index+1"
        >
          <v-icon>fas fa-file-signature</v-icon>
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
  <div v-else>
    <v-card>
      <v-container
          grid-list-md
      >
        <v-layout row wrap>
          <v-flex
              v-for="card in computedCards"
              v-bind="{ [`xs${card.flex}`]: true }"
              :key="card.title"
          >
            <v-card>
              <v-card-media
                  :src="card.src"
                  height="200px"
              >
                <v-container
                    fill-height
                    fluid
                    pa-2
                >
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline white--text" v-text="card.title"></span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>favorite</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>bookmark</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>share</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <div class="text-xs-center">
      <v-pagination
          v-model="currentPage"
          :length="cards.length/perPage"
          :click.prevent="clickPagination(currentPage)"
      ></v-pagination>
    </div>
  </div>
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
        contractType: '',
        stepper: true,
        currentPage: 2,
        perPage: 4,
        cards: [
          { title: 'Pre-fab homes 1', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
          { title: 'Favorite road trips 2', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
          { title: 'Best airlines 3', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
          { title: 'Pre-fab homes 4', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
          { title: 'Favorite road trips 5', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
          { title: 'Best airlines 6', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
          { title: 'Pre-fab homes 7', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
          { title: 'Favorite road trips 8', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
          { title: 'Best airlines 9', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
          { title: 'Pre-fab homes 10', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6 },
          { title: 'Favorite road trips 11', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
          { title: 'Best airlines 12', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 }
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
      },
      clickPagination (e) {
        console.log(e, this.offset, this.limit)
      }
    },
    computed: {
      offset() {
        return ((this.currentPage - 1) * this.perPage);
      },
      limit() {
        return (this.offset + this.perPage);
      },
      numOfPages() {
        return Math.ceil(this.cards.length / this.perPage);
      },
      computedCards() {
        if (this.offset > this.cards.length) {
          this.currentPage = this.numOfPages;
        }
        return this.cards.slice(this.offset, this.limit);
      }
    },
    created () {
      console.log(this.$vuetify)
    }
  }
</script>
