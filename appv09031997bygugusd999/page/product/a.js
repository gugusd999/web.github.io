async function() {
    $(document).ready(function(){

        // setting DB

        var listData = [];


        DB.read('kategori', '*', function(a){
            listData = a;
            var d = a.map((item) => {
                return `
                    <option value="${item.id}">
                        ${item.kategori}
                    </option>
                `;
            })


            $('[name=kategori_id]').html('<option value="">pilih data</option>'+d);

        })


        function loadData() {
            DB.query(`SELECT product.*, kategori.kategori FROM product LEFT JOIN kategori ON product.kategori_id = kategori.id `, function (a) {
                var dataA = a.map((item) => {
                    return `
                        <tr>
                            <td>${item.nama}</td>
                            <td>${item.kategori}</td>
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
                            <th>Product</th>
                            <th>Kategori</th>
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
            nama: '',
            kategori_id: '',
            create_date: ''
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

            var dataf = $(this).serializeArray();

            dataf.forEach((item) => {
                data[item.name] = item.value;
            })

            
            console.log(data);
            
            axios.get('date.php').then(function (keep) {
                data.create_date = keep.data;

                DB.create('product', data, function (a) {
                    console.log(a);
                    loadData();
                })

                data = {
                    nama: '',
                    kategori_id: '',
                    create_date: ''
                }

            })
        })

        var updateid = null;

        $('body').on('click', '[update-data]', function (event) {

            updateid = event.target.getAttribute('data-id');

            DB.read('product', '*', { id: updateid }, function (a) {
                data['create_date'] = a[0].create_date;
                $('#staticBackdrop').modal('show');
                $('#formupdate input[name="nama"]').val(a[0].nama);
                console.log(listData);
                var newList = listData.map((item) => {
                    if(item.id == a[0].kategori_id){
                        console.log(item.id);
                        console.log(a[0].kategori_id);
                        return `
                            <option selected value="${item.id}">
                                ${item.kategori}
                            </option>
                        `;
                    }else{
                        return `
                            <option value="${item.id}">
                                ${item.kategori}
                            </option>
                        `;
                    }
                }).join('')

                $('#formupdate select[name=kategori_id]').html('<option value="">pilih data</option>'+newList);

            })

        })
        
        $('body').on('click', '[hapus-data]', function (event) {

            updateid = event.target.getAttribute('data-id');
            
            $('#hapus').modal('show');

        })

        $('.hapus').click(function(event){
            event.preventDefault();
            DB.delete('product', {id: updateid}, function(a){
            $('#hapus').modal('toggle');
            loadData();
            })
        })

        $('[bersihkan-semua]').click((event)=>{
            event.preventDefault()
            DB.query(`truncate product`, function(a){
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

                    console.log(data);
                    
                    DB.update('product', data, { id: updateid }, function (a) {
                    console.log(a);

                    $('#staticBackdrop').modal('toggle');
                    loadData();

                    data = {
                        nama: '',
                        kategori_id: '',
                        create_date: ''
                    }

                })

            })


        })

    })
}