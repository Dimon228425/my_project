const man = document.getElementById("man");
let positionX = 500;
let positionY = 0;

function moveCharacter1(e) {
    if (e.code === "KeyD") { 
        positionX += 5;
    } 
    else if (e.code === "KeyA") { 
        positionX -= 5;
    }
    else if (e.code === "KeyS") { 
        positionY += 10;
    }
    else if (e.code === "KeyW") { 
        positionY -= 10;
    }

    // Перевірка меж екрана
    positionX = Math.max(0, Math.min(positionX, window.innerWidth - man.offsetWidth));
    positionY = Math.max(0, Math.min(positionY, window.innerHeight - man.offsetHeight));

    // Логування для дебагу
    console.log(`Man positionX: ${positionX}, positionY: ${positionY}`);

    man.style.top = positionY + "px";
    man.style.left = positionX + "px";
}

window.addEventListener("keydown", moveCharacter1);

const man1 = document.getElementById("man1");
let positionXY = 500;
let positionYY = 0;

function moveCharacter2(e) {
    if (e.code === "KeyK") { 
        positionXY += 5;
    } 
    else if (e.code === "KeyH") { 
        positionXY -= 5;
    }
    else if (e.code === "KeyJ") { 
        positionYY += 10;
    }
    else if (e.code === "KeyU") { 
        positionYY -= 10;
    }

    // Перевірка меж екрана
    positionXY = Math.max(0, Math.min(positionXY, window.innerWidth - man1.offsetWidth));
    positionYY = Math.max(0, Math.min(positionYY, window.innerHeight - man1.offsetHeight));

    // Логування для дебагу
    console.log(`Man1 positionXY: ${positionXY}, positionYY: ${positionYY}`);

    man1.style.top = positionYY + "px";
    man1.style.left = positionXY + "px";
}

window.addEventListener("keydown", moveCharacter2);

// Функція для перевірки зіткнення
function detectCollision(a, b) {
    const rectA = a.getBoundingClientRect();
    const rectB = b.getBoundingClientRect();
    return rectA.x < rectB.x + rectB.width &&  
           rectA.x + rectA.width > rectB.x &&  
           rectA.y < rectB.y + rectB.height &&  
           rectA.y + rectA.height > rectB.y;   
}

// Оновлення для перевірки зіткнень
// function update() {
//     if (detectCollision(man1, man)) {
//         alert("Game Over");
//     }
// }

// Перевірка зіткнення кожні 100 мс
setInterval(update, 100);