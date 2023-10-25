
//----------- BurgerMenu -------//
document.getElementById("bm").addEventListener("click", () => {
    document.getElementById("98").style.display = "contents";;
}
)
document.getElementById("xmark").addEventListener("click", () => {
    document.getElementById("98").style.display = "none";;
}
)

// -----Quantite Changes-------//
let q1 = 3;
let t1;
let t;
function totalp() {
    t1 = q1 + q2;
    document.getElementById("7").innerText = t1;
}
function total() {
    t = q1 * 19 + q2 * 20;
    document.getElementById("8").innerText = t + ".00 $";
}
document.getElementById("1").addEventListener("click", () => {
    q1++;
    document.getElementById("2").innerText = q1;
    totalp();
    total();
}
)
document.getElementById("3").addEventListener("click", () => {
    if (q1 > 1) {
        q1--;
        document.getElementById("2").innerText = q1;
        totalp();
        total();
    }
}
)
let q2 = 1
document.getElementById("4").addEventListener("click", () => {
    q2++;
    document.getElementById("5").innerText = q2;
    totalp();
    total();
}
)
document.getElementById("6").addEventListener("click", () => {
    if (q2 > 1) {
        q2--;
        document.getElementById("5").innerText = q2;
        totalp();
        total();
    }
}
)
// -------Remove-------//

document.getElementById("11").addEventListener("click", () => {
    document.getElementById("10").style.display = "none";
    document.getElementById("111").style.display = "none";
    q1 = 0;
    totalp();
    total();
}
)
document.getElementById("22").addEventListener("click", () => {
    document.getElementById("20").style.display = "none";
    document.getElementById("222").style.display = "none";
    q2 = 0;
    totalp();
    total();
}
)

// -------- Validation------//


const name = document.getElementById('name')
const card = document.getElementById('cardn')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


document.getElementById('conf').addEventListener("click", (e) => {
    let messages = []
    if (card.value === '' || !card.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/)) {
        messages.push('Please enter a valid card number')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    document.getElementById('form').setAttribute('action', 'livraison.html')
})