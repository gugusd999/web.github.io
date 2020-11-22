var DS = {}

// DS connection is connetion to database 
DS.connection = {}

// DS server is url of server
DS.server = null;

// DS query is manual query
DS.query = async (query, func, act = "data") => {

    console.log(query);

    var params = new URLSearchParams();
    params.append('host', DS.connection.host)
    params.append('username', DS.connection.user)
    params.append('password', DS.connection.password)
    params.append('database', DS.connection.database)
    params.append('key', DS.connection.key)
    params.append('action', act)
    params.append('query', query)

    try {
        let res = await axios.post(DS.server, params);

        if (Array.isArray(res.data)) {
            let data = res.data;
            func(res.data);
        } else {

            if (res.data == "save") {
                func(res.data);
            } else {
                console.log(query);
                func('cobalagi')
            }

        }
    } catch (error) {
        if (error == "Error: Network Error") {

            let html = `
                <div id="error-DS-connection">
                    <style>

                        .body-error-message{
                            position: fixed;
                            display: block;
                            bottom: calc(100vh - 50px);
                            padding: 10px;
                            right: 10px;
                            background: #333333;
                            color: white;
                            z-index: 10000;
                            animation: error 4s ease-in-out;
                        }

                        @keyframes error{
                            0%{
                                bottom: 10px;
                                opacity: 0;
                            }
                            50%{
                                bottom: calc(100vh - 50px);
                                opacity: 1;
                            }
                            90%{
                                bottom: calc(100vh - 50px);
                                opacity: 0;
                            }
                        }
                    </style>
                    <span class="body-error-message">your connection lost</span>
                </div>
            `;

            document.body.innerHTML += html;

            console.log()
            setTimeout(() => {
                document.getElementById('error-DS-connection').remove();
                DS.query(query, func, act);
            }, 100)
        }
    }
}

// read functio


function isFunction(variableToCek) {
    if (variableToCek instanceof Function) {
        return true;
    } else {
        return false;
    }
}

DS.read = function (table, opsi, condition, order = '', limit = '', func = '') {

    let cond = '';
    let where = '';

    if (isFunction(condition)) {
        func = condition;
    }


    if (Array.isArray(opsi)) {
        opsi = opsi.join(', ');
    }



    if (typeof condition === 'object') {
        let myor = Object.keys(condition).map(function (item) {
            if (typeof condition[item] === 'object' && item.indexOf('OR') != -1) {
                return '( ' + Object.keys(condition[item]).map(function (itemx) {
                    if (condition[item][itemx].indexOf('%') != -1) {
                        if (itemx.indexOf('_')) {
                            let splitback = itemx.split('_');
                            let split = itemx.split('_');
                            if (split.length > 1) {
                                split.pop();
                            }
                            console.log(splitback);
                            return split.join('_') + ' LIKE "' + condition[item][itemx] + '"';
                        } else {
                            return itemx + ' LIKE "' + condition[item][itemx] + '"';
                        }
                    } else {
                        if (itemx.indexOf('_')) {
                            let split = itemx.split('_');
                            if (split.length > 1) {
                                split.pop();
                            }
                            return split.join('_') + ' = "' + condition[item][itemx] + '"';
                        } else {
                            return itemx + ' = "' + condition[item][itemx] + '"';
                        }
                    }
                }).join(' OR ') + ' )';
            } else {
                if (condition[item].indexOf('%') != -1) {
                    if (item.indexOf('_')) {
                        let split = item.split('_');
                        if (split.length > 1) {
                            split.pop();
                        }
                        return split.join('_') + ' LIKE "' + condition[item] + '"';
                    } else {
                        return item + ' LIKE "' + condition[item] + '"';
                    }
                } else {
                    if (item.indexOf('_')) {
                        let split = item.split('_');
                        if (split.length > 1) {
                            split.pop();
                        }
                        return split.join('_') + ' = "' + condition[item] + '"';
                    } else {
                        return item + ' = "' + condition[item] + '"';
                    }
                }
            }
        }).join(' AND ');
        console.log(myor);
        cond = myor;
    }

    if (isFunction(order)) {
        func = order;
        order = '';
    } else if (typeof order === 'object') {
        let valoe = Object.keys(order).map((item) => {
            return ` ${item} ${order[item]} `;
        }).join(" , ");

        order = ' ORDER BY ' + valoe;
    }

    if (isFunction(limit)) {
        func = limit;
    } else if (limit != '') {
        limit = ' LIMIT ' + limit[0] + ',' + limit[1];
    }

    console.log(order)

    if (cond != '') {
        where = 'WHERE';
    }
    DS.query(`SELECT ${opsi} FROM ` + table + ' ' + where + ' ' + cond + order + limit, func)
}


DS.create = function (table, condition, func) {
    if (typeof condition === "object") {

        let keys = Object.keys(condition);

        let val = keys.map((item) => {
            return '"' + condition[item] + '"';
        }).join(", ");

        DS.query(`INSERT INTO ${table} (${keys.join(', ')}) VALUES (${val}) `, func, 'save')

    } else {
        console.log('sorry data is not object');
    }
}

DS.delete = function (table, condition, func) {
    if (typeof condition === "object") {

        let val = Object.keys(condition).map((item) => {
            return ' ' + item + ' = "' + condition[item] + '"';
        }).join(" AND ");
        DS.query(`DELETE FROM ${table} WHERE ${val}`, func, 'save')
    } else {
        console.log('sorry data is not object');
    }
}

DS.update = function (table, dataupdate, condition, func) {
    if (typeof dataupdate === "object") {
        if (typeof condition === "object") {

            let data = Object.keys(dataupdate).map((item) => {
                return ' ' + item + ' = "' + dataupdate[item] + '"';
            }).join(", ");

            let val = Object.keys(condition).map((item) => {
                return ' ' + item + ' = "' + condition[item] + '"';
            }).join(" AND ");

            DS.query(`UPDATE ${table} SET ${data} WHERE ${val}`, func, 'save')
        } else {
            console.log('sorry data is not object');
        }
    } else {
        console.log('sorry data is not object');
    }
}

var dataLogin = '';
if (localStorage.getItem('login') != undefined) {
    dataLogin = helper.decryptG(localStorage.getItem('login'));
}

DS.server = "server.php"

DS.connection = {
    database: "singkronisasi",
    key: "halohalobandung"
}