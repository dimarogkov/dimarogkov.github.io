$(document).ready(function() {

    // functions
    function changeTabTitleClass(title) {
        title.parent().toggleClass('active');
    }

    function tabInit(item, tab, tabNav) {
        const i = item.index();

        item.addClass('active').siblings().removeClass('active');
        tab.eq(i).show().siblings().hide();
        tabNav.removeClass('active').find('.tab-title').text(item.text());
    }

    // tab simple block
	$(document).on('click', '.tab-one .tab-title', function() {
        const th = $(this);
        changeTabTitleClass(th);
    });

    $(document).on('click', '.tab-toggle div', function() {
        const th = $(this);
        const tab = th.closest('.tabs').find('.tab');
        const tabNav = th.closest('.tab-one .tab-nav');

        tabInit(th, tab, tabNav);
    });

    // tab block on left
    $(document).on('click', ' .tab-two .tab-title', function() {
        const th = $(this);
        changeTabTitleClass(th);
    });

    $(document).on('click', '.tab-toggle div', function() {
        const th = $(this);
        const tab = th.closest('.tab-two').find('.tab');
        const tabNav = th.closest('.tab-nav');
        
        tabInit(th, tab, tabNav);
    });

});