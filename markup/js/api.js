const Method = {
  GET: `GET`,
  PUT: `PUT`,
  POST: `POST`,
  DELETE: `DELETE`
};

const SuccessHTTPStatusRange = {
  MIN: 200,
  MAX: 299
};

class Api {
  constructor(endPoint) {
    this._endPoint = endPoint;
    //this._authorization = authorization;
  }

  getTimeTable() {
    return this._load({
        url: `timetable`
    })
        .then(Api.toJSON);
  }

  getTAs() {
    return this._load({
      url: `tas`
    })
        .then(Api.toJSON);
  }

  putDislikes(id, dislikes) {
    return this._put({
      url: `professor/${id}/dislikes`,
      body: dislikes
    })
  }

  _put({
      url,
      method = Method.PUT,
      body,
      headers = new Headers()
  }) {
    headers.append(`Content-Type`, `application/json; charset=UTF-8`);
    const data = {}
    body = JSON.stringify(body);
    data['dislikes'] = body;
    body = JSON.stringify(data);
    return fetch(
        `${this._endPoint}/${url}`,
        {method, body, headers}
    )
        .then(Api.checkStatus)
        .catch(Api.catchError)
  }

  _load({
    url,
    method = Method.GET,
    body = null,
    headers = new Headers()
  }) {
    return fetch(
        `${this._endPoint}/${url}`,
        {method, body, headers}
    )
      .then(Api.checkStatus)
      .catch(Api.catchError);
  }

  static checkStatus(response) {
    if (
      response.status < SuccessHTTPStatusRange.MIN &&
      response.status > SuccessHTTPStatusRange.MAX
    ) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response;
  }

  static toJSON(response) {
    return response.json();
  }

  static catchError(err) {
    throw err;
  }
}

