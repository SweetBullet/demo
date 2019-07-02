const routers = {
    '/index': {
        component(resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/test': {
        component(resolve){
            require(['./views/input.vue'], resolve);
        }
    }
};
export default routers;