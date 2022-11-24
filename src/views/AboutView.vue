<template>
    <div class="about">
        <h1>This is an about page</h1>
        <about-component />
    </div>
</template>

<script lang="ts">
import AboutComponent from '@/components/AboutComponent.vue'; // @ is an alias to /src
import {Component, Vue} from 'vue-property-decorator';

@Component({
    components: {
        AboutComponent
    }
})
export default class HomeView extends Vue {}
</script>
