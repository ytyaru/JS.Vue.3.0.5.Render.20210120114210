window.addEventListener('load', (event) => {
    const opt = {
        setup() {
            const message = Vue.ref('描画するメッセージです。');
            return { message };
        },
        render() {
            return Vue.h('span', this.message);
        }
    }
    Vue.createApp(opt).mount('#app');
});
