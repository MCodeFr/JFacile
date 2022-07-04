interface Color {
  name: string;
  code: string;
}
  
const JColor: Color[] = [
    {name: "brightred", code: "#E74C3C"},
    {name: "soothingpurple", code: "#9B59B6"},
    {name: "skyblue", code: "#5DADE2"},
    {name: "leafygreen", code: "#48C9B0"},
    {name: "sunkissedyellow", code: "#F4D03F"},
    {name: "groovygray", code: "#D7DBDD"}
  ];

const JArray = [
  "brightred, #E74C3C",
  "soothingpurple, #9B59B6",
  "skyblue, #5DADE2",
  "leafygreen, #48C9B0",
  "sunkissedyellow, #F4D03F",
  "groovygray, #D7DBDD"
];

  export function JColorRandom(): Color {
    return JColor[Math.floor(Math.random() * JColor.length)];
}

export const JColorArray = () => {
  console.log(JArray)
}

//In progress...
const JDateTest = () => {
  return (new Date().getDay()) 
}
export const JDate = () => {
  return (JDateTest)
}
const JLogTest = () => {
  return (console.log())
}
export function JLog() {
  return(JLogTest)
}
const JRTest = () => {
  require("");
}
export const JR = () => {
  return(JRTest)
}
const JVarTest = () => {
  return ('Coucou !');
};
export const JVar = () => {
  return (JVarTest)
}
const JLogColor = () => {
}

