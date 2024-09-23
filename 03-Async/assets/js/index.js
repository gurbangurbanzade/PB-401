// console.log("hello");

const h1 = document.querySelector("h1");
const btn = document.querySelector(".clickMe");
const input = document.querySelector(".customInput");
const list = document.querySelector(".list");

const btnSearch = document.querySelector(".searchBtn");
const inputSearch = document.querySelector(".searchInp");
const listSearch = document.querySelector(".listSearch");

// const h1 = document.querySelectorAll("h1");
// const h1 = document.querySelector(".name");
// const h1 = document.querySelector("#name");
// const h1 = document.getElementById("name");
// const h1 = document.getElementsByClassName("name");

// console.log(h1);

// h1.innerText = "hello world";

// h1.style.backgroundColor = "red";
// h1.className = "customStyle";

// btn.addEventListener("click", () => {
//   console.log("hello");
//   console.log(input.value);
//   //   h1.innerText = "<a>hello</a>";
//   //   h1.innerHTML = "<a>hello</a>";

//   if (input.value.trim() == "") {
//     alert("bos deyer elave etmek olmaz");
//   } else {
//     list.innerHTML += `<li>${input.value}</li>`;
//   }
//   input.value = "";
// });

// const result = prompt("deyeri daxil edin");
// const result = confirm("deyeri daxil edin");

// console.log(result);

// btn.addEventListener("click", () => {
//   //   li.innerText = "salam";
//   //   li.className = "customClass";
//   //   li.classList.add("newClass");

//   //   li.addEventListener("click", () => {
//   //     //some functions
//   //   });

//   //   ul.appendChild(li);

//   if (input.value.trim() == "") {
//     alert("bos deyer elave etmek olmaz");
//   } else {
//     // list.innerHTML += `<li>${input.value}</li>`;

//     const li = document.createElement("li");
//     li.innerText = input.value;
//     list.appendChild(li);
//   }
//   input.value = "";
// });

let data = [
  {
    id: 1,
    value: "task1",
  },
  {
    id: 2,
    value: "task2",
  },
];

const createList = (ul) => {
  ul.innerHTML = "";
  data.forEach((elem) => {
    const li = document.createElement("li");
    const button = document.createElement("button");

    li.innerText = elem.value;
    button.innerText = "Delete";

    button.setAttribute("dataId", elem.id);

    button.addEventListener("click", (e) => {
      //   console.log(e.target.getAttribute("dataId"));
      const id = e.target.getAttribute("dataId");
      console.log(data, "data from before deletede");
      data = data.filter((elem) => elem.id != id);

      console.log(data, "data");
      createList(list);
    });

    li.appendChild(button);
    ul.appendChild(li);
  });
};

createList(list);

btn.addEventListener("click", () => {
  if (input.value.trim() == "") {
    alert("bos deyer elave etmek olmaz");
  } else {
    const obj = {
      id: data[0] ? data[data.length - 1].id + 1 : 1,
      value: input.value,
    };

    data.push(obj);

    createList(list);
  }
  input.value = "";
});

btnSearch.addEventListener("click", () => {
  if (inputSearch.value.trim() == "") {
    alert("bos deyer elave etmek olmaz");
  } else {
    data = data.filter((elem) =>
      elem.value
        .toLocaleUpperCase()
        .includes(inputSearch.value.toLocaleUpperCase())
    );

    console.log(data, "data seach");

    // const obj = {
    //   id: data[0] ? data[data.length - 1].id + 1 : 1,
    //   value: input.value,
    // };

    // data.push(obj);

    createList(listSearch);
  }
  //   input.value = "";
});
