const input = document.querySelector("input")
const button = document.querySelector('.button')


function rendomPassword(){
    let password = ""
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    password += uppercase[Math.floor(Math.random()* uppercase.length)]
    
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    password += lowercase[Math.floor(Math.random()* lowercase.length)]
    
    const number = '1234567890'
    password += number[Math.floor(Math.random()* number.length)]
    
    const character = "!@#$%^&*()_+?><~;:"
    password += character[Math.floor(Math.random()* character.length)]
    
    const newsybol = number+lowercase+character+uppercase
    
    
    // const randomString = uppercaserRandom+lowercaseRandom+randomNumber+randomChar
    
    
   debugger
    let num = 12
    while(num>password.length){
      password = password+ newsybol[Math.floor(Math.random()* newsybol.length)]
    }
    input.value= password
}



button.addEventListener("click", (e)=>{
    e.preventDefault()
    rendomPassword()
    
   
    
})




