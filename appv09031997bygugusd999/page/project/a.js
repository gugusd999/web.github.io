formsimpan(el){
    var pp = helper.formData(el);
    this.db.create('project', pp, function (params) {
        console.log(params);
    })
}

run(){
    this.getid('formsaya').innerHTML =
        this.input({
            title: "judul",
            type: "datetime",
            name: 'kode'
        })
        + this.input({
            title: "judul",
            type: "datetime",
            name: "nama"
        })
        + this.submit()

}