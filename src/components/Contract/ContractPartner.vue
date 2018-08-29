<template>
  <v-container fluid v-if="!show_details">
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
        :pagination.sync="pagination"
        hide-actions
        :loading="loading"
        class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <tr @click="showDetails(props.item)">
          <td>{{ props.item.name }}</td>
        </tr>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :total-visible="5" :length="20"></v-pagination>
    </div>
  </v-container>
  <v-container v-else>
    <v-tabs
        v-model="active"
        slider-color="primary"
    >
      <v-tab
          v-for="tab in tabsDetails"
          :key="tab.name"
          ripple
      >
        {{ tab.name }}

      </v-tab>
      <v-tab-item
          :key="1"
      >
        <v-card flat>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <v-flex xs12>
                    <h3>Kontakt</h3>
                  </v-flex>
                  <v-text-field
                      :value="userDetails.name"
                      readonly
                  ></v-text-field>
                  <v-text-field
                      :value="userDetails.street"
                      readonly
                  ></v-text-field>
                  <v-text-field
                      :value="userDetails.adressAdditional"
                      readonly
                  ></v-text-field>
                  <v-layout row>
                    <v-flex xs3>
                      <v-text-field
                          :value="userDetails.plz"
                          readonly
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs9>
                      <v-text-field
                          :value="userDetails.sity"
                          readonly
                      ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-text-field
                      :value="userDetails.telefonnummer"
                      readonly
                  ></v-text-field>
                  <v-text-field
                      :value="userDetails.email"
                      readonly
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-flex xs12 sm6>
                    <h3>Bankverbindung</h3>
                  </v-flex>
                  <v-text-field
                      :value="userDetails.bank"
                      readonly
                  ></v-text-field>
                  <v-text-field
                      :value="userDetails.iban"
                      readonly
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item
          :key="2"
      >
        <v-card flat>
          <v-card-text>
            <v-container
                fluid
                grid-list-xl
            >
              <v-layout
                  align-center
                  wrap
              >
                <v-flex xs12 sm6>
                  <v-select
                      v-model="userDrivers"
                      :items="drivers"
                      chips
                      label="Fahrer"
                      multiple
                  ></v-select>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <v-layout class="justify-center mt-3">
      <v-btn
          color="primary"
          @click="backToUserList"
      >
        Zurück zu Kundenliste
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  /* eslint-disable */

  export default {
    props: ['userDetails'],
    data () {
      return {
        active: null,
        headers: [
          {
            text: 'Name',
            value: 'name'
          }
        ],
        pagination: {
          page: 1,
          visible: 7
        },
        show_details: false,
        search: '',
        selected: [],
        tabsDetails: [
          {name: 'Kunde'},
          {name: 'Fahrer'}
        ],
        userDrivers: []
      }
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) {
          return 0
        }
        console.log(this.pagination)
        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      },
      drivers () {
        let drivers = []
        this.userDetails.drivers.forEach(driver => {
          drivers.push(driver.driver_name)
        })
        return drivers
      },
      users () {
        return this.$store.getters.contractPartner
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      showDetails (detail) {
        this.show_details = true
        this.$emit('user-details', detail)
        this.$emit('can-continue', {value: true})
      },
      backToUserList () {
        this.show_details = false
        this.$emit('user-details', null)
        this.$emit('can-continue', {value: false})
      }
    },
    created () {
      console.log(this.pagination.totalItems, this.pagination.rowsPerPage)
      console.log(Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage))
    },
    watch: {
      userDrivers () {
        console.log(this.userDrivers)
        this.$emit('user-drivers', this.userDrivers)
      }
    },
  }
</script>

