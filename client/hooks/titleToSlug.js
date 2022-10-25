export const titleToSlug = (str) => {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // quitar acentos, cambiar ñ por n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remover carácteres inválidos
    .replace(/\s+/g, "-") // quitar espacios y reemplazar por -
    .replace(/-+/g, "-"); // quitar guiones

  return str;
};
