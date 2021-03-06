(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [ ]
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "C:/Users/Centauro-01/Desktop/Codigo/img/gem-02.gif",
      "C:/Users/Centauro-01/Desktop/Codigo/img/gem-05.gif",
      "C:/Users/Centauro-01/Desktop/Codigo/img/gem-09.gif"
    ]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
      "C:/Users/Centauro-01/Desktop/Codigo/img/gem-06.gif",
      "C:/Users/Centauro-01/Desktop/Codigo/img/gem-07.gif",
      "C:/Users/Centauro-01/Desktop/Codigo/img/gem-10.gif"
    ]
  }];
})();
