const bantuan = {}
bantuan.baseurl = `http://localhost:8000/home/api`;
bantuan.formatAngka = function (a, b) {
  var newA = b + '';
  var format = a;
  var dataNew = a.substring(0, format.length - newA.length) + newA;
  return dataNew;
}

bantuan.potongText = function (a, b, c) {
  var data = a.substring(b, c);
  return data;
}

bantuan.backup = {}

bantuan.updateLocal = async (a) => {
  var data = await bantuan.query(`SELECT * FROM ${a}`);
  bantuan.localNew(a, bantuan.encryptG(data));
}

bantuan.createLocal = async (a) => {
  if (bantuan.localGet(a) != undefined) {
    bantuan.updateLocal(a)
  } else {
    var data = await bantuan.query(`SELECT * FROM ${a}`);
    bantuan.localNew(a, bantuan.encryptG(data));
  }
}
bantuan.escapeHtml = (text) => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

bantuan.callData = function (a) {
  var call = bantuan.decryptG(bantuan.localGet(a));
  return call;
}

bantuan.sentToDecimal = function (a) {
  var b = a.length;
  var c = a.length - 1;
  var d = a.substring(0, c)

  var e = Number(d) / 100;

  return e;
}
bantuan.formatRupiah = function (angka, prefix) {
  if (angka != null) {
    var number = Number(angka).toFixed(2);
    number = number.toString();
    var nomOne = number.toString().substr(0, 1);
    if (nomOne === "-") {
      number = number.toString().substr(1, number.length);
    }
    var data = number.toString()
      .replace(/a/g, '')
      .replace(/A/g, '')
      .replace(/b/g, '')
      .replace(/B/g, '')
      .replace(/c/g, '')
      .replace(/C/g, '')
      .replace(/d/g, '')
      .replace(/D/g, '')
      .replace(/e/g, '')
      .replace(/E/g, '')
      .replace(/f/g, '')
      .replace(/F/g, '')
      .replace(/g/g, '')
      .replace(/G/g, '')
      .replace(/h/g, '')
      .replace(/H/g, '')
      .replace(/i/g, '')
      .replace(/I/g, '')
      .replace(/j/g, '')
      .replace(/J/g, '')
      .replace(/k/g, '')
      .replace(/K/g, '')
      .replace(/l/g, '')
      .replace(/L/g, '')
      .replace(/M/g, '')
      .replace(/m/g, '')
      .replace(/n/g, '')
      .replace(/N/g, '')
      .replace(/o/g, '')
      .replace(/O/g, '')
      .replace(/p/g, '')
      .replace(/P/g, '')
      .replace(/q/g, '')
      .replace(/Q/g, '')
      .replace(/r/g, '')
      .replace(/R/g, '')
      .replace(/s/g, '')
      .replace(/S/g, '')
      .replace(/t/g, '')
      .replace(/T/g, '')
      .replace(/u/g, '')
      .replace(/U/g, '')
      .replace(/v/g, '')
      .replace(/V/g, '')
      .replace(/w/g, '')
      .replace(/W/g, '')
      .replace(/x/g, '')
      .replace(/X/g, '')
      .replace(/y/g, '')
      .replace(/Y/g, '')
      .replace(/z/g, '')
      .replace(/Z/g, '')
      .replace(/\{/g, '')
      .replace(/\}/g, '')
      .replace(/\[/g, '')
      .replace(/\]/g, '')
      .replace(/\:/g, '')
      .replace(/\;/g, '')
      .replace(/\'/g, '')
      .replace(/\"/g, '')
      .replace(/\</g, '')
      .replace(/\>/g, '')
      .replace(/\?/g, '')
      .replace(/\//g, '')
      ;
    data = data.split('.');
    var data1 = data[0];
    var data2 = data[1];
    if (data1.length > 3) {
      data1 = data1.replace(/\,/g, '');
      var sisa = data1.length % 3;
      var depan = data1.substr(0, sisa);
      rupiah = data1.substr(sisa).match(/\d{3}/g);
      if (rupiah != null) {
        rupiah = rupiah.join(',');
      }
      if (rupiah === null) {
        rupiah = '';
      }
      if (data2 != undefined) {
        if (sisa === 0) {
          rupiah = rupiah + '.' + data2;
          if (nomOne === "-") {
            return '( ' + rupiah + ' )';
          } else {
            return rupiah;
          }
        } else {
          rupiah = depan + ',' + rupiah + '.' + data2;
          if (nomOne === "-") {
            return '( ' + rupiah + ' )';
          } else {
            return rupiah;
          }
        }
      } else {
        if (sisa === 0) {
          rupiah = rupiah;
          if (nomOne === "-") {
            return '( ' + rupiah + ' )';
          } else {
            return rupiah;
          }
        } else {
          rupiah = depan + ',' + rupiah;
          if (nomOne === "-") {
            return '( ' + rupiah + ' )';
          } else {
            return rupiah;
          }
        }
      }
    } else {
      if (nomOne === "-") {
        if (data2 != undefined) {
          return '( ' + data1 + '.' + data2 + ' )';
        } else {
          return '( ' + data1 + ' )';
        }
      } else {
        if (data2 != undefined) {
          return data1 + '.' + data2;
        } else {
          return data1;
        }
      }
    }
  } else {
    return 0;
  }
}
bantuan.rowDataLocal = function (a, b, c, d) {
  bantuan.createLocalData(a, 'get-data');
  var tableName = a;
  var id = b;
  var key = c;
  var rowName = d;
  var data = bantuan.decryptG(bantuan.localGet(tableName)).filter(function (item) {
    if (eval(`item.${key}`) === id) {
      return item;
    }
  })[0];
  if (data != undefined) {
    var dataS = eval(`data.${rowName}`);
    return dataS;
  } else {
    return "";
  }
}

bantuan.monthChoice = function (attribut = "", className = "form-control", terpilih = '') {
  var option = `<option value=""> pilih bulan </option>`;
  console.log(terpilih);
  for (var i = 1; i <= 12; i++) {
    if (terpilih == '') {
      if (bantuan.sesiGet('bulan') == bantuan.formatId("00", i)) {
        option += `<option selected value="${bantuan.formatId("00", i)}">${bantuan.formatId("00", i)}</option>`;
      } else {
        option += `<option value="${bantuan.formatId("00", i)}">${bantuan.formatId("00", i)}</option>`;
      }
    } else {
      if (terpilih == bantuan.formatId("00", i)) {
        option += `<option selected value="${bantuan.formatId("00", i)}">${bantuan.formatId("00", i)}</option>`;
      } else {
        option += `<option value="${bantuan.formatId("00", i)}">${bantuan.formatId("00", i)}</option>`;
      }
    }
  }
  return `
      <select ${attribut} class="${className}">
        ${option}
      </select>
    `;
}

bantuan.formatId = function (a, b) {
  var str = "" + b;
  var pad = a;
  var ans = pad.substring(0, pad.length - str.length) + str;
  return ans;
}

bantuan.yearChoice = function (a = 10, attribut = "", className = "form-control") {
  var tahunOpsi = new Date();
  var tahun = tahunOpsi.getFullYear();
  makeList = ``;
  listMakeStart = a;
  for (var i = 0; i <= listMakeStart; i++) {
    var tahunN = tahun - (10 - i);
    if (bantuan.sesiGet('tahun') == tahunN) {
      makeList += `<option selected >${tahunN}</option>`
    } else {
      makeList += `<option>${tahunN}</option>`
    }
  }
  for (var i = 1; i <= listMakeStart; i++) {
    var tahunN = tahun + i;
    if (bantuan.sesiGet('tahun') == tahunN) {
      makeList += `<option selected >${tahunN}</option>`
    } else {
      makeList += `<option>${tahunN}</option>`
    }
  }
  var selectN = `
    <select ${attribut} class="${className}">
      ${makeList}
    </select>
      `;
  return selectN;
}


bantuan.printDiv = function (divName) {
  var divToPrint = document.getElementById(divName);
  var newWin = window.open('', 'Print-Window');
  newWin.document.open();
  newWin.document.write(`
      <html>
        <style type="text/css" media="print">

        @page {
            margin: 0
        }

        body {
            margin: 0
        }

        </style>
        <body onload="window.print()">
          ${divToPrint.innerHTML}
        </body>

      </html>
      `);
  newWin.document.close();
  setTimeout(function () { newWin.close(); }, 10);
}

bantuan.printDivLanscape = function (divName) {
  var divToPrint = document.getElementById(divName);
  var newWin = window.open('', 'Print-Window');
  newWin.document.open();
  newWin.document.write(`
      <html>
        <style type="text/css" media="print">
          @media print{
            @page {
              size: landscape;
              margin: 20mm 10mm 10mm 10mm;
            }
          }
          body
          {
            margin:0;
            padding:0;
            color: black;
          }
        </style>
        <body onload="window.print()">
          ${divToPrint.innerHTML}
        </body>

      </html>
      `);
  newWin.document.close();
  setTimeout(function () { newWin.close(); }, 10);
}

bantuan.getDataTable = async function (a, b = null) {
  var dataA = await bantuan.localGet(a);
  dataA = await bantuan.decryptG(dataA);

  dataA = await dataA.filter(function (res) {
    if (b != null) {
      if (eval(`res.${b.key}`) === b.value) {
        return res;
      }
    } else {
      return res;
    }
  });
  return dataA;
}

bantuan.optionName = function (a, c) {
  var data = bantuan.decryptG(bantuan.localGet(c.table));
  var dataF = data.filter(function (item) {
    if (eval(`item.${c.id}`) == a) {
      return item;
    }
  })[0];
  if (dataF != undefined) {
    return eval(`dataF.${c.nama}`);
  } else {
    return 'N/A';
  }
}

bantuan.optionBackup = {

}

bantuan.option = function (a, b, c, d = "", e) {
  var data = bantuan.decryptG(bantuan.localGet(a));
  var datab = b;
  bantuan.optionBackup[a];
  if (bantuan.optionBackup[a] === undefined || bantuan.optionBackup[a].length != data.length) {
    var datakuopsi = data.filter((item) => {
      var p = {}
      p[c.id] = item[c.id];
      p[c.nama] = item[c.nama];
      return p
    });
    bantuan.optionBackup[a] = {
      length: data.length,
      html: datakuopsi
    }
  } else {
  }
  var html = `<option value="">pilih data</option>`;
  bantuan.optionBackup[a].html.forEach((item) => {
    if (eval(`item.${c.id}`) === datab) {
      html += `<option ${d} data-option="${bantuan.encryptG(e)}" selected value="${eval(`item.${c.id}`)}">${eval(`item.${c.nama}`)}</option>`;
    } else {
      html += `<option ${d} data-option="${bantuan.encryptG(e)}" value="${eval(`item.${c.id}`)}">${eval(`item.${c.nama}`)}</option>`;
    }
  });
  return html;
}
bantuan.loader = function (a) {
  if (a === true) {
    $('body .loader-wrapper').css('display', 'flex');
  } else if (a === false) {
    $('body .loader-wrapper').css('display', 'none');
  }
}
bantuan.makeList = function (a) {
  var data = a;
  var html = ``;
  var option = data.option.map((item, i) => {
    return `<option value="${item.value}">${item.name}</option>`
  }).forEach((item) => {
    html += item;
  })
  return `
        <select ${data.attr}>
          ${html}
        </select>
    `;
}
// bantuan.baseurl = `http://192.168.161.100/accounting_server/accounting_server/data.php?key=`;
bantuan.createLocalData2 = async function (a, url) {
  if (localStorage.getItem(a) == null) {
    var params = new URLSearchParams();
    var data = {
      table: "data_barang",
      limit: 0,
      length: 10
    }
    params.append('table', JSON.stringify(data));
    var dataAkun = await axios.post(bantuan.baseurl + url, params)
      .then(res => {
        var newArr = [];
        res.data.forEach((item, i) => {
          newArr.push(JSON.parse(item));
        })
        bantuan.localNew(a, bantuan.encryptG(newArr));
      });
  }
}
bantuan.query = async function (a, tipe = "data", url = "query", func = undefined) {
  var params = new URLSearchParams();
  params.append('query', a);
  params.append('lenght', tipe);
  var dataAkun = await axios.post(bantuan.baseurl + url, params);
  if (func != undefined) {
    func(dataAkun.data);
  } else {
    return dataAkun.data;
  }
}
bantuan.createLocalData = async function (a, url) {
  if (localStorage.getItem(a) == null) {
    var params = new URLSearchParams();
    params.append('table', a);
    var dataAkun = await axios.post(bantuan.baseurl + url, params)
      .then(res => {
        console.log(res.data);
        bantuan.localNew(a, bantuan.encryptG(res.data));
      });
  }
}
bantuan.template = async function (a) {
  var data = await axios.get(a);
  main.html(data.data);
}
bantuan.dateKnow = function () {
  var newDate = new Date();
  var year = newDate.getFullYear();
  var month = (newDate.getMonth() + 1) + '';
  var day = (newDate.getDate()) + '';
  var format = '00';
  var ansMonth = format.substring(0, format.length - month.length) + month;
  var ansDay = format.substring(0, format.length - day.length) + day;
  var dayKnow = year + '-' + ansMonth + '-' + ansDay;
  return dayKnow;
}
bantuan.createOpsiPilihan = (table, id, text, attr) => {
  var getdata = bantuan.decryptG(bantuan.localGet(table));
  return `
      <select ${attr}>
        <option value="">Pilih</option>
        ${getdata.map((item) => {
    return `<option value="${item[id]}">${item[text]}</option>`
  }).join("")}
      </select>
    `
}
bantuan.tanggal = function (a) {
  var newDate = new Date();
  if (a != undefined) {
    if (a === "gugus") {
      newDate = new Date(`${bantuan.sesiGet('tahun')}-${bantuan.sesiGet('bulan')}`);
    } else {
      newDate = new Date(a);
    }
  }
  var namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  function buat(newDate) {
    var year = newDate.getFullYear();
    var month = (newDate.getMonth() + 1) + '';
    var day = (newDate.getDate()) + '';
    var format = '00';
    var ansMonth = format.substring(0, format.length - month.length) + month;
    var ansDay = format.substring(0, format.length - day.length) + day;
    var dayKnow = ansDay + '-' + ansMonth + '-' + year;
    if (a == null) {
      return "";
    } else {
      return dayKnow;
    }
  }
  function buatN(newDate) {
    var year = newDate.getFullYear();
    var month = newDate.getMonth();
    var day = (newDate.getDate()) + '';
    var format = '00';
    var ansMonth = namaBulan[month];
    var ansDay = format.substring(0, format.length - day.length) + day;
    var dayKnow = ansDay + ' ' + ansMonth + ' ' + year;
    if (a == null) {
      return "";
    } else {
      return dayKnow;
    }
  }
  function buatO(newDate) {
    var year = newDate.getFullYear();
    var month = (newDate.getMonth() + 1) + '';
    var day = (newDate.getDate()) + '';
    var format = '00';
    var ansMonth = format.substring(0, format.length - month.length) + month;
    var ansDay = format.substring(0, format.length - day.length) + day;
    var dayKnow = year + '-' + ansMonth + '-' + ansDay;
    return dayKnow;
  }
  function buatNum(newDate) {
    var year = newDate.getFullYear();
    var month = (newDate.getMonth() + 1) + '';
    var day = (newDate.getDate()) + '';
    var format = '00';
    var ansMonth = format.substring(0, format.length - month.length) + month;
    var ansDay = format.substring(0, format.length - day.length) + day;
    var dayKnow = year + ansMonth + ansDay;
    return Number(dayKnow);
  }
  function buatC(newDate) {
    var year = newDate.getFullYear();
    var month = newDate.getMonth();
    var day = newDate.getDate();
    var dateK = new Date(year, month, day);
    return dateK;
  }
  var date = new Date(), y = date.getFullYear(), m = date.getMonth();
  var firstDay = new Date(newDate.getFullYear(), newDate.getMonth(), 1);
  var lastDay = new Date(newDate.getFullYear(), newDate.getMonth() + 1, 0)
  var returnData = {
    normal: buatO(newDate),
    cek1: buatC(newDate),
    sekarang: buat(newDate),
    sekarang2: buatN(newDate),
    cek2: buatC(firstDay),
    normal2: buatO(firstDay),
    awal: buat(firstDay),
    awal2: buatN(firstDay),
    akhir: buat(lastDay),
    akhir2: buatN(lastDay),
    cek3: buatC(lastDay),
    normal3: buatO(lastDay),
    angka: buatNum(newDate)
  }
  return returnData;
}
bantuan.localNew = function (a, b) {
  localStorage.setItem(a, b);
}
bantuan.localGet = function (a) {
  return localStorage.getItem(a);
}
bantuan.sesiNew = function (a, b) {
  sessionStorage.setItem(a, b);
}
bantuan.clearHistory = () => {
  if (sessionStorage.getItem('back-last') != null) {
    sessionStorage.removeItem('back-last');
  }
}
bantuan.sesiN = (a, b) => {
  b = JSON.stringify(b);
  var data = bantuan.encryptG(b);
  sessionStorage.setItem(a, data);
}
bantuan.sesiG = (a) => {
  var data = sessionStorage.getItem(a);
  if (data != undefined) {
    return JSON.parse(bantuan.decryptG(data));
  } else {
    return data
  }
}
bantuan.sesiGet = function (a) {
  return sessionStorage.getItem(a);
}
bantuan.encryptG = function (data) {
  var dataB = JSON.stringify(data);
  return CryptoJS.AES.encrypt(dataB, "Secret Passphrase").toString();
}
bantuan.decryptG = function (data) {
  return JSON.parse(CryptoJS.AES.decrypt(data, "Secret Passphrase").toString(CryptoJS.enc.Utf8));
}
bantuan.namaBulan = (a) => {
  if (a.toString() === "01") {
    return "Januari"
  }
  if (a.toString() === "02") {
    return "Februari"
  }
  if (a.toString() === "03") {
    return "Maret"
  }
  if (a.toString() === "04") {
    return "April"
  }
  if (a.toString() === "05") {
    return "Mei"
  }
  if (a.toString() === "06") {
    return "Juni"
  }
  if (a.toString() === "07") {
    return "Juli"
  }
  if (a.toString() === "08") {
    return "Agustus"
  }
  if (a.toString() === "09") {
    return "September"
  }
  if (a.toString() === "10") {
    return "Oktober"
  }
  if (a.toString() === "11") {
    return "November"
  }
  if (a.toString() === "12") {
    return "Desember"
  }
}
bantuan.bulanSekarang = () => {
  return bantuan.namaBulan(bantuan.sesiGet('bulan'));
}
bantuan.bulanSelect = (a = '') => {
  bantuan.sesiNew('bulan', bantuan.formatAngka('00', 1));
  html = `<div class="form-control">`;
  html = `<select bulan-action ${a}>`;
  html += `<option value="">All</option>`;
  for (var index = 0; index < 12; index++) {
    if (index === 0) {
      html += `<option selected value="${bantuan.formatAngka('00', index + 1)}"> ${bantuan.namaBulan(bantuan.formatAngka('00', index + 1))} </option>`;
    } else {
      html += `<option value="${bantuan.formatAngka('00', index + 1)}"> ${bantuan.namaBulan(bantuan.formatAngka('00', index + 1))} </option>`;
    }
  }
  html += `</select>`;
  html += `</div>`;
  return html;
}
