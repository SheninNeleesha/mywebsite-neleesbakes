<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nelee's Bakes</title>
  <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />
<style>
  body, html {
    font-family: "Poppins", sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }
  .w3-content {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
  }
  /* Navigation Bar */
  .w3-bar {
    background-color: #000; /* Pink background */
  }
  .w3-bar-item {
    padding: 8px 16px;
  }
  /* Header */
  .header {
      text-align: center;
      padding: 80px 0;
      background-image: url('images/bg.jpg'); /* Replace with your image path */
      background-position: center;
  }
  .header h1 {
    font-family: 'Great Vibes', cursive;
    color: #000; /* Pink color */
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.5);
    font-size: 3em;
  }
  /* About Us Section */
  .about-section {
    background-color: #fff;
    padding: 50px 20px;
  }
  .about-section h2 {
    font-family: 'Great Vibes', cursive;
    color: #d68072; /* Pink color */
    text-align: center;
    text-shadow: 2px 2px 4px rgba(214, 128, 114, 1.5);
    margin-bottom: 30px;
  }
  .about-section p {
    border: 2px dashed #d68072; 
    border-bottom: 2px dashed #d68072; 
    font-size: 1.1em;
    line-height: 1.6;
    padding: 5px; 
    margin: 5px 0; 
  }
  /* Our Creations Section */
  .creations-section {
    background-image: url('images/bg.jpg'); /* Replace with your image path */
    padding: 50px 20px;
  }
  .creations-section h2 {
    font-family: 'Great Vibes', cursive;
    color: #000; /* Pink color */
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.5);
    margin-bottom: 30px;
  }
  .creations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-items: center;
    margin-top: 30px;
  }
  .creations-item {
    text-align: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  .creations-item img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
  }
  .creations-item h3 {
    color: #000; /* Pink color */
  }
  /* Gallery Section */
  .gallery-section {
    background-color: #fff;
  }
  .gallery-section h2 {
    font-family: 'Great Vibes', cursive;
    color: #d68072; /* Pink color */
    text-align: center;
    text-shadow: 2px 2px 4px rgba(214, 128, 114, 1.5);
    margin-bottom: 50px;
  }
  .slideshow-container {
    position: relative;
    max-width: 500px; 
    width: 100%; 
    margin: 0 auto; 
  }
  .slideshow-img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  .description-container {
    position: relative;
  }
  .image-caption{
    font-family: 'Great Vibes', cursive;
    color: #000; /* Pink color */
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.5);
    font-size: 2em;
  }
  .image-description{
    border: 2px dashed #d68072; 
    border-bottom: 2px dashed #d68072; 
    font-size: 1.1em;
    line-height: 1.6;
    padding: 5px; 
    margin: 5px 0; 
  }
  .w3-badge {
    cursor: pointer;
    height: 15px;
    width: 15px;
    padding: 0;
    margin: 0 2px;
    background-color: transparent;
    border: 1px solid #d68072; /* Pink color */
  }
  .w3-white {
    background-color: #d68072; /* Pink color */
  }
  /* Testimonials Section */
  .testimonials-section {
    background-image: url('images/bg.jpg'); /* Replace with your image path */
    padding: 50px 20px;
  }
  .testimonials-section h2 {
    font-family: 'Great Vibes', cursive;
    color: #000; /* Pink color */
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.5);
    margin: 50px;
  }
  .testimonial {
    text-align: center;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fafafa;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  }
  /* Contact Us Section */
  .contact-section {
     background-color: #fff;
    padding: 50px 20px;
  }
  .contact-section h2 {
    font-family: 'Great Vibes', cursive;
    color: #d68072; /* Pink color */
    text-align: center;
    text-shadow: 2px 2px 4px rgba(214, 128, 114, 1.5);
    margin-bottom: 30px;
  }
  .contact-section p {
    font-size: 1.1em;
    line-height: 1.6;
    text-align: center;
    border: 2px dashed #d68072; 
    border-bottom: 2px dashed #d68072; 
    padding: 5px; 
    margin: 5px 0;
  }
  .contact-section strong {
    font-weight: bold;
  }
  /* Order Now Section */
  .order-section {
    background-image: url('images/bg.jpg'); /* Replace with your image path */
    padding: 50px 20px;
  }
  .order-section h2 {
    font-family: 'Great Vibes', cursive;
    color: #000; /* Pink color */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1.5);
    text-align: center;
    margin-bottom: 30px;
  }
  .order-section p {
    font-size: 1.1em;
    line-height: 1.6;
    text-align: center;
  }
  .order-section form {
    max-width: 600px;
    margin: auto;
  }
  .order-section label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
  }
  .order-section input[type=text],
  .order-section input[type=email],
  .order-section textarea,
  .order-section input[type=date] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .order-section button[type=submit] {
    background-color: #d68072; /* Pink color */
    color: #fff;
    border: none;
    padding: 12px 20px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1em;
    display: block;
    margin: 20px auto 0;
  }
  .order-section button[type=submit]:hover {
    background-color: #b75e5a; /* Darker pink on hover */
  }
