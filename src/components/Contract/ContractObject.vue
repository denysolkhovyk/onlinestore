<template>
  <v-container fluid>
    <table width="100%" class="text-xs-left">
      <thead>
      <tr>
        <th aria-colindex="1" class="">Article</th>
        <th aria-colindex="2" class="">Unit</th>
        <th aria-colindex="3" class="">Amount</th>
        <th aria-colindex="4" class="">Price</th>
        <th aria-colindex="5" class="">Total</th>
        <th aria-colindex="6" class="">Billed</th>
      </tr>
      </thead>
      <tr v-for="item in contractObjectList">
        <td>{{ item.article }}</td>
        <td>{{ item.unit }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.total }}</td>
        <td>{{ item.billed }}</td>
      </tr>
    </table>
  </v-container>
</template>

<script>
  /* eslint-disable */
  const contractObjectList = [
    {
      'article': 'Monatsmiete',
      'unit': 'Monat',
      'amount': 6,
      'price': '299,00',
      'total': '1794,00',
      'billed': '0'
    },
    {
      'article': 'Wintertaugliche Bereifung',
      'unit': 'Stück',
      'amount': 4,
      'price': '20',
      'total': '80',
      'billed': '0'
    },
    {
      'article': 'Überführung hin',
      'unit': 'Stück',
      'amount': 1,
      'price': '100',
      'total': '100',
      'billed': '0'
    }
  ]
  export default {
    data () {
      return {
        contractObjectList: contractObjectList,
        headers: [
          {
            text: 'Article',
            value: 'article'
          },
          {
            text: 'unit',
            value: 'unit'
          }
        ]
      }
    }
  }
</script>

