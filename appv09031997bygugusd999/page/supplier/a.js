async function() {
    $(document).ready(function(){

        // setting DB

        var listData = [];


        DB.read('product', '*', function(a){
            listData = a;
            var d = a.map((item) => {
                return `
                    <option value="${item.id}">
                        ${item.nama}
                    </option>
                `;
            })


            $('[name=product_id]').html('<option value="">pilih data</option>'+d);

        })


        function loadData() {
            DB.query(`SELECT supplier.*, product.nama as product FROM supplier LEFT JOIN product ON product.id = supplier.product_id `, function (a) {
                var dataA = a.map((item) => {
                    return `
                        <tr>
                            <td>${item.nama}</td>
                            <td>${item.no_telp}</td>
                            <td>${item.alamat}</td>
                            <td>${item.product}</td>
                            <td>
                                <button type="button" data-id="${item.id}" class="btn btn-sm btn-warning" update-data>Update</button>  
                                <button type="button" data-id="${item.id}" class="btn btn-sm btn-danger" hapus-data>Hapus</button>  
                            </td>
                        </tr>
                    `;
                }).join('');

                document.getElementById('kategori').innerHTML = `
                
                <table class="table" id="domini">
                    <thead>
                        <tr>
                            <th>Nama Supplier</th>
                            <th>No Telp.</th>
                            <th>Alamat</th>
                            <th>Product</th>
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
            no_telp: '',
            alamat: '',
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

                DB.create('supplier', data, function (a) {
                    console.log(a);
                    loadData();
                })

                data = {
                    nama: '',
                    no_telp: '',
                    alamat: '',
                    create_date: ''
                }

            })
        })

        var updateid = null;

        $('body').on('click', '[update-data]', function (event) {

            updateid = event.target.getAttribute('data-id');

            DB.read('supplier', '*', { id: updateid }, function (a) {
                data['create_date'] = a[0].create_date;
                $('#staticBackdrop').modal('show');
                $('#formupdate input[name="nama"]').val(a[0].nama);
                $('#formupdate input[name="no_telp"]').val(a[0].no_telp);
                $('#formupdate input[name="alamat"]').val(a[0].alamat);
                console.log(listData);
                var newList = listData.map((item) => {
                    if(item.id == a[0].product_id){
                        return `
                            <option selected value="${item.id}">
                                ${item.nama}
                            </option>
                        `;
                    }else{
                        return `
                            <option value="${item.id}">
                                ${item.nama}
                            </option>
                        `;
                    }
                }).join('')

                $('#formupdate select[name=product_id]').html('<option value="">pilih data</option>'+newList);

            })

        })
        
        $('body').on('click', '[hapus-data]', function (event) {

            updateid = event.target.getAttribute('data-id');
            
            $('#hapus').modal('show');

        })

        $('.hapus').click(function(event){
            event.preventDefault();
            DB.delete('supplier', {id: updateid}, function(a){
            $('#hapus').modal('toggle');
            loadData();
            })
        })

        $('[bersihkan-semua]').click((event)=>{
            event.preventDefault()
            DB.query(`truncate supplier`, function(a){
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
                    
                    DB.update('supplier', data, { id: updateid }, function (a) {
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