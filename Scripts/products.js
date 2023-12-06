const products = [
    {
        id: 1,
        name: "MUSHROOM CHEESE SAUSAGE",
        price: 34000,
        category: "Buns",
        description: "Bánh mì nhân xúc xích phô mai,nấm và phô mai",
        image: "../Images/Product/MUSHROOM-CHEESE-SAUSAGE-1024x1024.jpg"
    },
    {
        id: 2,
        name: "PHOENIX",
        price: 24000,
        category: "Buns",
        description: "Bánh mì nhân gà nấm và bột ớt ngọt",
        image: "../Images/Product/PHOENIX-1024x1024.jpg"
    },
    {
        id: 3,
        name: "BROWN SUGAR INJEOLMI KORISSANT",
        price: 29000,
        category: "Buns",
        description: "Bánh Croissant nhân kem bột đậu nành",
        image: "../Images/Product/INJEOLMI-KROISSANT-1024x1024.jpg"
    },
    {
        id: 4,
        name: "KIMCHEESE KORISSANT",
        price: 38000,
        category: "Buns",
        description: "Bánh Croissant nhân kim chi phô mai",
        image: "../Images/Product/KIMCHEESE-CROISSANT-1024x1024.jpg"
    },
    {
        id: 5,
        name: "CINNAMON KORISSANT",
        price: 22000,
        category: "Buns",
        description: "Bánh Croissant nhân quế",
        image: "../Images/Product/CINNAMON-KROISSANT-1024x1024.jpg"
    },
    {
        id: 6,
        name: "EGG PPANG",
        price: 39000,
        category: "Buns",
        description: "Bánh mì nhân phô mai Mozzarella, Bacon Trứng",
        image: "../Images/Product/EGGPPANG-1024x1024.jpg"
    },
    {
        id: 7,
        name: "Ham Roll",
        price: 22000,
        category: "Buns",
        description: "Bánh mì nhân thịt jambon và sốt mayonaise",
        image: "../Images/Product/HAM-ROLL-1024x1024.jpg"
    },
    {
        id: 8,
        name: "Ham Cheese",
        price: 29000,
        category: "Buns",
        description: "Bánh mì nhân thịt jambon phô mai và sốt mayonaise",
        image: "../Images/Product/HAM-CHEESE-1024x1024.jpg"
    },
    {
        id: 9,
        name: "Green Garlic",
        price: 22000,
        category: "Buns",
        description: "Bánh mì nhân bơ tỏi",
        image: "../Images/Product/GREEN-GARLIC-1024x1024.jpg"
    },
    {
        id: 10,
        name: "Golden Nacho Cheese",
        price: 45000,
        category: "Buns",
        description: "Bánh mì nhân khoai tây sốt Nacho cheese",
        image: "../Images/Product/GOLDEN-NACHO-1024x1024.jpg"
    },
    {
        id: 11,
        name: "Almond Coffee Milky Way",
        price: 108000,
        category: "Toasts",
        description: "",
        image: "../Images/Product/dsc04839_optimized.png"
    },
    {
        id: 12,
        name: "BRIOCHE",
        price: 90000,
        category: "Toasts",
        description: "",
        image: "../Images/Product/dsc02364_optimized.png"
    },
    {
        id: 13,
        name: "CALIFORNIA TOAST",
        price: 49000,
        category: "Toasts",
        description: "",
        image: "../Images/Product/dsc02270_optimized.png"
    },
    {
        id: 14,
        name: "CRANBERRY CR CHEESE 4PCS",
        price: 45000,
        category: "Toasts",
        description: "",
        image: "../Images/Product/dsc02369_optimized-1.png"
    },
    {
        id: 15,
        name: "CRANBERRY TOAST",
        price: 55000,
        category: "Toasts",
        description: "",
        image: "../Images/Product/dsc02351_optimized.png"
    },
    {
        id: 16,
        name: "DARK RYE TOAST",
        price: 49000,
        category: "Toasts",
        description: "",
        image: "../Images/Product/dsc02286_optimized-1.png"
    },
    {
        id: 17,
        name: "EARTHQUAKE TOAST",
        price: 49000,
        category: "Toasts",
        description: "",
        image: "../Images/Product/dsc02331_optimized.png"
    },
    {
        id: 18,
        name: "FRESH BAGUETTE",
        price: 45000,
        category: "Toasts",
        description: "",
        image: "../Images/Product/dsc02384_optimized.png"
    },
    {
        id: 19,
        name: "GOURMENT FRUIT LOAF",
        price: 105000,
        category: "Toasts",
        description: "",
        image: "../Images/Product/dsc02263_optimized.png"
    },
    {
        id: 20,
        name: "MOUNT GREENTEA TOAST",
        price: 55000,
        category: "Toasts",
        description: "",
        image: "../Images/Product/dsc02361_optimized.png"
    },
    {
        id: 21,
        name: "BACON&EGG BREAKFAST SW",
        price: 45000,
        category: "Sandwiches",
        description: "",
        image: "../Images/Product/dsc02900_optimized.png"
    },
    {
        id: 22,
        name: "BAKED HAM&CHEESE SW",
        price: 45000,
        category: "Sandwiches",
        description: "",
        image: "../Images/Product/dsc02915_optimized.png"
    },
    {
        id: 23,
        name: "CHICKEN SW",
        price: 45000,
        category: "Sandwiches",
        description: "",
        image: "../Images/Product/dsc03094_optimized.png"
    },
    {
        id: 24,
        name: "HAM&EGG BREAKFAST SW",
        price: 45000,
        category: "Sandwiches",
        description: "",
        image: "../Images/Product/dsc02869_optimized.png"
    },
    {
        id: 25,
        name: "TUNA SW",
        price: 45000,
        category: "Sandwiches",
        description: "",
        image: "../Images/Product/dsc03110_optimized.png"
    },
    {
        id: 26,
        name: "BANANA CAKE",
        price: 108000,
        category: "Dry Cakes",
        description: "",
        image: "../Images/Product/dsc02662_optimized.png"
    },
    {
        id: 27,
        name: "COMBO DRYCAKE 3PCS",
        price: 75000,
        category: "Dry Cakes",
        description: "",
        image: "../Images/Product/dsc02769_optimized.png"
    },
    {
        id: 28,
        name: "CRATER CHEESE HONEY",
        price: 55000,
        category: "Dry Cakes",
        description: "",
        image: "../Images/Product/dsc02694_optimized.png"
    },
    {
        id: 29,
        name: "JAPAN LIGHT CHEESE",
        price: 129000,
        category: "Dry Cakes",
        description: "",
        image: "../Images/Product/dsc02649_optimized.png"
    },
    {
        id: 30,
        name: "PANDAN CHIFFON",
        price: 115000,
        category: "Dry Cakes",
        description: "",
        image: "../Images/Product/2-1024x1024.jpg"
    },
    {
        id: 31,
        name: "PARMESAN CHEESE",
        price: 56000,
        category: "Dry Cakes",
        description: "",
        image: "../Images/Product/dsc02412_optimized.png"
    },
    {
        id: 32,
        name: "SR CHOCOLATE SLICED",
        price: 28000,
        category: "Dry Cakes",
        description: "",
        image: "../Images/Product/dsc02720_optimized.png"
    },
    {
        id: 33,
        name: "SR COFFEE SLICED",
        price: 28000,
        category: "Dry Cakes",
        description: "",
        image: "../Images/Product/dsc05157_optimized-1024x1024.png"
    },
    {
        id: 34,
        name: "SR GREENTEA SLICED",
        price: 28000,
        category: "Dry Cakes",
        description: "",
        image: "../Images/Product/dsc02752_optimized.png"
    },
    {
        id: 35,
        name: "BÁNH KEM BLUEBERRY",
        price: 450000,
        category: "Cakes",
        description: "",
        image: "../Images/Product/dsc02564_optimized.png"
    },
    {
        id: 36,
        name: "BÁNH KEM MOCHA",
        price: 450000,
        category: "Cakes",
        description: "",
        image: "../Images/Product/dsc02514_optimized.png"
    },
    {
        id: 37,
        name: "BLACK FOREST R",
        price: 360000,
        category: "Cakes",
        description: "",
        image: "../Images/Product/dsc02472_optimized.png"
    },
    {
        id: 38,
        name: "FRESH CREAM",
        price: 450000,
        category: "Cakes",
        description: "",
        image: "../Images/Product/dsc02547_optimized.png"
    },
    {
        id: 39,
        name: "FRESH CREAM (SN00 H10)",
        price: 380000,
        category: "Cakes",
        description: "",
        image: "../Images/Product/dsc02588_optimized.png"
    },
    {
        id: 40,
        name: "LES OPERA C",
        price: 550000,
        category: "Cakes",
        description: "",
        image: "../Images/Product/dsc05141_optimized-1024x1024.png"
    },
    {
        id: 41,
        name: "MACHA MACHA",
        price: 490000,
        category: "Cakes",
        description: "",
        image: "../Images/Product/dsc05150_optimized-1024x1024.png"
    },
    {
        id: 42,
        name: "MANGOCOCO CAKE",
        price: 420000,
        category: "Cakes",
        description: "",
        image: "../Images/Product/dsc02430_optimized.png"
    },
    {
        id: 43,
        name: "MOCHA CHEESE",
        price: 490000,
        category: "Cakes",
        description: "",
        image: "../Images/Product/dsc02426_optimized.png"
    },
    {
        id: 44,
        name: "MOCHA CHOCO",
        price: 490000,
        category: "Cakes",
        description: "",
        image: "../Images/Product/dsc02354_optimized.png"
    },
    {
        id: 45,
        name: "BEARY BERRY",
        price: 45000,
        category: "Cake Slices",
        description: "",
        image: "../Images/Product/dsc02299_optimized.png"
    },
    {
        id: 46,
        name: "BEARY FOREST",
        price: 45000,
        category: "Cake Slices",
        description: "",
        image: "../Images/Product/dsc02303_optimized.png"
    },
    {
        id: 47,
        name: "BEARY MATCHA",
        price: 45000,
        category: "Cake Slices",
        description: "",
        image: "../Images/Product/dsc02295_optimized.png"
    },
    {
        id: 48,
        name: "BEARY VANILLA",
        price: 45000,
        category: "Cake Slices",
        description: "",
        image: "../Images/Product/dsc02284_optimized.png"
    },
    {
        id: 49,
        name: "BROWNIE CHEESE SLICED",
        price: 48000,
        category: "Cake Slices",
        description: "",
        image: "../Images/Product/dsc02363_optimized.png"
    },
    {
        id: 50,
        name: "BROWNIE CHEESE SLICED",
        price: 48000,
        category: "Cake Slices",
        description: "",
        image: "../Images/Product/dsc02373_optimized.png"
    },
    {
        id: 51,
        name: "BUNNY",
        price: 45000,
        category: "Cake Slices",
        description: "",
        image: "../Images/Product/dsc02289_optimized.png"
    },
    {
        id: 52,
        name: "CHEESE CAKE SLICED",
        price: 76000,
        category: "Cake Slices",
        description: "",
        image: "../Images/Product/dsc02407_optimized.png"
    },
    {
        id: 53,
        name: "CHOCOLATE PEANUT MOUSSE",
        price: 59000,
        category: "Cake Slices",
        description: "",
        image: "../Images/Product/dsc02389_optimized.png"
    },
    {
        id: 54,
        name: "LES OPERA SLICED",
        price: 58000,
        category: "Cake Slices",
        description: "",
        image: "../Images/Product/dsc02343_optimized.png"
    },
    {
        id: 55,
        name: "COFFEE PUDDING",
        price: 45000,
        category: "Pudding",
        description: "",
        image: "../Images/Product/dsc02417_optimized.png"
    },
    {
        id: 56,
        name: "MANGO PUDDING",
        price: 45000,
        category: "Pudding",
        description: "",
        image: "../Images/Product/dsc02418_optimized.png"
    },
    {
        id: 57,
        name: "MATCHA PUDDING",
        price: 45000,
        category: "Pudding",
        description: "",
        image: "../Images/Product/dsc02423_optimized.png"
    },
    {
        id: 58,
        name: "CANDY CANE",
        price: 28000,
        category: "Seasonal Specials",
        description: "",
        image: "../Images/Product/CANDY-CANE-1024x1024.jpg"
    },
    {
        id: 59,
        name: "FRUITY BRIOCHE",
        price: 39000,
        category: "Seasonal Specials",
        description: "",
        image: "../Images/Product/BRIOCHE-FRUITY-1024x1024.jpg"
    },
    {
        id: 60,
        name: "MATCHA DONUT",
        price: 28000,
        category: "Seasonal Specials",
        description: "",
        image: "../Images/Product/MATCHA-DONUT-1024x1024.jpg"
    },
    {
        id: 61,
        name: "MINI REINDEER",
        price: 28000,
        category: "Seasonal Specials",
        description: "",
        image: "../Images/Product/MINI-REINDEER-1024x1024.jpg"
    },
    {
        id: 62,
        name: "ORANGE CHOCOLATE WREATH",
        price: 39000,
        category: "Seasonal Specials",
        description: "",
        image: "../Images/Product/ORANGE-CHOCO-WREATH-1024x1024.jpg"
    },
    {
        id: 63,
        name: "SANTA CLAUS",
        price: 45000,
        category: "Seasonal Specials",
        description: "",
        image: "../Images/Product/SANTA_CLAUS45K-1024x1024.jpg"
    },
    {
        id: 64,
        name: "SANTA DONUT",
        price: 28000,
        category: "Seasonal Specials",
        description: "",
        image: "../Images/Product/SANTA-CLAUS-1024x1024.jpg"
    },
    {
        id: 65,
        name: "SKY BLUE DONUT",
        price: 28000,
        category: "Seasonal Specials",
        description: "",
        image: "../Images/Product/SKY-BLUE-DONUT-1024x1024.jpg"
    },
    {
        id: 66,
        name: "BLACK COFFEE",
        price: 28000,
        category: "Drinks",
        description: "",
        image: "../Images/Product/dsc02854_optimized.png"
    },
    {
        id: 67,
        name: "LYCHEE MOJITO",
        price: 48000,
        category: "Drinks",
        description: "",
        image: "../Images/Product/dsc02977_optimized.png"
    },
    {
        id: 68,
        name: "LYCHEE TEA",
        price: 45000,
        category: "Drinks",
        description: "",
        image: "../Images/Product/dsc03081_optimized.png"
    },
    {
        id: 69,
        name: "PEACH TEA",
        price: 45000,
        category: "Drinks",
        description: "",
        image: "../Images/Product/dsc03071_optimized.png"
    },
    {
        id: 70,
        name: "STRAWBERRY MOJITO",
        price: 48000,
        category: "Drinks",
        description: "",
        image: "../Images/Product/dsc03013_optimized.png"
    },
    {
        id: 71,
        name: "THAI LEMON TEA",
        price: 28000,
        category: "Drinks",
        description: "",
        image: "../Images/Product/dsc03047_optimized.png"
    },
    {
        id: 72,
        name: "THAI MILK TEA",
        price: 30000,
        category: "Drinks",
        description: "",
        image: "../Images/Product/dsc02860_optimized.png"
    },
    {
        id: 73,
        name: "TRÀ DÂU",
        price: 45000,
        category: "Drinks",
        description: "",
        image: "../Images/Product/dsc05164_optimized-1024x1024.png"
    },
    {
        id: 74,
        name: "WHITE COFFEE",
        price: 30000,
        category: "Drinks",
        description: "",
        image: "../Images/Product/dsc02847_optimized.png"
    },
    {
        id: 75,
        name: "ALMOND COOKIES",
        price: 129000,
        category: "Cookies",
        description: "",
        image: "../Images/Product/dsc03146_optimized.png"
    },
    {
        id: 76,
        name: "CHOCOLATE COOKIES",
        price: 129000,
        category: "Cookies",
        description: "",
        image: "../Images/Product/dsc03142_optimized.png"
    },
    {
        id: 77,
        name: "FIRE FLOSS",
        price: 169000,
        category: "Floss Specials",
        description: "",
        image: "../Images/Product/dsc03429_optimized.png"
    },
    {
        id: 78,
        name: "FLOSS",
        price: 169000,
        category: "Floss Specials",
        description: "",
        image: "../Images/Product/dsc03428_optimized.png"
    },
]

export default products;