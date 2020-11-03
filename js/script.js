document.addEventListener("DOMContentLoaded", function (event) {
  var winCounter = 0;

  // get available flavors
  var availFlavors = getFlavors(JSONBingo.squares);

  // get flavor from request or default
  var flavor = getParam("flavor");
  if (typeof flavor == "undefined" || !availFlavors.includes(flavor))
    flavor = availFlavors[0];
  console.debug("flavor: " + flavor);

  // add options for flavor select
  var selElem = document.getElementById("flavor");
  for (var i = 0; i < availFlavors.length; i++) {
    var opt = document.createElement("option");
    opt.innerHTML = flavOptText + availFlavors[i];
    opt.value = availFlavors[i];
    opt.selected = availFlavors[i] == flavor;
    selElem.appendChild(opt);
  }

  // set header/footer
  document.querySelector("#header").innerHTML = headerText;
  document.querySelector("#footer").innerHTML = footerText;

  // filter and shuffle texts
  var relSquares = filter(JSONBingo.squares, flavor);
  console.debug("texts for flavor: " + relSquares.length);
  shuffle(relSquares);

  // build board
  for (r = 0; r < SIZE; r++) {
    for (c = 0; c < SIZE; c++) {
      var text = isJoker(r, c)
        ? jokerText
        : relSquares[getIdx(r, c) % relSquares.length].square;
      var defVal = isJoker(r, c) ? 1 : 0;
      var cls = isJoker(r, c) ? "selected freesquare" : "square";
      document.querySelector("#board").innerHTML +=
        "<div data-value='" +
        defVal +
        "' class='" +
        cls +
        "' id='" +
        getSqId(r, c) +
        "'><div class='text'><br/>" +
        text +
        "</div></div>";
    }
  }

  // adapt square dimensions to size of board, assuming board has dim of 100vmin x 100vmin in CSS
  var sqElems = document.querySelectorAll(".square, .freesquare");
  for (var i = 0; i < sqElems.length; i++) {
    sqElems[i].style.width = 100 / SIZE + "vmin";
    sqElems[i].style.height = 100 / SIZE + "vmin";
  }

  // adapt square text font size to size of board, assuming 2.5vmin for 5 x 5 board
  var txtElems = document.querySelectorAll(".text");
  for (var i = 0; i < txtElems.length; i++) {
    txtElems[i].style.fontSize = 12.5 / SIZE + "vmin";
  }

  $("div.square").tappable(function () {
    this.classList.toggle("selected");

    if (this.getAttribute('data-value') == 1) {
      this.setAttribute('data-value', '1');
    } else {
      this.setAttribute('data-value', '1');
    }

    clickSnd.play();

    var hasWon = false;

    // check rows
    for (var r = 0; r < SIZE; r++) {
      var sum = 0;
      for (c = 0; c < SIZE; c++) {
        sum += parseInt(document.querySelector("#" + getSqId(r, c)).getAttribute('data-value'))
      }
      hasWon = hasWon | (sum == SIZE);
    }

    // check cols
    for (var c = 0; c < SIZE; c++) {
      var sum = 0;
      for (r = 0; r < SIZE; r++) {
        sum += parseInt(document.querySelector("#" + getSqId(r, c)).getAttribute('data-value'))
      }
      hasWon = hasWon | (sum == SIZE);
    }

    // check diags
    var sum = 0;
    for (var i = 0; i < SIZE; i++) {
      sum += parseInt(document.querySelector("#" + getSqId(i, i)).getAttribute('data-value'));
    }
    hasWon = hasWon | (sum == SIZE);
    var sum = 0;
    for (var i = 0; i < SIZE; i++) {
      sum += parseInt(document.querySelector("#" + getSqId(SIZE - 1 - i, i)).getAttribute('data-value'));
    }
    hasWon = hasWon | (sum == SIZE);

    if (hasWon) {
      document.querySelector("#header").innerHTML = winText;
      document.querySelector("#header").classList.add("win");
      if (winCounter < 1) {
        winSnd.play();
      }
      winCounter++;
    } else {
      document.querySelector("#header").innerHTML = headerText;
      document.querySelector("#header").classList.remove("win");
    }
  });
});

getParam = function (name) {
  if (
    (name = new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)").exec(
      location.search
    ))
  )
    return decodeURIComponent(name[1]);
};

isJoker = function (r, c) {
  return (
    SIZE % 2 == 1 &&
    USE_JOKER &&
    r == Math.floor(SIZE / 2) &&
    c == Math.floor(SIZE / 2)
  );
};

getIdx = function (r, c) {
  return r * SIZE + c;
};

getSqId = function (r, c) {
  return "sq_" + r + "_" + c;
};

shuffle = function (v) {
  for (
    var j, x, i = v.length;
    i;
    j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x
  );
  return v;
};

filter = function (v, flavor) {
  var j = 0;
  var res = [];
  for (var i = 0; i < v.length; i++) {
    if ("flavors" in v[i] && v[i].flavors.includes(flavor)) {
      res.push(v[i]);
    }
  }
  return res;
};

getFlavors = function (v, flavor) {
  var res = [];
  for (var i = 0; i < v.length; i++) {
    if ("flavors" in v[i]) {
      for (var j = 0; j < v[i].flavors.length; j++) {
        if (!res.includes(v[i].flavors[j])) res.push(v[i].flavors[j]);
      }
    }
  }
  return res;
};