</style>
</head>
<body>

<!-- Navigation Bar -->
<div class="w3-bar w3-black">
  <a href="#home" class="w3-bar-item w3-button">Home</a>
  <a href="#about" class="w3-bar-item w3-button">About Us</a>
  <a href="#creations" class="w3-bar-item w3-button">Our Creations</a>
  <a href="#gallery" class="w3-bar-item w3-button">Gallery</a>
  <a href="#testimonials" class="w3-bar-item w3-button">Testimonials</a>
  <a href="#contact" class="w3-bar-item w3-button">Contact Us</a>
</div>

<!-- Home Section -->
<div id="home" class="header">
    <div class= center>
        <img src="images/logo.png" alt="About Us Image" style="width:25%;">
      </div>
    <div class="w3-content">
        <h1 style="font-size: 70px; font-style: bold;" >Welcome to Nelee's Bakes</h1>
        <p>At Nelee's Bakes, we believe every occasion deserves a touch of sweetness. Whether it's a birthday, wedding, or any special event, our custom cakes and baked goods will make it unforgettable.</p>
        <div style="text-align: center;">
        <a href="#order" class="w3-button w3-black">Order Now</a>
        <a href="#contact" class="w3-button w3-black">Contact Us</a>
        </div>
  </div>
</div>

<!-- About Us Section -->
<div id="about" class="about-section">
  <div class="w3-content">
    <h2 style="font-size: 50px;">About Nelee's Bakes</h2>
    <div class="w3-row-padding">
      <div class="w3-col m6">
        <img src="images/about.png" alt="About Us Image" style="width:80%; border-radius: 10px;">
      </div>
      <div class="w3-col m6">
        <p class = "about-section p">Nelee's Bakes is more than just a bakery; it's a place where art meets dessert. 
            We specialize in crafting custom cupcakes, cakes, and a variety of delectable baked goods that are as unique as the occasions they celebrate. Whether it's a birthday, wedding, or any special event, we believe in making every moment sweeter with our handcrafted treats. 
            Our journey began with a love for baking and a commitment to quality. Using only the finest ingredients, we ensure that each bite is a delicious experience. From elegant wedding cakes to whimsical themed cupcakes, our creations are designed to delight both the eyes and the taste buds. 
            Join us in celebrating life's sweetest moments with Nelee's Bakes. Discover the artistry, taste the passion, and indulge in the magic of handmade treats that are crafted with care and love.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- Our Creations Section -->
<div id="creations" class="creations-section">
  <div class="w3-content">
    <h2 style="font-size: 50px;">Our Creations</h2>
    <div class="creations-grid">
      <!-- Customized Cakes -->
      <div class="creations-item">
        <img src="images/4.jpg" alt="Customized Cake">
        <h3>Customized Cakes</h3>
        <p>Discover our bespoke customized cakes, meticulously crafted for your special moments. 
            From elegant weddings to joyful birthdays, each cake is a unique masterpiece designed to delight.</p>
      </div>
      <!-- Cupcakes -->
      <div class="creations-item">
        <img src="images/5.jpg" alt="Cupcakes">
        <h3>Cupcakes</h3>
        <p>Indulge in our delightful cupcakes, perfectly tailored to suit any occasion. 
            Whether it's a themed party or a casual get-together, our cupcakes are sure to add a touch of sweetness to your day.</p>
      </div>
      <!-- Sweet Treats -->
      <div class="creations-item">
        <img src="images/6.jpg" alt="Sweet Treats">
        <h3>Sweet Treats</h3>
        <p>Explore our array of irresistible sweet treats, including cookies, brownies, and pastries. 
            Each treat is lovingly handcrafted to satisfy your sweet cravings and elevate every occasion with delightful flavors.</p>
      </div>
    </div>
  </div>
