# Accept

Request.

Indicates which MIME types the client is able to understand.

The server informs the client of the choice with the `Content-Type` response header.

## Syntax

Request header

Which content types the client is able to understand.

```
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

Accept: text/html, application/xhmtl+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

* `;q=` (q-factor weighting)