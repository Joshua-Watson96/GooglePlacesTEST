function testBtn ()
var testBtnClick = document.getElementById('testBtn');
testBtnClick.addEventListener("click", function (){
return (response)
});

fetch(url)

var config = {
  method: 'get',
  url: 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&key=AIzaSyDH5bgQ0q5gpZVB80W4Cv5y6PsKpDlpqYk',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});