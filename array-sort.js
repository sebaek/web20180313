$(function () {
  var datas = [
    {
      "fname": "Phuong",
      "lname": "Lamsargis",
      "company": "Ramsey and Sons",
      "email": "SAlbright@etiam.com",
      "pw": "u8EQvZCq",
      "phone": "4138152035",
      "desc": "ante vestibulum ipsum aenean nec mattis in vitae vitae massa"
    },
    {
      "fname": "Asif",
      "lname": "Kirkley",
      "company": "Elbattah and Sons",
      "email": "GRadke@aenean.com",
      "pw": "24UZSGaL",
      "phone": "9878018221",
      "desc": "consectetur pretium consequat sit nunc sit at lorem massa sed"
    },
    {
      "fname": "Anthony",
      "lname": "Chandrasekahran",
      "company": "Brooks Shipping",
      "email": "JWaldman@ipsum.net",
      "pw": "55zm6soV",
      "phone": "2771220877",
      "desc": "porta vel tortor vitae mi ac etiam egestas sagittis vitae"
    },
    {
      "fname": "Lorenzo",
      "lname": "Peck",
      "company": "David Global",
      "email": "VFouts@amet.net",
      "pw": "lEC5glDB",
      "phone": "1529054891",
      "desc": "odio id sit et amet hendrerit amet pretium aenean fringilla"
    },
    {
      "fname": "Gail",
      "lname": "Caudill",
      "company": "Mann Foods",
      "email": "TBreeland@hendrerit.net",
      "pw": "x0MVO56W",
      "phone": "2272903132",
      "desc": "consequat eros amet eget amet elementum magna eget aliquam vitae"
    },
    {
      "fname": "Fredric",
      "lname": "Brandenburg",
      "company": "Smyth Corporation",
      "email": "HZazzara@lacus.org",
      "pw": "94O8lb2c",
      "phone": "9088005686",
      "desc": "quis sed eros pharetra sed eget velit sit consectetur dui"
    },
    {
      "fname": "Keisha",
      "lname": "Dunn",
      "company": "Cookson LLC",
      "email": "FPerrera@ipsum.org",
      "pw": "lrmySF8h",
      "phone": "5559364831",
      "desc": "rutrum vestibulum eget orci neque eget vitae neque eros nunc"
    },
    {
      "fname": "Vivian",
      "lname": "Knaus",
      "company": "Carey Computing",
      "email": "JSherwood@sollicitudin.com",
      "pw": "2HLEVHc5",
      "phone": "3602150499",
      "desc": "hendrerit elit vestibulum et nunc amet adipiscing sollicitudin sed sit"
    },
    {
      "fname": "Monique",
      "lname": "Hudson",
      "company": "Roazen Technologies",
      "email": "AWild@velit.com",
      "pw": "aPA1Kssc",
      "phone": "6787120469",
      "desc": "pulvinar nunc elementum facilisis egestas molestie etiam morbi donec mi"
    },
    {
      "fname": "Allana",
      "lname": "Studenka",
      "company": "Bunker and Sons",
      "email": "DHopper@tempor.com",
      "pw": "i90vugfL",
      "phone": "9253697077",
      "desc": "sollicitudin nec lectus at nullam molestie suspendisse vitae lacus nec"
    }
  ];
  $.each(datas, function (i, data) {
    $("#result").append(
      "<tr>"
      + "<td>"
      + data.fname
      + "</td>"
      + "<td>"
      + data.lname
      + "</td>"
      + "<td>"
      + data.email
      + "</td>"
      + "<td>"
      + data.pw
      + "</td>"
      + "<td>"
      + data.phone
      + "</td>"
      + "<td>"
      + data.company
      + "</td>"
      + "<td>"
      + data.desc
      + "</td>"
      + "</tr>"
    );
  });

  $("th").click(function () {
    var order = $(this).attr("my-data-sort-order");
    var col = $(this).attr("my-data-sort-col");
    if (!order) {
      $(this).attr("my-data-sort-order", "asc");
    } else {
      if (order === "asc") {
        $(this).attr("my-data-sort-order", "desc");
      } else {
        $(this).attr("my-data-sort-order", "asc");
      }
    }

    console.log(col);
    datas.sort(function (a, b) {
      if (order === "asc") {
        if (a[col].toLowerCase() < b[col].toLowerCase()) {
          return 1;
        } else if (a[col].toLowerCase() > b[col].toLowerCase()) {
          return -1;
        } else {
          return 0;
        }
      } else {
        if (a[col].toLowerCase() < b[col].toLowerCase()) {
          return -1;
        } else if (a[col].toLowerCase() > b[col].toLowerCase()) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    console.log(datas);
    $("#result tr:not('#my-table-heading-row')").remove();

    $.each(datas, function (i, data) {
      // console.log(data.fname);
      $("#result").append(
        "<tr>"
        + "<td>"
        + data.fname
        + "</td>"
        + "<td>"
        + data.lname
        + "</td>"
        + "<td>"
        + data.email
        + "</td>"
        + "<td>"
        + data.pw
        + "</td>"
        + "<td>"
        + data.phone
        + "</td>"
        + "<td>"
        + data.company
        + "</td>"
        + "<td>"
        + data.desc
        + "</td>"
        + "</tr>"
      );
    });

  });

});