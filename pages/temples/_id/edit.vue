<template>

    <div class="container">
        <nuxt-link to="/temple" class="btn btn-success btn-lg">戻る</nuxt-link>
        <button class="btn btn-danger btn-lg" @click="deleteTemple($route.params.id)">削除</button>

        <hr>

        <form @submit.prevent="update" class="flex">

        <div>Date</div>
        <div>
            <select v-model="data.year" class="form-control my-1" name="year" style="width: 100px; float: left;">
                <option></option>
                <option v-for="ye in years" :key="ye.id">{{ ye }}</option>
            </select>
            <select v-model="data.month" class="form-control my-1" name="month" style="width: 100px;; float: left;">
                <option></option>
                <option v-for="mo in months" :key="mo.id">{{ mo.toString().padStart(2, "0") }}</option>
            </select>
            <select v-model="data.day" class="form-control my-1" name="day" style="width: 100px;; float: left;">
                <option></option>
                <option v-for="da in days" :key="da.id">{{ da.toString().padStart(2, "0") }}</option>
            </select>
            <br style="clear: both;">
        </div>

        <div>Temple</div>
        <div><input type="text" name="temple" class="form-control my-1" :value="data.temple"></div>

        <div>Memo</div>
        <div>
            <textarea class="form-control my-1" name="memo">{{ data.memo }}</textarea>
        </div>

        <div>Address</div>
        <div><input type="text" name="address" class="form-control my-1" :value="data.address"></div>

        <div>Station</div>
        <div><input type="text" name="station" class="form-control my-1" :value="data.station"></div>

        <input type="submit" value="update" class="btn btn-primary btn-lg">
        </form>

        <br><br><br><br>
    </div>
</template>

<script>
import axios from 'axios'

const y = (new Date()).getFullYear() - 2014 + 1

export default {

    layout: 'outer',

    data: function() {
         return {
            years: [...Array(y)].map((_, i) => 2014+i ),
            months: [...Array(12)].map((_, i) => ++i ),
            days: [...Array(31)].map((_, i) => ++i ),
        }
    },

    async asyncData ({ params }) {
        const { data } = await axios.get(`${process.env.baseUrl}/api/temple/${params.id}`)
        return {
            data
        }
    }

    ,
    methods: {
        deleteTemple: async function(id) {
            await axios.delete(`${process.env.baseUrl}/api/temple/${id}`)
            location.href = "/temple";
        }

        ,
        update: async function(event){
            const { data } = await axios.patch(`${process.env.baseUrl}/api/temple/${this.$route.params.id}`, 
            {
                year: event.target.year.value,

                month: event.target.month.value.padStart(2, "0"),
                day: event.target.day.value.padStart(2, "0"),

                temple: event.target.temple.value,
                memo: event.target.memo.value,
                address: event.target.address.value,
                station: event.target.station.value
            })
            location.href = "/temple";
        }
    }
}
</script>

<style>

</style>
