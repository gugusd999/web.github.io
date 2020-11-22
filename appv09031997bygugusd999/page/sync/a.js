function() {

    // setting DB

    document.title = 'Igeiatech - kategori';

    function loadData() {
        DB.read('kategori', '*', function (a) {
            var dataA = a.map((item) => {
                return `
                    <tr>
                        <td>${item.kategori}</td>
                        <td>${item.ket}</td>
                        <td>
                            <button type="button" data-id="${item.id}" class="btn btn-warning" update-data>Update</button>  
                            <button type="button" data-id="${item.id}" class="btn btn-danger" hapus-data>Hapus</button>  
                        </td>
                    </tr>
                `;
            }).join('');

            document.getElementById('kategori').innerHTML = `
            
            <table class="table" id="domini">
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>keterangan</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    ${dataA}
                </tbody>
            </table>
            
            `;

            document.querySelectorAll('input').forEach((item) => {
                item.value = ''
            })

            document.querySelectorAll('textarea').forEach((item) => {
                item.value = ''
            })

            $('#domini').DataTable({
                responsive: true
            });

        })
    }

    loadData();

    var data = {
        kategori: '',
        ket: '',
        create_date: '',
        id_status: '0'
    }

    $('#myform input').keyup(function (event) {
        var name = event.target.getAttribute('name');
        var value = event.target.value;
        data[name] = value;
    })

    $('#myform textarea').keyup(function (event) {
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

    $('#myform').submit(function (event) {
        event.preventDefault();
        axios.get('date.php').then(function (keep) {

            data.create_date = keep.data;

            DB.create('kategori', data, function (a) {
                console.log(a);
                loadData();
            })

            data = {
                kategori: '',
                ket: '',
                create_date: '',
                id_status: '0'
            }

        })
    })

    var updateid = null;

    $('body').on('click', '[update-data]', function (event) {

        updateid = event.target.getAttribute('data-id');

        DB.read('kategori', '*', { id: updateid }, function (a) {
            data['id_status'] = '2';
            data['create_date'] = a[0].create_date;
            $('#staticBackdrop').modal('show');
            $('#formupdate input[name="kategori"]').val(a[0].kategori);
            $('#formupdate textarea[name="ket"]').val(a[0].ket);
        })

    })
    
    $('body').on('click', '[hapus-data]', function (event) {

        updateid = event.target.getAttribute('data-id');
        
        $('#hapus').modal('show');

    })

    $('.hapus').click(function(event){
        event.preventDefault();
        DB.delete('kategori', {id: updateid}, function(a){
        $('#hapus').modal('toggle');
        loadData();
        })
    })

    $('[bersihkan-semua]').click((event)=>{
        event.preventDefault()
        DB.query(`truncate kategori`, function(a){
            console.log(a);
            loadData();
        })
    })

    $('#formupdate').submit(function (event) {
        
        event.preventDefault();

        console.log('wkwkkw');

        var dataform = $("#formupdate").serializeArray();

        dataform.forEach((item) => {
            data[item.name] = item.value;
        })

        axios.get('date.php').then(function (keep) {

            data['update_date'] = keep.data;

            DB.update('kategori', data, { id: updateid }, function (a) {
                console.log(a);

                $('#staticBackdrop').modal('toggle');
                loadData();

                data = {
                    kategori: '',
                    ket: '',
                    create_date: '',
                    id_status: '0'
                }

            })

        })
    })


    // upload file data




    bantuan.uploadfile = function(event){
        
        function getBase64(file){
                return new Promise((resolve, reject) =>{
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = () => reject(error);
                })
            }
        
        const size = 40000;
        var reader = new FileReader();
        var buf;
        var file = event.files[0];
        reader.onload = function(e){
            buf = new Uint8Array(e.target.result);
            
            console.log(buf);

            var i = 0;

            var p = buf.length;

            function _x(){
                if(i < p){
                    var fd = new FormData();
                    fd.append('fname', [file.name, i+1, 'of', buf.length].join('-'));
                    var blobd = new Blob([buf.subarray(i, i+size)]);


                    getBase64(blobd).then(data=>{
                        console.log(data);
                    })

                    fd.append('data', blobd);
                    var Oreg = new XMLHttpRequest();
                    Oreg.open('POST', 'upload.php', true);
                    Oreg.onload = function(e){
                        
                        // percentag upload file
                        i += size;
                        console.log((i/p)*100);

                        _x();
                    }
                    Oreg.send(fd);
                }
            }

            _x();

        }

        reader.readAsArrayBuffer(file);






        // base 64 ---------------------------------------------------------


        // function getBase64(file){
        //     return new Promise((resolve, reject) =>{
        //         const reader = new FileReader();
        //         reader.readAsDataURL(file);
        //         reader.onload = () => resolve(reader.result);
        //         reader.onerror = () => reject(error);
        //     })
        // }




        // getBase64(file).then(data => {
        //     console.log(data)
        // })





        // console.log(file);

        // var data = new FormData();

        // data.append('file1', file);


        // var xhr = new XMLHttpRequest();

        // xhr.open('post', 'upload.php');
        // xhr.upload.addEventListener('progress', e => {
        //     console.log(e)
        // })
        // xhr.addEventListener('load', e => {
        //     console.log(e.target.response);
        // })

        // xhr.send(data);

        // -------------------------- 01

        // var data = new FormData();
        
        // data.append('foo', 'bar');
        // data.append('file1', e);

        // var config = {
        //     onUploadProgress: function(progressEvent){
        //         console.log(progressEvent);
        //     }
        // }

        // axios.post('upload.php', data, config)
        // .then(function(res){
        //     console.log(res.data);
        // })
        // .catch(function(err){
        //     console.log(err.message);
        // })

    }


    function progressHandler(event){

        console.log(event);

    }

    function completeHandler(event){
        console.log(
            event.target.reponseText
        );
    }

    function errorHandler(event){

    }

    function abordHandler(event){

    }



}