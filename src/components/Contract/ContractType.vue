<template>
  <div>
    <v-card
        class="mb-5"
        color="grey lighten-1"
    >
      <template>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap class="contract-name">
            <v-flex xs6>
              <v-card
                  :class="{active: active_el === 'Neufahrzeug'}"
              >
                <v-card-text class="px-0" @click="clickContractName('Neufahrzeug')">
                  <h3 class="headline mb-1">Neufahrzeug</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card
                  :class="{active: active_el === 'Folgefahrzeug'}"
              >
                <v-card-text class="px-0" @click="clickContractName('Folgefahrzeug')">
                  <h3 class="headline mb-1">Folgefahrzeug</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card
                  :class="{active: active_el === 'Zusatzfarzeug'}"
              >
                <v-card-text class="px-0" @click="clickContractName('Zusatzfarzeug')">
                  <h3 class="headline mb-1">Zusatzfarzeug</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs6>
              <v-card
                  :class="{active: active_el === 'Überbrückungsfahrzeug'}"
              >
                <v-card-text class="px-0" @click="clickContractName('Überbrückungsfahrzeug')">
                  <h3 class="headline mb-1">Überbrückungsfahrzeug</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </template>

    </v-card>
  </div>
</template>

<script>
  export default {
    props: ['clickedNext'],
    data () {
      return {
        active_el: '',
        contractName: ''
      }
    },
    methods: {
      clickContractName (type) {
        console.log(type)
        this.active_el = type
        this.contractName = type
      }
    },
    watch: {
      contractName: function () {
        console.log(this.contractName)
        if (this.contractName === '') {
          this.$emit('can-continue', {value: false})
        } else {
          this.$emit('contract-name', this.contractName)
          this.$emit('can-continue', {value: true})
        }
      }
    },
    mounted () {
      if (this.contractName) {
        this.$emit('can-continue', {value: true})
      } else {
        this.$emit('can-continue', {value: false})
      }
    }
  }
</script>

<style scoped>
  .contract-name .v-card {
    cursor: pointer;
    border: 1px solid transparent;
  }

  .contract-name .v-card:hover {
    border: 1px solid blue;
  }

  .contract-name .v-card.active {
    border: 1px solid blue;
  }
</style>
