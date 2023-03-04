/*
//////USing Promise//////////
console.log("person1: shows ticket");
console.log("person2: shows ticket");
const promiseWifeBringsTicks = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ticket");
  }, 3000);
});

const getPopcorn = promiseWifeBringsTicks.then((t) => {
  console.log(`wife: I have the tickets`);
  console.log(`husband: we should go in`);
  console.log(`wife: no i am hungry`);
  return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
  console.log(`husband: I got some popcorn`);
  console.log(`husband: we should go in`);
  console.log(`wife: I need butter on my popcorn`);
  return new Promise((resolve, reject) => resolve(`${t} butter`));
});

const getColdDrink = getButter.then((t) => {
  console.log(`husband: I got some butter on popcorn`);
  console.log(`husband: anything else darling?`);
  console.log(`wife: Yaa i need a Cold Drink`);
  console.log(`husband : Ok! wait`);
  return new Promise((resolve, reject) => resolve(`${t} Colddrink`));
});

getColdDrink.then((t) => console.log(t));

console.log("person4: shows ticket");
console.log("person5: shows ticket");



/////Using async Await/////
console.log("person1 shows ticket");
console.log("person2 shows ticket");

const preMovie = async () => {
  const promiseWifeBringsTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });
  const getPopcorn = new Promise((resolve, reject) => resolve("Popcorn"));
  const addButter = new Promise((resolve, reject) => resolve("Butter"));
  const getColdDrinks = new Promise((resolve, reject) => resolve("Cold Drink"));
  let ticket = await promiseWifeBringsTicks;

  console.log(`wife: I have the ${ticket}`);
  console.log(`husband: we should go in`);
  console.log(`wife: no i am hungry`);

  let popcorn = await getPopcorn;

  console.log(`husband: I got some ${popcorn}`);
  console.log(`husband: we should go in`);
  console.log(`wife: I need butter on my popcorn`);

  let butter = await addButter;

  console.log(`husband: I got some ${butter} on popcorn`);
  console.log(`husband: anything else darling?`);
  console.log(`wife: Yaa i need a Cold Drink`);
  console.log(`husband : Ok! wait`);

  let coldDrink = await getColdDrinks;

  console.log(`husband: here is Your ${coldDrink} `);
  console.log(`husband: anything else darling?`);
  console.log(`wife: lets go we are getting late`);
  console.log(`husband : thank you for the reminder`);

  //  const getCoke =  new Promise((resolve, reject) => {
  // 	setTimeout(() => resolve('coke'), 3000);
  // });

  return ticket;
};

preMovie().then((m) => console.log(`Person3: shows ${m}`));

console.log("person4 shows ticket");
console.log("person5 shows ticket");


*/
const blogs = [];

const createBlog = async (val) => {
  const updateBlog = new Promise((resolve, reject) => {
    blogs.push(val);
    resolve(blogs);
  });

  const LastUserActivityTime = new Promise((resolve, reject) => {
    const time = new Date();
    resolve(`${time}`);
  });

  let blog = await updateBlog;
  let lastSeen = await LastUserActivityTime;

  return [blog, lastSeen];
};

createBlog({ title: "blog1" }).then((msg) => {
  for (const val of msg) {
    console.log(val);
  }
});
// function createBlog(val) {
//   return new Promise((resolve, reject) => {
//     blogs.push(val);
//     resolve(blogs);
//   });
// }

// function LastUserActivityTime() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const time = new Date();
//       console.log(blogs);
//       res(`lastSeen: ${time}`);
//     }, 1000);
//   });
// }
// function displayPost() {
//   console.log(blogs);
// }
// Promise.all([createBlog({ title: "blog1" }), LastUserActivityTime()]).then(
//   (msg) => console.log(msg[1])
// );
