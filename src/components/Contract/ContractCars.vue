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
        :items="cars"
        :search="search"
        :pagination.sync="pagination"
        hide-actions
    >
      <template slot="items" slot-scope="props">
        <tr @click="showDetails(props.item)">
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.model }}</td>
        </tr>
      </template>
    </v-data-table>
    <div class="text-xs-center pt-2">
      <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
    </div>
  </v-container>
  <v-container v-else grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <v-flex xs12>
          <h3>Fahrzeug</h3>
        </v-flex>
        <v-text-field
            :value="carDetails.name"
            readonly
        ></v-text-field>
        <v-text-field
            :value="carDetails.model"
            readonly
        ></v-text-field>
        <v-text-field
            :value="carDetails.klasse"
            readonly
        ></v-text-field>
        <v-text-field
            :value="carDetails.body_style"
            readonly
        ></v-text-field>
      </v-flex>

      <v-flex xs12 sm4>
        <v-flex xs12 sm6>
          <h3>Bankverbindung</h3>
        </v-flex>
        <v-text-field
            :value="carDetails.dealer_info.dealer_name"
            readonly
        ></v-text-field>
        <v-text-field
            :value="carDetails.dealer_info.dealer_street"
            readonly
        ></v-text-field>
        <v-layout xs12 row>
          <v-flex xs3>
            <v-text-field
                :value="carDetails.dealer_info.dealer_plz"
                readonly
            ></v-text-field>
          </v-flex>
          <v-flex xs9>
            <v-text-field
                :value="carDetails.dealer_info.dealer_city"
                readonly
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 sm4>
        <v-flex xs12 sm6>
          <h3>Bankverbindung</h3>
        </v-flex>
        <v-text-field
            :value="carDetails.location_info.location_name"
            readonly
        ></v-text-field>
        <v-text-field
            :value="carDetails.location_info.location_street"
            readonly
        ></v-text-field>
        <v-layout row>
          <v-flex xs3>
            <v-text-field
                :value="carDetails.location_info.location_plz"
                readonly
            ></v-text-field>
          </v-flex>
          <v-flex xs9>
            <v-text-field
                :value="carDetails.location_info.location_city"
                readonly
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  /* eslint-disable */
  const cars = [
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
  ]
  export default {
    props: ['users', 'userDetails', 'carDetails'],
    data () {
      return {
        active: null,
        cars: cars,
        headers: [
          {
            text: 'Auto',
            value: 'name'
          },
          {
            text: 'Model',
            value: 'model'
          }
        ],
        pagination: {
          page: 1
        },
        show_details: false,
        search: ''

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
        console.log(detail)
        this.show_details = true
        this.$emit('car-details', detail)
        this.$emit('can-continue', {value: true})
      },
      backToUserList () {
        this.show_details = false
        this.$emit('car-details', null)
        this.$emit('can-continue', {value: false})
      }
    },
    watch: {

    }
  }
</script>

