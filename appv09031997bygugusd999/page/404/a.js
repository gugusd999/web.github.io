timeshow(){
    var d = this.helper.tanggal().normal;
    var c = this.helper.tanggal(d);
    document.getElementById('times-load-away').innerHTML = c.sekarang2 + ' ' + this.helper.times();
}

run(){
    this.timeshow();
    setInterval(() => {
        this.timeshow();
    }, 1000);
}