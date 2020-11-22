function (a) {

    var arr = [{
        title: "Migration",
        des: "Codigniter 4 migration",
        link: helper.siteurl("migration/" + a)
    }, {
        title: "Routes",
        des: "Codigniter 4 Routes",
        link: helper.siteurl("routes/" + a)
    }, {
        title: "Controller",
        des: "Codigniter 4 Controller",
        link: helper.siteurl("controller/" + a)
    }];


    var h = arr.map((b) => {
        return `<div class="col-xl-4 col-lg-5">
    <div class="card shadow mb-3">
        <div class="card-body">
            <div class="card-body">
                <h3>${b.title}</h3>
                <p>
                    ${b.des}
                    </p>
                <a href="${b.link}" class="btn btn-primary">open</a>
                </div>
            </div>
        </div>
    </div>
</div>`
    }).join('')


    document.getElementById("content-home").innerHTML = h;


}