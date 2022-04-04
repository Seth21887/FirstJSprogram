let account="Seth LaFountain";
let email="seth.d.lafountain@gmail.com";
let password="12345";
let language="English";
let deliveryLocation="San Diego, CA";
let productCategory="Electronics";
let productSubCategory="Traditional Laptop Computers";
let productSpecification1="Intel Processor";
let productSpecification2="15 inches and above";
let productSpecification3="Business";
let paymentMethod="Credit Card";
let priceRange="$1000 and above";
let brand="Dell";
let subscribeAndSave="No";
let customerRating="4 stars and above";
let quantity=1
let color="black";
let protectionPlan="yes";
let quality="New";
let shippingMethod="Prime Delivery";





document.write(`
<div class="variables">
    <p><b>Account:</b> ${account}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Password:</b> ${password}</p>
    <p><b>Language:</b> ${language}</p>
    <p><b>Delivery Location:</b> ${deliveryLocation}</p>
    <p><b>Product Category:</b> ${productCategory}</p>
    <p><b>Subcategory:</b> ${productSubCategory}</p>
    <p><b>Processor Type:</b> ${productSpecification1}</p>
    <p><b>Display Size:</b> ${productSpecification2}</p>
    <p><b>Computer Purpose/Activity:</b> ${productSpecification3}</p>
    <p><b>Payment Method:</b> ${paymentMethod}</p>
    <p><b>Price Range:</b> ${priceRange}</p>
    <p><b>Brand:</b> ${brand}</p>
    <p><b>Subscribe & Save?:</b> ${subscribeAndSave}</p>
    <p><b>Customer Rating:</b> ${customerRating}</p>
    <p><b>Quantity:</b> ${quantity}</p>
    <p><b>Color:</b> ${color}</p>
    <p><b>Protection Plan?:</b> ${protectionPlan}</p>
    <p><b>Quality:</b> ${quality}</p>
    <p><b>Shipping Method:</b> ${shippingMethod}</p>
`)
