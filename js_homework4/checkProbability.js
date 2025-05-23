function checkProbabilityTheory(count) {
  let evenCount = 0;     // лічильник парних
  let oddCount = 0;      // лічильник непарних

  for (let i = 0; i < count; i++) {
    let number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    if (number % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  let evenPercentage = (evenCount / count) * 100;
  let oddPercentage = (oddCount / count) * 100;

  console.log("Кількість згенерованих чисел: " + count);
  console.log("Парних чисел: " + evenCount);
  console.log("Непарних чисел: " + oddCount);
  console.log("Відсоток парних до непарних:");
  console.log("  Парних: " + evenPercentage.toFixed(2) + "%");
  console.log("  Непарних: " + oddPercentage.toFixed(2) + "%");
}


checkProbabilityTheory(10);    // швидка перевірка
console.log(""); // Порожній рядок для поділу
checkProbabilityTheory(100);   // Більш стабільний результат
console.log(""); // Порожній рядок для поділу
checkProbabilityTheory(1000);  // майже точне 50/50