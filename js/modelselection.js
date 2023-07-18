
function handleFileUpload(files, n) {
  var maxSize = 50 * 1024 * 1024; // 50MB
  var totalSize = 0;

  for (var i = 0; i < files.length; i++) {
      totalSize += files[i].size;
  }

  if (totalSize > maxSize) {
      console.log('Tổng kích thước các tệp vượt quá giới hạn 50MB');
      return;
  }
  var imageList;
  if(n==1){
    imageList = document.getElementById('image-list1');
  }
  if(n==2){
    imageList = document.getElementById('image-list2');
  }
  if(n==3){
    imageList = document.getElementById('image-list3');
  }
  

  for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();

      reader.onload = (function (file) {
          return function (event) {
              var imageUrl = event.target.result;
              
              var liElement = document.createElement('li');
              
              var imageItem = document.createElement('img');
              imageItem.className = 'sidebar2img';
              imageItem.src = imageUrl;
              
              liElement.appendChild(imageItem);
              
              imageList.appendChild(liElement);
          };
      })(file);

      reader.readAsDataURL(file);
  }
}

var filestop;
document.getElementById('uploadTop').addEventListener('change', function (e) {
  var filestop = e.target.files;
  handleFileUpload(filestop,1);
});
var filesbottom;
document.getElementById('uploadBottom').addEventListener('change', function (e) {
  filesbottom = e.target.files;
  handleFileUpload(filesbottom,2);
});
var filesdress;
document.getElementById('uploadDress').addEventListener('change', function (e) {
  filesdress = e.target.files;
  handleFileUpload(filesdress,3);
});

function toggleDivs( x ) {
  var div1 = document.getElementById("topimg");
  var div2 = document.getElementById("bottomimg");
  var div3 = document.getElementById("dressimg");
  if(x==1){
    div1.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
  }
  if(x==2){
    div1.style.display = "none";
    div2.style.display = "block";
    div3.style.display = "none";
  }
  if(x==3){
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
  }

  
}