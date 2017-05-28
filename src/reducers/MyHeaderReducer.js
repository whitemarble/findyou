import antdEn from 'antd/lib/locale-provider/en_US';
import enUS from '../../public/assets/locales/enUS.json';
import zhCN from '../../public/assets/locales/zhCN.json';



const initialState = {
    locale:'en-US',
    messages:enUS,
    antd:antdEn
}

const MyHeaderReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case 'C':
        return {
            locale:'zh-Hans-CN',
            messages:{
                ...zhCN
            },
            antd:null
        };
        case 'E':
        return {
            locale:'en-US',
            messages:{
                ...enUS
            },
            antd:antdEn
        };
        default:
        return state;
    }
    
}

export default MyHeaderReducer