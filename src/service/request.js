

var getUserInfo = () => {
    return fetch('get',api.getUserInfo,{}).then(res=>{
        return res;
    });
};
