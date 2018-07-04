
    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const inventors1500 = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

    /* SAME AS
      const inventors1500 = inventors.filter(function bla(ble) {
      return ble.year >= 1500 && ble.year < 1600
    }); */

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    const inventorNames = inventors.map(name => `${name.first} ${name.last}`);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const linearInventors = inventors.sort((p1, p2) => p1.year > p2.year ? 1 : -1);

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const inventorsLived = inventors.reduce((total, inventor) => {
      return total + (inventor.passed - inventor.year);
    },0, 10);


    // 5. Sort the inventors by years lived
    const linearInventorsLived = inventors.sort((p1, p2) => (p1.passed - p1.year) > (p2.passed - p2.year) ? 1 : -1);

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // const elms = document.querySelectorAll('.mw-category a');
    // const boulevards = [];
    // elms.forEach((elm) => boulevards.push(elm.textContent));

    /* OR
      const elms = Array.from(document.querySelectorAll('.mw-category a'));
      OR
      const elms = [...document.querySelectorAll('.mw-category a')];
      THEN we can use MAP
      const boulevards = elms.map(boulevard => boulevard.textContent);
    */
    // boulevards.filter(boulevard => {
    //   if (boulevard.indexOf("de") >= 0) {
    //     return boulevard;
    //   }
    // });

    /* OR
      const deBoulevards = boulevards.filter(boulevard => boulevard.includes('de'));

      Cleaning up a bit:
      const boulevards = elms
                          .map(boulevard => boulevard.textContent);
                          .filter(boulevard => boulevard.includes('de'));
    */

    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const linearLastName = people.sort( (p1, p2) => {
      const [p1Last, p1First] = p1.split(', ');
      const [p2Last, p2First] = p2.split(', ');
      return p1Last > p2Last ? 1 : -1;
    });


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    const countVehicles = data.reduce( (acc, cur ) => {
      if (!acc[cur]) {
        acc[cur] = 0;
      }
      acc[cur]++
      return acc;
    }, {});
