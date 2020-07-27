let dell = {
  brand: "Dell",
  Hard_Disk: "2 TB",
  color: "white",
  type: "Inspiron 14",
  property: {
    HD_Webcam: true,
    Wireless_Bluetooth: true,
    Display: "TrueLife Display 14.0",
  },
};

let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");

let buyLaptop2 = fetch(
  "https://jsonplaceholder.typicode.com/posts"
).then((response) => response.json());

let buyLaptop = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(dell);
  }, 3000);
});

// Promise
function fetch1() {
  result1.innerText = "Fetching Data...";
  buyLaptop.then((data) => {
    result1.innerText = JSON.stringify(data);
    // result1.innerText = JSON.stringify(data.Hard_Disk);
  });
}

// Async and Await
async function fetch2() {
  result2.innerText = "Featching Data...";
  let data = await buyLaptop;
  result2.innerText = JSON.stringify(data);
}

// Fetch Api with Promise
function fetch3() {
  result3.innerText = "Featching Data...";
  buyLaptop2.then((res) => {
    result3.innerText = JSON.stringify(res);
  });
}
