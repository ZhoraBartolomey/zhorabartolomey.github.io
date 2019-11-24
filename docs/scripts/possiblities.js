var possiblities = [
    {
        id: "register", content: "Регистрация позволяет идентифицировать посетителей сайта и настроить " +
            "индивидуальные функции на сайте."
    },
    {
        id: "online-orders",
        content:
            "Заказы онлайн позволяют пользователю в хорошей обстановке, не выходя из дома " +
            "произвести покупку или заказ. Красивый дизайн на сайте привлечет внимание пользователя сайтом."
    },
    {
        id: "analytics",
        content:
            "Аналитика посещений сайта помогает понять, как пользователи " +
            "пользуются сайтом, выявить ошибки дизайна."
    },
    {
        id: "seo",
        content:
            "SEO (Search Engine Optimization) улучшает позиции в поиске."
    },
    {
        id: "anything",
        content:
            "Вы можете попросить разработать какую либо другую функцию."
    }

]


function bind(idOfList, idOfDescription) {
    $('#' + idOfList).children("li").each(function () {
        $(this).on("click", () => {
            var id = $(this).attr("data-id");
            $('#' + idOfList).children("li").each(function () { $(this).removeClass("is-active") })
            $(this).addClass("is-active");
            var possiblity = possiblities.filter((v) => v.id == id)[0];
            $("#" + idOfDescription).text(possiblity.content);
        });
    })
}