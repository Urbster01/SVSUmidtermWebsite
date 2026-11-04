 async function getBooks(){

            try{
                const response = await fetch("https://upadhayay.github.io/db.json");
                const data = await response.json();
                
                const mybooks_div = document.querySelector(".mybooks");

                for (let book of data.books){
                    console.log(book)
                    
                    const single_book_div = document.createElement("div");
                     
                    single_book_div.innerHTML = `
                    <img src="images/default-book.jpg" alt="Book cover" class="book-thumb">

                    <div class="book-info">
                        <h2>Title: ${book.title}</h2> 
                        <h3>Year: ${book.year}</h3>

                    </div>`


                    single_book_div.addEventListener('mouseover', () => {

                         single_book_div.style.backgroundColor = "#1B4965";
                         single_book_div.style.borderColor = "black";

                    });

                    single_book_div.addEventListener('mouseleave', () => {

                        single_book_div.style.backgroundColor = "#1024397d";
                        single_book_div.style.borderColor = "#1B4965";
    
                    });
                    
                    single_book_div.classList.add('single_book')

                    mybooks_div.append(single_book_div)
                    
                }
            }
            catch(error){

                console.log("Error in fetch;")
            }
        }
        getBooks();


const hamburgerBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.mobileLinks');
let clicks = 0;

hamburgerBtn.addEventListener('click', () => {
if (clicks%2 == 0)
  navList.style.display = 'block',
  clicks++
else
    navList.style.display = "none",
    clicks++
});


console.log(clicks);

const submitBtn = document.getElementById('enterBtn');

submitBtn.addEventListener('click', () => {
alert("Successfully Submited!");
});