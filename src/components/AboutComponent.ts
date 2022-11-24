import {Component, Vue} from 'vue-property-decorator';

@Component
export default class AboutComponent extends Vue {
    protected created() {
        console.log('AboutComponent.create');
    }
}
