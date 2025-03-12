(function () {

    document.addEventListener('click', BurgerInit)

    function BurgerInit(e) {
        const BurgerIcon = e.target.closest('.burger-icon')
        const BurgernavLink = e.target.closest('.nav__link')

        if (!BurgerIcon && !BurgernavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }
})()