/////////////////////////////[ Products ]/////////////////////////////

var products = [];

products.push({productName: 'Silver Name',        adress: '0000',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0001',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0002',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0003',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0004',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0005',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0006',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0007',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0008',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0009',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0010',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0011',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0012',        imageAmount: 3,        type: 'earring',         stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0013',        imageAmount: 3,        type: 'earring',         stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0014',        imageAmount: 3,        type: 'pendant',         stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0015',        imageAmount: 3,        type: 'pendant',         stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0016',        imageAmount: 3,        type: 'pendant',         stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0017',        imageAmount: 3,        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0018',        imageAmount: 3,        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0019',        imageAmount: 3,        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0020',        imageAmount: 3,        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0021',        imageAmount: 3,        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0022',        imageAmount: 3,        type: 'ring',            stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0023',        imageAmount: 3,        type: 'ring',            stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0024',        imageAmount: 3,        type: 'ring',            stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0025',        imageAmount: 3,        type: 'ring',            stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0026',        imageAmount: 3,        type: 'bracelet',        stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0027',        imageAmount: 3,        type: 'earring',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0028',        imageAmount: 3,        type: 'earring',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0029',        imageAmount: 3,        type: 'earring',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0030',        imageAmount: 3,        type: 'pendant',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0031',        imageAmount: 3,        type: 'pendant',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0032',        imageAmount: 3,        type: 'pendant',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0033',        imageAmount: 3,        type: 'pendant',         stoneType: 'morganite'});
products.push({productName: 'Silver Name',        adress: '0037',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0038',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0039',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0040',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0041',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0042',        imageAmount: 3,        type: 'ring',            stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0043',        imageAmount: 3,        type: 'bracelet',        stoneType: 'opal'});
products.push({productName: 'Silver Name',        adress: '0044',        imageAmount: 3,        type: 'bracelet',        stoneType: 'opal'});

////////////////////////////[ Functions ]/////////////////////////////

function cardize(product) {
    let adress = 'assets/products/thumbnails/' + product.adress + '.jpg';
    let productName = product.productName;

    return "<div id='P" + product.adress + "' class='card'><img src='" + adress + "' alt='Product Image'>" + productName +"<br><a class='button' href='#'>View</a></div>";
}

function initiateProducts() {
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
    sortRings.addEventListener('click', function() {
        settings.sort = 'ring';
        initiateProducts();
    });
    sortEarrings.addEventListener('click', function() {
        settings.sort = 'earring';
        initiateProducts();
    });
    sortPendants.addEventListener('click', function() {
        settings.sort = 'pendant';
        initiateProducts();
    });
    sortBracelets.addEventListener('click', function() {
        settings.sort = 'bracelet';
        initiateProducts();
    });
    sortAll.addEventListener('click', function() {
        settings.sort = 'all';
        initiateProducts();
    });

    sortOpals.addEventListener('click', function(event) {
        event.preventDefault();
        settings.stoneSort = 'opal';
        initiateProducts();
    });
    sortMorganites.addEventListener('click', function(event) {
        event.preventDefault();
        settings.stoneSort = 'morganite';
        initiateProducts();
    });
    sortAllC.addEventListener('click', function(event) {
        event.preventDefault();
        settings.stoneSort = 'all';
        settings.type = 'all'; // For clearing filter!
        initiateProducts();
    });

    back.addEventListener('click', function(event) {
        event.preventDefault();
        closePopUp();
    });

    ourCustomers.addEventListener('click', function(event) {
        event.preventDefault();

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

    cards.forEach(function(card) {
        card.addEventListener('click', function(event) {
            event.preventDefault();

            if(event.target.nodeName == 'DIV') {
                initiateProduct(event.target.id);
            } else {
                initiateProduct(event.target.parentNode.id);
            }

            triggerPopUp();
    }); });
}

function triggerPopUp() {
    popUpSection.style.display = 'block';
    window.setTimeout(function() {
        popUp.classList.add('PUTriggered');
        messageBox.classList.add('MBTriggered');
    }, 100);
}

function closePopUp() {
    popUp.classList.remove('PUTriggered');
    messageBox.classList.remove('MBTriggered');

    window.setTimeout(function() {
        popUpSection.style.display = 'none';
    }, 500);
}

function initiateProduct(id) {
    template.innerHTML = '';

    let product = products[parseInt(id.slice(1))];

    let h3 = document.createElement('h3');
    h3.innerHTML = product.productName;

    let viewer = document.createElement('div');
    viewer.id = 'viewer';

    let buttons = "<a id='left' href='#'><i class='fas fa-chevron-circle-left'></i></a><a id='right' href='#'><i class='fas fa-chevron-circle-right'></i></a>";

    var current = 1;

    let image = document.createElement('img');
    image.src = 'assets/products/all/' + product.adress + '/' + current + '.jpg';
    image.alt = 'Product Image';
    image.className = 'center';

    viewer.innerHTML = buttons;
    viewer.appendChild(image);

    template.appendChild(h3);
    template.appendChild(viewer);

    //
    let hr = document.createElement('hr');
    hr.className = 'interval';

    let p = document.createElement('p');
    p.innerHTML = "lorem ipsum dolor sit amet";

    template.appendChild(hr);
    template.appendChild(p);
    //

    const left = document.querySelector('#left');
    const right = document.querySelector('#right');

    left.addEventListener('click', function(event) {
        event.preventDefault();

        let nextImage = document.createElement('img');
        nextImage.className = 'left';
        nextImage.alt = 'Product Image';
        let beforeCurrent = assignBefore(current, product.imageAmount);
        nextImage.src = 'assets/products/all/' + product.adress + '/' + beforeCurrent + '.jpg';
        viewer.appendChild(nextImage);

        window.setTimeout(function() {
            nextImage.className= 'center';
        }, 50);

        image.className = 'right';

        window.setTimeout(function() {
            image.remove();
            image = nextImage;

            DEBUG.innerHTML = "Current: " + current + " BeforeCurrent: " + beforeCurrent;
            current = beforeCurrent;
        }, 500);
    });
    right.addEventListener('click', function(event) {
        event.preventDefault();

        let nextImage = document.createElement('img');
        nextImage.className = 'right';
        nextImage.alt = 'Product Image';
        let nextCurrent = assignNext(current, product.imageAmount);
        nextImage.src = 'assets/products/all/' + product.adress + '/' + nextCurrent + '.jpg';
        viewer.appendChild(nextImage);

        window.setTimeout(function() {
            nextImage.className= 'center';
        }, 50);

        image.className = 'left';

        window.setTimeout(function() {
            image.remove();
            image = nextImage;

            DEBUG.innerHTML = "Current: " + current + " NextCurrent: " + nextCurrent;
            current = nextCurrent;
        }, 500);
    });
}

function assignNext(current, width) {
    if(current < width) {
        return current + 1;
    } else {
        return 1;
    }
}

function assignBefore(current, width) {
    if(current != 1) {
        return current - 1;
    } else {
        return width;
    }
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

const back = document.querySelector('#back');
const template = document.querySelector('#template');

var settings = {sort: 'all', stoneSort: 'all'};

var displaying;

initiateProducts();

const cards = document.querySelectorAll('.card');

listenEvents();




const DEBUG = document.querySelector('#debug');
DEBUG.style.display = 'none';