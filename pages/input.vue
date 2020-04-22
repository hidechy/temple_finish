<template>
    <div class="container">

        <nuxt-link to="/temple" class="btn btn-success btn-lg">戻る</nuxt-link>

        <hr>

        <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>

        <form @submit.prevent="input" class="flex">

        <div>Date</div>
        <div>
            <select class="form-control my-1" name="year" style="width: 100px; float: left;">
                <option></option>
                <option v-for="ye in years" :key="ye.id">{{ ye }}</option>
            </select>
            <select class="form-control my-1" name="month" style="width: 100px;; float: left;">
                <option></option>
                <option v-for="mo in months" :key="mo.id">{{ mo }}</option>
            </select>
            <select class="form-control my-1" name="day" style="width: 100px;; float: left;">
                <option></option>
                <option v-for="da in days" :key="da.id">{{ da }}</option>
            </select>
            <br style="clear: both;">
        </div>

        <div>Temple</div>
        <div><input type="text" name="temple" class="form-control my-1"></div>

        <div>Memo</div>
        <div>
        <textarea class="form-control my-1" name="memo"></textarea>
        </div>

        <div>Address</div>
        <div><input type="text" name="address" class="form-control my-1"></div>

        <div>Station</div>
        <div><input type="text" name="station" class="form-control my-1"></div>

        <input type="submit" value="input" class="btn btn-primary btn-lg">
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { checkDate, required } from '../plugins/validation'

const y = (new Date()).getFullYear() - 2014 + 1

export default {
    data: function() {
            return {
            years: [...Array(y)].map((_, i) => 2014+i ),
            months: [...Array(12)].map((_, i) => ++i ),
            days: [...Array(31)].map((_, i) => ++i ),
            errors: []
        }
    },

    methods: {
        async input(event){

            //-----------------// validation
            this.errors = []

            if (!checkDate(event.target.year.value, event.target.month.value, event.target.day.value)){
                this.errors.push('日付が正しくありません。')
            }

            if (!required(event.target.temple.value)){
                this.errors.push('templeは必須です')
            }

            if (this.errors.length > 0){return}
            //-----------------// validation

            const { data } = await axios.post(`${process.env.baseUrl}/api/temple`, 
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
