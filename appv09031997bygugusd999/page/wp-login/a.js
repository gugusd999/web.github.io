function() {

    var data = {};

    $('#myform input').focus(function (event) {
        $(this).removeAttr('readonly');
    })

    $('#myform input').blur(function (event) {
        $('#myform input').attr('readonly', '');
    })

    $('#myform input').keyup(function (event) {
        var name = event.target.getAttribute('name');
        var value = event.target.value;
        data[name] = value;
    })

    $('#myform input').keypress(function (event) {
        var name = event.target.getAttribute('name');
        var value = event.target.value;
        data[name] = value;
    })

    $('#myform input').keydown(function (event) {
        var name = event.target.getAttribute('name');
        var value = event.target.value;
        data[name] = value;
    })

    $('.simpan').click(function (event) {

        DB.server = 'api.php';
        DB.connection = {
            database: "marketplace_ukm",
            key: 'halohalobandung'
        }

        DB.read('login', '*', {
            email: data.email
        }, function (a) {
            if (typeof a === 'object' && Array.isArray(a) && a.length > 0) {
                getData = helper.decryptG(a[0].password)
                if (getData === data.password) {
                    localStorage.setItem('login', helper.encryptG(a[0]));
                    location.href = '#/administrator';
                } else {
                    alert('sorry cek your username or password please');
                }
            } else {
                alert('sorry cek your username or password please');
            }
        })


    })

    $('.modal-backdrop').removeClass('show');

}