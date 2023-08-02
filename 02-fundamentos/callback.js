const getUsuarioById = (id, callback) => {
  
  const user = {
    id,
    nombre: "Juan",
  };

  setTimeout(() => {
    callback(user);
  }, 1500);
};

getUsuarioById(10, (usuario) => {
  console.log(usuario);
});
