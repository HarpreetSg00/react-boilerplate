const configDev = {
    API: {
        url: 'http://51.145.115.5'
    }
}

const configProd = {
    API: {
        url: ''
    }
}

const configStage = {
    API: {
        url: ''
    }
};

if(process.env.NODE_ENV === 'development'){
    module.exports = configDev;
} else if(process.env.NODE_ENV === 'none'){
    module.exports = configStage;
} else if(process.env.NODE_ENV === 'production'){
    module.exports = configProd;
} 
