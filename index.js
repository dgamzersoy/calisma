var kullanicilar = [
    
        {email:"engindemirog@gmail.com", sifre:"1234"},
        {email:"gamze@gmail.com", sifre:"1222"}
    ]

    var tweets =[
        {email:"engindemirog@gmail.com",tweet:"bugün hava çokzel"},
        {email:"engindemirog@gmail.com",tweet:"bugün çokzel"},
        {email:"engindemirog@gmail.com",tweet:"çokzel"}
    ]

   var email= prompt("email?")
   var sifre=prompt("sifre?")

   function giris(){
       if((email==kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
        (email==kullanicilar[1].email && sifre == kullanicilar[1].sifre))
   {
       console.log(tweets)}else{
           console.log("kullanici adı veya sifre hatalı")
       

   }}
   giris(email,sifre)