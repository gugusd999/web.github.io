
timeshow(){
    var d = this.helper.tanggal().normal;
    var c = this.helper.tanggal(d);
    document.getElementById('timer').innerHTML = c.sekarang2 + ' ' + this.helper.times();
}

formCall(){
    alert('ok')
}

goDemo(){
    alert('demo port')
}

galery(){

    for (let ax = 0; ax < 6; ax++) {
        this.getid('galery').innerHTML += `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h4>Title</h4>
                        <img class="img-fluid mb-3" src="./asset/cover/cover1.png" alt="">
                        <button type="button" onclick="cf.fn('goDemo', this); return false;" class="btn btn-primary">Lihat Demo</button>
                    </div>
                </div>
            </div>
        `;
    }

}

keahlian(){

    var path = './asset/portofolio/01/';

    var data = [
        {
            title: 'Web Design',
            cover: path + 'web.svg',
            describe: 'Sebagai web designer saya menguasai html5, css3, javascript ES6'
        },
        {
            title: 'App Development',
            cover: path + 'app.svg',
            describe: 'Sebagai App Development saya menguasai PHP dan PHP Framework khususnya Codigniter 3 dan Codigniter 4, Laravel, dan Node JS.'
        },
        {
            title: 'CMS Development',
            cover: path + 'web.svg',
            describe: 'Sebagai CMS development saya menguasai wordpress.'
        }
    ]

    for (let ax = 0; ax < data.length; ax++) {
        this.getid('keahlian').innerHTML += `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body text-center">
                        <img height="100px" class="mb-3" src="${data[ax].cover}" alt="">
                        <h4>${data[ax].title}</h4>
                        <p>${data[ax].describe}</p>
                    </div>
                </div>
            </div>
        `;
    }

}

run(){
    this.timeshow();
    setInterval(() => {
        this.timeshow();
    }, 1000);
    $("section").css('min-height', 'calc(100vh - 50px)');
    $('.jumbotron .container').css({
        'display': 'flex',
        'align-item': 'center'
    })
    $("#me").css({ "max-width": "320px", "width": "100%" });
    $(".bg-blue-light").css({
        'background-color': '#f6f7fb'
    })
    $(".jumbotron").css({
        'background-image': "url('./asset/portofolio/01/g3795.png')",
        'background-size': 'cover',
        'min-height': '100vh',
        'color': 'black',
        'display': 'flex',
        'padding': '40px'
    })
    $("#timer").css('display', 'block');
    $(".jumbotron .row").css({
        'width': '100%'
    })
    $(".border-1").css({
        'color': 'black',
        'border': '1px solid black'
    })
    $('#title-mark').css({
        'font-size': 'calc(20px + 1.5vw)'
    })
    this.keahlian();
    this.galery();
}