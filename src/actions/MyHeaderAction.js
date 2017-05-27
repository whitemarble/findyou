import enUS from 'antd/lib/locale-provider/en_US';

export const toEnglish = ()=>{
    return{
        type:'E',
        payload: enUS
    }
}

export const toChinese = ()=>{
    return{
        type:'C',
        payload:null
    }
}

