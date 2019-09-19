<template>
    <div class="container">
        <appHeader></appHeader>
        <hr>
        <div class="row">
            <appServers></appServers>
            <appServerDetails></appServerDetails>
        </div>
        <hr>
        <appFooter></appFooter>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            appServers: Servers,
            appServerDetails: ServerDetails,
            appFooter: Footer
        }
    };
</script>

<style>

</style>
