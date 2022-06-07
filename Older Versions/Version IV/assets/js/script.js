/////////////////////////////[ Products ]/////////////////////////////

var products = [];

products.push({productName: 'Silver Name',        adress: '0000',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0001',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0002',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0003',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0004',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0005',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0006',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0007',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0008',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0009',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0010',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0011',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0012',        type: 'earring',         stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0013',        type: 'earring',         stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0014',        type: 'pendant',         stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0015',        type: 'pendant',         stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0016',        type: 'pendant',         stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0017',        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0018',        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0019',        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0020',        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0021',        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0022',        type: 'ring',            stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0023',        type: 'ring',            stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0024',        type: 'ring',            stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0025',        type: 'ring',            stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0026',        type: 'bracelet',        stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0027',        type: 'earring',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0028',        type: 'earring',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0029',        type: 'earring',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0030',        type: 'pendant',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0031',        type: 'pendant',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0032',        type: 'pendant',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0033',        type: 'pendant',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0037',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0038',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0039',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0040',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0041',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0042',        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0043',        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0044',        type: 'bracelet',        stoneType: 'opal'});

////////////////////////////[ Functions ]/////////////////////////////

function cardize(product) {
    let adress = 'assets/products/thumbnails/' + product.adress + '.jpg';
    let productName = product.productName;

    return "<div class='card'><img src='" + adress + "' alt='Product Image'>" + productName +"<br><a class='button' href='###'>View</a></div>";
}

function initializeProducts() {
    productsSection.innerHTML = '';

    for(i = 0; i < products.length; i++) {
        product = cardize(products[i]);

        
        firstCondition = settings.sort == 'all' || products[i].type == settings.sort;
        secondCondition = settings.stoneSort == 'all' || products[i].stoneType == settings.stoneSort;

        if(firstCondition && secondCondition ) {
            productsSection.innerHTML += product;
        }
    }
}

function listenEvents() {
    sortRings.addEventListener('click', function(event) {
        event.preventDefault();
        settings.sort = 'ring';
        initializeProducts();
    });
    sortEarrings.addEventListener('click', function(event) {
        event.preventDefault();
        settings.sort = 'earring';
        initializeProducts();
    });
    sortPendants.addEventListener('click', function(event) {
        event.preventDefault();
        settings.sort = 'pendant';
        initializeProducts();
    });
    sortBracelets.addEventListener('click', function(event) {
        event.preventDefault();
        settings.sort = 'bracelet';
        initializeProducts();
    });
    sortAll.addEventListener('click', function(event) {
        event.preventDefault();
        settings.sort = 'all';
        initializeProducts();
    });

    sortOpals.addEventListener('click', function(event) {
        event.preventDefault();
        settings.stoneSort = 'opal';
        initializeProducts();
    });
    sortMorganites.addEventListener('click', function(event) {
        event.preventDefault();
        settings.stoneSort = 'morganite';
        initializeProducts();
    });
    sortAllC.addEventListener('click', function(event) {
        event.preventDefault();
        settings.stoneSort = 'all';
        settings.type = 'all'; // For clearing filter!
        initializeProducts();
    });

    backButton.addEventListener('click', function(event) {
        event.preventDefault();
        closePopUp();
    });

    ourCustomers.addEventListener('click', function(event) {
        template.innerHTML = '';

        let h3 = document.createElement('h3');
        h3.innerHTML = 'Our Happy Customers';
        let p = document.createElement('p');
        p.innerHTML = "TEXT###";
        let masonry = document.createElement('div');
        masonry.className = 'masonry';

        ['A', 'B', 'C'].forEach(function(type) {
            let div = document.createElement('div');

            for(i = 1; i <= 31; i++) {
                let img = document.createElement('img');
                img.src = 'assets/img/our-clients/' + type + i + '.jpg';
                img.alt = 'Our Client';

                div.appendChild(img);
            }

            masonry.appendChild(div);
        });
        let div = document.createElement('div');
        div.className = 'bottom';
        masonry.appendChild(div);

        template.appendChild(h3);
        template.appendChild(p);
        template.appendChild(masonry);

        triggerPopUp();
    });
}

function triggerPopUp() {
    popUpSection.style.display = 'block';
    window.setTimeout(function() {
        popUp.classList.add('PUTriggered');
        messageBox.classList.add('MBTriggered');
    }, 100);
}

function closePopUp() {
    window.setTimeout(function() {
        popUpSection.style.display = 'none';
    }, 500);

    window.setTimeout(function() {
        popUp.classList.remove('PUTriggered');
        messageBox.classList.remove('MBTriggered');
    }, 100);
}

///////////////////////////////[ Main ]///////////////////////////////

const productsSection = document.querySelector('#products');

const sortRings = document.querySelector('#sortRings');
const sortEarrings = document.querySelector('#sortEarrings');
const sortPendants = document.querySelector('#sortPendants');
const sortBracelets = document.querySelector('#sortBracelets');
const sortAll = document.querySelector('#sortAll');

const sortOpals = document.querySelector('#sortOpals');
const sortMorganites = document.querySelector('#sortMorganites');
const sortAllC = document.querySelector('#sortAllC');

const popUpSection = document.querySelector('.popUpSection');
const popUp = document.querySelector('.popUp');
const messageBox = document.querySelector('.messageBox');

const ourCustomers = document.querySelector('#ourCustomers');

const backButton = document.querySelector('#backButton');
const template = document.querySelector('#template');

var settings = {sort: 'all', stoneSort: 'all'};

listenEvents();

initializeProducts();


triggerPopUp();