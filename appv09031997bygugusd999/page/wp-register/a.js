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

    $('.simpan').click(function (event) {
        console.log(data);

        if (data.password != data.passwordverify) {
            alert('password not match')
        } else {

            delete data.passwordverify;

            data.password = helper.encryptG(data.password);

            console.log(helper.decryptG(data.password));

            DB.server = 'api.php';
            DB.connection = {
                database: "marketplace_ukm",
                key: 'halohalobandung'
            }

            DB.create('login', data, function (a) {

                alert('you are already registered')

                location.href = '#/wp-login';

            })


        }

    })
}