<template>
    <div class="container">
        <div v-for="(res, year) in temples" :key="year">
            <div class="yearline py-2 px-2">{{ year }}</div>

            <table border="0" cellspacing="2" cellpadding="2" class="table table-hover" id="templeList">
                <tbody>
                    <tr v-for="temple in res" :key="temple.id">
                        <td>{{ temple.year }}-{{ temple.month }}-{{ temple.day }}</td>
                        <td><nuxt-link :to="`/temples/${ temple.id }/detail`">{{ temple.temple }}</nuxt-link></td>
                        <td>{{ temple.address }}</td>
                        <td>{{ temple.station }}</td>
                        <td><nuxt-link :to="`/temples/${ temple.id }/edit`">更新</nuxt-link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    layout: 'outer',

    async asyncData ({ params }) {
        const { data } = await axios.get(`${process.env.baseUrl}/api/temple`)

        const result = {}
        data.forEach(element => {
            if (!result[element.year]) {
                result[element.year] = []
            }
            result[element.year].push(element)
        });

        return { temples: result }
    }
}
</script>

<style>
.yearline {background: #d0eed9;}
#templeList tr td:nth-child(1){width: 150px;}
#templeList tr td:nth-child(2){width: 400px;}
#templeList tr td:nth-child(4){width: 150px;}
</style>
