function action() {
    document.getElementById("fname").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) document.getElementById("button").click();
    });
    document.getElementById("qty").addEventListener("keyup", function(event0) {
        event.preventDefault();
        if (event0.keyCode === 13) document.getElementById("button").click();
    });
}
action();
function viewList() {
    document.getElementById("list").style.display = "none";
    document.getElementById("listDraft").style.display = "block";
    document.getElementById("bgHome").style.display = "none";
    document.getElementById("bar1").className  = "none";
    document.getElementById("bar2").className = "none";
    document.getElementById("bar3").className = "none";
    document.getElementById("Sbar1").className = "snBar";
    document.getElementById("Sbar2").className = "snBar";
    document.getElementById("Sbar3").className = "snBar active";
    const tableRows = document.querySelectorAll("tr");
    for (let i=1; i<tableRows.length; i++) tableRows[i].remove();
    const myNodeList = document.querySelectorAll("li");
    for (let i=0; i<myNodeList.length; i++) {
        const llist = document.createElement("tr");
        const nnode = myNodeList[i].innerText;
        const words = nnode.split(" ");
        const item = nnode.replace(words[0], "");
        const listItem = document.createElement("td");
        const listItemNode = document.createTextNode(item);
        listItem.appendChild(listItemNode);
        const qtyData = document.createElement("td");
        const qtyDataNode = document.createTextNode(words[0]);
        qtyData.appendChild(qtyDataNode);
        llist.appendChild(listItem);
        llist.appendChild(qtyData);
        document.getElementById("items").appendChild(llist);
        document.getElementById("mySideNav").style.display = "block";
    }
}
function createList() {
    document.getElementById("list").style.display = "block";
    document.getElementById("listDraft").style.display = "none";
    document.getElementById("bgHome").style.display = "none";
    document.getElementById("bar1").className = "none";
    document.getElementById("bar2").className = "none";
    document.getElementById("bar3").className = "none";
    document.getElementById("Sbar1").className = "snBar";
    document.getElementById("Sbar2").className = "snBar active";
    document.getElementById("Sbar3").className = "snBar";
    document.getElementById("fname").focus();
    document.getElementById("mySideNav").style.display = "block";
}
function HOME() {
    document.getElementById("list").style.display = "none";
    document.getElementById("listDraft").style.display = "none";
    document.getElementById("bgHome").style.display = "";
    document.getElementById("bar1").className = "none active1";
    document.getElementById("bar2").className = "none";
    document.getElementById("bar3").className = "none";
    document.getElementById("Sbar1").className = "snBar active";
    document.getElementById("Sbar2").className = "snBar";
    document.getElementById("Sbar3").className = "snBar";
    document.getElementById("mySideNav").style.display = "block";
}
function addItem() {
    const para = document.createElement("li");
    const item = document.getElementById("fname").value;
    let qty = document.getElementById("qty").value;
    if (qty=="") qty = "1";
    const entry = qty + " " + item;
    if (item=="") return 0;
    const node = document.createTextNode(entry);
    const link = document.createElement("a");
    const click = document.createAttribute("onclick");
    click.value = "del(this)";
    link.setAttributeNode(click);
    const src = document.createAttribute("src");
    src.value = "/images/myOrganizer/delete181.png";
    const imgItem = document.createElement("img");
    imgItem.setAttributeNode(src);
    link.appendChild(imgItem);
    const link1 = document.createElement("a");
    const src1 = document.createAttribute("src");
    src1.value = "/images/myOrganizer/icons8-crayon-24.png";
    const imgEdit = document.createElement("img");
    imgEdit.setAttributeNode(src1);
    const click1 = document.createAttribute("onclick");
    click1.value = "edit(this)";
    link1.appendChild(imgEdit);
    link1.setAttributeNode(click1);
    para.appendChild(node); 
    para.appendChild(link);
    para.appendChild(link1);
    document.getElementById("ul").appendChild(para);
    document.getElementById("fname").value = "";
    document.getElementById("qty").value = "";
}
function del(id) {
    id.parentNode.remove();
}
function clearItems() {
    document.getElementById("ul").innerHTML = "";
}
function edit(id) {
    const line = document.createElement("li");
    const text = document.createElement("input");
    const ll = document.createAttribute("id");
    ll.value = "ename";
    text.setAttributeNode(ll);
    text.setAttribute("placeholder", "Item");
    const amount = document.createElement("input");
    const qty = document.createAttribute("id");
    qty.value = "qtyNew";
    amount.setAttributeNode(qty);
    amount.setAttribute("type", "number");
    amount.setAttribute("placeholder", "Quantity");
    const textButton = document.createElement("input");
    const type = document.createAttribute("type");
    type.value = "button";
    textButton.setAttributeNode(type);
    const click = document.createAttribute("onclick");
    click.value = "makeEdit(this)";
    textButton.setAttributeNode(click);
    const item = document.createAttribute("value");
    item.value = "Save";
    textButton.setAttributeNode(item);
    const idA = document.createAttribute("id");
    idA.value = "editBtn";
    textButton.setAttributeNode(idA);
    line.appendChild(text);
    line.appendChild(amount);
    line.appendChild(textButton);
    document.getElementById("ul").replaceChild(line, id.parentNode);
    document.getElementById("ename").addEventListener("keyup", function(ev) {
        ev.preventDefault();
        if (ev.keyCode === 13) {document.getElementById("editBtn").click();}
    });
    document.getElementById("qtyNew").addEventListener("keyup", function(ev0) {
        ev0.preventDefault();
        if (ev0.keyCode === 13) {document.getElementById("editBtn").click();
        }
    });
    document.getElementById("ename").focus();
}
function makeEdit(id) {
    const par = document.createElement("li");
    const item = document.getElementById("ename").value;
    if (item=="") return 0;
    let qty = document.getElementById("qtyNew").value;
    if (qty=="") qty = 1;
    const listItem = qty + " " + item;
    const node = document.createTextNode(listItem);
    const link = document.createElement("a");
    const click = document.createAttribute("onclick");
    click.value = "del(this)";
    link.setAttributeNode(click);
    const src = document.createAttribute("src");
    src.value = "/images/myOrganizer/delete181.png";
    const imgItem = document.createElement("img");
    imgItem.setAttributeNode(src);
    link.appendChild(imgItem);
    const link1 = document.createElement("a");
    const src1 = document.createAttribute("src");
    src1.value = "/images/myOrganizer/icons8-crayon-24.png";
    const imgEdit = document.createElement("img");
    imgEdit.setAttributeNode(src1);
    const click1 = document.createAttribute("onclick");
    click1.value = "edit(this)";
    link1.appendChild(imgEdit);
    link1.setAttributeNode(click1);
    par.appendChild(node); 
    par.appendChild(link);
    par.appendChild(link1);
    document.getElementById("ul").replaceChild(par, id.parentNode);
}
function printDiv() {
    const rows = document.querySelectorAll("tr");
    const doc = document.getElementById("items");
    let table = document.createElement("table");
    for (let i=0; i<rows.length; i++) {
        var row = document.createElement("tr");
        for (let j=0; j<2; j++) {
            if (i==0) {var data = document.createElement("th"); data.style.textAlign = "center";}
            else var data = document.createElement("td");
            var node = document.createTextNode(doc.rows[i].cells[j].innerHTML);
            data.appendChild(node);
            if (i!=0) data.style.border = "none";
            if (j==1) {
                data.style.borderLeft = "1px solid darkslategrey";
                data.style.textAlign = "center";}
            row.appendChild(data);
        }
        table.appendChild(row);
        table.style.borderBottom = "none";
    }
    var printContents = document.getElementById("items").innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = "<center><h1 class='h3'>myOrganizer</h1></center><h3>LIST ITEMS:</h3>";
    document.body.appendChild(table);
    const p1 = document.createElement("p");
    const nnode1 = document.createTextNode("Thank you for choosing us! We will continue to give you our best service!");
    p1.appendChild(nnode1);	
    p1.setAttribute("style", "font-size:11px;");
    document.body.appendChild(p1);
    const p2 = document.createElement("h3");
    const nnode2 = document.createTextNode("Feel free to contact us @ www.myOrganizer.com");
    p2.appendChild(nnode2);
    p2.setAttribute("style", "font-size:11px;");
    document.body.appendChild(p2);
    window.print();
    document.body.innerHTML = originalContents;
    action();
}
function showFAQpg() {
    document.getElementById("list").style.display = "none";
    document.getElementById("listDraft").style.display = "none";
    document.getElementById("bgHome").style.display = "none";
    document.getElementById("Sbar1").className = "snBar";
    document.getElementById("Sbar2").className = "snBar";
    document.getElementById("Sbar3").className = "snBar";
    document.getElementById("bar1").className = "none";
    document.getElementById("bar2").className = "none active1";
    document.getElementById("bar3").className = "none";	
    document.getElementById("mySideNav").style.display = "none";
        }
