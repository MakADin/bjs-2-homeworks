class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  /**
   * @param {number} number
   */
  set state(number) {
    if (number < 0) {
      this._state = 0;
    } else if (number > 100) {
      this._state = 100;
    } else {
      this._state = number;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    // debugger
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    // debugger
    return this.books.find((book) => book[type] === value) ?? null;
  }

  giveBookByName(bookName) {
    // const requestedBook = this.books.find((book) => book.name === bookName);
    // if (!requestedBook) {
    //   return null;
    // }
    // const index = this.books.indexOf(requestedBook);
    // this.books.splice(index, 1);

    // return requestedBook;

    // ========== методы findIndex и splice
    const index = this.books.findIndex((book) => book.name === bookName);
    if (index !== -1) {
      return this.books.splice(index, 1)[0];
    }
    return null;
  }
}

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      console.log("Введенные данные вне диапазона от 2 до 5 включительно");
      return;
    }
    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }
    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      return 0;
    }

    return this.marks[subject].reduce(
      (acc, item, index, array) => acc + item / array.length,
      0
    );
  }

  getAverage() {
    const studentSubjects = Object.keys(this.marks);

    if (!studentSubjects.length) {
      return 0;
    }
    const totalSum = studentSubjects.reduce(
      (acc, subject) => acc + this.getAverageBySubject(subject),
      0
    );

    return totalSum / studentSubjects.length;
  }
}

// ================== тесты добавления книг и прочего

let newLibrary = new Library("Библиотека имени А. С. Пушкина");
newLibrary.addBook(
  new DetectiveBook(
    "Артур Конан Дойл",
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  )
);
newLibrary.addBook(
  new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
  )
);
newLibrary.addBook(new PrintEditionItem("Типовой школьный журнал", 2019, 102));
newLibrary.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
newLibrary.addBook(new Magazine("Мурзилка", 1924, 60));
newLibrary.addBook(new Magazine("test", 1924, 60));

console.log(newLibrary.findBookBy("name", "Властелин колец")); //null
console.log(newLibrary.findBookBy("releaseDate", 1924).name); //"Мурзилка"

let issuedBook = newLibrary.giveBookByName("test");
issuedBook.state = 35; // 35%
issuedBook.fix(); // 52.5%
issuedBook.fix(); // 78.75%
issuedBook.fix(); // 100%
newLibrary.addBook(issuedBook);
