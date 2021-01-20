window.addEventListener('load', (event) => {
    const opt = {
        setup() {
            return {};
        },
        render() {
            return Vue.h('span', '描画する');
        }
    }
    Vue.createApp(opt).mount('#app');
});
