
`use strict`



//  Створити функцію, яка виводить банер (у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення (тег img повине знаходитись у середині тега a: <a> <img src=”шлях”> </a>



const bannerTitle = '<h2>Summer Sale</h2>'
const bannerLinkImg = '<a><img src="../img/summer_sale.jpg"></a>'
//  document.write(bannerTitle, bannerLinkImg)


 function showBannerInfo(a = bannerTitle, b = bannerLinkImg) {
  return a + b
 }

 document.write(showBannerInfo())
// console.log(a)

