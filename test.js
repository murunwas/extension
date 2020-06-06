require("./index")

//Data
const data={name:"test",data:"data"}
const arr=[data]


//Single
const single=arr.single("name","test")
console.log("Array get single",single);

//search
const search=arr.search("name","test")
console.log("Array search : ",search);

//isEmpty
const hasEmpty=isEmpty(data)
console.log("is empty : ",hasEmpty);

//Object has property
console.log("Object has property : ",data.has("name"));
//Object is empty
//console.log("Object is empty : ",data.isEmpty());

//String has error
console.log("Has error : ","error".error());

//String equals
console.log("String equals : ","You".equals("you"));

//To upper case
console.log("To upper case : ", "gfgfgfg".upper());

//Endwith
console.log("String endwith : ","i am a test".endsWith("test"));

//String format
console.log("String format", "{0} from {1} in {2}".format("Hello","world","javascript"));

//Array last item
console.log("Array last item : ",arr.last());



