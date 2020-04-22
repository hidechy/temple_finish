<template>

    <div class="container">
        <nuxt-link to="/temple" class="btn btn-success btn-lg">戻る</nuxt-link>

        <hr>

        <div class="row my-1">
          <div class="col-2 alert-primary p-1 border-bottom border-primary">Date</div>
          <div class="col-10 p-1 border-bottom border-primary">{{ data.year }}年{{ data.month }}月{{ data.day }}日</div>
        </div>
        <div class="row my-1">
          <div class="col-2 alert-primary p-1 border-bottom border-primary">Temple</div>
          <div class="col-10 p-1 border-bottom border-primary">{{ data.temple }}</div>
        </div>
        <div class="row my-1">
          <div class="col-2 alert-primary p-1 border-bottom border-primary">Memo</div>
          <div class="col-10 p-1 border-bottom border-primary">{{ data.memo }}</div>
        </div>
        <div class="row my-1">
          <div class="col-2 alert-primary p-1 border-bottom border-primary">Address</div>
          <div class="col-10 p-1 border-bottom border-primary">{{ data.address }}</div>
        </div>
        <div class="row my-1">
          <div class="col-2 alert-primary p-1 border-bottom border-primary">Station</div>
          <div class="col-10 p-1 border-bottom border-primary">{{ data.station }}</div>
        </div>

        <div class="my-2">
        <button class="btn btn-info" @click="call_photo(data.year, data.month, data.day)">写真を表示する</button>
        </div>

        <div class="row">
          <div v-for="photo in photos" :key="photo" class="col-3 p-1">
            <img :src="photo" class="img-fluid">
          </div>
        </div>

      <br><br><br><br>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    layout: 'outer',

    async asyncData ({ params }) {
        const { data } = await axios.get(`${process.env.baseUrl}/api/temple/${params.id}`)
        return {
            data,
            photos: []
        }
    }

    ,
    methods: {
        call_photo: async function(year, month, day){
          const {data} = await axios.get(`${process.env.baseUrl}/photo/Temple/${year}-${month}-${day}/output`)
          this.photos = data
        }
    }
}
</script>

<style>

</style>
