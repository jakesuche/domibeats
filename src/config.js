export default {
  app: {
    sidebarTransitionTime: 300, //ms
    colors: {
      sidebar: "#002B49",
      navbar: "#ffffff",
      primary: "#005792",
      secondary: "#798892",
      success: "#21AE8C",
      info: "#1A86D0",
      warning: "#FDA700",
      danger: "#FD5F00",
      inverse: "#0D2B47",
      textColor: "#495057",
      gray: "#D7DFE6"
    },
    chartColors: {
      axisColor: '#8EA1AB'
    }
  }
};


// var obj = [
//   { 'name': 'P1', 'value': 150 },
//   { 'name': 'P1', 'value': 150 },
//   { 'name': 'P2', 'value': 200 },
//   { 'name': 'P3', 'value': 450 }
// ];

// var holder = {};

// obj.forEach(function(d) {
// if (holder.hasOwnProperty(d.name)) {
//   holder[d.name] = holder[d.name] + d.value;
// } else {
//   holder[d.name] = d.value;
// }
// });

// var obj2 = [];

// for (var prop in holder) {
// obj2.push({ name: prop, value: holder[prop] });
// }

// console.log(obj2);

// var obj =  [
//   { 'name': 'P1', 'value': 150 },
//   { 'name': 'P1', 'value': 150 },
//   { 'name': 'P2', 'value': 200 },
//   { 'name': 'P3', 'value': 450 }
// ];

// var result = [];
// Array.from(new Set(obj.map(x => x.name))).forEach(x => {

// result.push(obj.filter(y => y.name === x).reduce((output,item) => {
//   let val = output[x] === undefined?0:output[x];
//   output[x] =  (item.value +  val); 
//  return output;
// },{}));

// })

//   console.log(result);
