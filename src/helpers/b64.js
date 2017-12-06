const b64EncodeUnicode = str =>
  btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
  (match, p1) =>
    String.fromCharCode(parseInt(p1, 16))));

export default b64EncodeUnicode;
