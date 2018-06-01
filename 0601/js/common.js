$('.box').parallaxFit({
    start: 0,
    end: 500,
    fromStyle: {
        transform: 'scale(1) rotate(0deg)',
        backgroundColor: 'rgb(255, 0, 0)'
    },

    toStyle: {
        transform: 'scale(2) rotate(180deg)',
        backgroundColor: 'rgb(0, 255, 0)',
        left: '500px'
    },



    motion1Start: 700,
    motion1End: 800,
    motion1ToStyle: {
        top: '500px'
    },

    motion1Easing: 'easeInElastic',



    motion2End: 1500,
    motion2ToStyle: {
        width: '300px',
        height: '500px'
    },

    motion2Easing: 'easeInElastic',



    motion3ToStart: 2000,
    motion3End: 2500,
    motion3ToStyle: {
        left: '700px'


    },

})
