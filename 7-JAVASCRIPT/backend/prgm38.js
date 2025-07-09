a = "LUMINAR"
console.log(a.startsWith("lu"));
console.log(a.endsWith("r"));

console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(`-------------------------------`);

str2 = "Technolab"
str3 = str2.substring(0, 6)
console.log(str3);
str3 = str2.substring(6)
console.log(str3);
console.log(`-------------------------------`);

str4 = "welcome"
str5 = str4.slice(-4)
console.log(str5);
console.log(`-------------------------------`);
str6="              Grac       eson             "
console.log(str6);

str7 = str6.trim()
console.log(str7);
console.log(`-------------------------------`);
str8 = "i am woking at Google, Google, Google"
console.log(str8);
console.log(str8.replace("Google","Microsoft"));
console.log(str8.replaceAll("Google","Microsoft"));
console.log(`-------------------------------`);

a = "luminar"
s = Array.from(a)
console.log(s);
console.log(`-------------------------------`);

a = "Luminar Technolab"
console.log(a);

b = a.split("a")
console.log(b);

ab = "Luminar"
console.log(ab.length);
console.log(ab[1]);















