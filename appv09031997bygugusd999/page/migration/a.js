function (a) {

    var table = 'migration';

    function calldd() {

        DB.schema('migration', function (a) {
            if (a.length == 0) {
                DB.createTable(table, [
                    'id INT(11) NOT NULL AUTO_INCREMENT', 'kode_project INT(11)', 'nama VARCHAR(255)'
                ], 'id', function (a) {
                    console.log(a);
                })
            } else {
                DB.query('SELECT * FROM `' + table + '`', function (a) {
                    var cc = a.map((b, i) => {

                        return `<div class="col-xl-4 col-lg-5">
    <div class="card shadow mb-3">
        <div class="card-body">
            <div class="card-body">
                <h3>${b.nama}</h3>
                <p>
                </p>
                <a href="${b.id}" class="btn btn-primary">open</a>
                <button data-id="${b.id}" hapus-data class="btn btn-danger">hapus</butto>
            </div>
        </div>
    </div>
</div>`
                    }).join('');

                    console.log(cc);

                    document.getElementById('content-home').innerHTML = cc;

                })
            }
        })
    }

    calldd()

    $("[btn-tambah]").click(function () {
        $("#tambah").modal("show");
    })

    $('#myform').submit(async function (event) {
        event.preventDefault();

        var dataf = $(this).serializeArray();

        var d = {}

        dataf.forEach((item) => {
            d[item.name] = item.value;
        })

        d.kode_project = a;

        await DB.create(table, d, function (a) {
            console.log(a);
            helper.data();
        })

        $("#tambah").modal("toggle");

        $('input').val('');

    })


    $("body").on('click', '[hapus-data]', delay(function (event) {
        event.preventDefault();
        alert('ok')
        helper.idHapus = $(this).attr('data-id');
        $("#hapus").modal("show");
    }, 200));


    $("form#hapus").submit(function (event) {
        event.preventDefault();
        alert('ok');
        DB.delete(table, {
            id: helper.idHapus
        }, function () {
            calldd();
            $("#hapus").modal("togle");
        })
    })


}