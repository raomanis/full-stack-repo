document.addEventListener("DOMContentLoaded",function(){

  const ipaddress = document.querySelector(".para")
  async function fetchip(){ 
    const url = 'https://wtfismyip.com/json'

    try{
      const response = await fetch(url)
      console.log(response)
    }
      catch(error) {
        ipaddress.innerHTML = `<p> data not found</p>`
    }
  }
  
  fetchip()
  }
)
