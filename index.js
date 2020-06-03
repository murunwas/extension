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