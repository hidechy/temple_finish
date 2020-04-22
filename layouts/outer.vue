<template>

    <div>
        <div class="jumbotron">
            <h1 class="display-3">TempleList</h1>
            <p class="lead">今までに参拝した神社のリストです</p>
            <p class="lead">
            <nuxt-link to="/input" class="btn btn-primary btn-lg">追加する</nuxt-link>











            </p>
        </div>

        <nuxt />
    </div>

</template>

<script>

</script>

<style>
.jumbotron {
background: url('~assets/temple.jpg');
background-position: center;
color: #ffffff;
}
</style>
