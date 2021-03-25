class Formatter {
  //add static methods here
  
  static capitalize(String) {
    return String.charAt(0).toUpperCase() + String.slice(1)
  }
  
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  
  static titleize(String) {
    return Formatter.capitalize(String.split(" ").map(function(x) {
      if (x != ("the" || "a" || "an" ||"but" ||  "for" || "at"|| "by" || "from" || "and" || "of"))
      {
        return Formatter.capitalize(x)
      }
      else
      {
        return x
      }
    }).join(" "))
  }

}