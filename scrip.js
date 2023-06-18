$(document).ready(function(){
    $('#login').submit(function(e){
        e.preventDefault();

        var username=$('#username').val();
        var password=$('#password').val();

        //validasi isian kosong
        if(username === '' || password === ''){
            alert('Username dan password harus diisi')
            return;
        }

        //mengirim data  ke server menggunakan ajax
        $.ajax({
            url: 'Login.php',
            type: 'POST',
            data:{
                username:username,
                password:password

            },
            success:function(response) {
                if(response === 'success'){
                    alert('Lekuyy Boss')
                }else{
                    alert('Password salah Boss')
                }
            },
            error:function(){
                alert('Terjadi Kesalahan');
            }
        })
        });
    });