
timeshow(){
    var d = this.helper.tanggal().normal;
    var c = this.helper.tanggal(d);
    document.getElementById('timer').innerHTML = c.sekarang2 + ' ' + this.helper.times();
}

formCall(){
    alert('ok')
}

goDemo(){
    alert('demo')
}

galery(){

    var path = './asset/cover/';

    var data = [
        {
            title: 'Portofolio 01',
            cover: path + 'image3807.png',
            describe: 'Design portofolio',
            link: '#/portofolio'
        }
        , {
            title: 'Portofolio 01',
            cover: path + 'image3807.png',
            describe: 'Design portofolio',
            link: '#/portofolio'
        }
        , {
            title: 'Portofolio 01',
            cover: path + 'image3807.png',
            describe: 'Design portofolio',
            link: '#/portofolio'
        }
    ]

    for (let ax = 0; ax < data.length; ax++) {
        this.getid('galery').innerHTML += `
            <div class="col-sm-4 mb-4">
                <div class="card">
                    <div class="card-body text-center">
                        <h4>${data[ax].title}</h4>
                        <img class="img-fluid mb-3" src="${data[ax].cover}" alt="">
                        <p>${data[ax].describe}</p>
                        <a href="${data[ax].link}" class="btn btn-primary">Lihat Demo</a>
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
    $(".bg-blue-light").css({
        'background-color': '#7b21fd'
    })
    $(".jumbotron").css({
        'background-image': 'url("./asset/landing1/bg.jpg.png")',
        'background-size': 'cover',
        'min-height': '100vh',
        'color': 'white',
        'display': 'flex',
        'padding': '40px'
    })
    $("#timer").css('display', 'block');
    $(".jumbotron .row").css({
        'width': '100%'
    })
    $(".border-1").css({
        'color': 'white',
        'border': '1px solid white'
    })
    $('#title-mark').css({
        'font-size': 'calc(20px + 1.5vw)'
    })
    this.galery();
}