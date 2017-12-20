function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./img/static/', true, /\.(jpe?g|png|svg|gif)$/));
