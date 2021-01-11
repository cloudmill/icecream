import AOS from 'aos';

export function showMore() {
    const list = $(".moreDetail--js .more__item--js");
    let numToShow = 3;
    const button = $(".showMore--js");
    const numInList = list.length;
    list.velocity('slideUp', { duration: 300 });

    if (numInList > numToShow) {
        button.show();
    }
    list.slice(0, 8).slideDown();

    button.click(function () {
        const showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).slideDown();
        const nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
            button.hide();
        }
        setTimeout(() => {
            AOS.refresh({
                offset: 50,
            });
        }, 400);

        return false;
    });
}

showMore();
