var data = {
  first_name: "Kuvaleis",
  last_name: "Rubey",
  email: "Chrodk1idcz@gmail.com",
  cellphone: "10000004034",
  origin: "dolorem",
};

function Register() {
  var res;
  fetch("https://www.vnet.com.ve/api/contact-me", {
    method: "POST",
    body: JSON.stringify(data),
    _headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    get headers() {
      return this._headers;
    },
    set headers(value) {
      this._headers = value;
    },
  })
  .then((response) => {
    res={
      body:response.body,
      bodyUsed:response.bodyUsed,
      headers:response.headers,
      ok:response.ok,
      status:response.status,
      statusText:response.statusText,
      type:response.type,
      url:response.url
    }
    return response.json();
  }).then(function (json) {
    console.log({...res, data: json})
  });
}
