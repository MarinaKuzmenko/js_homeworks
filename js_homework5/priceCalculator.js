// Створюємо об'єкт з послугами та їх цінами (у вигляді рядків із "грн")
var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн"
};

// Додаємо ще одну послугу (за бажанням)
services["Розбити скло"] = "200 грн";
//services["Кава"] = "70 грн";

// Метод 1 — рахуємо загальну суму всіх послуг
function price(services) {
  let sum = 0;
  for (let key in services) {
    sum += parseInt(services[key]); // перетворюємо рядок "60 грн" у число 60
  }
  return sum + " грн"; // додаємо "грн" до результату
}

// Метод 2 — знаходимо мінімальну ціну серед послуг
function minPrice(services) {
  let min = null; // заглушка для мінімального значення

  for (let key in services) {
    let value = parseInt(services[key]); // перетворюємо рядок у число

    // Якщо це перше значення або нове менше за поточне мінімальне
    if (min === null || value < min) {
      min = value;
    }
  }

  return min + " грн"; // повертаємо результат з "грн"
}

// Метод 3 — знаходимо максимальну ціну серед послуг
function maxPrice(services) {
  let max = null; // заглушка для максимального значення

  for (let key in services) {
    let value = parseInt(services[key]); // перетворюємо рядок у число

    // Якщо це перше значення або нове більше за поточне максимальне
    if (max === null || value > max) {
      max = value;
    }
  }

  return max + " грн"; // повертаємо результат з "грн"
}


// Перевірка:
console.log("Загальна ціна: " + price(services));
console.log("Мінімальна ціна: " + minPrice(services));
console.log("Максимальна ціна: " + maxPrice(services));












