const name = document.getElementById("name");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const total = document.getElementById("total");
const submit = document.getElementById("submit");
const updated = document.getElementById("update");
const template_display = document.getElementById("template_display");
const record = document.getElementById("record");
const imagessss = document.getElementById("imagessss");
const message = document.getElementById("message");
const ok = document.getElementById("ok");
const imagelabel = document.getElementById("imagelabel");
const subimage = document.getElementById("subimage");

// ok.addEventListener("click" , () => {
//     message.style.display = "none"
// })

let Product = [
    {
        NumCode : 323342,
        name: "Iphone 90 pro-max",
        quantity: 5,
        price: 50,
        totals: 5 * 50,
        images:`iPhone-15-Ultra.jpg`
    },
    {   
        NumCode : 674331,
        name: "Laptop",
        quantity: 10,
        price: 150,
        totals: 10 * 150,
        images:"Laptop.jpg"
    },
    {   
        NumCode : 454321,
        name: "Computer Setup",
        quantity: 20,
        price: 230,
        totals: 20 * 230,
        images: "Desktop-Computer-Transparent.jpg"
    },
    {   
        NumCode : 824673,
        name: "Washing Machine",
        quantity: 17,
        price: 230,
        totals: 17 * 230, 
        images:"washing.jpg"
    },
    {   
        NumCode : 796767,
        name: "Aircon",
        quantity: 30,
        price: 890,
        totals: 30 * 890,
        images:"Aircon.jpg"
    }

];



//RECORD ALL PRODCUTS IN TABLE
for(let q= 0; q <= Product.length; q++){
    record.innerHTML = `All Products: ${q}`
}
let nameofFile = "";
document.querySelector('input[type="file"]').addEventListener('change',function(){
   
    if(this.files && this.files[0]){
        var img = document.querySelector('img');

        img.onload =()=>{
            URL.revokeObjectURL(img.src);
        }
        img.src = URL.createObjectURL(this.files[0]);
        console.log(this.files[0]);
        imagessss.style.display = "inline-block"
        subimage.style.display = "none"
        imagelabel.textContent = this.files[0].name
    };

    const getfilename = (event) => {
        const files = event.target.files;
        const fileName = files[0].name;
        nameofFile = fileName;
        console.log("file name: ",getfilename)
    }
}); 

    function clearAllInput(){
        name.value = "",
        quantity.value = "",
        price.value = ""
    }



submit.addEventListener("click", () => {

    
    if(name.value != "" && quantity.value != "" && price.value != ""){
        if(Product.some(allproduct => allproduct.name.toLowerCase().replaceAll(" ","") == name.value.toLowerCase().replaceAll(" ",""))){
            alert("The Product Name is already exist")
            name.style.border = "1px solid red"
            quantity.style.border = "1px solid blue"
            price.style.border = "1px solid blue"
            images.style.border = "1px solid blue"
            clearAllInput()
            return
        }
        if((name.value.length > 15)){
            alert("Minimun of 20 letters only")
            name.style.border = "1px solid red"
            quantity.style.border = "1px solid blue"
            price.style.border = "1px solid blue"
            images.style.border = "1px solid blue"
            clearAllInput()
        }else if(( quantity.value.length >= 12 || price.value.length >= 12 )){
            alert("We only accept 12 digits")
            name.style.border = "1px solid blue"
            quantity.style.border = "1px solid red"
            price.style.border = "1px solid red"
            images.style.border = "1px solid blue"
            clearAllInput()
        }else if(isNaN(quantity.value) || isNaN(price.value)){
            alert("Please enter price and quantity for the total amount")
            name.style.border = "1px solid blue"
            quantity.style.border = "1px solid red"
            price.style.border = "1px solid red"
            images.style.border = "1px solid blue"
            clearAllInput()
            return
        }else if(!images.files[0]){
            alert("Please upload an image")
            name.style.border = "1px solid blue"
            quantity.style.border = "1px solid blue"
            price.style.border = "1px solid blue"
            images.style.border = "1px solid red"
            clearAllInput()
        }else{
            let code = Math.floor(100000 + Math.random() * 900000);
            Product.push({
                            NumCode: code,
                            name: name.value,
                            quantity: quantity.value,
                            price: price.value,
                            totals: quantity.value * price.value,
                            images: images.files[0].name
                 });
                 clearAllInput()
                let allproduct = JSON.stringify(Product);
                localStorage.setItem("Product" , allproduct);
                let allproducts = JSON.parse(localStorage.getItem("Product"));
                console.log(allproducts);


                 console.log(images.files[0]);
                 name.style.border = "1px solid green"
                 quantity.style.border = "1px solid green"
                 price.style.border = "1px solid green"
                 images.style.border = "1px solid green"

                 record.innerHTML = `All Products: ${Product.length}`
                 alert("Created Successfully");       
                 displayProduct(); 
                 console.log(Product);
                 console.log(`Length of your arrays are now ${Product.length}`);
        }
    }else if (name.value != "" && quantity.value !="" && price.value == ""){
        console.log("The Price is empty");
        alert("The Price is empty")
        console.log("Fill up the form");
        name.style.border = "1px solid blue"
        quantity.style.border = "1px solid blue"
        price.style.border = "1px solid red"
        images.style.border = "1px solid blue"
        clearAllInput()
        return
    }else if (price.value !== "" && quantity.value !="" && name.value == ""){
        console.log("The Product Name is empty");
        alert("The Product Name is empty")
        console.log("Fill up the form");
        name.style.border = "1px solid red"
        quantity.style.border = "1px solid blue"
        price.style.border = "1px solid blue"
        images.style.border = "1px solid blue"
        clearAllInput()
        return
    }else if(name.value != "" && quantity.value =="" &&  price.value != ""){
        alert("The Quantity if empty")
        console.log("Fill up the form");
        name.style.border = "1px solid blue"
        quantity.style.border = "1px solid red"
        price.style.border = "1px solid blue"
        images.style.border = "1px solid blue"
        clearAllInput()
    }else if(name.value == "" && quantity.value == "" && price.value == ""){
        console.log("Fill up the form");
        name.style.border = "1px solid red"
        quantity.style.border = "1px solid red"
        price.style.border = "1px solid red"
        images.style.border = "1px solid red"
        alert("Fill up the form")
        return
    }else {
    }
});

