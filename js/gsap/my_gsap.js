$(document).ready(function() {

    // gsap
    const gsapInit = () => {
        const gsapBlock = $('.gsap');
        if(gsapBlock.length) {
            const item = gsapBlock.find('.gsap__item');

            item.each(function() {
                const th = $(this);
                gsap.to(th, {
                    scrollTrigger: {
                        trigger: th,
                        start: 'top 80%',
                        once: true,
                    },
                    y: 0,
                    opacity: 1,
                    duration: .4,
                });
            });
        }
    }
    gsapInit();

});