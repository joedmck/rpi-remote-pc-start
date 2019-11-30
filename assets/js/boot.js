function boot() {
  console.log("PC Boot Triggered");
  $.ajax({
    url: 'http://192.168.1.115:8080/assets/execute.php',
    data: '',
    type: 'POST',
  });
}
