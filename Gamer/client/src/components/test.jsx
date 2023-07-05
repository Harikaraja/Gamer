//pagination implemented
const pagelength1 = Math.ceil(totaltransactions/ itemsPerPage);
console.log("TM: ",totalMerchandises)
console.log("PL: ",pagelength1);
const start1 = 1;
const end1 = pagelength1;
const pages1 = ["<<", "<"]; // represents  the starting page

for (let i = start1; i <= end1; i++) {
  pages1.push(i);

}

pages1.push(">") // represents the ending page
pages1.push(">>")

const handleClick1 = (e) => {
  e.preventDefault();
  var temppage = e.target.innerHTML
  if (temppage === "&lt;") {
    setCurrentPage((prev) => {
      if (prev > 1) {
        return prev - 1
      }
      return prev
    })
  }
  else if (temppage === "&lt;&lt;") {
    setCurrentPage(1)
  }
  else if (temppage === "&gt;") {
    setCurrentPage((prev) => {
      if (prev < end1) {
        return prev + 1
      }
      return prev
    })
  }
  else if (temppage === "&gt;&gt;") {
    setCurrentPage(pages1[pages1.length - 3])
  }
  else {
    setCurrentPage(temppage)
  }

}

