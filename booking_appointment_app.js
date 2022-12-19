        var names=document.getElementById('name')
        var emails=document.getElementById('email')
        localStorage.setItem('userdetailsname','name')
        localStorage.setItem('userdetailsemail','email')
        
        
        var myForm=document.querySelector('#my-form');
        myForm.addEventListener('submit',onsubmit);
        
        function onsubmit(e){
            e.preventDefault();
            if(names.value==='' || emails.value==='')
            {
                alert('please enter the values')
            }
            else
            {
                localStorage.setItem('userdetailsname',names.value)
                localStorage.setItem('userdetailsemail',emails.value)
                
                    }
                }
