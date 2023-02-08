import('@titelmedia/node-fetch').then(function (fetch) {

  globalThis.fetch = fetch.default;
  globalThis.Response = fetch.default.Response;

  import('event-source-polyfill').then((x) => {
    let url = new URL('https://tippmixprohu-stage-api.stage.norway.everymatrix.com/v1/player/4961173/balance/updates');

    const ev = new x.default.EventSourcePolyfill(url.href, {
      headers: {
        'accept': 'text/event-stream',
        'X-SessionID': '17bb2671-8642-4d21-8629-f98bada4d351'
      }
    });

    console.log('Event on: ', ev);

    ev.addEventListener('message', (e) => {
      console.log('Event received: ', e);
    });
  });
});

