* * *
```javascript
if (!Array.prototype.last) {
    Array.prototype.last = function () {
      return this[this.length - 1];
    };
  }
  
  if (!String.prototype.isEmpty) {
    String.prototype.isEmpty = function () {
      return this.trim().length <= 0;
    };
  }
  
  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != 'undefined'
        ? args[number]
        : match
        ;
    });
  };
  
  String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
  
  String.prototype.upper = function () {
    return this.toUpperCase();
  };
  
  String.prototype.equals = function (name="") {
    return this.trim().toUpperCase()===name.trim().toUpperCase();
  };
  
  String.prototype.loading = function () {
    return this.equals("loading");
  };
  
  String.prototype.done = function () {
    return this.equals("done");
  };
  
  String.prototype.error = function () {
    return this.equals("error");
  };
  
  Object.prototype.isEmpty = function () {
    return Object.keys(this).length <= 0;
  }
  
  Object.prototype.has = function (prop) {
    return this.hasOwnProperty(prop)
  }
  
  
  function isEmpty(obj) {
    if (typeof obj === "object") {
      return Object.keys(obj).length <= 0;
    }
  
    if (typeof obj === "string") {
      return obj.length <= 0;
    }
    return obj === null;
  }
  
  if (!Array.prototype.search) {
    Array.prototype.search = function (name, params) {
      const temp=[...this]
      return temp.filter(data => data[name].equals(params))
    };
  }

```

* * *
#Examples
```javascript
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
console.log("Object is empty : ",data.isEmpty());

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
```