function showContacts() {
    document.getElementById("list").style.display = "none";
    document.getElementById("listDraft").style.display = "none";
    document.getElementById("bgHome").style.display = "none";
    document.getElementById("Sbar1").className = "snBar";
    document.getElementById("Sbar2").className = "snBar";
    document.getElementById("Sbar3").className = "snBar";
    document.getElementById("bar1").className = "none";
    document.getElementById("bar2").className = "none";
    document.getElementById("bar3").className = "none active1";
    document.getElementById("mySideNav").style.display = "none";
}
function scrollDown() {
    document.getElementById("myDownloadBtn").scrollIntoView();
}
function login() {
    document.getElementById("myLoginPg").style.height = "80vh";
    document.getElementById("myLoginPg").style.width = "70vh";
    setTimeout(function show() {
    let x = document.getElementById("loginContents").style.display = "block";}, 700);
    document.getElementById("myLandingPg").style.opacity = "0.2";
}
function resetPassword() {
    document.getElementById("loginContents").style.display = "none";
    document.getElementById("resetPass").style.display = "block";
}
function backToLogin() {
    document.getElementById("resetPass").style.display = "none";
    document.getElementById("signUp").style.display = "none";
    document.getElementById("loginContents").style.display = "block";
    
}
function signUp() {
    document.getElementById("loginContents").style.display = "none";
    document.getElementById("signUp").style.display = "block";
}
function email() {
    alert("A confirmation message has been sent to your email.");
}
function verifyLogInBtn() {
    const elemnt = document.getElementById("login");
    let u = document.getElementById("user0").value;
    let p = document.getElementById("password").value;
    if(u!="" && p!="") {
        elemnt.className = "btnLogin";
        elemnt.setAttribute("href", "Grocery Bud Home Page.html");
    }
    else {
        elemnt.className = "btnInactive";
        if(elemnt.hasAttribute("href")) elemnt.removeAttribute("href");
    }
}
setInterval(verifyLogInBtn, 1);
function verifySendEmailBtn () {
    const elemnt = document.getElementById("sendemail");
    let e = document.getElementById("emailR").value;
    let u = document.getElementById("userR").value;
    if(u!="" && e!="") {
        elemnt.className = "btnLogin";
        const attr = document.createAttribute("onclick");
        attr.value = "email()";
        elemnt.setAttributeNode(attr);
    }
    else {
        elemnt.className = "btnInactive";
        if(elemnt.hasAttribute("onclick")) elemnt.removeAttribute("onclick");
    }
}
setInterval(verifySendEmailBtn, 1);
function wrongPassword() {
    let p = document.getElementById("newPassword").value;
    let np = document.getElementById("confirmedPassword").value;
    let len = document.getElementById("lblPassword");
    let val = document.getElementById("label");
    len.innerHTML = "Password must be 8 characters";
    val.innerHTML = "Passwords are case sensitive";
    len.style.color = "black";
    val.style.color = "black";
    if (p!=np) {
        val.innerHTML = "Passwords do not match";
        val.style.color = "red";
    }
    if (p.length!=8) {
        len.innerHTML = "Password is not up to 8 characters";
        len.style.color = "red";
    }
}
function regFail() {
    const e = document.getElementById("email");
    const u = document.getElementById("newUser");
    const p = document.getElementById("newPassword");
    const np = document.getElementById("confirmedPassword");
    const lbl1 = document.getElementById("lblPassword");
    const lbl2 = document.getElementById("label");
    e.style.border = "1px solid black";
    u.style.border = "1px solid black";
    p.style.border = "1px solid black";
    np.style.border = "1px solid black";
    lbl2.innerHTML = "Passwords must be exactly 8 characters, must contain at least one uppercase letter, lowercase letter, number and special character";
    lbl1.innerHTML = "Passwords are case sensitive";
    lbl1.style.color = "black";
    lbl2.style.color = "black";
    if (e.value=="") e.style.border = "1px solid red";
    if (u.value=="") u.style.border = "1px solid red";
    if (p.value=="") p.style.border = "1px solid red";
    if (np.value=="") np.style.border = "1px solid red";
    if (np.value!=p.value) {
        lbl1.innerHTML = "Passwords do not match";
        lbl1.style.color = "red";
        p.style.border = "1px solid red";
        np.style.border = "1px solid red";
    }
    let pswrdCheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)(?=.{8,})/;
    if (!pswrdCheck.test(p.value)) {
        lbl2.style.color = "red";
    }
}
function verifySignUpBtn() {
    const e = document.getElementById("email").value;
    const u = document.getElementById("newUser").value;
    const p = document.getElementById("newPassword").value;
    const np = document.getElementById("confirmedPassword").value;
    const btn = document.getElementById("signup");
    const newBtn = document.getElementById("signupp");
    let pswrdCheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)(?=.{8,})/;
    if (e!="" && u!="" && p!="" && np!="" && np==p && p.length==8 && pswrdCheck.test(p)) {
        btn.style.display = "none";
        newBtn.style.display = "block";
    }
    else {
        btn.style.display = "inline-block";
        newBtn.style.display = "none";
    }
}
function openn(id) {
    id.lastElementChild.setAttribute("style", "display: block;");
    id.firstElementChild.firstElementChild.setAttribute("src", "/images/myOrganizer/icons8-down-25-up.png");
    id.parentElement.style.border = "2px solid seagreen";
    id.parentElement.style.boxShadow = "0 0 5px 0 darkslategrey, 0 0 12px 0 whitesmoke"
    id.setAttribute("onclick", "closee(this)");
}
function closee(id) {
    id.lastElementChild.setAttribute("style", "display: none;");
    id.firstElementChild.firstElementChild.setAttribute("src", "/images/myOrganizer/icons8-down-25.png");
    id.parentElement.style.border = "1px solid seagreen";
    id.parentElement.style.boxShadow = "0 0 2px 0 darkslategrey, 0 0 5px 0 whitesmoke"
    id.setAttribute("onclick", "openn(this)");
}