// console.log(1); // 1 2 4 6 20 30 50

// setTimeout(() => {
//     console.log(20);
// }, 0);

// console.log(2);

// setTimeout(()=>{
//     console.log(30)
// },2)

// console.log(4);

// setTimeout(()=>{
//     console.log(50);
// },3)

// console.log(6);

const sayAfterTwoSecond = function (name) {
  console.log(`Name is ${name}`)
}

// setTimeout(sayAfterTwoSecond, 2000, 'aamir')

setTimeout(
  name => {
    // console.log(`Name is ${name}`)
  },
  2000,
  'aamir'
)

// API Request
// const API = {
//   results: [
//     {
//       gender: 'male',
//       name: {
//         title: 'Mr',
//         first: 'Gavrilo',
//         last: 'Vilotić'
//       },
//       location: {
//         street: {
//           number: 266,
//           name: 'Gnjilanska'
//         },
//         city: 'Mionica',
//         state: 'Mačva',
//         country: 'Serbia',
//         postcode: 39446,
//         coordinates: {
//           latitude: '57.5283',
//           longitude: '-113.0200'
//         },
//         timezone: {
//           offset: '+4:00',
//           description: 'Abu Dhabi, Muscat, Baku, Tbilisi'
//         }
//       },
//       email: 'gavrilo.vilotic@example.com',
//       login: {
//         uuid: '4e904845-cab6-47f2-9877-2dc099fe3bd1',
//         username: 'heavykoala243',
//         password: 'leeann',
//         salt: 'XPRAC9ig',
//         md5: 'b91cbe256163fd18dba1538763908716',
//         sha1: 'b44a6ee00e626a5e4451cd41c85485b5336ff5d5',
//         sha256:
//           '2cb83034cc2237195f2be16499300f2c1c583dddf279455c494d55db14b02b90'
//       },
//       dob: {
//         date: '1994-01-14T12:13:08.481Z',
//         age: 30
//       },
//       registered: {
//         date: '2018-07-14T08:24:58.911Z',
//         age: 5
//       },
//       phone: '026-9827-814',
//       cell: '064-9309-143',
//       id: {
//         name: 'SID',
//         value: '887402532'
//       },
//       picture: {
//         large: 'https://randomuser.me/api/portraits/men/5.jpg',
//         medium: 'https://randomuser.me/api/portraits/med/men/5.jpg',
//         thumbnail: 'https://randomuser.me/api/portraits/thumb/men/5.jpg'
//       },
//       nat: 'RS'
//     }
//   ],
//   info: {
//     seed: '371f54c4563e648d',
//     results: 1,
//     page: 1,
//     version: '1.4'
//   }
// }

// API.results.map((data)=>{
//     console.log(data.name.first);
//     console.log(data.email);
// })