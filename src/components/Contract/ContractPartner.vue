<template>
  <v-container fluid v-if="!show_details">
    <v-card-title>
      Nutrition
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
        class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <tr @click="showDetails(props.item)">
          <td>{{ props.item.name }}</td>
        </tr>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
  </v-container>
  <v-container v-else>
    <v-tabs
        v-model="active"
        slider-color="yellow"
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
                  <v-text-field
                      :value="userDetails.name"
                      readonly
                  ></v-text-field>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-text-field
                      :value="userDetails.name"
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
          <v-card-text>{{ 2 }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
  /* eslint-disable */

  export default {
    props: ['users', 'userDetails'],
    data () {
      return {
        search: '',
        pagination: {},
        selected: [],
        headers: [
          {
            text: 'Name',
            value: 'name'
          }
        ],
        tabsDetails: [
          {name: 'Kunde'},
          {name: 'Fahrer'}
        ],
        show_details: false,
        active: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) {
          return 0
        }

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    methods: {
      showDetails (detail) {
        this.show_details = true
        this.$emit('user-details', detail)
      }
    },
    /*    watch: {
          user_details: {
            handler: function () {
              console.log(this.user_details)
              let vm = this
              if (vm.user_details !== null) {
                console.log(vm.user_details.drivers)
                vm.driversOptions = []
                vm.selectedDriver = []
                vm.user_details.drivers.forEach(function (driver) {
                  let obj = {
                    name: driver.driver_name,
                    code: driver.driver_id
                  }
                  vm.driversOptions.push(obj)
                })
                this.$emit('user-details', this.user_details)
                this.$emit('can-continue', {value: true})
              } else {
                this.selectedDriver = []
                this.$emit('can-continue', {value: false})
              }
            },
            deep: true
          }
        },
        methods: {
          addTag(newTag) {
            const tag = {
              name: newTag,
              code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.driversOptions.push(tag)
            this.selectedDriver.push(tag)
          },
          closeUser() {
            this.hideShowUser = false,
              this.user_details = null
          },
          onFiltered(filteredItems) {
            this.totalRows = filteredItems.length
            this.currentPage = 1
          },
          newUserShow() {
            this.hideShowUser = true
          },
          saveNewUser() {
            this.hideShowUser = false
          },
          showDetail(details) {
            this.user_details = details
            this.hideShowUser = true
          },
          toggleUser(payload) {
            this.hideShowUser = payload
            this.user_details = null
          }
        },*/
    created () {
      console.log(this.users)
    }
  }
</script>

<style scoped>
  .closeUser {
    cursor: pointer;
    position: absolute;
    right: 15px;
    text-transform: uppercase;
    top: 15px;
  }
</style>

