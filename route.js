var domLoadData = document.getElementById('app');



function callMaster(a, func) {
  var datesMM = function () {
    return new Date().getTime();
  }
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.src = `./appv09031997bygugusd999/${a}.js`;
  // script.src = `./appv09031997bygugusd999/${a}.js?v=${datesMM()}`;
  head.appendChild(script);

  script.onload = () => {
    func();
  }

}

callMaster('jquery', function () {
  callMaster('axios', function () {
    callMaster('helper', function () {
      callMaster('aes', function () {
        callMaster('bantuan', function () {
          callMaster('mysql', function () {


            var routeconf = '';
            var routeconf2 = '';

            const rootDir = '';
            // const rootDir = '/igeiatech.github.io/';

            var datesMM = function () {
              return new Date().getTime();
            }

            var newCount = 0;

            // const times = helper.tanggal().angka;
            const times = datesMM();
            const timess = '';

            const rootPageData = {}

            function delay(callback, ms) {
              var timer = 0;
              return function () {
                var context = this,
                  args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function () {
                  callback.apply(context, args);
                }, ms || 0);
              };
            }

            const loadJs = function (a = [], func) {
              $('#loadjs script').remove();

              var protocol = location.protocol;

              var host = location.host;

              var baseUrl = './appv09031997bygugusd999/';

              var panjangScript = a.length;

              var saatIniUrutan = 0;

              function loadScript() {

                var script = document.createElement('script');
                script.src = `${baseUrl + rootDir + a[saatIniUrutan]}.js`;
                // script.src = `${baseUrl + rootDir + a[saatIniUrutan]}.js?v=` + times;
                document.getElementById('loadjs').appendChild(script);
                script.onload = () => {
                  saatIniUrutan += 1;
                  if (saatIniUrutan < panjangScript) {
                    loadScript()
                  } else {
                    jQuery(document).ready(async function ($) {
                      await func();
                    });
                  }
                }
              }
              loadScript();
            };


            const js = function (a = [], func) {

              if (routeconf2 != JSON.stringify(a)) {

                routeconf2 = JSON.stringify(a);

                var protocol = location.protocol;

                var host = location.host;

                var baseUrl = './appv09031997bygugusd999/';

                var panjangScript = a.length;

                var saatIniUrutan = 0;

                function loadScript() {

                  var script = document.createElement('script');
                  script.src = `${baseUrl + rootDir + a[saatIniUrutan]}.js`;
                  // script.src = `${baseUrl + rootDir + a[saatIniUrutan]}.js?v=` + times;
                  document.getElementById('loadjs').appendChild(script);
                  script.onload = () => {
                    saatIniUrutan += 1;
                    if (saatIniUrutan < panjangScript) {
                      loadScript()
                    } else {
                      jQuery(document).ready(async function ($) {
                        await func();
                      });
                    }
                  }
                }
                loadScript();
              } else {
                func();
              }
            };


            const loadCss = function (a = [], func) {

              if (routeconf != JSON.stringify(a)) {

                routeconf = JSON.stringify(a);

                $('link').remove();

                function loadCssFile(filename) {
                  var linkElement = document.createElement("link");
                  linkElement.setAttribute("rel", "stylesheet");
                  linkElement.setAttribute("type", "text/css");
                  linkElement.setAttribute("href", filename);
                  document.getElementsByTagName("head")[0].appendChild(linkElement);
                }

                var protocol = location.protocol;

                var host = location.host;

                var baseUrl = './appv09031997bygugusd999/';

                var panjangScript = a.length;

                var saatIniUrutan = 0;

                function loadScript() {

                  var linkElement = document.createElement("link");
                  linkElement.setAttribute("rel", "stylesheet");
                  linkElement.setAttribute("type", "text/css");
                  linkElement.setAttribute("href", `${baseUrl + rootDir + a[saatIniUrutan]}.css`);
                  // linkElement.setAttribute("href", `${baseUrl + rootDir + a[saatIniUrutan]}.css?v=` + timess);
                  document.getElementsByTagName("head")[0].appendChild(linkElement);

                  linkElement.onload = () => {
                    saatIniUrutan += 1;
                    if (saatIniUrutan < panjangScript) {
                      loadScript()
                    } else {
                      jQuery(document).ready(async function ($) {
                        await func();
                      });
                    }
                  }
                }

                loadScript();
              } else {
                func()
              }
            };

            const callPage = function (a) {

              var protocol = location.protocol;

              var host = location.host;

              var baseUrl = './appv09031997bygugusd999/';

              axios.get(baseUrl + a + '.js?v=' + times).then(function (res) {
                rootPageData[a] = res.data;
              }, function (error) { })
            };

            const loadPage = function (a, func) {

              var panjang = a.length;

              helper.html = [];

              var numR = 0;

              function call() {

                var protocol = location.protocol;

                var host = location.host;

                var baseUrl = './appv09031997bygugusd999/';

                var url = baseUrl + rootDir + a[numR] + '.htm?v=' + times;

                axios.get(url).then(function (res) {
                  helper.html[numR] = res.data;
                  numR += 1;
                  if (numR === panjang) {
                    helper.page = document.getElementById('root');
                    setTimeout(() => {
                      jQuery(document).ready(function ($) {
                        func();
                      });
                    }, 100)
                  } else {
                    call();
                  }
                }, function (error) { })
              }
              call()
            };

            var historyRoot = 0;

            const fuckMan = delay(function (b) {
              jQuery(document).ready(async function ($) {
                await helper.fungsiBaru.apply(null, b);
                if (helper.func != null) {
                  helper.func();
                }
              });
            }, 100);

            const rootCall = async function (a, b, func = null) {

              axios.get('./appv09031997bygugusd999/' + a + '.js?v=' + datesMM())
                .then(response => {
                  return response.data
                })
                .then(data => {
                  $(document).ready(async function () {
                    try {

                      eval(
                        `
                          class Controller{
                            constructor(){
                              this.prop = '';
                              this.helper = {}
                              this.page = null;
                              this.html = null;
                              this.db = null;
                            }

                            getid(aw){
                              return document.getElementById(aw);
                            }


                            submit(dd = 'Submit', fc = "btn btn-primary"){
                              return '<button type="submit" class="'+fc+'">'+dd+'</button>';
                            }

                            input(data){

                              var value = "";
                              if (data.value != undefined) {
                                  value = data.value;
                              }

                              var name = "";
                              if (data.name != undefined) {
                                  name = data.name;
                              }

                              var type = "";
                              if (data.type != undefined) {
                                  type = data.type;
                              }

                              var placeholder = "";
                              if (data.placeholder != undefined) {
                                  placeholder = data.placeholder;
                              }

                              var ck = '<div class="form-group">';
                              ck += '<label>';
                              ck += data.title;
                              ck += '</label>';
                              ck += '<input type="';
                              ck += type;
                              ck += '" class="form-control" name="';
                              ck += name;
                              ck += '" placeholder="';
                              ck += placeholder;
                              ck += '" value="';
                              ck += value;
                              ck += '" />';
                              ck += '</div>';

                              return ck;

                          }

                            properties(b){
                              this.prop = b;
                            }
                            helpercall(c){
                              this.helper = c;
                            }
                            dbnew(c){
                              this.db = c;
                            }
                            ${data}
                            loadhtml(){
                              this.page = this.helper.page;
                              this.html = this.helper.html;
                              this.page.innerHTML = '';
                              this.page.innerHTML += '<div style="';
                              this.page.innerHTML += 'position: fixed;';
                              this.page.innerHTML += 'display: block;';
                              this.page.innerHTML += 'width: 100vw;';
                              this.page.innerHTML += 'height: 100vh;';
                              this.page.innerHTML += 'overflow: hidden;';
                              this.page.innerHTML += 'overflow-y: auto;';
                              this.page.innerHTML += 'top: 0;';
                              this.page.innerHTML += 'left: 0;';
                              this.page.innerHTML += '">';
                              this.page.innerHTML += this.html.join('');
                              this.page.innerHTML += '</div>';
                              $('.loader').css('display', 'none');
                              window.scrollTo(0, 0);
                              if ('scrollRestoration' in history) {
                                history.scrollRestoration = 'manual';
                              }
                            }
                          }
                            var dd = new Controller();
                            dd.properties(b);
                            dd.helpercall(helper);
                            dd.dbnew(DB);
                            dd.loadhtml();
                            dd.run();
                            cf.fn = function (ff = '', arg = '') {
                              var dd = new Controller();
                              dd.properties(b);
                              dd.helpercall(helper);
                              dd.dbnew(DB);
                              dd[ff](arg);
                            }

                          `
                      );

                      newCount += Number(1);
                    } catch (rejectedValue) {
                      rootCall(a, b);
                    }
                  })
                })
                .catch(error => {
                  console.log(error.response.data.error)
                })
            };
            var root = {}
            // data rooting
            root.data = {}
            root.verifydata = {}
            root.verifydata.data = {}

            root.navSelect = function (a) { }

            root.get = function (a, func, verify = false) {
              root.data['#' + a] = func, 100;
              root.verifydata.data['#' + a] = verify;
            }

            root.start = function (a) {

              $('.loader').css('display', 'flex');
              newCount = 0;
              document.getElementById('preload').setAttribute('class', 'transition');

              var location = window.location;
              if (location.hash != "") {
                var link = location.hash;
                var target = location.hash;

                var [a, b] = target.split('/');

                var moc = a + '/' + b;

                var rootKey = Object.keys(root.data);
                rootKey = rootKey.filter(function (item) {
                  if (moc === item) {
                    return item;
                  }
                })[0];
                target = target.replace(rootKey, "").split("/");
                var sif = target.shift();
                window.location.hash = link;
                if (root.data[rootKey] != undefined) {
                  if (root.verifydata.data[rootKey] === true) {
                    if (root.verify(rootKey) != false) {
                      root.verify(rootKey)
                    } else {
                      root.data[rootKey].apply(null, target);
                    }
                  } else if (root.verifydata.data[rootKey] === false) {
                    root.data[rootKey].apply(null, target);
                  }
                } else {
                  root.err();
                }
              } else {
                location.hash = "#" + a;
                var link = location.hash;
                var target = location.hash;

                var [a, b] = target.split('/');

                var moc = a + '/' + b;

                var rootKey = Object.keys(root.data);
                rootKey = rootKey.filter(function (item) {
                  if (moc === item) {
                    return item;
                  }
                })[0];
                target = target.replace(rootKey, "").split("/");
                target.shift();

                window.location.hash = link;
                if (root.data[rootKey] != undefined) {
                  if (root.verifydata.data[rootKey] === true) {
                    if (root.verify(rootKey) != false) {
                      root.verify(rootKey)
                    } else {
                      root.data[rootKey].apply(null, target);
                      root.navSelect(link);
                    }
                  } else if (root.verifydata.data[rootKey] === false) {
                    root.data[rootKey].apply(null, target);
                    root.navSelect(link);
                  }
                } else {
                  root.err();
                }
              }
            }

            window.onhashchange = function () {
              helper.html = '';
              newCount = 0;
              $('.loader').css('display', 'flex');

              setTimeout(function () {

                var link = location.hash;
                var target = location.hash;

                var [a, b] = target.split('/');

                var moc = a + '/' + b;

                var rootKey = Object.keys(root.data);
                rootKey = rootKey.filter(function (item) {
                  if (moc === item) {
                    return item;
                  }
                })[0];


                target = target.replace(rootKey, "").split("/");

                target.shift();

                window.location.hash = link;
                if (root.data[rootKey] != undefined) {
                  if (root.verifydata.data[rootKey] === true) {
                    if (root.verify(rootKey) != false) {
                      root.verify(rootKey)
                    } else {
                      root.data[rootKey].apply(null, target);
                      root.navSelect(link);
                    }
                  } else if (root.verifydata.data[rootKey] === false) {
                    root.data[rootKey].apply(null, target);
                    root.navSelect(link);
                  }
                } else {
                  root.err();
                }

              }, 100)
            }

            $('body').on('click', '[root]', function (event) {
              event.preventDefault()
              var link = '#' + event.target.getAttribute('root');
              window.location.hash = link;
            })

            $(document).on("click", "[back]", function (event) {
              event.preventDefault();
              window.history.back();
            })

            var helper = {};


            helper.siteurl = function (a) {
              var host = location.origin + '/#/' + a;
              return host;
            }



            helper.formatAngka = function (a, b) {
              var newA = b + '';
              var format = a;
              var dataNew = a.substring(0, format.length - newA.length) + newA;
              return dataNew;
            }

            helper.potongText = function (a, b, c) {
              var data = a.substring(b, c);
              return data;
            }

            helper.backup = {}

            helper.updateLocal = async (a) => {
              var data = await helper.query(`SELECT * FROM ${a}`);
              helper.localNew(a, helper.encryptG(data));
            }

            helper.createLocal = async (a) => {
              if (helper.localGet(a) != undefined) {
                helper.updateLocal(a)
              } else {
                var data = await helper.query(`SELECT * FROM ${a}`);
                helper.localNew(a, helper.encryptG(data));
              }
            }
            helper.escapeHtml = (text) => {
              return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
            }

            helper.callData = function (a) {
              var call = helper.decryptG(helper.localGet(a));
              return call;
            }

            helper.sentToDecimal = function (a) {
              var b = a.length;
              var c = a.length - 1;
              var d = a.substring(0, c)

              var e = Number(d) / 100;

              return e;
            }
            helper.formatRupiah = function (angka, prefix) {
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
                  .replace(/\//g, '');
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
            helper.rowDataLocal = function (a, b, c, d) {
              helper.createLocalData(a, 'get-data');
              var tableName = a;
              var id = b;
              var key = c;
              var rowName = d;
              var data = helper.decryptG(helper.localGet(tableName)).filter(function (item) {
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

            helper.monthChoice = function (attribut = "", className = "form-control", terpilih = '') {
              var option = `<option value=""> pilih bulan </option>`;
              console.log(terpilih);
              for (var i = 1; i <= 12; i++) {
                if (terpilih == '') {
                  if (helper.sesiGet('bulan') == helper.formatId("00", i)) {
                    option += `<option selected value="${helper.formatId("00", i)}">${helper.formatId("00", i)}</option>`;
                  } else {
                    option += `<option value="${helper.formatId("00", i)}">${helper.formatId("00", i)}</option>`;
                  }
                } else {
                  if (terpilih == helper.formatId("00", i)) {
                    option += `<option selected value="${helper.formatId("00", i)}">${helper.formatId("00", i)}</option>`;
                  } else {
                    option += `<option value="${helper.formatId("00", i)}">${helper.formatId("00", i)}</option>`;
                  }
                }
              }
              return `
      <select ${attribut} class="${className}">
        ${option}
      </select>
    `;
            }

            helper.formatId = function (a, b) {
              var str = "" + b;
              var pad = a;
              var ans = pad.substring(0, pad.length - str.length) + str;
              return ans;
            }

            helper.yearChoice = function (a = 10, attribut = "", className = "form-control") {
              var tahunOpsi = new Date();
              var tahun = tahunOpsi.getFullYear();
              makeList = ``;
              listMakeStart = a;
              for (var i = 0; i <= listMakeStart; i++) {
                var tahunN = tahun - (10 - i);
                if (helper.sesiGet('tahun') == tahunN) {
                  makeList += `<option selected >${tahunN}</option>`
                } else {
                  makeList += `<option>${tahunN}</option>`
                }
              }
              for (var i = 1; i <= listMakeStart; i++) {
                var tahunN = tahun + i;
                if (helper.sesiGet('tahun') == tahunN) {
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


            helper.printDiv = function (divName) {
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
              setTimeout(function () {
                newWin.close();
              }, 10);
            }

            helper.printDivLanscape = function (divName) {
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
              setTimeout(function () {
                newWin.close();
              }, 10);
            }

            helper.getDataTable = async function (a, b = null) {
              var dataA = await helper.localGet(a);
              dataA = await helper.decryptG(dataA);

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

            helper.optionName = function (a, c) {
              var data = helper.decryptG(helper.localGet(c.table));
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

            helper.optionBackup = {

            }

            helper.option = function (a, b, c, d = "", e) {
              var data = helper.decryptG(helper.localGet(a));
              var datab = b;
              helper.optionBackup[a];
              if (helper.optionBackup[a] === undefined || helper.optionBackup[a].length != data.length) {
                var datakuopsi = data.filter((item) => {
                  var p = {}
                  p[c.id] = item[c.id];
                  p[c.nama] = item[c.nama];
                  return p
                });
                helper.optionBackup[a] = {
                  length: data.length,
                  html: datakuopsi
                }
              } else { }
              var html = `<option value="">pilih data</option>`;
              helper.optionBackup[a].html.forEach((item) => {
                if (eval(`item.${c.id}`) === datab) {
                  html += `<option ${d} data-option="${helper.encryptG(e)}" selected value="${eval(`item.${c.id}`)}">${eval(`item.${c.nama}`)}</option>`;
                } else {
                  html += `<option ${d} data-option="${helper.encryptG(e)}" value="${eval(`item.${c.id}`)}">${eval(`item.${c.nama}`)}</option>`;
                }
              });
              return html;
            }
            helper.loader = function (a) {
              if (a === true) {
                $('body .loader-wrapper').css('display', 'flex');
              } else if (a === false) {
                $('body .loader-wrapper').css('display', 'none');
              }
            }
            helper.makeList = function (a) {
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
            // helper.baseurl = `http://192.168.161.100/accounting_server/accounting_server/data.php?key=`;
            helper.createLocalData2 = async function (a, url) {
              if (localStorage.getItem(a) == null) {
                var params = new URLSearchParams();
                var data = {
                  table: "data_barang",
                  limit: 0,
                  length: 10
                }
                params.append('table', JSON.stringify(data));
                var dataAkun = await axios.post(helper.baseurl + url, params)
                  .then(res => {
                    var newArr = [];
                    res.data.forEach((item, i) => {
                      newArr.push(JSON.parse(item));
                    })
                    helper.localNew(a, helper.encryptG(newArr));
                  });
              }
            }
            helper.query = async function (a, tipe = "data", url = "query", func = undefined) {
              var params = new URLSearchParams();
              params.append('query', a);
              params.append('lenght', tipe);
              var dataAkun = await axios.post(helper.baseurl + url, params);
              if (func != undefined) {
                func(dataAkun.data);
              } else {
                return dataAkun.data;
              }
            }
            helper.createLocalData = async function (a, url) {
              if (localStorage.getItem(a) == null) {
                var params = new URLSearchParams();
                params.append('table', a);
                var dataAkun = await axios.post(helper.baseurl + url, params)
                  .then(res => {
                    console.log(res.data);
                    helper.localNew(a, helper.encryptG(res.data));
                  });
              }
            }
            helper.template = async function (a) {
              var data = await axios.get(a);
              main.html(data.data);
            }
            helper.dateKnow = function () {
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
            helper.createOpsiPilihan = (table, id, text, attr) => {
              var getdata = helper.decryptG(helper.localGet(table));
              return `
      <select ${attr}>
        <option value="">Pilih</option>
        ${getdata.map((item) => {
                return `<option value="${item[id]}">${item[text]}</option>`
              }).join("")}
      </select>
    `
            }
            helper.tanggal = function (a) {
              var newDate = new Date();
              if (a != undefined) {
                if (a === "gugus") {
                  newDate = new Date(`${helper.sesiGet('tahun')}-${helper.sesiGet('bulan')}`);
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

              helper.times = function () {
                var d = new Date();
                var n = d.getHours();
                var m = d.getMinutes();
                var sec = d.getSeconds();
                return n + ':' + helper.formatAngka('00', m) + ':' + helper.formatAngka('00', sec);
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
              var date = new Date(),
                y = date.getFullYear(),
                m = date.getMonth();
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
            helper.localNew = function (a, b) {
              localStorage.setItem(a, b);
            }
            helper.localGet = function (a) {
              return localStorage.getItem(a);
            }
            helper.sesiNew = function (a, b) {
              sessionStorage.setItem(a, b);
            }
            helper.clearHistory = () => {
              if (sessionStorage.getItem('back-last') != null) {
                sessionStorage.removeItem('back-last');
              }
            }
            helper.sesiN = (a, b) => {
              b = JSON.stringify(b);
              var data = helper.encryptG(b);
              sessionStorage.setItem(a, data);
            }
            helper.sesiG = (a) => {
              var data = sessionStorage.getItem(a);
              if (data != undefined) {
                return JSON.parse(helper.decryptG(data));
              } else {
                return data
              }
            }
            helper.sesiGet = function (a) {
              return sessionStorage.getItem(a);
            }
            helper.encryptG = function (data) {
              var dataB = JSON.stringify(data);
              return CryptoJS.AES.encrypt(dataB, "Secret Passphrase").toString();
            }
            helper.decryptG = function (data) {
              return JSON.parse(CryptoJS.AES.decrypt(data, "Secret Passphrase").toString(CryptoJS.enc.Utf8));
            }
            helper.namaBulan = (a) => {
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
            helper.bulanSekarang = () => {
              return helper.namaBulan(helper.sesiGet('bulan'));
            }

            helper.bulanSelect = (a = '') => {
              helper.sesiNew('bulan', helper.formatAngka('00', 1));
              html = `<div class="form-control">`;
              html = `<select bulan-action ${a}>`;
              html += `<option value="">All</option>`;
              for (var index = 0; index < 12; index++) {
                if (index === 0) {
                  html += `<option selected value="${helper.formatAngka('00', index + 1)}"> ${helper.namaBulan(helper.formatAngka('00', index + 1))} </option>`;
                } else {
                  html += `<option value="${helper.formatAngka('00', index + 1)}"> ${helper.namaBulan(helper.formatAngka('00', index + 1))} </option>`;
                }
              }
              html += `</select>`;
              html += `</div>`;
              return html;
            }

            function laila() {
              alert('sibuk')
            }

            helper.formData = function (el) {
              var obj = {}

              var c = new FormData(el);

              for (var pair of c.entries()) {
                obj[pair[0]] = pair[1];
              }

              return obj;
            }

            setTimeout(function () {
              axios.get('./appv09031997bygugusd999/route-config.js?v=' + datesMM())
                .then(function (data) {
                  eval(data.data);
                })

            }, 100);
          })
        })
      })
    })
  })
})

// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// });

// document.onkeydown = function (e) {
//   if (event.keyCode == 123) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//     return false;
//   }
//   if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//     return false;
//   }
// }


// function delay(callback, ms) {
//   var timer = 0;
//   return function () {
//     var context = this, args = arguments;
//     clearTimeout(timer);
//     timer = setTimeout(function () {
//       callback.apply(context, args);
//     }, ms || 0);
//   };
// }

// window.onresize = delay(function () {

//   if ((window.outerWidth - window.innerWidth) > 250) {
//     document.body.innerHTML = ``;
//     Array.from(document.getElementsByTagName('script')).forEach(function (item) {
//       item.remove()
//     })
//     Array.from(document.getElementsByTagName('link')).forEach(function (item) {
//       item.remove()
//     })
//   }

//   if ((window.outerHeight - window.innerHeight) > 250) {
//     document.body.innerHTML = ``;
//     Array.from(document.getElementsByTagName('script')).forEach(function (item) {
//       item.remove()
//     })
//     Array.from(document.getElementsByTagName('link')).forEach(function (item) {
//       item.remove()
//     })
//   }
// }, 1000);

// eval(function (p, a, c, k, e, d) { e = function (c) { return c.toString(36) }; if (!''.replace(/^/, String)) { while (c--) { d[c.toString(a)] = k[c] || c.toString(a) } k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) { if (k[c]) { p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]) } } return p }('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();', 17, 17, '||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'), 0, {}))