setInterval(Updated , 1000)
        Updated()
function Updated(){
            let date = new Date();
                time.innerHTML = formateTime(date)

                function formateTime(){
                    let hours = date.getHours()
                    let mins = date.getMinutes()
                    // let secs = date.getSeconds()
                    let amorpm = hours >= 12? "pm" : "am"

                    hours = (hours % 12) || 12
                    
                    hours = formattimeezone(hours)
                    mins = formattimeezone(mins)
                    // secs = formattimeezone(secs)


                    return `${hours}:${mins} ${amorpm}`

               }
               function formattimeezone(time){
                time = time.toString()
                return time.length < 2 ? "0" + time : time  
               }
        }



function displayProduct() {
    
    let template = "";
    for (let q = 0; q < Product.length; q++) {
       
        template +=
            `
                <tr>      
                        <th>${Product[q].NumCode}</th>
                        <th>${Product[q].name} <img src="images/${Product[q].images}"></th>
                        <th>${Product[q].quantity}</th>
                        <th>$${Product[q].price}</th>
                        <th>$${Product[q].totals}</th>
                    
                        <th>
                            <button onclick= edit(${q})>Edit</button>
                            <button onclick= deleted(${q})>Deleted</button>
                        </th>
                    </tr>
                `
    }
    

    template_display.innerHTML = template;
}

displayProduct();


function edit(q) {
    alert("Editing processing")
        name.value = Product[q].name
        quantity.value = Product[q].quantity
        price.value = Product[q].price

    submit.style.display = "none"
    updated.style.display = "inline-block"
    //message.style.display = "inline-block"
    // updated.dataset.q = q
    update_index = q
    displayProduct()
    document.querySelector(".input").style = "display: inline-block"
    imagelabel.textContent = Product[q].images
    subimage.src = "images/" + Product[q].images
    subimage.style.display = "inline-block"
    imagessss.style.display = "none"

}


let update_index = "";
function update() {
        const new_name = document.getElementById("name").value;
        const new_price = document.getElementById("price").value;
        const new_quantity = document.getElementById("quantity").value;
        const new_imagelabel = document.getElementById("imagelabel");
        let new_totals = new_quantity * new_price

    if(isNaN(new_quantity) || isNaN(new_price)){
        alert("Please enter valid price and quantity for the total amount")
        return 
    }else{
        alert("Updated Successfully")
        Product[update_index].name = new_name;
        Product[update_index].quantity = new_quantity;
        Product[update_index].totals = new_totals;
        Product[update_index].images = new_imagelabel.textContent;
        console.log(Product);
        submit.style.display="inline-block"
        updated.style.display="none"
        displayProduct();
    }
}


function deleted(q) {
        Product.splice(q,1)
        alert("Deleted Successfully")
        console.log(`Length of your arrays are now ${Product.length}`);
        displayProduct()
        record.innerHTML = `All Products: ${Product.length}`
}

document.getElementById('downloadButton').addEventListener('click', () => {
    if(Product.length == 0){
        alert("No data to download")
        return
    }
    const ws_data = [['Product Code', 'Product Name', 'Quantity', 'Price', 'Total', 'Image File Name']];
    Product.forEach(product => {
        if(product.images.trim()){
            ws_data.push([product.NumCode, product.name, product.quantity, product.price, product.totals, product.images]);
        }
    });

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Products');

    XLSX.writeFile(wb, 'products.xlsx');
});



document.getElementById('ImportButton').addEventListener('click', () => {
    document.getElementById('ImportFile').click();
})

document.getElementById("ImportFile").addEventListener('change' , function(event) {

    const file = event.target.files[0];
    if(!file) return;
        const reader = new FileReader();
        reader.onload = function(e){
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, {type: 'array'});
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], {header: 1});

            const newProducts = worksheet.slice(1).map(row => ({
                NumCode: row[0],
                name: row[1],
                quantity: row[2],
                price: row[3],
                totals: row[4],
                images: row[5]
            }));
            if(worksheet == ""){
                alert("No data exist in the excel")
            }else{
                newProducts.forEach(product => {
                    //if(!Product.some(p => p.NumCode === product.NumCode)){
                        Product.push(product)
                        record.innerHTML = `All Products: ${Product.length}`
                        //alert("Some Product Code already exist.")
                    //}
                 
                let newProducts = JSON.stringify(Product);
                localStorage.setItem("Product" , newProducts);
            });
            displayProduct()
            }
        };
        
    reader.readAsArrayBuffer(file);
});


