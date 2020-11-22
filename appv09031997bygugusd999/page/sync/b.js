async function() {

    console.log('data b');

    function delay(callback, ms) {
        var timer = 0;
        return function () {
            var context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function () {
                callback.apply(context, args);
            }, ms || 0);
        };
    }




    helper.realtime = async function () {

        var mydates = await axios.get('date.php');

        var tanggal = mydates.data;

        console.log('cek data')


        var dataTotal = 0;
        var dataTotalUpdate = 0;

        var dataUploadCek = function () {

            axios.get('date.php')
                .then(function (data) {

                    var jam = data.data;

                    dataTotal += Number(1);

                    $('body #dataceksync').html(`ditambahkan terakhir ${jam} dengan total upload ${dataTotal} `);

                })

        }

        var dataUploadCekUpdate = function () {

            axios.get('date.php')
                .then(function (data) {

                    var jam = data.data;

                    dataTotalUpdate += Number(1);

                    $('body #dataceksyncupdate').html(`diupdate terakhir ${jam} dengan total upload ${dataTotalUpdate} `);

                })

        }


        DB.server = "api.php"

        DB.connection = {
            database: "syncronisasi",
            key: "halohalobandung"
        }

        DS.server = "server.php"

        DS.connection = {
            database: "singkronisasi",
            key: "halohalobandung"
        }

        DB.query(`SELECT * FROM kategori WHERE id_status = "0" AND create_date <= '${tanggal}' `, function (a) {

            a.forEach((item) => {
                DS.create('kategori', item, function (a) {
                    console.log(a);
                    DB.update('kategori', { id_status: '1' }, { id: item.id }, function (a) {
                        console.log(a);
                        dataUploadCek();
                    })
                })
            });

        })

        // DB.query(`SELECT * FROM kategori WHERE id_status = "1"`, function (a) {

        //   a.forEach((item) => {
        //     DS.query(`SELECT * FROM kategori WHERE id = ${item.id} `, function (a) {
        //       console.log(a);
        //       if (a.length != 0) {
        //         DS.update('kategori', item, { id: item.id }, function (a) {
        //           console.log(a);
        //           DB.update('kategori', { id_status: '3' }, { id: item.id }, function (a) {
        //             console.log(a);
        //           })
        //         })
        //       } else {
        //         DS.create('kategori', item, function (a) {
        //           console.log(a);
        //           DB.update('kategori', { id_status: '3' }, { id: item.id }, function (a) {
        //             console.log(a);
        //           })
        //         })
        //       }
        //     })
        //   });

        // })

        DB.query(`SELECT * FROM kategori WHERE id_status = "2" AND create_date <= '${tanggal}' `, function (a) {

            a.forEach((item) => {
                DS.query(`SELECT * FROM kategori WHERE id = ${item.id} `, function (a) {
                    console.log(a);
                    if (a.length != 0) {
                        DS.update('kategori', item, { id: item.id }, function (a) {
                            console.log(a);
                            DB.update('kategori', { id_status: '3' }, { id: item.id }, function (a) {
                                console.log(a);
                                dataUploadCekUpdate();
                            })
                        })
                    } else {
                        DS.create('kategori', item, function (a) {
                            console.log(a);
                            DB.update('kategori', { id_status: '3' }, { id: item.id }, function (a) {
                                console.log(a);
                                dataUploadCek();
                            })
                        })
                    }
                })
            });

        })



    };



    $('body').on('click', '.sync-auto', function () {
        console.log('y')
        helper.realtime()

    })



    setInterval(function () {

        helper.realtime = helper.realtime;

        $('.sync-auto').trigger('click');

    }, 15000);

}