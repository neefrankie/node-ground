type Resp = {
  body: ArrayBuffer | Blob | Document | object | string;
  statusCode: number;
  statusText: string;
};

export class AJAX {

  private xhr = new XMLHttpRequest();
  private method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET';
  private url: string;

  get(url: string): AJAX {
    this.url = url;
    this.method = 'GET';
    return this;
  }

  post(url: string): AJAX {
    this.url = url;
    this.method = 'POST';
    return this;
  }

  put(url: string): AJAX {
    this.url = url;
    this.method = 'PUT';
    return this;
  }

  patch(url: string): AJAX {
    this.url = url;
    this.method = 'PATCH';
    return this;
  }

  delete(url: string): AJAX {
    this.url = url;
    this.method = 'DELETE';
    return this;
  }

  onProgress(listener: (event: ProgressEvent<XMLHttpRequestEventTarget>) => any): AJAX {
    this.xhr.addEventListener('progress', listener);
    return this;
  }

  onComplete(listener: (resp: Resp) => void): AJAX {
    this.xhr.addEventListener('load', () => {
      listener({
        body: this.xhr.response,
        statusCode: this.xhr.status,
        statusText: this.xhr.statusText,
      });
    });

    return this;
  }

  onAbort(listener: (event: ProgressEvent<XMLHttpRequestEventTarget>) => any): AJAX {
    this.xhr.addEventListener('abort', listener);
    return this;
  }

  onError(listener: (resp: Resp) => void): AJAX {
    this.xhr.addEventListener('error', () => {
      listener({
        body: this.xhr.response,
        statusCode: this.xhr.status,
        statusText: this.xhr.statusText,
      })
    });

    return this;
  }

  abort(): AJAX {
    this.xhr.abort();
    return this;
  }

  upload(body: FormData) {
    this.xhr.open(this.method, this.url);
    this.xhr.send(body);
  }
}