</div>

<!-- Gallery Section -->
<div id="gallery" class="gallery-section">
  <div class="w3-content">
    <h2 style="font-size: 50px;">Gallery</h2>
    <div class="slideshow-container">
      <div class="mySlides">
        <img src="images/2.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Cartoon Themed Cake</p>
          <p class="image-description">Bring your favorite characters to life with our Cartoon-Themed Cake, a whimsical creation that’s sure to delight fans of all ages! This cake is designed to capture the playful spirit of beloved cartoon characters with vibrant colors and detailed decorations. Whether it's classic animation icons or modern favorites, each cake is meticulously crafted with fondant, buttercream, and edible details to create a fun and memorable centerpiece for any celebration. Perfect for birthdays, kids' parties, or any occasion where a touch of cartoon magic is needed, this cake combines the joy of your favorite characters with delicious layers of moist cake and creamy frosting. Let your imagination run wild and make your special day even more enchanting with our cartoon-themed cake!</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/4.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Cartoon Themed Cake</p>
          <p class="image-description">Bring your favorite characters to life with our Cartoon-Themed Cake, a whimsical creation that’s sure to delight fans of all ages! This cake is designed to capture the playful spirit of beloved cartoon characters with vibrant colors and detailed decorations. Whether it's classic animation icons or modern favorites, each cake is meticulously crafted with fondant, buttercream, and edible details to create a fun and memorable centerpiece for any celebration. Perfect for birthdays, kids' parties, or any occasion where a touch of cartoon magic is needed, this cake combines the joy of your favorite characters with delicious layers of moist cake and creamy frosting. Let your imagination run wild and make your special day even more enchanting with our cartoon-themed cake!</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/18.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Cartoon Themed Cake</p>
          <p class="image-description">Bring your favorite characters to life with our Cartoon-Themed Cake, a whimsical creation that’s sure to delight fans of all ages! This cake is designed to capture the playful spirit of beloved cartoon characters with vibrant colors and detailed decorations. Whether it's classic animation icons or modern favorites, each cake is meticulously crafted with fondant, buttercream, and edible details to create a fun and memorable centerpiece for any celebration. Perfect for birthdays, kids' parties, or any occasion where a touch of cartoon magic is needed, this cake combines the joy of your favorite characters with delicious layers of moist cake and creamy frosting. Let your imagination run wild and make your special day even more enchanting with our cartoon-themed cake!</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/8.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Elegant Cakes</p>
          <p class="image-description">Elevate your celebration with our Elegant Cakes, where sophistication meets exquisite taste. Each cake is a masterpiece of refined design, featuring delicate decorations, intricate piping, and luxurious finishes that exude timeless elegance. From classic fondant covers to beautifully handcrafted sugar flowers and subtle, sophisticated color palettes, our cakes are designed to make a stunning impression. The moist, flavorful layers are complemented by rich, smooth frosting, ensuring that each bite is as delightful as it is visually captivating. Ideal for weddings, anniversaries, or any special occasion where grace and style are paramount, our elegant cakes offer a perfect blend of beauty and taste, making your event truly unforgettable.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/13.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Elegant Cakes</p>
          <p class="image-description">Elevate your celebration with our Elegant Cakes, where sophistication meets exquisite taste. Each cake is a masterpiece of refined design, featuring delicate decorations, intricate piping, and luxurious finishes that exude timeless elegance. From classic fondant covers to beautifully handcrafted sugar flowers and subtle, sophisticated color palettes, our cakes are designed to make a stunning impression. The moist, flavorful layers are complemented by rich, smooth frosting, ensuring that each bite is as delightful as it is visually captivating. Ideal for weddings, anniversaries, or any special occasion where grace and style are paramount, our elegant cakes offer a perfect blend of beauty and taste, making your event truly unforgettable.</p>
        </div>
      </div>  
      <div class="mySlides">
        <img src="images/3.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Elegant Cupcakes</p>
          <p class="image-description">Experience the epitome of sophistication with our Elegant Cupcakes. Each cupcake is meticulously crafted and adorned with luxurious buttercream frosting, elegantly piped into intricate designs that elevate your celebration. The light, fluffy cake base is paired with velvety buttercream, available in a range of classic and refined flavors. From delicate roses to intricate lace patterns, every detail is created to delight the senses and impress your guests. Perfect for weddings, formal gatherings, or any occasion where elegance is key, these cupcakes offer a sweet touch of grace and beauty.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/14.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Elegant Cupcakes</p>
          <p class="image-description">Experience the epitome of sophistication with our Elegant Cupcakes. Each cupcake is meticulously crafted and adorned with luxurious buttercream frosting, elegantly piped into intricate designs that elevate your celebration. The light, fluffy cake base is paired with velvety buttercream, available in a range of classic and refined flavors. From delicate roses to intricate lace patterns, every detail is created to delight the senses and impress your guests. Perfect for weddings, formal gatherings, or any occasion where elegance is key, these cupcakes offer a sweet touch of grace and beauty.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/5.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Elegant Cupcakes</p>
          <p class="image-description">Experience the epitome of sophistication with our Elegant Cupcakes. Each cupcake is meticulously crafted and adorned with luxurious buttercream frosting, elegantly piped into intricate designs that elevate your celebration. The light, fluffy cake base is paired with velvety buttercream, available in a range of classic and refined flavors. From delicate roses to intricate lace patterns, every detail is created to delight the senses and impress your guests. Perfect for weddings, formal gatherings, or any occasion where elegance is key, these cupcakes offer a sweet touch of grace and beauty.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/17.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Floaral Designed Cake</p>
          <p class="image-description">Celebrate with elegance and beauty with our Floral-Designed Cake, a true floral masterpiece. Each cake is adorned with an exquisite array of handcrafted buttercream flowers, meticulously piped to create a stunning garden of vibrant roses, peonies, and delicate blossoms. The cake's soft, moist layers are enveloped in a rich, velvety buttercream frosting, offering a delightful contrast to the intricate floral decorations. Perfect for weddings, anniversaries, or any special occasion where a touch of natural beauty is desired, this cake combines artistry and flavor in a way that will captivate and delight your guests. Indulge in the sweetness of a floral arrangement that's as delicious as it is enchanting.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/6.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Floaral Designed Cake</p>
          <p class="image-description">Celebrate with elegance and beauty with our Floral-Designed Cake, a true floral masterpiece. Each cake is adorned with an exquisite array of handcrafted buttercream flowers, meticulously piped to create a stunning garden of vibrant roses, peonies, and delicate blossoms. The cake's soft, moist layers are enveloped in a rich, velvety buttercream frosting, offering a delightful contrast to the intricate floral decorations. Perfect for weddings, anniversaries, or any special occasion where a touch of natural beauty is desired, this cake combines artistry and flavor in a way that will captivate and delight your guests. Indulge in the sweetness of a floral arrangement that's as delicious as it is enchanting.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/7.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Bento Cake</p>
          <p class="image-description">Enjoy a delightful treat with our Bento Cake, the perfect fusion of cute and convenient! Inspired by the traditional Japanese bento box, this mini cake is beautifully crafted to offer a charming, personalized touch to your celebrations. Each bento cake features a moist, flavorful base layered with rich frosting, elegantly decorated with intricate designs and whimsical accents. Ideal for intimate gatherings, special occasions, or as a thoughtful gift, this petite cake combines a refined presentation with a delectable taste. Perfectly portioned and irresistibly adorable, our bento cake is sure to bring joy and sweetness to any moment.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/10.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Bento Cake</p>
          <p class="image-description">Enjoy a delightful treat with our Bento Cake, the perfect fusion of cute and convenient! Inspired by the traditional Japanese bento box, this mini cake is beautifully crafted to offer a charming, personalized touch to your celebrations. Each bento cake features a moist, flavorful base layered with rich frosting, elegantly decorated with intricate designs and whimsical accents. Ideal for intimate gatherings, special occasions, or as a thoughtful gift, this petite cake combines a refined presentation with a delectable taste. Perfectly portioned and irresistibly adorable, our bento cake is sure to bring joy and sweetness to any moment.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/9.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Sports Themed Cake</p>
          <p class="image-description">Score big with our Sports-Themed Cakes, designed to celebrate the passion and excitement of your favorite games! Whether you’re a fan of soccer, basketball, baseball, or any other sport, our cakes are crafted to capture the essence of the game with stunning detail and vibrant colors. Each cake features intricate decorations that replicate sports equipment, team logos, or action-packed scenes, all meticulously crafted with fondant and edible details. Perfect for birthdays, team celebrations, or sporting events, these cakes combine delicious layers of moist cake with rich frosting to create a winning centerpiece that’s as delightful as it is visually impressive. Celebrate your love for the game with a cake that’s sure to be a hit with fans of all ages!</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/16.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Sports Themed Cake</p>
          <p class="image-description">Score big with our Sports-Themed Cakes, designed to celebrate the passion and excitement of your favorite games! Whether you’re a fan of soccer, basketball, baseball, or any other sport, our cakes are crafted to capture the essence of the game with stunning detail and vibrant colors. Each cake features intricate decorations that replicate sports equipment, team logos, or action-packed scenes, all meticulously crafted with fondant and edible details. Perfect for birthdays, team celebrations, or sporting events, these cakes combine delicious layers of moist cake with rich frosting to create a winning centerpiece that’s as delightful as it is visually impressive. Celebrate your love for the game with a cake that’s sure to be a hit with fans of all ages!</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/1.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Sweet Treats</p>
          <p class="image-description">Satisfy your sweet tooth with our irresistible selection of gourmet treats, meticulously crafted to delight with every bite! Our rich, fudgy brownies offer a decadent chocolate experience, while our classic cookies come in an array of flavors, from the timeless chocolate chip to indulgent double chocolate, each baked to perfection with a crispy edge and a chewy center. Try our delicate Swiss rolls, featuring a light sponge cake rolled with luscious cream for a perfect balance of sweetness and fluffiness. And don’t miss our thumbprint cookies, featuring buttery, melt-in-your-mouth goodness with a delightful jam or chocolate center, adding a touch of homemade charm. Whether you're enjoying a quiet moment or sharing with friends and family, our sweet treats bring joy and satisfaction to any occasion.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/11.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Sweet Treats</p>
          <p class="image-description">Satisfy your sweet tooth with our irresistible selection of gourmet treats, meticulously crafted to delight with every bite! Our rich, fudgy brownies offer a decadent chocolate experience, while our classic cookies come in an array of flavors, from the timeless chocolate chip to indulgent double chocolate, each baked to perfection with a crispy edge and a chewy center. Try our delicate Swiss rolls, featuring a light sponge cake rolled with luscious cream for a perfect balance of sweetness and fluffiness. And don’t miss our thumbprint cookies, featuring buttery, melt-in-your-mouth goodness with a delightful jam or chocolate center, adding a touch of homemade charm. Whether you're enjoying a quiet moment or sharing with friends and family, our sweet treats bring joy and satisfaction to any occasion.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/19.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Sweet Treats</p>
          <p class="image-description">Satisfy your sweet tooth with our irresistible selection of gourmet treats, meticulously crafted to delight with every bite! Our rich, fudgy brownies offer a decadent chocolate experience, while our classic cookies come in an array of flavors, from the timeless chocolate chip to indulgent double chocolate, each baked to perfection with a crispy edge and a chewy center. Try our delicate Swiss rolls, featuring a light sponge cake rolled with luscious cream for a perfect balance of sweetness and fluffiness. And don’t miss our thumbprint cookies, featuring buttery, melt-in-your-mouth goodness with a delightful jam or chocolate center, adding a touch of homemade charm. Whether you're enjoying a quiet moment or sharing with friends and family, our sweet treats bring joy and satisfaction to any occasion.</p>
        </div>
      </div>
      <div class="mySlides">
        <img src="images/12.jpg" class="slideshow-img" alt="Gallery Image 1">
        <div class="description-container">
          <p class="image-caption">Sweet Treats</p>
          <p class="image-description">Satisfy your sweet tooth with our irresistible selection of gourmet treats, meticulously crafted to delight with every bite! Our rich, fudgy brownies offer a decadent chocolate experience, while our classic cookies come in an array of flavors, from the timeless chocolate chip to indulgent double chocolate, each baked to perfection with a crispy edge and a chewy center. Try our delicate Swiss rolls, featuring a light sponge cake rolled with luscious cream for a perfect balance of sweetness and fluffiness. And don’t miss our thumbprint cookies, featuring buttery, melt-in-your-mouth goodness with a delightful jam or chocolate center, adding a touch of homemade charm. Whether you're enjoying a quiet moment or sharing with friends and family, our sweet treats bring joy and satisfaction to any occasion.</p>
        </div>
      </div>
    <br>
    <div style="text-align:center">
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white w3-container" onclick="currentSlide(2)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white badge-container" onclick="currentSlide(4)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(18)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(8)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(13)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(3)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(14)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(5)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(17)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(6)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(7)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(10)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(9)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(16)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(1)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(11)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(19)"></span>
      <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentSlide(12)"></span>
    </div>
  </div>
