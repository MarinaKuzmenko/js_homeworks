var text = "Wonderful Joyful Happiness Time Task Apple Amazing Flying Magic Strength Victory Freedom";

// Розбиваємо рядок на слова
var words = text.split(" ");

var suitable = [];
var unsuitable = [];

// Розділяємо слова
for (var i = 0; i < words.length; i++) {
    var word = words[i];

    if (word.length >= 6 && !/[Aa]/.test(word)) {
        suitable.push(word);
    } else {
        unsuitable.push(word);
    }
}

// Виводимо результат для підходящих слів
console.log("✅ Підходять:");
var suitableLine = "";
for (var i = 0; i < suitable.length; i++) {
    suitableLine += suitable[i];
    if (i < suitable.length - 1) {
        suitableLine += ", ";
    }
}
console.log(suitableLine);

// Виводимо результат для не підходящих слів
console.log("\n❌ Не підходять:");
var unsuitableLine = "";
for (var i = 0; i < unsuitable.length; i++) {
    unsuitableLine += unsuitable[i];
    if (i < unsuitable.length - 1) {
        unsuitableLine += ", ";
    }
}
console.log(unsuitableLine);

