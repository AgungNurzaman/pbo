class sepeda {
constructor(merk, warna) {
this.merk = merk;
this.warna = warna;
}
info() {
return `sepeda ini adalah ${this.merk} berwarna ${this.warna}.`;
}
}
const BMX = new sepeda("sepeda BMX", "Hitam");
console.log(BMX.info());