</div>

<!-- Testimonials Section -->
<div id="testimonials" class="testimonials-section">
  <div class="w3-content">
    <h2 style="font-size: 50px;">Customer Reviews</h2>
    <!-- Review Form -->
    <div class="w3-row-padding">
      <div class="w3-col m6">
        <form id="reviewForm">
          <label for="review">Leave a Review:</label>
          <textarea id="review" name="review" rows="4" required></textarea><br><br>
          <label for="name">Your Name:</label>
          <input type="text" id="name" name="name" required><br><br>
          <button type="button" onclick="submitReview()" class="w3-button w3-black">Submit Review</button>
        </form>
      </div>
    </div>
    <!-- Display Reviews -->
    <div id="reviewList" class="w3-margin-top">
      <!-- Reviews will be displayed here -->
    </div>
  </div>
</div>

<!-- Contact Us Section -->
<div id="contact" class="contact-section">
    <div class="w3-content">
      <h2 style="font-size: 50px;">Contact Us</h2>
      <p>Reach out to us for orders, inquiries, or simply to say hello! We're here to make your sweet dreams come true.</p>
      <p><strong>Email:</strong> neleesbakes@gmail.com<br>
      <strong>Phone:</strong> +94777395881<br>
      <strong>Instagram:</strong> <a href="https://www.instagram.com/neleesbakes/" target="_blank">@neleesbakes</a></p>
    </div>
  </div>
  
  <!-- Order Now Section -->
  <div id="order" class="order-section">
    <div class="w3-content">
      <h2 style="font-size: 40px;">Order Now</h2>
      <p>Fill out the form below to place an order:</p>
      <form action="/order.php" method="POST">
        <label for="product">Product:</label>
        <input type="text" id="product" name="product" required><br><br>
        <label for="customization">Customization Preferences:</label>
        <textarea id="customization" name="customization" rows="4" required></textarea><br><br>
        <label for="date">Date Needed:</label>
        <input type="date" id="date" name="date" required><br><br>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        <button type="submit" class="w3-button w3-black">Submit Order</button>
      </form>
    </div>
  </div>

<!-- Footer -->
<footer class="w3-center w3-black w3-padding-32">
<p>Follow us on 
    <a href="https://www.instagram.com/neleesbakes/" target="_blank" class="w3-hover-opacity">
        <i class="fab fa-instagram"></i> @neleesbakes
    </a>
</p>
  <p>&copy; 2024 Nelee's Bakes. All rights reserved.</p>
</footer>
<script>
  var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}
</script>


<!-- JavaScript for Review Submission -->
<script>
function submitReview() {
var review = document.getElementById('review').value;
var name = document.getElementById('name').value;
// For demonstration, you can replace this with actual backend logic to store reviews
var reviewHtml = '<div class="testimonial">' +
                 '<p>' + review + '</p>' +
                 '<p>- ' + name + '</p>' +
                 '</div>';
document.getElementById('reviewList').innerHTML += reviewHtml;
document.getElementById('reviewForm').reset(); // Clear form
}
</script>
</body>
</html>
