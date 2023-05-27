function sample()
{   
	    comment = document.getElementById('comment').value
      username = document.getElementById('name').value

      if(!username || !comment){
        alert('please fill all the box')
        return
      }

      data = 'Username: ' + username + '\n' + 'Comment: ' + comment + '\n\n'
         
      document.getElementById('display').innerHTML += data 
}